'use client';

import {useTranslations} from 'next-intl';
import {useEffect, useMemo, useRef, useState} from 'react';

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
type QuizStage = 'intro' | 'questions' | 'complete';

export interface QuizExperienceProps {
  locale: AppLocale;
  questions: readonly QuizItem[];
}

const answerValues = [1, 2, 3, 4, 5] as const;

export function QuizExperience({locale, questions}: QuizExperienceProps) {
  const t = useTranslations('Quiz');
  const [stage, setStage] = useState<QuizStage>('intro');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, LikertAnswer>>({});
  const [result, setResult] = useState<Body32Result | null>(null);
  const questionTitleRef = useRef<HTMLHeadingElement>(null);

  const question = questions[index];
  const selected = question ? answers[question.id] : undefined;
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const progress = questions.length ? (answeredCount / questions.length) * 100 : 0;

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
    setStage('complete');
  }

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
            <Button size="lg" onClick={() => setStage('questions')}>{t('intro.start')}</Button>
            <Link className="text-link" href="/">{t('intro.back')}</Link>
          </div>
          <p className="quiz-disclaimer">{t('intro.note')}</p>
        </section>
      </main>
    );
  }

  if (stage === 'complete' && result) {
    return <ResultExperience locale={locale} result={result} onRestart={() => {setStage('intro'); setIndex(0); setAnswers({}); setResult(null);}} />;
  }

  if (!question) return null;

  return (
    <main className="quiz-shell" id="main-content">
      <section className="quiz-panel" aria-labelledby="question-title">
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
