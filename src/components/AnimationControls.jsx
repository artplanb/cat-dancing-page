export default function AnimationControls({ isDancing, onToggle, speed, onSpeedChange }) {
  return (
    <div className="controls">
      <button type="button" className="toggle-btn" onClick={onToggle} aria-pressed={isDancing}>
        {isDancing ? '⏸ 정지' : '▶ 시작'}
      </button>
      <label className="speed">
        속도 {speed.toFixed(1)}x
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          aria-label="춤 속도"
        />
      </label>
    </div>
  )
}
