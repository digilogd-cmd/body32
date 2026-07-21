export interface ProgressProps {
  value: number;
  label: string;
}

export function Progress({value, label}: ProgressProps) {
  const boundedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="progress-group">
      <div className="progress-label">
        <span>{label}</span>
        <span>{Math.round(boundedValue)}%</span>
      </div>
      <div aria-label={label} aria-valuemax={100} aria-valuemin={0} aria-valuenow={boundedValue} className="progress-track" role="progressbar">
        <span className="progress-value" style={{width: `${boundedValue}%`}} />
      </div>
    </div>
  );
}
