import {getTranslations, setRequestLocale} from 'next-intl/server';
import Image from 'next/image';

import {LanguageSwitcher} from '@/components/ui/language-switcher';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';

type LocalePageProps = {
  params: Promise<{locale: AppLocale}>;
};

const steps = ['reflect', 'decode', 'meet'] as const;
const principles = ['private', 'transparent', 'inclusive'] as const;
const rhythms = ['ignite', 'weave', 'ground', 'reflect'] as const;
const heroGuardians = ['tiger', 'fox', 'deer', 'crane', 'bear', 'wolf', 'owl', 'dolphin'] as const;
const bodySignals = ['energy', 'recovery', 'thermal', 'digestion', 'stress'] as const;

export default async function LocalePage({params}: LocalePageProps) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Landing');

  return (
    <main id="main-content">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="BODY32 home">BODY<span>32</span></Link>
        <div className="header-actions">
          <span className="header-note">{t('headerNote')}</span>
          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1 id="hero-title">{t.rich('title', {accent: (chunks) => <em>{chunks}</em>})}</h1>
          <p className="hero-lede">{t('description')}</p>
          <div className="hero-actions">
            <Link className="button button--primary button--lg" href="/quiz">{t('primaryCta')}</Link>
            <a className="text-link" href="#how-it-works">{t('secondaryCta')} <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="trust-list" aria-label={t('trustLabel')}>
            <li>{t('time')}</li>
            <li>{t('questions')}</li>
            <li>{t('noSignup')}</li>
          </ul>
        </div>

        <div className="identity-orbit" aria-label={t('visualLabel')}>
          <div className="orbit orbit--outer" />
          <div className="orbit orbit--inner" />
          <div className="guardian-constellation" aria-hidden="true">
            {heroGuardians.map((guardian) => <span key={guardian}><Image alt="" fill sizes="64px" src={`/characters/${guardian}-ignite-v1.webp`} /></span>)}
          </div>
          <div className="identity-core">
            <span>{t('visualOverline')}</span>
            <strong>32</strong>
            <small>{t('visualCaption')}</small>
          </div>
        </div>
      </section>

      <section className="section body-profile-preview" aria-labelledby="body-profile-title">
        <div className="body-profile-preview__copy">
          <p className="eyebrow">{t('profilePreview.eyebrow')}</p>
          <h2 id="body-profile-title">{t('profilePreview.title')}</h2>
          <p>{t('profilePreview.description')}</p>
          <ul>
            <li>{t('profilePreview.points.signals')}</li>
            <li>{t('profilePreview.points.context')}</li>
            <li>{t('profilePreview.points.action')}</li>
          </ul>
        </div>
        <div className="profile-demo" aria-label={t('profilePreview.demoLabel')}>
          <header><span>BODY32 PROFILE</span><strong>72</strong></header>
          {bodySignals.map((signal, index) => <div key={signal}><span>{t(`profilePreview.signals.${signal}`)}</span><i><b style={{width: `${[78, 61, 44, 69, 58][index]}%`}} /></i></div>)}
          <small>{t('profilePreview.demoNote')}</small>
        </div>
      </section>

      <section className="identity-strip" aria-label={t('typesLabel')}>
        <div className="identity-strip__bookend identity-strip__bookend--start">
          <strong>4</strong>
          <span>{t('typesIntro')}</span>
        </div>
        <div className="rhythm-map" aria-hidden="true">
          {rhythms.map((rhythm) => (
            <div className="rhythm-map__row" data-rhythm={rhythm} key={rhythm}>
              <span className="rhythm-map__label">{t(`rhythms.${rhythm}`)}</span>
              <span className="rhythm-map__line" />
              <span className="rhythm-map__guardians">
                {Array.from({length: 8}, (_, index) => <i key={index} />)}
              </span>
            </div>
          ))}
        </div>
        <div className="identity-strip__bookend identity-strip__bookend--end">
          <strong>32</strong>
          <span>{t('typesOutro')}</span>
        </div>
      </section>

      <section className="section how" id="how-it-works" aria-labelledby="how-title">
        <div className="section-heading">
          <p className="eyebrow">{t('how.eyebrow')}</p>
          <h2 id="how-title">{t('how.title')}</h2>
          <p>{t('how.description')}</p>
        </div>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="step-number">0{index + 1}</span>
              <h3>{t(`how.steps.${step}.title`)}</h3>
              <p>{t(`how.steps.${step}.description`)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section guardian-preview" aria-labelledby="guardian-title">
        <div className="passport-showcase" aria-hidden="true">
          <span>BODY32 PASSPORT</span>
          <Image alt="" height={430} src="/characters/tiger-ignite-v1.webp" width={200} />
          <div><small>TYPE 01 · IGNITE</small><strong>{t('guardian.sampleName')}</strong></div>
          <b>B32</b>
        </div>
        <div className="guardian-copy">
          <p className="eyebrow">{t('guardian.eyebrow')}</p>
          <h2 id="guardian-title">{t('guardian.title')}</h2>
          <p>{t('guardian.description')}</p>
          <div className="artifact-tags" aria-label={t('guardian.artifactsLabel')}>
            <span>Guardian</span><span>Balance</span><span>Passport</span>
          </div>
        </div>
      </section>

      <section className="section principles" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">{t('principles.eyebrow')}</p>
          <h2 id="principles-title">{t('principles.title')}</h2>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article key={principle}>
              <span aria-hidden="true">{principle === 'private' ? '○' : principle === 'transparent' ? '◇' : '△'}</span>
              <h3>{t(`principles.items.${principle}.title`)}</h3>
              <p>{t(`principles.items.${principle}.description`)}</p>
            </article>
          ))}
        </div>
        <p className="wellness-note">{t('principles.note')}</p>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div>
          <p className="eyebrow">BODY32</p>
          <h2 id="final-title">{t('final.title')}</h2>
        </div>
        <Link className="button button--inverse button--lg" href="/quiz">{t('final.cta')}</Link>
      </section>

      <footer className="site-footer">
        <span className="wordmark">BODY<span>32</span></span>
        <p>{t('footer')}</p>
      </footer>
    </main>
  );
}
