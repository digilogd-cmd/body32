import type {Metadata} from 'next';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {ReactNode} from 'react';

import {routing} from '@/i18n/routing';

import '../globals.css';

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{locale: string}>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Pick<LocaleLayoutProps, 'params'>): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {title: t('title'), description: t('description')};
}

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const [messages, accessibility] = await Promise.all([
    getMessages(),
    getTranslations({locale, namespace: 'Accessibility'})
  ]);

  return (
    <html lang={locale}>
      <body>
        <a className="skip-link" href="#main-content">{accessibility('skipToContent')}</a>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
