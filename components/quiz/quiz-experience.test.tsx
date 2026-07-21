import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {afterEach, describe, expect, it, vi} from 'vitest';

import {QUESTIONS} from '@/domain/algorithm/questions';

import {QuizExperience} from './quiz-experience';

const translations: Record<string, string> = {
  'intro.eyebrow': 'Before', 'intro.title': 'Ready?', 'intro.description': 'Description',
  'intro.questions': 'questions', 'intro.minutes': 'minutes', 'intro.personalData': 'details',
  'intro.start': 'Start quiz', 'intro.back': 'Home', 'intro.note': 'Private',
  answered: '{count} answered', progress: 'Question {current} of {total}', questionEyebrow: 'Question {current}',
  answerLegend: 'Choose one', 'answers.1': 'Not at all', 'answers.2': 'Mostly not',
  'answers.3': 'In between', 'answers.4': 'Mostly yes', 'answers.5': 'Very much',
  back: 'Back', continue: 'Continue', finish: 'Finish',
  'complete.eyebrow': 'Ready', 'complete.title': 'Pattern found', 'complete.description': 'Description',
  'complete.rhythm': 'Rhythm', 'complete.guardian': 'Guardian', 'complete.pattern': 'Pattern',
  'complete.nextNote': 'Next', 'complete.restart': 'Restart', 'confidence.low': 'Low',
  'confidence.medium': 'Medium', 'confidence.high': 'High'
};

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string, values?: Record<string, number>) => {
    let message = translations[key] ?? key;
    for (const [name, value] of Object.entries(values ?? {})) message = message.replace(`{${name}}`, String(value));
    return message;
  }
}));

vi.mock('@/i18n/navigation', () => ({
  Link: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />
}));

const questions = QUESTIONS.map(({id, order, prompt}) => ({id, order, prompt: prompt.en}));

afterEach(cleanup);

describe('QuizExperience', () => {
  it('starts anonymously and requires an answer before continuing', () => {
    render(<QuizExperience questions={questions} />);
    fireEvent.click(screen.getByRole('button', {name: 'Start quiz'}));

    const continueButton = screen.getByRole('button', {name: 'Continue'});
    expect(continueButton).toBeDisabled();
    fireEvent.click(screen.getByRole('radio', {name: '4Mostly yes'}));
    expect(continueButton).toBeEnabled();
  });

  it('preserves a response when moving back', () => {
    render(<QuizExperience questions={questions} />);
    fireEvent.click(screen.getByRole('button', {name: 'Start quiz'}));
    fireEvent.click(screen.getByRole('radio', {name: '5Very much'}));
    fireEvent.click(screen.getByRole('button', {name: 'Continue'}));
    fireEvent.click(screen.getByRole('button', {name: 'Back'}));

    expect(screen.getByRole('radio', {name: '5Very much'})).toBeChecked();
  });

  it('calculates a result only after all 20 answers', () => {
    render(<QuizExperience questions={questions} />);
    fireEvent.click(screen.getByRole('button', {name: 'Start quiz'}));

    questions.forEach((_, index) => {
      fireEvent.click(screen.getByRole('radio', {name: '3In between'}));
      fireEvent.click(screen.getByRole('button', {name: index === questions.length - 1 ? 'Finish' : 'Continue'}));
    });

    expect(screen.getByRole('heading', {name: 'Pattern found'})).toBeInTheDocument();
  });
});
