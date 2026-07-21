import {getTranslations, setRequestLocale} from 'next-intl/server';

import {Card} from '@/components/ui/card';
import {LanguageSwitcher} from '@/components/ui/language-switcher';
import {Progress} from '@/components/ui/progress';
import type {AppLocale} from '@/i18n/routing';

type LocalePageProps = {
  params: Promise<{locale: AppLocale}>;
};

const checkKeys = ['specification', 'tokens', 'domain', 'global'] as const;

export default async function LocalePage({params}: LocalePageProps) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Foundation');

  return (
    <main className="foundation-shell">
      <Card className="foundation-card" aria-labelledby="foundation-title">
        <div className="foundation-toolbar">
          <p className="eyebrow">{t('eyebrow')}</p>
          <LanguageSwitcher locale={locale} />
        </div>
        <h1 id="foundation-title">
          {t('title').split('\n').map((line) => <span key={line}>{line}</span>)}
        </h1>
        <p className="lede">{t('description')}</p>
        <Progress value={70} label={t('progressLabel')} />
        <ul className="foundation-list">
          {checkKeys.map((key) => <li key={key}>{t(`checks.${key}`)}</li>)}
        </ul>
        <p className="status" role="status">{t('status')}</p>
      </Card>
    </main>
  );
}
