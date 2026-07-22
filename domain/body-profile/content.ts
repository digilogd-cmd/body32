import type {DimensionKey, LocalizedText, RhythmCode} from '@/domain/algorithm/types';

export interface SignalContent {
  readonly name: LocalizedText;
  readonly meaning: LocalizedText;
  readonly high: LocalizedText;
  readonly balanced: LocalizedText;
  readonly low: LocalizedText;
}

export const BODY_SIGNAL_CONTENT: Readonly<Record<DimensionKey, SignalContent>> = {
  energy: {
    name: {ko: '에너지', en: 'Energy'},
    meaning: {ko: '하루를 시작하고 움직임을 이어가는 현재의 방식', en: 'How you currently start and sustain movement through the day'},
    high: {ko: '움직임을 시작하면 에너지가 빠르게 살아나는 편입니다.', en: 'Your energy tends to come online quickly once you begin moving.'},
    balanced: {ko: '상황에 따라 움직임과 에너지 보존을 조절하는 편입니다.', en: 'You tend to alternate between momentum and energy conservation by context.'},
    low: {ko: '충분한 준비와 예열이 있을 때 에너지를 더 편안히 쓰는 편입니다.', en: 'You tend to use energy more comfortably with enough preparation and warm-up.'}
  },
  recovery: {
    name: {ko: '회복', en: 'Recovery'},
    meaning: {ko: '수면과 휴식 뒤 평소 상태로 돌아오는 현재의 감각', en: 'How readily rest and sleep bring you back toward baseline'},
    high: {ko: '짧은 휴식이나 평소 수면에서도 회복 신호를 비교적 잘 느낍니다.', en: 'You report noticing restoration from normal sleep or short quiet breaks.'},
    balanced: {ko: '회복이 되는 날과 피로가 이어지는 날이 함께 나타납니다.', en: 'Restorative days and lingering-fatigue days both appear in your pattern.'},
    low: {ko: '쉬는 시간이 있어도 피로나 긴장이 다음 구간까지 이어지기 쉽습니다.', en: 'Fatigue or tension may carry into the next part of your day even when rest is available.'}
  },
  thermalComfort: {
    name: {ko: '온냉 편안함', en: 'Thermal comfort'},
    meaning: {ko: '더위와 추위, 공간 온도에 반응하는 주관적 경향', en: 'Your self-reported response to warmth, cold, and room temperature'},
    high: {ko: '따뜻하거나 답답한 환경에서 에너지 변화를 빠르게 느끼는 편입니다.', en: 'You tend to notice energy changes quickly in warm or stuffy environments.'},
    balanced: {ko: '온도 변화에 대한 반응이 상황에 따라 달라지는 편입니다.', en: 'Your response to temperature tends to vary with context.'},
    low: {ko: '손발이나 주변 온도에서 차가움을 먼저 느끼고 따뜻함을 찾는 편입니다.', en: 'You tend to notice cold first and seek more warmth for comfort.'}
  },
  digestiveRhythm: {
    name: {ko: '소화 리듬', en: 'Digestive rhythm'},
    meaning: {ko: '식사 시간과 스트레스에 따라 달라지는 식후 편안함의 패턴', en: 'Patterns of meal comfort across timing, load, and stress'},
    high: {ko: '규칙적인 식사에서 식욕과 식후 편안함이 비교적 일정합니다.', en: 'Your appetite and post-meal comfort feel relatively predictable with regular meals.'},
    balanced: {ko: '식사 리듬은 대체로 유지되지만 스트레스나 시간에 영향을 받기도 합니다.', en: 'Your meal rhythm is often steady but can shift with timing or stress.'},
    low: {ko: '늦은 식사나 스트레스가 식후 편안함에 오래 영향을 주기 쉽습니다.', en: 'Late meals or stress may have a longer influence on how comfortable you feel after eating.'}
  },
  stressFlexibility: {
    name: {ko: '스트레스 유연성', en: 'Stress flexibility'},
    meaning: {ko: '변화나 긴장 뒤 평소 리듬으로 돌아오는 현재의 방식', en: 'How you adapt and return toward baseline after change or tension'},
    high: {ko: '예상 밖의 변화 뒤에도 리듬을 다시 찾는 속도가 비교적 빠릅니다.', en: 'You tend to find your rhythm again relatively quickly after unexpected change.'},
    balanced: {ko: '변화에 적응하지만 상황에 따라 긴장이 남기도 합니다.', en: 'You adapt to change, though some situations may leave tension behind.'},
    low: {ko: '상황이 끝난 뒤에도 몸의 긴장이나 피로가 오래 남기 쉽습니다.', en: 'Tension or fatigue may linger in your body after the situation has passed.'}
  }
};

export interface RhythmPractice {
  readonly meal: LocalizedText;
  readonly movement: LocalizedText;
  readonly recovery: LocalizedText;
  readonly stress: LocalizedText;
  readonly experiment: LocalizedText;
}

export const RHYTHM_PRACTICES: Readonly<Record<RhythmCode, RhythmPractice>> = {
  IGNITE: {
    meal: {ko: '바쁜 날일수록 첫 식사와 물 마시는 시간을 미리 정해두세요.', en: 'On busy days, decide your first meal and hydration time before momentum takes over.'},
    movement: {ko: '강도를 올리기 전 5분간 관절과 호흡을 천천히 깨워보세요.', en: 'Give your joints and breath five calm minutes before increasing intensity.'},
    recovery: {ko: '멈춘 뒤 바로 다른 자극을 찾기보다 10분의 무입력 시간을 남겨보세요.', en: 'After stopping, leave ten minutes without new input before seeking the next stimulus.'},
    stress: {ko: '속도를 줄여야 할 신호를 하나 정하고 하루에 세 번 확인해보세요.', en: 'Choose one signal that means slow down and check it three times a day.'},
    experiment: {ko: '7일 동안 오후의 첫 피로 신호가 오기 20분 전에 짧은 회복 시간을 예약해보세요.', en: 'For seven days, schedule a short recovery pause twenty minutes before your usual afternoon dip.'}
  },
  WEAVE: {
    meal: {ko: '일정이 달라져도 유지할 수 있는 식사 기준점 하나를 만들어보세요.', en: 'Create one meal anchor you can keep even when the rest of the day changes.'},
    movement: {ko: '기분에 맞춰 강도를 바꾸되 시작 시간만은 일정하게 두어보세요.', en: 'Let intensity follow your mood while keeping the starting time consistent.'},
    recovery: {ko: '여러 사람과 환경을 오간 뒤 혼자 정리하는 짧은 전환 시간을 두세요.', en: 'After moving between people and settings, take a short transition alone.'},
    stress: {ko: '계획이 바뀔 때 지킬 것 하나와 바꿀 것 하나를 구분해보세요.', en: 'When plans change, name one thing to keep and one thing you can adjust.'},
    experiment: {ko: '7일 동안 가장 흔들리기 쉬운 시간대에 같은 작은 루틴 하나를 반복해보세요.', en: 'For seven days, repeat one small anchor during the part of your day that changes most.'}
  },
  GROUND: {
    meal: {ko: '식사 간격과 양을 크게 바꾸기보다 편안했던 리듬을 기록해보세요.', en: 'Rather than changing meal size or timing sharply, record the rhythm that felt most comfortable.'},
    movement: {ko: '짧아도 반복 가능한 걷기나 스트레칭 시간을 정해두세요.', en: 'Choose a walking or stretching window that is short enough to repeat.'},
    recovery: {ko: '잠들기 전 같은 순서의 세 가지 신호로 하루를 닫아보세요.', en: 'Close the day with the same three-step wind-down sequence.'},
    stress: {ko: '변화가 필요할 때 전체를 바꾸지 말고 한 요소만 시험해보세요.', en: 'When change is needed, test one element instead of replacing the whole routine.'},
    experiment: {ko: '7일 동안 기상 또는 취침 시간 중 하나를 30분 범위 안에서 유지해보세요.', en: 'For seven days, keep either wake time or bedtime within a thirty-minute window.'}
  },
  REFLECT: {
    meal: {ko: '식사 전 배고픔과 긴장 정도를 각각 한 단어로 확인해보세요.', en: 'Before eating, name your hunger and tension levels in one word each.'},
    movement: {ko: '생각이 많아질 때 10분 걷기로 몸의 감각을 먼저 깨워보세요.', en: 'When thoughts accumulate, use a ten-minute walk to reconnect with physical sensation.'},
    recovery: {ko: '잠들기 전 해결하지 않아도 되는 생각을 메모로 밖에 꺼내두세요.', en: 'Before sleep, write down thoughts that do not need to be solved tonight.'},
    stress: {ko: '완벽한 해석보다 지금 느껴지는 몸의 신호 하나만 정확히 말해보세요.', en: 'Instead of a perfect explanation, name one body signal you can notice right now.'},
    experiment: {ko: '7일 동안 저녁에 에너지·속 편안함·긴장을 각각 한 단어로 기록해보세요.', en: 'For seven days, record one word each for energy, meal comfort, and tension in the evening.'}
  }
};

export function getSignalObservation(signal: DimensionKey, score: number, locale: 'ko' | 'en') {
  const content = BODY_SIGNAL_CONTENT[signal];
  return score >= 65 ? content.high[locale] : score <= 35 ? content.low[locale] : content.balanced[locale];
}
