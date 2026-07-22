import type {ArchetypeCode, RhythmCode} from '@/domain/algorithm/types';
import {GUARDIAN_VISUALS, RHYTHM_VISUAL_CUES} from '@/domain/guardian/visuals';

interface GuardianMarkProps {
  archetype: ArchetypeCode;
  rhythm: RhythmCode;
  label: string;
  typeNumber?: string;
  compact?: boolean;
}

export function GuardianMark({archetype, rhythm, label, typeNumber, compact = false}: GuardianMarkProps) {
  const visual = GUARDIAN_VISUALS[archetype];

  return (
    <div
      aria-label={`${label} · ${visual.emblem}`}
      className={`guardian-mark${compact ? ' guardian-mark--compact' : ''}`}
      data-rhythm={RHYTHM_VISUAL_CUES[rhythm]}
      data-shape={visual.shape}
      role="img"
    >
      <span className="guardian-mark__field" aria-hidden="true" />
      <span className="guardian-mark__form" aria-hidden="true">
        <i /><i /><i />
      </span>
      <span className="guardian-mark__eyes" aria-hidden="true"><i /><i /></span>
      {typeNumber ? <small>{typeNumber}</small> : null}
    </div>
  );
}
