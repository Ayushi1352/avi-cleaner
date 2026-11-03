/** Handwritten note (e.g. "Cleaner Spaces Happier Lives") with a yellow underline. */
export const HandwrittenNote = ({ lines, className = "", color = "text-[var(--color-note-text)]" }: { lines: string[]; className?: string; color?: string }) => (
  <p className={`pointer-events-none -rotate-[14deg] font-script font-medium leading-[0.95] ${color} ${className}`} aria-hidden="true">
    {lines.map((l, i) => (
      <span key={l} className="block" style={{ paddingLeft: `${[0, 0.4, 0.1, 0.9][i % 4]}em` }}>
        {l}
      </span>
    ))}
    <svg viewBox="0 0 160 30" className="-ml-[0.3em] mt-1 block w-[3.6em]" aria-hidden="true">
      <path d="M4 26C60 12 110 5 156 2" fill="none" stroke="var(--color-accent-line)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </p>
);
