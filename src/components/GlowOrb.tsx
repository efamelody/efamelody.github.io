interface Props {
  className: string;
  tone: "soft" | "mid" | "deep";
}

const TONES: Record<Props["tone"], string> = {
  soft: "bg-pink-100/40",
  mid: "bg-pink-200/35",
  deep: "bg-pink-300/30",
};

export default function GlowOrb({ className, tone }: Props) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${TONES[tone]} ${className}`}
      style={{ filter: "blur(90px)" }}
    />
  );
}
