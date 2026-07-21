import {ARCHETYPE_CODES, RHYTHM_CODES, type ArchetypeCode, type LocalizedText, type RhythmCode} from '@/domain/algorithm/types';

export interface GuardianType {
  readonly stableId: string;
  readonly displayOrder: number;
  readonly rhythm: RhythmCode;
  readonly archetype: ArchetypeCode;
  readonly name: LocalizedText;
}

const names: Readonly<Record<RhythmCode, Readonly<Record<ArchetypeCode, LocalizedText>>>> = {
  IGNITE: {
    TIGER: {en: 'Blaze Tiger', ko: '불꽃 호랑이'}, FOX: {en: 'Spark Fox', ko: '불씨 여우'},
    DEER: {en: 'Dawn Deer', ko: '새벽 사슴'}, CRANE: {en: 'Solar Crane', ko: '태양 두루미'},
    BEAR: {en: 'Hearth Bear', ko: '화로 곰'}, WOLF: {en: 'Vanguard Wolf', ko: '선봉 늑대'},
    OWL: {en: 'Beacon Owl', ko: '등불 부엉이'}, DOLPHIN: {en: 'Comet Dolphin', ko: '혜성 돌고래'}
  },
  WEAVE: {
    TIGER: {en: 'Prism Tiger', ko: '프리즘 호랑이'}, FOX: {en: 'Mosaic Fox', ko: '모자이크 여우'},
    DEER: {en: 'Meadow Deer', ko: '들꽃 사슴'}, CRANE: {en: 'Ribbon Crane', ko: '리본 두루미'},
    BEAR: {en: 'Harbor Bear', ko: '항구 곰'}, WOLF: {en: 'Chorus Wolf', ko: '합창 늑대'},
    OWL: {en: 'Lattice Owl', ko: '격자 부엉이'}, DOLPHIN: {en: 'Echo Dolphin', ko: '메아리 돌고래'}
  },
  GROUND: {
    TIGER: {en: 'Terra Tiger', ko: '대지 호랑이'}, FOX: {en: 'Grove Fox', ko: '숲길 여우'},
    DEER: {en: 'Cedar Deer', ko: '삼나무 사슴'}, CRANE: {en: 'Summit Crane', ko: '봉우리 두루미'},
    BEAR: {en: 'Mountain Bear', ko: '산맥 곰'}, WOLF: {en: 'Trail Wolf', ko: '오솔길 늑대'},
    OWL: {en: 'Archive Owl', ko: '기록 부엉이'}, DOLPHIN: {en: 'Current Dolphin', ko: '해류 돌고래'}
  },
  REFLECT: {
    TIGER: {en: 'Moon Tiger', ko: '달빛 호랑이'}, FOX: {en: 'Veil Fox', ko: '장막 여우'},
    DEER: {en: 'Mist Deer', ko: '안개 사슴'}, CRANE: {en: 'Starlit Crane', ko: '별빛 두루미'},
    BEAR: {en: 'Quiet Bear', ko: '고요 곰'}, WOLF: {en: 'Night Wolf', ko: '밤길 늑대'},
    OWL: {en: 'Orbit Owl', ko: '궤도 부엉이'}, DOLPHIN: {en: 'Lunar Dolphin', ko: '달결 돌고래'}
  }
};

export const GUARDIAN_TYPES: readonly GuardianType[] = RHYTHM_CODES.flatMap(
  (rhythm, rhythmIndex) => ARCHETYPE_CODES.map((archetype, archetypeIndex) => ({
    stableId: `B32_${rhythm}_${archetype}`,
    displayOrder: rhythmIndex * ARCHETYPE_CODES.length + archetypeIndex + 1,
    rhythm,
    archetype,
    name: names[rhythm][archetype]
  }))
);

const guardianById = new Map(GUARDIAN_TYPES.map((guardian) => [guardian.stableId, guardian]));

export function getGuardianType(stableId: string): GuardianType | undefined {
  return guardianById.get(stableId);
}
