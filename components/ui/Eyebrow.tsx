export default function Eyebrow({
  children,
  tone = "dark",
}: {
  children: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        className={`h-px w-8 ${tone === "dark" ? "bg-accent-lilac/60" : "bg-accent-violet/60"}`}
      />
      <span
        className={`font-mono text-xs uppercase tracking-[0.18em] ${
          tone === "dark" ? "text-fog" : "text-ink-muted"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
