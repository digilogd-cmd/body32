'use client';

import {useTranslations} from 'next-intl';
import {useEffect, useMemo, useRef, useState} from 'react';
import type {CSSProperties} from 'react';

import {Button} from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';
import {ResultExperience} from '@/components/result/result-experience';
import {ALGORITHM_VERSION} from '@/domain/algorithm/config';
import {calculateBody32Result} from '@/domain/algorithm/engine';
import {QUESTION_SET_VERSION} from '@/domain/algorithm/questions';
import type {Body32Result, LikertAnswer} from '@/domain/algorithm/types';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';

type QuizItem = {id: string; order: number; prompt: string};
type QuizStage = 'intro' | 'profile' | 'questions' | 'analyzing' | 'complete';
export type ProfileContext = {
  nickname: string;
  ageBand: string;
  heightCm: string;
  weightKg: string;
  mbti: string;
  bloodType: string;
};
type QuizProgressSnapshot = {
  stage: QuizStage;
  index: number;
  answers: Record<string, LikertAnswer>;
  profileStep: number;
  profile: ProfileContext;
};

export interface QuizExperienceProps {
  locale: AppLocale;
  questions: readonly QuizItem[];
}

const answerValues = [1, 2, 3, 4, 5] as const;
const ageBands = ['18-24', '25-34', '35-44', '45-54', '55+', 'prefer-not'] as const;
const mbtiTypes = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'] as const;
const bloodTypes = ['A', 'B', 'O', 'AB', 'unknown'] as const;
const emptyProfile: ProfileContext = {nickname: '', ageBand: '', heightCm: '', weightKg: '', mbti: '', bloodType: ''};

export function getQuizProgressStorageKey(locale: AppLocale) {
  return `body32:quiz-progress:${locale}:${QUESTION_SET_VERSION}:${ALGORITHM_VERSION}`;
}

export function QuizExperience({locale, questions}: QuizExperienceProps) {
  const t = useTranslations('Quiz');
  const [stage, setStage] = useState<QuizStage>('intro');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, LikertAnswer>>({});
  const [result, setResult] = useState<Body32Result | null>(null);
  const [profileStep, setProfileStep] = useState(0);
  const [profile, setProfile] = useState<ProfileContext>(emptyProfile);
  const [progressRestored, setProgressRestored] = useState(false);
  const questionTitleRef = useRef<HTMLHeadingElement>(null);
  const storageKey = getQuizProgressStorageKey(locale);

  const question = questions[index];
  const selected = question ? answers[question.id] : undefined;
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const progress = questions.length ? (answeredCount / questions.length) * 100 : 0;

  useEffect(() => {
    const restoreTimer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(storageKey);
        if (!stored) return;

        const snapshot = JSON.parse(stored) as Partial<QuizProgressSnapshot>;
        const questionIds = new Set(questions.map(({id}) => id));
        const validAnswers = Object.fromEntries(
          Object.entries(snapshot.answers ?? {}).filter(
            ([id, value]) => questionIds.has(id) && answerValues.includes(value as LikertAnswer)
          )
        ) as Record<string, LikertAnswer>;
        const restoredIndex = Math.min(Math.max(Number(snapshot.index) || 0, 0), Math.max(questions.length - 1, 0));

        setAnswers(validAnswers);
        setIndex(restoredIndex);
        setProfileStep(Math.min(Math.max(Number(snapshot.profileStep) || 0, 0), 5));
        setProfile({...emptyProfile, ...snapshot.profile});
        if ((snapshot.stage === 'complete' || snapshot.stage === 'analyzing') && Object.keys(validAnswers).length === questions.length) {
          setResult(calculateBody32Result({
            algorithmVersion: ALGORITHM_VERSION,
            questionSetVersion: QUESTION_SET_VERSION,
            answers: validAnswers
          }));
          setStage('complete');
        } else if (snapshot.stage === 'questions') {
          setStage('questions');
        } else if (snapshot.stage === 'profile') {
          setStage('profile');
        }
      } catch {
        window.localStorage.removeItem(storageKey);
      } finally {
        setProgressRestored(true);
      }
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, [questions, storageKey]);

  useEffect(() => {
    if (!progressRestored) return;
    try {
      if (stage === 'intro' && Object.keys(answers).length === 0) {
        window.localStorage.removeItem(storageKey);
        return;
      }
      window.localStorage.setItem(storageKey, JSON.stringify({stage, index, answers, profileStep, profile} satisfies QuizProgressSnapshot));
    } catch {
      // The quiz remains usable when browser storage is unavailable.
    }
  }, [answers, index, profile, profileStep, progressRestored, stage, storageKey]);

  useEffect(() => {
    if (stage !== 'analyzing' || !result) return;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const analysisTimer = window.setTimeout(() => setStage('complete'), reducedMotion ? 100 : 3000);
    return () => window.clearTimeout(analysisTimer);
  }, [result, stage]);

  useEffect(() => {
    if (stage === 'questions') questionTitleRef.current?.focus();
  }, [index, stage]);

  function chooseAnswer(value: LikertAnswer) {
    if (!question) return;
    setAnswers((current) => ({...current, [question.id]: value}));
  }

  function continueQuiz() {
    if (!question || selected === undefined) return;
    if (index < questions.length - 1) {
      setIndex((current) => current + 1);
      return;
    }

    const completedAnswers = {...answers, [question.id]: selected};
    const nextResult = calculateBody32Result({
      algorithmVersion: ALGORITHM_VERSION,
      questionSetVersion: QUESTION_SET_VERSION,
      answers: completedAnswers
    });
    setResult(nextResult);
    setStage('analyzing');
  }

  function updateProfile(field: keyof ProfileContext, value: string) {
    setProfile((current) => ({...current, [field]: value}));
  }

  function advanceProfile() {
    if (profileStep < 5) setProfileStep((current) => current + 1);
    else setStage('questions');
  }

  const stageProgress = (
    <ol aria-label={t('journey.label')} className="assessment-progress">
      {(['profile', 'body', 'quiz', 'result'] as const).map((item, itemIndex) => {
        const currentStage = stage === 'intro' || stage === 'profile' ? 0 : stage === 'questions' ? 2 : 3;
        return <li aria-current={itemIndex === currentStage ? 'step' : undefined} className={itemIndex < currentStage ? 'is-complete' : ''} key={item}><span>{itemIndex + 1}</span>{t(`journey.${item}`)}</li>;
      })}
    </ol>
  );

  if (stage === 'intro') {
    return (
      <main className="quiz-shell" id="main-content">
        <section className="quiz-intro" aria-labelledby="quiz-intro-title">
          <Link className="wordmark" href="/">BODY<span>32</span></Link>
          <div className="quiz-intro-copy">
            <p className="eyebrow">{t('intro.eyebrow')}</p>
            <h1 id="quiz-intro-title">{t('intro.title')}</h1>
            <p>{t('intro.description')}</p>
          </div>
          <ul className="quiz-facts">
            <li><strong>20</strong><span>{t('intro.questions')}</span></li>
            <li><strong>3</strong><span>{t('intro.minutes')}</span></li>
            <li><strong>0</strong><span>{t('intro.personalData')}</span></li>
          </ul>
          <div className="quiz-actions">
            <Button size="lg" onClick={() => setStage('profile')}>{t('intro.start')}</Button>
            <Link className="text-link" href="/">{t('intro.back')}</Link>
          </div>
          <p className="quiz-disclaimer">{t('intro.note')}</p>
        </section>
      </main>
    );
  }

  if (stage === 'profile') {
    const profileScreens = [
      <input autoComplete="nickname" className="profile-input" key="nickname" maxLength={24} onChange={(event) => updateProfile('nickname', event.target.value)} placeholder={t('profile.nicknamePlaceholder')} value={profile.nickname} />,
      <div className="profile-choice-grid" key="age">{ageBands.map((value) => <button className={profile.ageBand === value ? 'is-selected' : ''} key={value} onClick={() => updateProfile('ageBand', value)} type="button">{t(`profile.ageOptions.${value}`)}</button>)}</div>,
      <div className="measurement-entry" key="height"><input className="profile-input" inputMode="decimal" max="230" min="120" onChange={(event) => updateProfile('heightCm', event.target.value)} type="number" value={profile.heightCm} /><span>cm</span></div>,
      <div className="measurement-entry" key="weight"><input className="profile-input" inputMode="decimal" max="250" min="30" onChange={(event) => updateProfile('weightKg', event.target.value)} type="number" value={profile.weightKg} /><span>kg</span></div>,
      <div className="profile-choice-grid profile-choice-grid--compact" key="mbti">{mbtiTypes.map((value) => <button className={profile.mbti === value ? 'is-selected' : ''} key={value} onClick={() => updateProfile('mbti', value)} type="button">{value}</button>)}</div>,
      <div className="profile-choice-grid" key="blood">{bloodTypes.map((value) => <button className={profile.bloodType === value ? 'is-selected' : ''} key={value} onClick={() => updateProfile('bloodType', value)} type="button">{value === 'unknown' ? t('profile.unknown') : value}</button>)}</div>
    ];
    const profileKeys = ['nickname', 'age', 'height', 'weight', 'mbti', 'blood'] as const;
    const profileKey = profileKeys[profileStep] ?? 'nickname';
    return (
      <main className="quiz-shell" id="main-content">
        <section className="quiz-panel profile-panel" aria-labelledby="profile-title">
          {stageProgress}
          <div className="profile-copy">
            <p className="eyebrow">{t('profile.eyebrow', {current: profileStep + 1, total: profileKeys.length})}</p>
            <h1 id="profile-title">{t(`profile.${profileKey}.title`)}</h1>
            <p>{t(`profile.${profileKey}.description`)}</p>
          </div>
          <div className="profile-control">{profileScreens[profileStep]}</div>
          <footer className="quiz-navigation">
            <Button onClick={() => profileStep === 0 ? setStage('intro') : setProfileStep((current) => current - 1)} variant="secondary">{t('back')}</Button>
            <div><button className="text-link" onClick={advanceProfile} type="button">{t('profile.skip')}</button><Button onClick={advanceProfile}>{profileStep === 5 ? t('profile.beginQuiz') : t('continue')}</Button></div>
          </footer>
        </section>
      </main>
    );
  }

  if (stage === 'analyzing' && result) {
    return (
      <main className="quiz-shell analysis-shell" id="main-content">
        <section aria-labelledby="analysis-title" className="analysis-panel">
          {stageProgress}
          <p className="eyebrow">BODY32 PROFILE ENGINE</p>
          <h1 id="analysis-title">{t('analysis.title')}</h1>
          <p>{t('analysis.description')}</p>
          <ol className="analysis-stages">
            {(['signals', 'elements', 'lifestyle', 'guardian', 'passport'] as const).map((item, itemIndex) => <li key={item} style={{'--analysis-order': itemIndex} as CSSProperties}><span />{t(`analysis.steps.${item}`)}</li>)}
          </ol>
        </section>
      </main>
    );
  }

  if (stage === 'complete' && result) {
    return <ResultExperience locale={locale} profile={profile} result={result} onRestart={() => {setStage('intro'); setIndex(0); setAnswers({}); setProfileStep(0); setProfile(emptyProfile); setResult(null);}} />;
  }

  if (!question) return null;

  return (
    <main className="quiz-shell" id="main-content">
      <section className="quiz-panel" aria-labelledby="question-title">
        {stageProgress}
        <header className="quiz-header">
          <Link className="wordmark" href="/">BODY<span>32</span></Link>
          <span>{t('answered', {count: answeredCount})}</span>
        </header>
        <Progress value={progress} label={t('progress', {current: index + 1, total: questions.length})} />
        <div className="question-content">
          <p className="eyebrow">{t('questionEyebrow', {current: index + 1})}</p>
          <h1 id="question-title" ref={questionTitleRef} tabIndex={-1}>{question.prompt}</h1>
          <fieldset className="likert-fieldset">
            <legend className="sr-only">{t('answerLegend')}</legend>
            <div className="likert-scale">
              {answerValues.map((value) => (
                <label className={selected === value ? 'is-selected' : ''} key={value}>
                  <input checked={selected === value} name={question.id} onChange={() => chooseAnswer(value)} type="radio" value={value} />
                  <span className="answer-number">{value}</span>
                  <span className="answer-label">{t(`answers.${value}`)}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <footer className="quiz-navigation">
          <Button disabled={index === 0} onClick={() => setIndex((current) => Math.max(0, current - 1))} variant="secondary">{t('back')}</Button>
          <Button disabled={selected === undefined} onClick={continueQuiz}>{index === questions.length - 1 ? t('finish') : t('continue')}</Button>
        </footer>
      </section>
    </main>
  );
}
