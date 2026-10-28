import { Fragment } from "react";

const TILTS = [-1.2, 0.9, -0.7, 1.4, -0.5, 1.1, -1.3];
const DRIFTS = [-0.4, 0.3, 0, 0.5, -0.3, 0.2, -0.4];
const BASE_TILT = 1.5;

type HandwrittenProps = {
  text: string;
  className?: string;
  seed?: number;
  maxTilt?: number;
  disableAbove?: number;
};

export default function Handwritten({
  text,
  className,
  seed = 0,
  maxTilt = BASE_TILT,
  disableAbove = 12,
}: HandwrittenProps) {
  const lines = text
    .split("\n")
    .map((line) => line.split(/\s+/).filter(Boolean));

  if (lines.some((words) => words.length > disableAbove)) {
    return <span className={className}>{text}</span>;
  }

  const scale = maxTilt / BASE_TILT;

  return (
    <span className={className}>
      {lines.map((words, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {words.map((word, wordIndex) => {
            const tiltIndex =
              (seed + lineIndex * 5 + wordIndex) % TILTS.length;
            const rotation = TILTS[tiltIndex] * scale;
            const drift = DRIFTS[tiltIndex] * scale;

            return (
              <Fragment key={wordIndex}>
                {wordIndex > 0 && " "}
                <span
                  className="inline-block"
                  style={{
                    transform: `rotate(${rotation.toFixed(2)}deg) translateY(${drift.toFixed(2)}px)`,
                  }}
                >
                  {word}
                </span>
              </Fragment>
            );
          })}
        </Fragment>
      ))}
    </span>
  );
}
