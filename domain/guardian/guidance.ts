import type {ArchetypeCode, LocalizedText} from '@/domain/algorithm/types';

export interface ArchetypeGuidance {
  readonly strength: LocalizedText;
  readonly reflection: LocalizedText;
}

export const ARCHETYPE_GUIDANCE: Readonly<Record<ArchetypeCode, ArchetypeGuidance>> = {
  TIGER: {strength: {ko: '결정이 필요한 순간에 핵심을 붙잡고 첫 움직임을 만들어 냅니다.', en: 'You hold onto what matters and create the first move when a decision is needed.'}, reflection: {ko: '내가 앞서 나갈 때, 다른 사람의 속도와 목소리에도 자리를 내어주고 있나요?', en: 'When you step forward, are you also making room for other voices and tempos?'}},
  FOX: {strength: {ko: '익숙한 방식이 막힐 때 작은 단서들을 연결해 새로운 경로를 찾아냅니다.', en: 'When familiar routes close, you connect small clues and discover another way through.'}, reflection: {ko: '새로운 가능성을 찾는 즐거움만큼, 선택한 길을 끝까지 돌보고 있나요?', en: 'Alongside finding new possibilities, are you caring for the path you chose through completion?'}},
  DEER: {strength: {ko: '사람과 환경의 미세한 변화를 알아차리고 관계가 편안히 자라도록 돕습니다.', en: 'You notice subtle shifts in people and surroundings, helping relationships grow with ease.'}, reflection: {ko: '조화를 지키는 동안 내 경계와 바람도 충분히 표현하고 있나요?', en: 'While protecting harmony, are you expressing your own boundaries and wishes clearly enough?'}},
  CRANE: {strength: {ko: '한걸음 떨어져 전체 흐름을 보고, 움직여야 할 때와 기다릴 때를 구분합니다.', en: 'You step back to see the whole flow and distinguish when to move from when to wait.'}, reflection: {ko: '완벽한 방향을 찾느라 지금 경험할 수 있는 작은 기쁨을 미루고 있지는 않나요?', en: 'Are you postponing a small joy available now while searching for the perfect direction?'}},
  BEAR: {strength: {ko: '흔들리는 순간에도 차분한 기반을 만들고 주변이 안심할 수 있게 합니다.', en: 'You create a calm foundation in unsettled moments and help others feel safe.'}, reflection: {ko: '모두를 지키려는 마음 속에서 내 회복을 위한 공간도 남겨두고 있나요?', en: 'Within your instinct to protect everyone, are you leaving enough space for your own recovery?'}},
  WOLF: {strength: {ko: '중요한 약속과 방향을 오래 기억하고, 혼란 속에서도 꾸준히 이어갑니다.', en: 'You remember important commitments and keep moving steadily even through uncertainty.'}, reflection: {ko: '처음 정한 방향이 지금도 나에게 맞는지 가끔 다시 확인하고 있나요?', en: 'Do you occasionally check whether the direction you first chose still fits who you are now?'}},
  OWL: {strength: {ko: '겉으로 드러나지 않은 의미와 반복을 발견해 더 깊은 이해를 만듭니다.', en: 'You notice meanings and repetitions beneath the surface, creating deeper understanding.'}, reflection: {ko: '충분히 이해한 뒤 움직이려는 마음이 첫 시도를 늦추고 있지는 않나요?', en: 'Is the wish to understand fully before moving delaying a useful first attempt?'}},
  DOLPHIN: {strength: {ko: '감정과 아이디어를 생생하게 나누며 사람들 사이의 활력을 깨웁니다.', en: 'You share feelings and ideas vividly, awakening energy between people.'}, reflection: {ko: '주변의 반응이 조용할 때에도 내 감각과 에너지를 편안히 지킬 수 있나요?', en: 'When responses around you are quiet, can you still hold your own energy with ease?'}}
};
