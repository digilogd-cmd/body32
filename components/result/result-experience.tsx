'use client';

import {useTranslations} from 'next-intl';
import {useEffect, useRef, useState} from 'react';

import {GuardianMark} from '@/components/guardian/guardian-mark';
import type {ProfileContext} from '@/components/quiz/quiz-experience';
import {Button} from '@/components/ui/button';
import {DIMENSION_KEYS, ELEMENT_KEYS, type Body32Result} from '@/domain/algorithm/types';
import {BODY_SIGNAL_CONTENT, getSignalObservation, RHYTHM_PRACTICES} from '@/domain/body-profile/content';
import {ARCHETYPE_CONTENT, RHYTHM_CONTENT} from '@/domain/guardian/content';
import {ARCHETYPE_GUIDANCE} from '@/domain/guardian/guidance';
import {getGuardianType} from '@/domain/guardian/registry';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';
import {downloadPassport, type PassportFormat, type PassportRenderData} from '@/lib/passport/renderer';
import {shareResult, type ShareResultStatus} from '@/lib/share/share-result';

export interface ResultExperienceProps {
  locale: AppLocale;
  profile: ProfileContext;
  result: Body32Result;
  onRestart: () => void;
}

export function ResultExperience({locale, profile, result, onRestart}: ResultExperienceProps) {
  const t = useTranslations('Result');
  const shareT = useTranslations('Share');
  const [downloadState, setDownloadState] = useState<'idle' | 'working' | 'saved' | 'error'>('idle');
  const [shareState, setShareState] = useState<ShareResultStatus | 'idle'>('idle');
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const guardian = getGuardianType(result.stableTypeId);
  if (!guardian) return null;

  const rhythm = RHYTHM_CONTENT[result.rhythm];
  const archetype = ARCHETYPE_CONTENT[result.archetype];
  const guidance = ARCHETYPE_GUIDANCE[result.archetype];
  const practices = RHYTHM_PRACTICES[result.rhythm];
  const name = guardian.name[locale];
  const owner = profile.nickname || t('bodyProfile.defaultOwner');
  const dominantElement = ELEMENT_KEYS.reduce((highest, element) => result.elements[element] > result.elements[highest] ? element : highest);
  const typeNumber = String(guardian.displayOrder).padStart(2, '0');
  const mbtiStyle = profile.mbti.endsWith('J') ? 'structured' : 'flexible';
  const passportData: PassportRenderData = {
    typeNumber,
    guardianName: name,
    rhythm: result.rhythm,
    archetype: result.archetype,
    summary: rhythm.summary[locale],
    elements: result.elements,
    elementLabels: Object.fromEntries(ELEMENT_KEYS.map((element) => [element, t(`elements.${element}`)])) as Record<(typeof ELEMENT_KEYS)[number], string>,
    footer: t('passport.footer')
  };

  async function savePassport(format: PassportFormat) {
    try {
      setDownloadState('working');
      await downloadPassport(passportData, format);
      setDownloadState('saved');
    } catch {
      setDownloadState('error');
    }
  }

  async function shareGuardian() {
    setShareState('idle');
    const status = await shareResult({
      title: shareT('title'),
      text: shareT('text', {name, number: typeNumber, summary: rhythm.summary[locale]}),
      url: window.location.href
    });
    setShareState(status);
  }

  return (
    <main className={`result-shell result-theme--${result.rhythm.toLowerCase()}`} id="main-content">
      <header className="result-header">
        <Link className="wordmark wordmark--inverse" href="/">BODY<span>32</span></Link>
        <span>{t('typeNumber', {number: typeNumber})}</span>
      </header>

      <section className="body-profile-overview" aria-labelledby="profile-result-title">
        <div>
          <p className="eyebrow">{t('bodyProfile.eyebrow')}</p>
          <h1 id="profile-result-title" ref={titleRef} tabIndex={-1}>{t('bodyProfile.title', {owner})}</h1>
          <p>{rhythm.summary[locale]}</p>
          <span className="profile-snapshot-note">{t('bodyProfile.snapshotNote')}</span>
        </div>
        <div className="body-score" aria-label={t('bodyProfile.scoreLabel', {score: Math.round(result.bodyScore)})} aria-valuemax={100} aria-valuemin={0} aria-valuenow={Math.round(result.bodyScore)} role="meter">
          <small>{t('bodyProfile.score')}</small>
          <strong>{Math.round(result.bodyScore)}</strong>
          <span>/ 100</span>
        </div>
      </section>

      <section className="result-hero" aria-labelledby="guardian-title">
        <GuardianMark archetype={result.archetype} label={t('guardianFallback', {name})} rhythm={result.rhythm} typeNumber={typeNumber} />
        <div className="result-identity">
          <p className="result-kicker">{result.rhythm} · {result.archetype}</p>
          <h2 id="guardian-title">{name}</h2>
          <p className="result-archetype-line">{archetype[locale]}</p>
          <p className="result-summary">{rhythm.summary[locale]}</p>
          <div className="result-tags">
            <span>{t('confidence', {value: t(`confidenceValue.${result.confidence}`)})}</span>
            <span>{t('dominantElement', {element: t(`elements.${dominantElement}`)})}</span>
          </div>
        </div>
      </section>

      <section className="result-section signal-section" aria-labelledby="signals-title">
        <div className="signal-heading">
          <div><p className="eyebrow">{t('signals.eyebrow')}</p><h2 id="signals-title">{t('signals.title')}</h2></div>
          <p>{t('signals.description')}</p>
        </div>
        <div className="signal-list">
          {DIMENSION_KEYS.map((signal) => {
            const score = Math.round(result.dimensions[signal]);
            const content = BODY_SIGNAL_CONTENT[signal];
            return (
              <article key={signal}>
                <header><div><h3>{content.name[locale]}</h3><p>{content.meaning[locale]}</p></div><strong>{score}</strong></header>
                <div aria-label={t('signals.value', {name: content.name[locale], score})} aria-valuemax={100} aria-valuemin={0} aria-valuenow={score} className="signal-meter" role="meter"><span style={{width: `${score}%`}} /></div>
                <p>{getSignalObservation(signal, score, locale)}</p>
              </article>
            );
          })}
        </div>
        <p className="balance-note">{t('signals.note')}</p>
      </section>

      <section className="result-section result-story" aria-labelledby="story-title">
        <div><p className="eyebrow">{t('story.eyebrow')}</p><h2 id="story-title">{rhythm.title[locale]}</h2></div>
        <div className="story-grid">
          <article><span>01</span><h3>{t('story.strength')}</h3><p>{guidance.strength[locale]}</p></article>
          <article><span>02</span><h3>{t('story.reflection')}</h3><p>{guidance.reflection[locale]}</p></article>
        </div>
      </section>

      <section className="result-section balance-section" aria-labelledby="balance-title">
        <div className="balance-heading"><div><p className="eyebrow">{t('balance.eyebrow')}</p><h2 id="balance-title">{t('balance.title')}</h2></div><p>{t('balance.description')}</p></div>
        <div className="balance-list">
          {ELEMENT_KEYS.map((element) => {
            const score = Math.round(result.elements[element]);
            return <div className="balance-row" key={element}><div><strong>{t(`elements.${element}`)}</strong><span>{t(`elementMeanings.${element}`)}</span></div><div className="balance-meter" aria-label={t('balanceValue', {element: t(`elements.${element}`), value: score})} aria-valuemax={100} aria-valuemin={0} aria-valuenow={score} role="meter"><span className={`element-fill element-fill--${element}`} style={{width: `${score}%`}} /></div><b>{score}</b></div>;
          })}
        </div>
        <p className="balance-note">{t('balance.note')}</p>
      </section>

      <section className="result-section why-section" aria-labelledby="why-title">
        <div><p className="eyebrow">{t('why.eyebrow')}</p><h2 id="why-title">{t('why.title')}</h2></div>
        <p>{t('why.description')}</p>
        <div className="explanation-trace">
          <div><span>{t('why.strongest')}</span><strong>{result.strongestSignals.map((signal) => BODY_SIGNAL_CONTENT[signal].name[locale]).join(' · ')}</strong></div>
          <div><span>{t('why.quietest')}</span><strong>{result.quietestSignals.map((signal) => BODY_SIGNAL_CONTENT[signal].name[locale]).join(' · ')}</strong></div>
          <div><span>{t('why.version')}</span><strong>{result.algorithmVersion} · {result.questionSetVersion}</strong></div>
        </div>
      </section>

      {profile.mbti ? <section className="result-section personality-context" aria-labelledby="personality-title"><div><p className="eyebrow">{t('personality.eyebrow')}</p><h2 id="personality-title">{profile.mbti} × BODY32</h2></div><p>{t(`personality.${mbtiStyle}`, {mbti: profile.mbti})}</p><small>{t('personality.note')}</small></section> : null}

      <section className="result-section practice-section" aria-labelledby="practice-title">
        <div className="section-heading"><p className="eyebrow">{t('practice.eyebrow')}</p><h2 id="practice-title">{t('practice.title')}</h2><p>{t('practice.description')}</p></div>
        <div className="practice-grid">{(['meal', 'movement', 'recovery', 'stress'] as const).map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{t(`practice.items.${item}`)}</h3><p>{practices[item][locale]}</p></article>)}</div>
        <article className="seven-day-experiment"><div><p className="eyebrow">7 DAY EXPERIMENT</p><h3>{t('practice.experimentTitle')}</h3></div><p>{practices.experiment[locale]}</p></article>
        <p className="balance-note">{t('practice.note')}</p>
      </section>

      <section className="passport-preview" aria-labelledby="passport-title">
        <div className="passport-copy">
          <p className="eyebrow">BODY32 PASSPORT</p><h2 id="passport-title">{t('passport.title')}</h2><p>{t('passport.description')}</p>
          <div className="passport-actions"><Button disabled={downloadState === 'working'} onClick={() => savePassport('square')} variant="secondary">{t('passport.saveSquare')}</Button><Button disabled={downloadState === 'working'} onClick={() => savePassport('story')} variant="secondary">{t('passport.saveStory')}</Button><Button onClick={shareGuardian} variant="secondary">{shareT('button')}</Button></div>
          <p aria-live="polite" className={`passport-status passport-status--${downloadState}`} role="status">{downloadState === 'working' ? t('passport.working') : downloadState === 'saved' ? t('passport.saved') : downloadState === 'error' ? t('passport.error') : ''}</p>
          <p aria-live="polite" className={`passport-status passport-status--${shareState}`} role="status">{shareState === 'shared' ? shareT('shared') : shareState === 'copied' ? shareT('copied') : shareState === 'error' ? shareT('error') : ''}</p>
        </div>
        <div className="passport-mini" aria-label={t('passport.previewLabel', {name})} role="img"><div className="passport-mini-header"><span>BODY32</span><b>TYPE {typeNumber}</b></div><GuardianMark archetype={result.archetype} compact label={t('guardianFallback', {name})} rhythm={result.rhythm} /><div><small>{result.rhythm} · {result.archetype}</small><h3>{name}</h3></div><div className="passport-mini-balance" aria-hidden="true">{ELEMENT_KEYS.map((element) => <span key={element} style={{height: `${Math.round(result.elements[element])}%`}} />)}</div></div>
      </section>

      <footer className="result-actions"><p>{t('wellnessNote')}</p><div><Button onClick={onRestart} variant="secondary">{t('restart')}</Button><Link className="button button--primary button--md" href="/">{t('home')}</Link></div></footer>
    </main>
  );
}
