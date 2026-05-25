interface Props {
  className: string;
  color: "rose" | "purple" | "pink";
}

export default function GlowOrb({ className, color }: Props) {
  const bg =
    color === "rose"
      ? "bg-rose-300/25"
      : color === "purple"
        ? "bg-purple-300/20"
        : "bg-pink-200/30";
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${bg} ${className}`}
      style={{ filter: "blur(90px)" }}
    />
  );
}
