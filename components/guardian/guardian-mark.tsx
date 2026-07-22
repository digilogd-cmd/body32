import Image from 'next/image';

import type {ArchetypeCode, RhythmCode} from '@/domain/algorithm/types';
import {getGuardianPortrait} from '@/domain/guardian/visuals';

interface GuardianMarkProps {
  archetype: ArchetypeCode;
  rhythm: RhythmCode;
  label: string;
  typeNumber?: string;
  compact?: boolean;
}

export function GuardianMark({archetype, rhythm, label, typeNumber, compact = false}: GuardianMarkProps) {
  const portrait = getGuardianPortrait(archetype, rhythm);

  return (
    <div aria-label={label} className={`guardian-portrait${compact ? ' guardian-portrait--compact' : ''}`} role="img">
      <Image alt="" aria-hidden="true" fill sizes={compact ? '84px' : '(max-width: 767px) 78vw, 496px'} src={portrait.src} />
      {typeNumber ? <small>{typeNumber}</small> : null}
    </div>
  );
}
