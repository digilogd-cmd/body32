import type {DimensionKey, QuizQuestion} from './types';

export const QUESTION_SET_VERSION = 'body-pattern-v1';

type QuestionSource = readonly [
  id: string,
  dimension: DimensionKey,
  direction: QuizQuestion['direction'],
  en: string,
  ko: string
];

const QUESTION_SOURCE: readonly QuestionSource[] = [
  ['Q_ENE_01', 'energy', 'positive', 'I feel ready to move not long after waking.', '잠에서 깬 뒤 오래 지나지 않아 움직일 준비가 되는 편이다.'],
  ['Q_ENE_02', 'energy', 'positive', 'Once I begin something, my energy builds quickly.', '무언가 시작하면 에너지가 빠르게 올라오는 편이다.'],
  ['Q_ENE_03', 'energy', 'reverse', 'I need a long warm-up before I feel fully active.', '제대로 활동하려면 긴 준비 시간이 필요한 편이다.'],
  ['Q_ENE_04', 'energy', 'reverse', 'After a busy period, my energy drops sharply.', '바쁜 시간을 보내고 나면 에너지가 급격히 떨어지는 편이다.'],
  ['Q_REC_01', 'recovery', 'positive', 'A normal night of sleep usually leaves me feeling restored.', '평소처럼 잠을 자고 나면 대체로 회복됐다고 느낀다.'],
  ['Q_REC_02', 'recovery', 'positive', 'A short quiet break helps me regain my balance.', '짧게 조용히 쉬어도 다시 균형을 찾는 데 도움이 된다.'],
  ['Q_REC_03', 'recovery', 'reverse', 'Tiredness often carries over into the next day.', '피로가 다음 날까지 이어지는 경우가 많다.'],
  ['Q_REC_04', 'recovery', 'reverse', 'Even when I have time to rest, it is hard to unwind.', '쉴 시간이 있어도 긴장을 풀기가 어려운 편이다.'],
  ['Q_THR_01', 'thermalComfort', 'positive', 'I tend to feel warm sooner than people around me.', '주변 사람들보다 더 빨리 덥다고 느끼는 편이다.'],
  ['Q_THR_02', 'thermalComfort', 'positive', 'Warm or stuffy spaces drain my energy.', '덥거나 답답한 공간에서는 에너지가 쉽게 떨어진다.'],
  ['Q_THR_03', 'thermalComfort', 'reverse', 'My hands or feet often feel cold.', '손이나 발이 차갑게 느껴질 때가 많다.'],
  ['Q_THR_04', 'thermalComfort', 'reverse', 'I often need more warmth than others to feel comfortable.', '편안함을 느끼려면 다른 사람보다 더 따뜻해야 하는 편이다.'],
  ['Q_DIG_01', 'digestiveRhythm', 'positive', 'Regular meal times help my body feel settled.', '식사 시간이 규칙적이면 몸이 편안하게 느껴진다.'],
  ['Q_DIG_02', 'digestiveRhythm', 'positive', 'My appetite and meal comfort are fairly predictable.', '식욕과 식사 후 편안함이 비교적 일정한 편이다.'],
  ['Q_DIG_03', 'digestiveRhythm', 'reverse', 'Stress often changes how comfortable my stomach feels.', '스트레스를 받으면 속의 편안함이 달라지는 경우가 많다.'],
  ['Q_DIG_04', 'digestiveRhythm', 'reverse', 'Late or heavy meals tend to linger uncomfortably.', '늦거나 무거운 식사를 하면 불편함이 오래가는 편이다.'],
  ['Q_STR_01', 'stressFlexibility', 'positive', 'I can adjust a changed plan without losing my whole rhythm.', '계획이 바뀌어도 전체 리듬을 잃지 않고 적응할 수 있다.'],
  ['Q_STR_02', 'stressFlexibility', 'positive', 'After a stressful moment, I usually return to baseline steadily.', '스트레스가 지나가면 비교적 안정적으로 평소 상태로 돌아온다.'],
  ['Q_STR_03', 'stressFlexibility', 'reverse', 'Unexpected changes drain me for a long time.', '예상하지 못한 변화가 생기면 오랫동안 지치는 편이다.'],
  ['Q_STR_04', 'stressFlexibility', 'reverse', 'Tension stays in my body even after the situation is over.', '상황이 끝난 뒤에도 몸의 긴장이 오래 남는 편이다.']
];

export const QUESTIONS: readonly QuizQuestion[] = QUESTION_SOURCE.map(([id, dimension, direction, en, ko], index) => ({
  id,
  dimension,
  direction,
  prompt: {en, ko},
  order: index + 1
}));

export const QUESTION_IDS = QUESTIONS.map((question) => question.id);
