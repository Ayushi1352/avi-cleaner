import type { PaginationData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  /** labels and arrow icons from templates.json ("Page {n}") */
  labels: PaginationData;
  /** card: round white buttons (blog, gallery, services, testimonials); team: small mint buttons with "…" gaps */
  tone?: "card" | "team";
  className?: string;
};

const cardIdle =
  "bg-[var(--color-white)] text-[var(--color-title)] hover:bg-[var(--color-card-badge)] hover:text-[var(--color-white)] disabled:pointer-events-none disabled:opacity-60";

const tones = {
  card: {
    list: "gap-2.5 2xl:gap-3",
    btn: "flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold shadow-[0_4px_14px_-4px_var(--color-shadow-card-30)] transition-colors 2xl:h-12 2xl:w-12 2xl:text-[16px] 3xl:h-[50px] 3xl:w-[50px]",
    idle: cardIdle,
    arrow: cardIdle,
    current: "bg-[var(--color-card-badge)] text-[var(--color-white)]",
    gap: "",
    stroke: 3,
  },
  team: {
    list: "gap-1.5 2xl:gap-1",
    btn: "flex h-8 min-w-8 items-center justify-center rounded-full px-1 text-[13px] font-semibold transition shadow-[0_3px_8px_-3px_var(--color-shadow-card-25)] 2xl:h-[34px] 2xl:min-w-[34px] 2xl:text-[14px]",
    idle: "bg-[var(--color-team-bg-2)] text-[var(--color-team-heading)] hover:bg-[var(--color-team-bg-3)] hover:text-[var(--color-white)]",
    arrow: "bg-[var(--color-team-bg-2)] text-[var(--color-team-heading)] hover:bg-[var(--color-team-bg-3)] hover:text-[var(--color-white)] disabled:pointer-events-none",
    current: "bg-[var(--color-team-bg-3)] text-[var(--color-white)]",
    gap: "bg-[var(--color-team-bg-2)] text-[var(--color-team-heading)]",
    stroke: 2.6,
  },
};

/** Every page number, or (team) the first, last and nearby pages with "…" between them. */
function pageItems(total: number, current: number, withGaps: boolean): (number | "…")[] {
  if (!withGaps || total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  if (current <= 3) [2, 3].forEach((p) => pages.add(p));
  if (current >= total - 2) [total - 1, total - 2].forEach((p) => pages.add(p));
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push("…");
    out.push(p);
  });
  return out;
}

export const Pagination = ({ page, totalPages, onChange, labels, tone = "card", className = "" }: Props) => {
  const t = tones[tone];
  return (
    <nav aria-label={labels.label} className={`flex justify-center ${className}`}>
      <ul className={`flex flex-wrap items-center justify-center ${t.list}`}>
        <li>
          <button type="button" onClick={() => onChange(page - 1)} disabled={page === 1} aria-label={labels.previous.label} className={`${t.btn} ${t.arrow}`}>
            <Icon name={labels.previous.icon} className="h-4 w-4" strokeWidth={t.stroke} />
          </button>
        </li>
        {pageItems(totalPages, page, tone === "team").map((n, i) =>
          n === "…" ? (
            <li key={`gap-${i}`} className={`${t.btn} ${t.gap}`}>
              {"…"}
            </li>
          ) : (
            <li key={n}>
              <button
                type="button"
                onClick={() => onChange(n)}
                aria-label={fill(labels.page, { n })}
                aria-current={n === page ? "page" : undefined}
                className={`${t.btn} ${n === page ? t.current : t.idle}`}
              >
                {n}
              </button>
            </li>
          ),
        )}
        <li>
          <button type="button" onClick={() => onChange(page + 1)} disabled={page === totalPages} aria-label={labels.next.label} className={`${t.btn} ${t.arrow}`}>
            <Icon name={labels.next.icon} className="h-4 w-4" strokeWidth={t.stroke} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
