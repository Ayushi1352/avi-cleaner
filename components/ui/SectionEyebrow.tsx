import type { ReactNode } from "react";

type Props = { children: ReactNode; center?: boolean; light?: boolean; lines?: boolean; compact?: boolean; className?: string };

/**
 * Eyebrow label with yellow lines, used on inner pages.
 * - default: dark, bold, wide letter-spacing (Mission & Vision, Team)
 * - compact: green, tighter letter-spacing (Services, Service Detail)
 * - light: white text for dark backgrounds
 */
export const SectionEyebrow = ({ children, center = false, light = false, lines = true, compact = false, className = "" }: Props) => {
  const color = light ? "text-[var(--color-white)]" : compact ? "text-[var(--color-primary-dark)]" : "text-[var(--color-eyebrow-text)]";
  const type = compact
    ? "tracking-[0.04em] text-[12px] sm:text-[13px] 2xl:text-[17px] 3xl:text-[21px]"
    : "tracking-[0.2em] text-[12px] sm:text-[13px] 2xl:text-[16px] 3xl:text-[19px]";

  return (
    <div className={`flex items-center gap-3 2xl:gap-4 ${center ? "justify-center" : ""} ${className}`}>
      {lines && <span className="h-[3px] w-8 shrink-0 rounded-full bg-[var(--color-accent-line)] 2xl:w-[40px]" />}
      <span className={`font-bold uppercase ${type} ${color}`}>{children}</span>
      {lines && <span className="h-[3px] w-8 shrink-0 rounded-full bg-[var(--color-accent-line)] 2xl:w-[40px]" />}
    </div>
  );
};
