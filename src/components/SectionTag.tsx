import React from "react";

/**
 * Small uppercase eyebrow with a green line, e.g. "—— OUR SERVICES".
 * `center` adds a line on both sides.
 */
export default function SectionTag({ 
  children,
  center = false,
  className = "",
  accentColor = undefined,
}: {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
  accentColor?: string;
}) {
  const accentTextStyle = accentColor ? { color: accentColor } : undefined;
  const accentLineStyle = accentColor ? { backgroundColor: accentColor } : undefined;

  return (
    <div
      className={`flex items-center gap-3 sm:gap-4 ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      <span
        className="h-[2px] w-8 shrink-0 bg-green sm:w-10 2xl:w-[52px]"
        style={accentLineStyle}
      />
      <span
        className="text-[12px] font-semibold uppercase tracking-[0.18em] text-green sm:text-[13px] 2xl:text-[16px]"
        style={accentTextStyle}
      >
        {children}
      </span>
      {center && (
        <span
          className="h-[2px] w-8 shrink-0 bg-green sm:w-10 2xl:w-[52px]"
          style={accentLineStyle}
        />
      )}
    </div>
  );
}
