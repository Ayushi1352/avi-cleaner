// Icons used only on the Mission & Vision page.

export function TargetIcon({ className = "h-10 w-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
      <circle cx="30" cy="34" r="25" strokeWidth="6" />
      <circle cx="30" cy="34" r="14" strokeWidth="6" />
      <circle cx="30" cy="34" r="4" fill="currentColor" stroke="none" />
      <path d="M30 34 52 12" strokeWidth="5" />
      <path d="M46 6v12h12" strokeWidth="5" strokeLinejoin="round" />
      <path d="M52 12l6-6" strokeWidth="5" />
    </svg>
  );
}

export function EyeIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 10C13 10 5 18.5 2.5 22.8a2.4 2.4 0 0 0 0 2.4C5 29.5 13 38 24 38s19-8.5 21.5-12.8a2.4 2.4 0 0 0 0-2.4C43 18.5 35 10 24 10Zm0 22a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
      />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}
