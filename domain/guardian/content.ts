import type {ArchetypeCode, LocalizedText, RhythmCode} from '@/domain/algorithm/types';

export interface ResultFacet {
  readonly title: LocalizedText;
  readonly summary: LocalizedText;
  readonly strength: LocalizedText;
  readonly reflection: LocalizedText;
}

export const RHYTHM_CONTENT: Readonly<Record<RhythmCode, ResultFacet>> = {
  IGNITE: {
    title: {ko: '움직임으로 길을 여는 리듬', en: 'A rhythm that opens paths through action'},
    summary: {ko: '생각을 움직임으로 바꿀 때 에너지가 살아나는 편입니다.', en: 'Your energy often comes alive when ideas become motion.'},
    strength: {ko: '시작의 불씨를 만들고 주변에 추진력을 더합니다.', en: 'You create the first spark and bring momentum to others.'},
    reflection: {ko: '속도를 늦추는 순간도 리듬의 일부로 받아들여 보세요.', en: 'Let moments of slowing down be part of your rhythm, too.'}
  },
  WEAVE: {
    title: {ko: '변화와 연결을 엮는 리듬', en: 'A rhythm that weaves change and connection'},
    summary: {ko: '상황과 사람 사이의 흐름을 읽으며 유연하게 움직이는 편입니다.', en: 'You tend to read the flow between people and situations, then adapt.'},
    strength: {ko: '서로 다른 관점을 연결해 새로운 가능성을 발견합니다.', en: 'You connect different perspectives and reveal new possibilities.'},
    reflection: {ko: '모든 흐름에 반응하기보다 나만의 기준점도 남겨두세요.', en: 'Keep a personal anchor instead of responding to every current.'}
  },
  GROUND: {
    title: {ko: '꾸준함으로 기반을 만드는 리듬', en: 'A rhythm that builds foundations through steadiness'},
    summary: {ko: '익숙한 속도를 지키며 오래 이어지는 안정감을 만드는 편입니다.', en: 'You tend to create lasting stability by keeping a familiar pace.'},
    strength: {ko: '신뢰할 수 있는 구조와 지속 가능한 흐름을 만듭니다.', en: 'You build dependable structures and sustainable momentum.'},
    reflection: {ko: '안정 속에서도 작은 변화를 시험할 여백을 허락해 보세요.', en: 'Leave a little room to experiment within what feels steady.'}
  },
  REFLECT: {
    title: {ko: '깊이 관찰하며 의미를 찾는 리듬', en: 'A rhythm that finds meaning through deep observation'},
    summary: {ko: '작은 신호를 살피고 충분히 이해한 뒤 움직이는 편입니다.', en: 'You tend to notice subtle signals and understand them before moving.'},
    strength: {ko: '다른 사람이 지나친 의미와 섬세한 차이를 발견합니다.', en: 'You notice meaning and nuance that others may pass by.'},
    reflection: {ko: '완벽히 이해하기 전의 작은 행동도 유용한 단서가 될 수 있습니다.', en: 'A small action before full certainty can offer useful clues.'}
  }
};

export const ARCHETYPE_CONTENT: Readonly<Record<ArchetypeCode, LocalizedText>> = {
  TIGER: {ko: '분명한 의지로 중요한 순간을 이끄는 Guardian', en: 'A Guardian who leads important moments with clear intent'},
  FOX: {ko: '빠른 감각으로 새로운 길을 찾아내는 Guardian', en: 'A Guardian who finds new paths with quick perception'},
  DEER: {ko: '주변의 변화에 섬세하고 부드럽게 반응하는 Guardian', en: 'A Guardian who responds gently to subtle changes'},
  CRANE: {ko: '넓은 시야로 흐름과 거리를 조율하는 Guardian', en: 'A Guardian who balances perspective, flow, and distance'},
  BEAR: {ko: '따뜻한 안정감으로 곁을 지키는 Guardian', en: 'A Guardian who stays present with warm steadiness'},
  WOLF: {ko: '자신의 방향을 지키며 끝까지 나아가는 Guardian', en: 'A Guardian who holds direction and follows through'},
  OWL: {ko: '조용한 관찰로 숨은 패턴을 발견하는 Guardian', en: 'A Guardian who discovers hidden patterns through quiet attention'},
  DOLPHIN: {ko: '교감과 표현으로 에너지의 흐름을 살리는 Guardian', en: 'A Guardian who brings energy to life through expression and connection'}
};
