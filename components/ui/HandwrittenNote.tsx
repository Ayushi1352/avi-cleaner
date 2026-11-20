// Each line starts a little further in, like handwriting (repeats every four lines).
const indents = ["pl-0", "pl-[0.4em]", "pl-[0.1em]", "pl-[0.9em]"];

export const HandwrittenNote = ({ lines, className = "", color = "text-[var(--color-note-text)]" }: { lines: string[]; className?: string; color?: string }) => (
  <p className={`pointer-events-none -rotate-[14deg] font-script font-medium leading-[0.95] ${color} ${className}`} aria-hidden="true">
    {lines.map((l, i) => (
      <span key={l} className={`block ${indents[i % 4]}`}>
        {l}
      </span>
    ))}
    <svg viewBox="0 0 160 30" className="-ml-[0.3em] mt-1 block w-[3.6em]" aria-hidden="true">
      <path d="M4 26C60 12 110 5 156 2" fill="none" stroke="var(--color-accent-line)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </p>
);
