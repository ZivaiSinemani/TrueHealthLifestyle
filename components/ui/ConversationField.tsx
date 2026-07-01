export default function ConversationField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* ambient radial glow */}
      <div className="absolute inset-0 bg-grad-radial-glow" />

      {/* node A (blue) */}
      <div className="absolute left-[18%] top-[22%] h-40 w-40 animate-drift rounded-full bg-accent-blue/25 blur-3xl md:h-56 md:w-56" />

      {/* node B (violet) */}
      <div className="absolute right-[16%] top-[38%] h-48 w-48 animate-driftSlow rounded-full bg-accent-violet/25 blur-3xl md:h-64 md:w-64" />

      {/* connecting line, pulsing like a live signal between two parties in conversation */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line
          x1="24"
          y1="30"
          x2="76"
          y2="46"
          stroke="url(#lineGrad)"
          strokeWidth="0.15"
          className="animate-pulseLine"
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4C8DF7" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="noise-veil absolute inset-0" />
    </div>
  );
}
