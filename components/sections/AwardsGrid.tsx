import type { ReactElement } from "react";
import type { AwardsData, CertificateItem, TrophyLabels } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionEyebrow } from "@/components/ui/SectionLabel";
import { ui } from "@/components/ui/styles";

// Frame and mark colour of each certificate, by the tone templates.json gives it.
const TONES: Record<string, { frame: string; mark: string }> = {
  blue: { frame: "border-[var(--color-cert-blue)] [outline-color:var(--color-cert-blue)]", mark: "text-[var(--color-cert-blue)]" },
  green: { frame: "border-[var(--color-cert-green)] [outline-color:var(--color-cert-green)]", mark: "text-[var(--color-cert-green)]" },
  grey: { frame: "border-[var(--color-cert-grey)] [outline-color:var(--color-cert-grey)]", mark: "text-[var(--color-cert-grey)]" },
};

const EYEBROW =
  "[&>span:nth-child(2)]:font-semibold 3xl:[&>span:first-child]:w-[52px] 3xl:[&>span:last-child]:w-[52px] 3xl:[&>span:nth-child(2)]:text-[24px]";
const H2 = "mt-2 text-[clamp(28px,3.25vw,62px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[var(--color-title)] 2xl:mt-3";
const LEAD = "mx-auto mt-2 max-w-[1000px] text-balance text-[15px] leading-[1.5] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-3 2xl:text-[21px] 3xl:text-[25.5px]";
const GRID = "grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5 2xl:gap-[30px]";

const star = (cx: number, cy: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.42;
    return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

function Wreath({ cx = 100, cy = 92, r = 62 }) {
  const leaves: ReactElement[] = [];
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

const TrophyIllustration = ({ variant = "star-wreath", labels, className = "" }: { variant?: string; labels: TrophyLabels; className?: string }) => {
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label={labels.trophy}>
      <defs>
        <linearGradient id="trophy-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-trophy-stop)" />
          <stop offset="0.5" stopColor="var(--color-trophy-stop-2)" />
          <stop offset="1" stopColor="var(--color-trophy-stop-3)" />
        </linearGradient>
        <linearGradient id="trophy-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-trophy-stop-4)" />
          <stop offset="1" stopColor="var(--color-trophy-stop-5)" />
        </linearGradient>
        <radialGradient id="trophy-glass" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="var(--color-white)" />
          <stop offset="1" stopColor="var(--color-trophy-stop-6)" />
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
          <path d="M112 60c14 30 16 70 6 136h-12c8-58 8-100 6-136Z" fill="var(--color-trophy-fill)" opacity=".55" />
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
          <circle cx="100" cy="78" r="38" fill="none" stroke="var(--color-trophy-stroke)" strokeWidth="1.5" opacity=".8" />
          <text x="100" y="74" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--color-trophy-fill-2)">
            {labels.medalTop}
          </text>
          <text x="100" y="92" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--color-trophy-fill-2)">
            {labels.medalBottom}
          </text>
          <path d="M90 124h20l4 30H86l4-30Z" fill="url(#trophy-gold)" />
          <rect x="62" y="156" width="76" height="68" rx="4" fill="url(#trophy-base)" />
          <rect x="78" y="176" width="44" height="26" rx="2" fill="url(#trophy-gold)" />
        </>
      )}
    </svg>
  );
};

function Certificate({ cert, leafIcon }: { cert: CertificateItem; leafIcon: string }) {
  const tone = TONES[cert.tone] ?? TONES.grey;
  return (
    <div className="rounded-[12px] bg-[var(--color-white)] p-3 shadow-[0_10px_30px_-20px_var(--color-shadow-card-40)] 2xl:rounded-[14px] 2xl:p-4 3xl:p-[20px]">
      <div
        className={`flex aspect-[372/286] flex-col items-center justify-center border-[3px] border-double px-3 py-4 text-center outline outline-1 -outline-offset-[7px] 2xl:border-4 ${tone.frame}`}
      >
        {cert.mark === "leaf" ? (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-awards-bg)] text-[var(--color-white)] lg:h-10 lg:w-10 xl:h-14 xl:w-14 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[88px] 3xl:w-[88px]">
            <Icon name={leafIcon} className="h-[58%] w-[58%]" />
          </span>
        ) : (
          <span
            className={`text-[34px] font-extrabold leading-none tracking-[-0.03em] lg:text-[28px] xl:text-[38px] 2xl:text-[52px] 3xl:text-[70px] ${cert.mark === "OSHA" ? "text-[var(--color-heading-dark)]" : tone.mark}`}
          >
            {cert.mark}
          </span>
        )}
        <span className="mt-2 block text-[15px] font-bold leading-tight text-[var(--color-title)] lg:text-[13px] xl:text-[16px] 2xl:mt-3 2xl:text-[20px] 3xl:text-[24px]">
          {cert.title}
        </span>
        <span className="mt-1 block text-[12.5px] leading-snug text-[var(--color-form-label)] lg:text-[11.5px] xl:text-[13.5px] 2xl:text-[16px] 3xl:text-[19px]">
          {cert.text}
        </span>
      </div>
    </div>
  );
}

export const AwardsGrid = ({ data }: { data?: AwardsData }) => {
  if (!data) return null;

  return (
    <>
      <section className="w-full bg-[var(--color-awards-bg-2)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
        <div className={`${ui.container} text-center`}>
          <SectionEyebrow center compact className={EYEBROW}>{data.achievements.label}</SectionEyebrow>
          <h2 className={H2}>{data.achievements.title}</h2>
          <p className={LEAD}>
            {data.achievements.description}
          </p>

          <ul className={`mt-9 2xl:mt-[42px] 3xl:px-[60px] ${GRID}`}>
            {data.achievements.items.map(({ id, icon, title, lines: text }) => (
              <li key={id} className="flex min-w-0 flex-col items-center">
                <span className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[var(--color-awards-bg-3)] text-[var(--color-forest-dark)] shadow transition-transform duration-300 hover:scale-[1.15] xl:h-24 xl:w-24 2xl:h-[116px] 2xl:w-[116px] 3xl:h-[142px] 3xl:w-[142px]">
                  <Icon name={icon} className="h-[50%] w-[50%]" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[18px] font-bold leading-tight text-[var(--color-title)] lg:text-[16px] xl:text-[19px] 2xl:mt-5 2xl:text-[22px] 3xl:mt-[24px] 3xl:text-[26px]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.5] text-[var(--color-text-grey)] lg:text-[13.5px] xl:text-[15.5px] 2xl:mt-2.5 2xl:text-[19px] 3xl:text-[22.5px]">
                  {text[0]} <br className="hidden xl:block" />
                  {text[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-[var(--color-awards-bg-4)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
        <div className={`${ui.container} text-center`}>
          <SectionEyebrow center compact className={EYEBROW}>{data.awards.label}</SectionEyebrow>
          <h2 className={H2}>{data.awards.title}</h2>
          <p className={LEAD}>
            {data.awards.description}
          </p>

          <ul className={`mt-8 2xl:mt-[34px] ${GRID}`}>
            {data.awards.items.map((a) => (
              <li key={a.id} className="min-w-0">
                <article className="flex h-full flex-col items-center rounded-[14px] bg-[var(--color-white)] px-4 pb-6 pt-5 shadow-[0_10px_30px_-22px_var(--color-shadow-card-40)] 2xl:rounded-[18px] 2xl:pb-8 3xl:pb-[38px] 3xl:pt-[22px]">
                  <TrophyIllustration variant={a.variant} labels={data.awards.trophy} className="h-[150px] w-auto lg:h-[130px] xl:h-[170px] 2xl:h-[230px] 3xl:h-[300px]" />
                  <h3 className="mt-4 text-[17px] font-bold leading-tight text-[var(--color-title)] lg:text-[15px] xl:text-[18px] 2xl:mt-6 2xl:text-[21px] 3xl:text-[25.5px]">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.45] text-[var(--color-text-grey)] lg:text-[13.5px] xl:text-[15.5px] 2xl:mt-2.5 2xl:text-[19px] 3xl:text-[23px]">
                    {a.org}
                    <br />
                    {a.year}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-[var(--color-awards-bg-2)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
        <div className={`${ui.container} text-center`}>
          <SectionEyebrow center compact className={EYEBROW}>{data.certificates.label}</SectionEyebrow>
          <h2 className={H2}>{data.certificates.title}</h2>
          <p className={LEAD}>
            {data.certificates.description}
          </p>

          <ul className={`mt-8 2xl:mt-[30px] 3xl:px-[24px] ${GRID}`}>
            {data.certificates.items.map((c) => (
              <li key={c.id} className="min-w-0">
                <Certificate cert={c} leafIcon={data.certificates.leafIcon} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
