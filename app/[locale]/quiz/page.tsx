import {setRequestLocale} from 'next-intl/server';

import {QuizExperience} from '@/components/quiz/quiz-experience';
import {QUESTIONS} from '@/domain/algorithm/questions';
import type {AppLocale} from '@/i18n/routing';

type QuizPageProps = {params: Promise<{locale: AppLocale}>};

export default async function QuizPage({params}: QuizPageProps) {
  const {locale} = await params;
  setRequestLocale(locale);

  const questions = QUESTIONS.map(({id, order, prompt}) => ({id, order, prompt: prompt[locale]}));
  return <QuizExperience questions={questions} />;
}
