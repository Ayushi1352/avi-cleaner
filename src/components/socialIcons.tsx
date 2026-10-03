// Brand icons for team member social links.

// Where each social icon takes the visitor. Swap in the real profile URLs here.
export const socialLinks: Record<string, string> = {
  Facebook: "https://www.facebook.com/",
  X: "https://x.com/",
  Instagram: "https://www.instagram.com/",
  LinkedIn: "https://www.linkedin.com/",
  YouTube: "https://www.youtube.com/",
};

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props} className={`animate-icon-pulse-subtle ${props.className || ""}`}>
      <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props} className={`animate-icon-pulse-subtle ${props.className || ""}`}>
      <path d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.3L5.4 21H2.3l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props} className={`animate-icon-pulse-subtle ${props.className || ""}`}>
      <path d="M4.5 8.8h3.2V20H4.5V8.8ZM6.1 3.6a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM9.8 8.8h3.1v1.5c.5-.9 1.6-1.8 3.3-1.8 3.4 0 4 2.2 4 5.1V20H17v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V20H9.8V8.8Z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true" {...props} className={`animate-icon-pulse-subtle ${props.className || ""}`}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props} className={`animate-icon-pulse-subtle ${props.className || ""}`}>
      <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12c0 1.3.1 2.6.4 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  );
}
