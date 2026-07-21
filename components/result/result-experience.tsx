'use client';

import {useTranslations} from 'next-intl';

import {Button} from '@/components/ui/button';
import {ELEMENT_KEYS, type Body32Result} from '@/domain/algorithm/types';
import {ARCHETYPE_CONTENT, RHYTHM_CONTENT} from '@/domain/guardian/content';
import {getGuardianType} from '@/domain/guardian/registry';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';

export interface ResultExperienceProps {
  locale: AppLocale;
  result: Body32Result;
  onRestart: () => void;
}

export function ResultExperience({locale, result, onRestart}: ResultExperienceProps) {
  const t = useTranslations('Result');
  const guardian = getGuardianType(result.stableTypeId);
  if (!guardian) return null;

  const rhythm = RHYTHM_CONTENT[result.rhythm];
  const archetype = ARCHETYPE_CONTENT[result.archetype];
  const name = guardian.name[locale];
  const dominantElement = ELEMENT_KEYS.reduce((highest, element) => (
    result.elements[element] > result.elements[highest] ? element : highest
  ));

  return (
    <main className={`result-shell result-theme--${result.rhythm.toLowerCase()}`}>
      <header className="result-header">
        <Link className="wordmark wordmark--inverse" href="/">BODY<span>32</span></Link>
        <span>{t('typeNumber', {number: String(guardian.displayOrder).padStart(2, '0')})}</span>
      </header>

      <section className="result-hero" aria-labelledby="result-title">
        <div className="guardian-emblem" aria-label={t('guardianFallback', {name})} role="img">
          <span>{result.archetype.slice(0, 1)}</span>
          <small>{String(guardian.displayOrder).padStart(2, '0')}</small>
        </div>
        <div className="result-identity">
          <p className="result-kicker">{result.rhythm} · {result.archetype}</p>
          <h1 id="result-title">{name}</h1>
          <p className="result-archetype-line">{archetype[locale]}</p>
          <p className="result-summary">{rhythm.summary[locale]}</p>
          <div className="result-tags">
            <span>{t('confidence', {value: t(`confidenceValue.${result.confidence}`)})}</span>
            <span>{t('dominantElement', {element: t(`elements.${dominantElement}`)})}</span>
          </div>
        </div>
      </section>

      <section className="result-section result-story" aria-labelledby="story-title">
        <div>
          <p className="eyebrow">{t('story.eyebrow')}</p>
          <h2 id="story-title">{rhythm.title[locale]}</h2>
        </div>
        <div className="story-grid">
          <article>
            <span>01</span>
            <h3>{t('story.strength')}</h3>
            <p>{rhythm.strength[locale]}</p>
          </article>
          <article>
            <span>02</span>
            <h3>{t('story.reflection')}</h3>
            <p>{rhythm.reflection[locale]}</p>
          </article>
        </div>
      </section>

      <section className="result-section balance-section" aria-labelledby="balance-title">
        <div className="balance-heading">
          <div>
            <p className="eyebrow">{t('balance.eyebrow')}</p>
            <h2 id="balance-title">{t('balance.title')}</h2>
          </div>
          <p>{t('balance.description')}</p>
        </div>
        <div className="balance-list">
          {ELEMENT_KEYS.map((element) => {
            const score = Math.round(result.elements[element]);
            return (
              <div className="balance-row" key={element}>
                <div><strong>{t(`elements.${element}`)}</strong><span>{t(`elementMeanings.${element}`)}</span></div>
                <div className="balance-meter" aria-label={t('balanceValue', {element: t(`elements.${element}`), value: score})} aria-valuemax={100} aria-valuemin={0} aria-valuenow={score} role="meter">
                  <span className={`element-fill element-fill--${element}`} style={{width: `${score}%`}} />
                </div>
                <b>{score}</b>
              </div>
            );
          })}
        </div>
        <p className="balance-note">{t('balance.note')}</p>
      </section>

      <section className="result-section why-section" aria-labelledby="why-title">
        <div>
          <p className="eyebrow">{t('why.eyebrow')}</p>
          <h2 id="why-title">{t('why.title')}</h2>
        </div>
        <p>{t('why.description')}</p>
        <dl className="dimension-grid">
          {Object.entries(result.dimensions).map(([dimension, score]) => (
            <div key={dimension}><dt>{t(`dimensions.${dimension}`)}</dt><dd>{Math.round(score)}</dd></div>
          ))}
        </dl>
      </section>

      <section className="passport-preview" aria-labelledby="passport-title">
        <div>
          <p className="eyebrow">BODY32 PASSPORT</p>
          <h2 id="passport-title">{t('passport.title')}</h2>
          <p>{t('passport.description')}</p>
        </div>
        <div className="passport-mini" aria-hidden="true">
          <span>BODY32</span><strong>{String(guardian.displayOrder).padStart(2, '0')}</strong><small>{name}</small>
        </div>
      </section>

      <footer className="result-actions">
        <p>{t('wellnessNote')}</p>
        <div>
          <Button onClick={onRestart} variant="secondary">{t('restart')}</Button>
          <Link className="button button--primary button--md" href="/">{t('home')}</Link>
        </div>
      </footer>
    </main>
  );
}
