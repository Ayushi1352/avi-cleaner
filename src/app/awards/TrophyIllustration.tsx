// Simple gold trophy illustrations for the Awards page.
// Swap these for real trophy photos when you have them.

const star = (cx, cy, r) =>
  Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.42;
    return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

function Wreath({ cx = 100, cy = 92, r = 62 }) {
  const leaves = [];
  [-1, 1].forEach((side) => {
    for (let i = 0; i < 7; i++) {
      const t = 22 + i * 21; // degrees up from the bottom of the circle
      const rad = (t * Math.PI) / 180;
      const x = cx + side * r * Math.sin(rad);
      const y = cy + r * Math.cos(rad);
      leaves.push(
        <ellipse
          key={side + "-" + i}
          cx={x.toFixed(1)}
          cy={y.toFixed(1)}
          rx="6.5"
          ry="14"
          fill="url(#trophy-gold)"
          transform={"rotate(" + (side * (90 - t) - side * 30).toFixed(1) + " " + x.toFixed(1) + " " + y.toFixed(1) + ")"}
        />
      );
    }
  });
  return <g>{leaves}</g>;
}

export default function Trophy({ variant = "star-wreath", className = "" }) {
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label="Trophy">
      <defs>
        <linearGradient id="trophy-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe38a" />
          <stop offset="0.5" stopColor="#e2b23f" />
          <stop offset="1" stopColor="#b47d1c" />
        </linearGradient>
        <linearGradient id="trophy-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3a" />
          <stop offset="1" stopColor="#0d0d0d" />
        </linearGradient>
        <radialGradient id="trophy-glass" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#aeb6bb" />
        </radialGradient>
      </defs>

      {variant === "star-wreath" && (
        <>
          <Wreath />
          <polygon points={star(100, 78, 40)} fill="url(#trophy-gold)" />
          <path d="M92 118h16l5 40H87l5-40Z" fill="url(#trophy-gold)" />
          <ellipse cx="100" cy="160" rx="26" ry="7" fill="url(#trophy-gold)" />
          <path d="M58 168h84l10 46a8 8 0 0 1-8 10H56a8 8 0 0 1-8-10l10-46Z" fill="url(#trophy-base)" />
        </>
      )}

      {variant === "globe" && (
        <>
          <path d="M84 196c-4-52 2-98 22-140l18 6c-12 44-14 86-8 134H84Z" fill="url(#trophy-gold)" />
          <path d="M112 60c14 30 16 70 6 136h-12c8-58 8-100 6-136Z" fill="#c8922a" opacity=".55" />
          <circle cx="112" cy="36" r="26" fill="url(#trophy-glass)" />
          <ellipse cx="100" cy="198" rx="30" ry="7" fill="url(#trophy-gold)" />
          <path d="M62 204h76l8 14a6 6 0 0 1-6 8H60a6 6 0 0 1-6-8l8-14Z" fill="url(#trophy-base)" />
        </>
      )}

      {variant === "star" && (
        <>
          <polygon points={star(100, 70, 66)} fill="url(#trophy-gold)" />
          <path d="M92 128h16l4 22c8 4 12 10 12 18H76c0-8 4-14 12-18l4-22Z" fill="url(#trophy-gold)" />
          <ellipse cx="100" cy="172" rx="30" ry="7" fill="url(#trophy-gold)" />
          <path d="M62 178h76l10 36a8 8 0 0 1-8 10H60a8 8 0 0 1-8-10l10-36Z" fill="url(#trophy-base)" />
        </>
      )}

      {variant === "medal" && (
        <>
          <Wreath cy={84} r={66} />
          <circle cx="100" cy="78" r="46" fill="url(#trophy-gold)" />
          <circle cx="100" cy="78" r="38" fill="none" stroke="#fff3c4" strokeWidth="1.5" opacity=".8" />
          <text x="100" y="74" textAnchor="middle" fontSize="15" fontWeight="700" fill="#5a3d06">
            Service
          </text>
          <text x="100" y="92" textAnchor="middle" fontSize="15" fontWeight="700" fill="#5a3d06">
            Excellence
          </text>
          <path d="M90 124h20l4 30H86l4-30Z" fill="url(#trophy-gold)" />
          <rect x="62" y="156" width="76" height="68" rx="4" fill="url(#trophy-base)" />
          <rect x="78" y="176" width="44" height="26" rx="2" fill="url(#trophy-gold)" />
        </>
      )}
    </svg>
  );
}
