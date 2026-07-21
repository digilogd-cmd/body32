import type {DimensionKey, QuizQuestion} from './types';

export const QUESTION_SET_VERSION = 'questions-v1-draft';

type QuestionSource = readonly [
  id: string,
  dimension: DimensionKey,
  direction: QuizQuestion['direction'],
  en: string,
  ko: string
];

const QUESTION_SOURCE: readonly QuestionSource[] = [
  ['Q_ACT_01', 'activation', 'positive', 'I usually turn an idea into action quickly.', '나는 보통 아이디어가 생기면 빠르게 행동으로 옮긴다.'],
  ['Q_ACT_02', 'activation', 'positive', 'Starting something new gives me energy.', '새로운 일을 시작하면 에너지가 생긴다.'],
  ['Q_ACT_03', 'activation', 'reverse', 'I prefer to wait until every detail is settled before I begin.', '나는 모든 세부 사항이 정리될 때까지 시작을 미루는 편이다.'],
  ['Q_ACT_04', 'activation', 'reverse', 'I conserve my energy until action is truly necessary.', '나는 꼭 행동해야 할 때까지 에너지를 아끼는 편이다.'],
  ['Q_ADP_01', 'adaptability', 'positive', 'I can change my plan without losing my rhythm.', '계획이 바뀌어도 내 리듬을 잃지 않고 적응할 수 있다.'],
  ['Q_ADP_02', 'adaptability', 'positive', 'Unexpected situations often make me curious.', '예상하지 못한 상황이 생기면 호기심이 생기는 편이다.'],
  ['Q_ADP_03', 'adaptability', 'reverse', 'Sudden changes drain me for a long time.', '갑작스러운 변화가 생기면 오랫동안 지치는 편이다.'],
  ['Q_ADP_04', 'adaptability', 'reverse', 'I feel best when each day follows a familiar pattern.', '매일 익숙한 방식대로 흘러갈 때 가장 편안하다.'],
  ['Q_STD_01', 'steadiness', 'positive', 'I am good at maintaining a routine over time.', '나는 일정한 루틴을 오래 유지하는 편이다.'],
  ['Q_STD_02', 'steadiness', 'positive', 'People can usually rely on my pace and follow-through.', '사람들은 대체로 나의 꾸준함과 마무리를 믿을 수 있다.'],
  ['Q_STD_03', 'steadiness', 'reverse', 'My energy often rises and falls sharply.', '내 에너지는 크게 오르내리는 편이다.'],
  ['Q_STD_04', 'steadiness', 'reverse', 'Repetition quickly makes me want to switch direction.', '같은 일이 반복되면 금방 다른 방향으로 바꾸고 싶어진다.'],
  ['Q_REF_01', 'reflection', 'positive', 'I notice small signals before I decide what they mean.', '나는 의미를 판단하기 전에 작은 신호들을 먼저 살피는 편이다.'],
  ['Q_REF_02', 'reflection', 'positive', 'Quiet time helps me understand what I am feeling.', '조용한 시간은 내가 느끼는 것을 이해하는 데 도움이 된다.'],
  ['Q_REF_03', 'reflection', 'reverse', 'I usually understand my thoughts by speaking or acting first.', '나는 먼저 말하거나 행동하면서 내 생각을 이해하는 편이다.'],
  ['Q_REF_04', 'reflection', 'reverse', 'I rarely revisit a decision once I have made it.', '나는 한번 내린 결정을 다시 돌아보는 일이 드물다.'],
  ['Q_CON_01', 'connection', 'positive', 'The mood of a group affects how I respond.', '함께 있는 사람들의 분위기는 내 반응에 영향을 준다.'],
  ['Q_CON_02', 'connection', 'positive', 'Sharing an experience often makes it more meaningful to me.', '경험을 누군가와 나누면 더 의미 있게 느껴지는 편이다.'],
  ['Q_CON_03', 'connection', 'reverse', 'I do my best thinking with minimal input from others.', '나는 다른 사람의 의견이 적을 때 가장 잘 생각하는 편이다.'],
  ['Q_CON_04', 'connection', 'reverse', 'I usually restore my energy by focusing only on my own space.', '나는 대체로 나만의 공간에 집중하며 에너지를 회복한다.']
];

export const QUESTIONS: readonly QuizQuestion[] = QUESTION_SOURCE.map(([id, dimension, direction, en, ko], index) => ({
  id,
  dimension,
  direction,
  prompt: {en, ko},
  order: index + 1
}));

export const QUESTION_IDS = QUESTIONS.map((question) => question.id);
