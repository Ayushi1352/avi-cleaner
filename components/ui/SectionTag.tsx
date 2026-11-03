import type { ReactNode } from "react";

/**
 * Small uppercase eyebrow with a green line, e.g. "—— OUR SERVICES".
 * `center` adds a line on both sides; `accent` swaps the green for another colour class pair.
 */
export const SectionTag = ({
  children,
  center = false,
  className = "",
  accent = { text: "text-[var(--color-primary)]", line: "bg-[var(--color-primary)]" },
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
  accent?: { text: string; line: string };
}) => (
  <div className={`flex items-center gap-3 sm:gap-4 ${center ? "justify-center" : ""} ${className}`}>
    <span className={`h-[2px] w-8 shrink-0 sm:w-10 2xl:w-[52px] ${accent.line}`} />
    <span className={`text-[12px] font-semibold uppercase tracking-[0.18em] sm:text-[13px] 2xl:text-[16px] ${accent.text}`}>{children}</span>
    {center && <span className={`h-[2px] w-8 shrink-0 sm:w-10 2xl:w-[52px] ${accent.line}`} />}
  </div>
);
