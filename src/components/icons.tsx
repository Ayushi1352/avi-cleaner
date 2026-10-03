// Solid (filled) icons used across the design with smooth animated dynamics. All take a className.

export function LeafIcon({ className = "h-5 w-5" }) {
  return (
    // Solid leaf; gently sways like in a fresh breeze.
    <svg className={`animate-icon-sway origin-bottom ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 3.1c-8.6-.6-14.7 2.3-16.2 7.9-.7 2.5-.2 4.9 1.1 6.8 2.2 2.6 6 3.1 9.1 1.3 4.8-2.8 6.5-8.7 6-16ZM6.1 16.4C8.4 13.4 11.2 10.9 14.5 9l.8 1.2c-3.2 1.8-5.9 4.2-8.1 7.1Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        d="M3.2 21.1c.8-1.6 1.7-3 2.8-4.4"
      />
    </svg>
  );
}

/* Two-leaf sprout used on the round "Clean Greener Healthier" badge. */
export function SproutIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-sway origin-bottom ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.3 20.6C4.9 19.7 2 14.3 2.9 5.2c5.4.7 8.4 4.3 8.9 9.7.1 1.8 0 3.7-.5 5.7Z" />
      <path d="M12.7 20.6c6.4-.9 9.3-6.3 8.4-15.4-5.4.7-8.4 4.3-8.9 9.7-.1 1.8 0 3.7.5 5.7Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-heartbeat ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2 4 5v6.1c0 5 3.4 9.6 8 10.9 4.6-1.3 8-5.9 8-10.9V5l-8-3Z" />
      <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="m8.4 12.2 2.5 2.5 4.8-5" />
    </svg>
  );
}

export function SparklesIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-twinkle ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 3.5c.5 3.9 2.6 6 6.5 6.5-3.9.5-6 2.6-6.5 6.5-.5-3.9-2.6-6-6.5-6.5 3.9-.5 6-2.6 6.5-6.5Z" />
      <path d="M18 2c.3 1.6 1 2.3 2.6 2.6-1.6.3-2.3 1-2.6 2.6-.3-1.6-1-2.3-2.6-2.6C17 4.3 17.7 3.6 18 2Z" />
      <path d="M18 14.5c.3 1.9 1.3 2.9 3.2 3.2-1.9.3-2.9 1.3-3.2 3.2-.3-1.9-1.3-2.9-3.2-3.2 1.9-.3 2.9-1.3 3.2-3.2Z" />
      <path d="M5 17.5c.2 1.2.8 1.8 2 2-1.2.2-1.8.8-2 2-.2-1.2-.8-1.8-2-2 1.2-.2 1.8-.8 2-2Z" />
    </svg>
  );
}

export function HomeIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-float ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.6 1.8 11.1a1 1 0 0 0 1.3 1.5l.9-.8V20a1.5 1.5 0 0 0 1.5 1.5h4v-5.5a2.5 2.5 0 0 1 5 0v5.5h4A1.5 1.5 0 0 0 20 20v-8.2l.9.8a1 1 0 0 0 1.3-1.5L12 2.6Z" />
    </svg>
  );
}

export function UsersIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-pulse-subtle ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="6.5" r="3.3" />
      <circle cx="5" cy="8.3" r="2.5" />
      <circle cx="19" cy="8.3" r="2.5" />
      <path d="M12 11.2c-3.6 0-6 2.1-6 5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.8c0-2.9-2.4-5-6-5Z" />
      <path d="M4.6 12.2C2.3 12.4.8 13.9.8 16v2.3a.9.9 0 0 0 .9.9h2.6v-3c0-1.6.5-2.9 1.4-4h-1.1ZM19.4 12.2c2.3.2 3.8 1.7 3.8 3.8v2.3a.9.9 0 0 1-.9.9h-2.6v-3c0-1.6-.5-2.9-1.4-4h1.1Z" />
    </svg>
  );
}

export function DiamondIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-float ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.2 3h11.6l4.4 6.1L12 21.5 1.8 9.1 6.2 3Z" />
      <path fill="none" stroke="#fff" strokeWidth="1.1" strokeLinejoin="round" d="M1.8 9.1h20.4M8.5 3 7 9.1l5 12.4 5-12.4L15.5 3M7 9.1 12 3l5 6.1" />
    </svg>
  );
}

export function ThumbUpIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-float ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="1.5" y="9.5" width="4.5" height="12" rx="1.2" />
      <path d="M7.5 20.3V10.6l4.3-7.3c.4-.7 1.2-1 2-.8 1.2.4 1.9 1.6 1.6 2.8l-.9 3.8h5.4a2.3 2.3 0 0 1 2.2 2.8l-1.7 7.6a2.8 2.8 0 0 1-2.7 2.2H9.2a1.7 1.7 0 0 1-1.7-1.4Z" />
    </svg>
  );
}

export function BuildingIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-float ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 21V4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V8h4.5A1.5 1.5 0 0 1 21 9.5V21h1a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1Zm3-14v2h2V7H6Zm4 0v2h2V7h-2Zm-4 4v2h2v-2H6Zm4 0v2h2v-2h-2Zm-4 4v2h2v-2H6Zm4 0v2h2v-2h-2Zm7-3v2h2v-2h-2Zm0 4v2h2v-2h-2Z" />
    </svg>
  );
}

export function SofaIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-pulse-subtle ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v2.6a3 3 0 0 0-3 3V13H8v-.9a3 3 0 0 0-3-3V6.5Z" />
      <path d="M2 12a2 2 0 1 1 4 0v3h12v-3a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2h-.5v1a1 1 0 1 1-2 0v-1h-11v1a1 1 0 1 1-2 0v-1H4a2 2 0 0 1-2-2v-5Z" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-float ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.6 5.2C5.5 6.6 3 9.8 3 14.1V19h6.5v-6.4H6.4c.1-2.5 1.5-4.2 3.9-5.1l-.7-2.3Zm11 0c-4.1 1.4-6.6 4.6-6.6 8.9V19h6.5v-6.4h-3.1c.1-2.5 1.5-4.2 3.9-5.1l-.7-2.3Z" />
    </svg>
  );
}

export function PlayIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-pulse-subtle ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8l-12-7.5A1 1 0 0 0 7 4.5Z" />
    </svg>
  );
}

export function SendIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={`animate-icon-float ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.7 2.3a1 1 0 0 0-1.1-.2L2.9 9.4a1 1 0 0 0 0 1.8l7 3 3 7a1 1 0 0 0 1.8 0l7.3-17.8a1 1 0 0 0-.3-1.1Zm-10.3 11-4.6-2 11-4.5-6.4 6.5Z" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={`animate-icon-twinkle ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.8 2.9-6Z" />
    </svg>
  );
}
