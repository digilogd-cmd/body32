import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';

import {GuardianMark} from '@/components/guardian/guardian-mark';
import {ARCHETYPE_CONTENT, RHYTHM_CONTENT} from '@/domain/guardian/content';
import {ARCHETYPE_GUIDANCE} from '@/domain/guardian/guidance';
import {GUARDIAN_TYPES} from '@/domain/guardian/registry';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';

type ReviewPageProps = {params: Promise<{locale: AppLocale}>};

export default async function GuardianReviewPage({params}: ReviewPageProps) {
  if (process.env.NODE_ENV !== 'development') notFound();

  const {locale} = await params;
  setRequestLocale(locale);
  const copy = locale === 'ko' ? {
    eyebrow: 'LOCAL REVIEW ONLY', title: '32 Guardian 검수 갤러리',
    description: '질문을 반복하지 않고 모든 캐릭터와 Passport 고정 콘텐츠를 한 번에 확인하는 개발 전용 페이지입니다.',
    back: '첫 화면으로', strength: '유형별 장점', reflection: '균형 질문', passport: 'Passport 고정 정보',
    dynamic: 'Balance 수치는 실제 20개 답변에 따라 달라지므로 이 갤러리에는 표시하지 않습니다.',
    disclaimer: '웰니스 자기 탐색 결과 · 의료 진단이 아닙니다'
  } : {
    eyebrow: 'LOCAL REVIEW ONLY', title: '32 Guardian review gallery',
    description: 'A development-only view of every character and the fixed Passport content without repeating the quiz.',
    back: 'Back home', strength: 'Guardian strength', reflection: 'Balance question', passport: 'Fixed Passport content',
    dynamic: 'Balance values depend on the 20 answers and are intentionally omitted from this gallery.',
    disclaimer: 'Wellness self-discovery result · Not a medical diagnosis'
  };

  return (
    <main className="review-shell" id="main-content">
      <header className="review-header">
        <div><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.description}</p></div>
        <Link className="button button--secondary button--md" href="/">{copy.back}</Link>
      </header>
      <p className="review-dynamic-note">{copy.dynamic}</p>
      <div className="guardian-review-grid">
        {GUARDIAN_TYPES.map((guardian) => {
          const typeNumber = String(guardian.displayOrder).padStart(2, '0');
          const rhythm = RHYTHM_CONTENT[guardian.rhythm];
          const archetype = ARCHETYPE_CONTENT[guardian.archetype];
          const guidance = ARCHETYPE_GUIDANCE[guardian.archetype];
          const name = guardian.name[locale];
          return (
            <article className={`guardian-review-card result-theme--${guardian.rhythm.toLowerCase()}`} key={guardian.stableId}>
              <GuardianMark archetype={guardian.archetype} label={name} rhythm={guardian.rhythm} typeNumber={typeNumber} />
              <div className="guardian-review-copy">
                <p className="result-kicker">TYPE {typeNumber} · {guardian.rhythm} · {guardian.archetype}</p>
                <h2>{name}</h2>
                <p className="guardian-review-archetype">{archetype[locale]}</p>
                <p>{rhythm.summary[locale]}</p>
                <dl>
                  <div><dt>{copy.strength}</dt><dd>{guidance.strength[locale]}</dd></div>
                  <div><dt>{copy.reflection}</dt><dd>{guidance.reflection[locale]}</dd></div>
                </dl>
                <section className="review-passport" aria-label={copy.passport}>
                  <span>BODY32 PASSPORT · TYPE {typeNumber}</span>
                  <strong>{name}</strong>
                  <small>{guardian.rhythm} · {guardian.archetype}</small>
                  <p>{copy.disclaimer}</p>
                </section>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
