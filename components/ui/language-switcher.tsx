import type {AppLocale} from '@/i18n/routing';
import {Link} from '@/i18n/navigation';

export interface LanguageSwitcherProps {
  locale: AppLocale;
}

export function LanguageSwitcher({locale}: LanguageSwitcherProps) {
  return (
    <nav aria-label={locale === 'ko' ? '언어 선택' : 'Choose language'} className="language-switcher">
      <Link aria-current={locale === 'ko' ? 'page' : undefined} href="/" lang="ko" locale="ko">한국어</Link>
      <Link aria-current={locale === 'en' ? 'page' : undefined} href="/" lang="en" locale="en">English</Link>
    </nav>
  );
}
