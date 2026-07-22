import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';

import {QUESTIONS} from '@/domain/algorithm/questions';

import {getQuizProgressStorageKey, QuizExperience} from './quiz-experience';

const translations: Record<string, string> = {
  'intro.eyebrow': 'Before', 'intro.title': 'Ready?', 'intro.description': 'Description',
  'intro.questions': 'questions', 'intro.minutes': 'minutes', 'intro.personalData': 'details',
  'intro.start': 'Start quiz', 'intro.back': 'Home', 'intro.note': 'Private',
  'profile.skip': 'Skip', 'profile.beginQuiz': 'Begin body questions',
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

function beginQuestions() {
  fireEvent.click(screen.getByRole('button', {name: 'Start quiz'}));
  for (let index = 0; index < 6; index += 1) fireEvent.click(screen.getByRole('button', {name: 'Skip'}));
}

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn(() => ({matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn()}))
  });
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});

describe('QuizExperience', () => {
  it('starts anonymously and requires an answer before continuing', () => {
    render(<QuizExperience locale="en" questions={questions} />);
    beginQuestions();

    const continueButton = screen.getByRole('button', {name: 'Continue'});
    expect(continueButton).toBeDisabled();
    fireEvent.click(screen.getByRole('radio', {name: '4Mostly yes'}));
    expect(continueButton).toBeEnabled();
  });

  it('preserves a response when moving back', () => {
    render(<QuizExperience locale="en" questions={questions} />);
    beginQuestions();
    fireEvent.click(screen.getByRole('radio', {name: '5Very much'}));
    fireEvent.click(screen.getByRole('button', {name: 'Continue'}));
    fireEvent.click(screen.getByRole('button', {name: 'Back'}));

    expect(screen.getByRole('radio', {name: '5Very much'})).toBeChecked();
  });

  it('restores saved progress after the page is reopened', async () => {
    const savedAnswers = Object.fromEntries(questions.slice(0, 19).map(({id}) => [id, 4]));
    window.localStorage.setItem(getQuizProgressStorageKey('en'), JSON.stringify({
      stage: 'questions', index: 18, answers: savedAnswers
    }));

    render(<QuizExperience locale="en" questions={questions} />);

    expect(await screen.findByText('19 answered')).toBeInTheDocument();
    expect(screen.getByText(questions[18]!.prompt)).toBeInTheDocument();
    expect(screen.getByRole('radio', {name: '4Mostly yes'})).toBeChecked();
  });

  it('calculates a result only after all 20 answers', async () => {
    render(<QuizExperience locale="en" questions={questions} />);
    beginQuestions();

    questions.forEach((_, index) => {
      fireEvent.click(screen.getByRole('radio', {name: '3In between'}));
      fireEvent.click(screen.getByRole('button', {name: index === questions.length - 1 ? 'Finish' : 'Continue'}));
    });

    expect(await screen.findByRole('heading', {name: 'Comet Dolphin', level: 1})).toBeInTheDocument();
  });
});
