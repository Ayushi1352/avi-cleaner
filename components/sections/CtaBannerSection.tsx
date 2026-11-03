import Link from "next/link";
import type { CtaBannerData, GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ui } from "@/components/ui/styles";

// Twinkling star; delay (ms) staggers it against the others.
function Spark({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-motion="twinkle" data-motion-delay={delay} className={className}>
      <path d="M12 1c1 6.2 3.8 9 10 10-6.2 1-9 3.8-10 10-1-6.2-3.8-9-10-10 6.2-1 9-3.8 10-10Z" />
    </svg>
  );
}

function BrighterBadge({ data, className = "" }: { data: CtaBannerData["badge"]; className?: string }) {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center rounded-full bg-[var(--color-cta-bg)] text-center text-[var(--color-primary-dark)] shadow-lg ${className}`}
    >
      <span className="relative block h-[30%] w-[30%] cursor-pointer transition-transform duration-300 hover:scale-125">
        <Icon name={data.icon} motion="pulse" className="h-full w-full" strokeWidth={2} />
        <Spark className="absolute -left-[38%] top-[38%] h-[30%] w-[30%]" />
        <Spark className="absolute -right-[30%] -top-[12%] h-[34%] w-[34%]" delay={700} />
        <Spark className="absolute -left-[12%] -top-[8%] h-[18%] w-[18%]" delay={1400} />
      </span>
      <span className="mt-[5%] text-[10px] font-semibold leading-[1.2] sm:text-[11px] lg:text-[clamp(11px,0.84vw,16px)]">
        {data.lines[0]}
        <br />
        {data.lines[1]}
        <br />
        {data.lines[2]}
      </span>
    </div>
  );
}

export const CtaBannerSection = ({ data, ui: labels }: { data?: CtaBannerData; ui?: GlobalUIData }) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className={ui.container}>
        <div className="relative overflow-hidden rounded-[20px] bg-[var(--color-cta-bg-2)] lg:grid lg:min-h-[clamp(430px,31.77vw,604px)] lg:grid-rows-[437fr_167fr] lg:rounded-[6px]">
          {/* Shape of the green panel (S-curve on the right, soft dip bottom-left) */}
          <svg width="0" height="0" aria-hidden="true" className="absolute">
            <defs>
              <clipPath id="cta-panel" clipPathUnits="objectBoundingBox">
                <path d="M0 0H0.7345C0.7234 0.1192 0.6829 0.2616 0.6353 0.404C0.6014 0.5132 0.5876 0.7235 0.4945 0.7235H0.0676C0.0388 0.7235 0.0139 0.7533 0 0.8146Z" />
              </clipPath>
            </defs>
          </svg>

          {/* ---------- Desktop background layers ---------- */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image.src}
              alt={data.image.alt}
              loading="lazy"
              className="absolute bottom-0 right-0 h-[104%] w-auto !max-w-none translate-x-[14%] xl:translate-x-[8%] [mask-image:linear-gradient(to_right,transparent,var(--color-black)_14%)]"
            />
            {/* Light ribbon that follows the panel edge */}
            <div className="absolute inset-0 translate-x-[2.6%] bg-[var(--color-cta-bg-2)] [clip-path:url(#cta-panel)]" />
            {/* Green panel with the room photo showing through */}
            <div className="absolute inset-0 overflow-hidden bg-[var(--color-cta-bg-3)] [clip-path:url(#cta-panel)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]"
                style={{ backgroundImage: `url(${data.roomImage})` }}
              />
              <div className="absolute inset-0 bg-[var(--color-cta-overlay-86)]" />
            </div>
          </div>

          {/* ---------- Content: Slides in from left (Image vahi hai, text side se aara hai) ---------- */}
          <div className="relative z-10 bg-[var(--color-cta-bg-3)] px-6 pb-10 pt-10 sm:px-10 lg:bg-transparent lg:pb-[clamp(16px,1.2vw,22px)] lg:pl-[6.1%] lg:pr-[46%] lg:pt-[clamp(34px,3.6vw,68px)]">
            <ScrollReveal variant="fade-right" duration={750}>
              {data.eyebrow && (
                <div className="mb-4 flex items-center gap-[18px] lg:mb-[clamp(10px,1vw,19px)]">
                  <span className="h-[2px] w-9 shrink-0 bg-[var(--color-cta-bg)] lg:w-[clamp(36px,2.74vw,52px)]" />
                  <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--color-white-85)] lg:text-[clamp(11px,0.84vw,16px)]">
                    {data.eyebrow}
                  </span>
                </div>
              )}
              <h2 className="text-[clamp(30px,3.68vw,70px)] font-extrabold leading-[1.07] tracking-[-0.01em] text-[var(--color-white)] lg:whitespace-nowrap">
                {data.title.top}
                <br />
                <span className="text-[var(--color-cta-bg)]">{data.title.highlight}</span>{" " + data.title.after}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.5] text-[var(--color-white-95)] lg:mt-[clamp(6px,0.5vw,10px)] lg:text-[clamp(15px,1.08vw,20.5px)]">
                {data.description[0] + " "}<br className="hidden xl:block" />
                {data.description[1]}
              </p>
              <Link
                href={data.button.href}
                className={`${ui.btnSolid} ${ui.btnYellow} group mt-7 inline-flex h-12 items-center gap-3 rounded-full px-7 text-[15px] font-bold lg:mt-[clamp(16px,1.1vw,21px)] lg:h-[clamp(48px,3.31vw,63px)] lg:gap-[clamp(10px,0.8vw,15px)] lg:px-[clamp(24px,2.2vw,42px)] lg:text-[clamp(15px,1vw,19px)]`}
              >
                {data.button.label}
                <Icon name={data.button.icon} className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>

          {/* ---------- Light strip with badges ---------- */}
          <div className="relative z-10 px-6 py-7 sm:px-10 lg:flex lg:items-center lg:py-0 lg:pb-[clamp(10px,3.4vw,65px)] lg:pl-[6.1%]">
            <ScrollReveal variant="fade-up" delay={200} duration={700}>
              <ul className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-x-0 sm:gap-y-4">
                {data.badges.map(({ id, icon, lines }, i) => (
                  <li
                    key={id}
                    className={`flex items-center gap-3 lg:gap-[clamp(8px,0.9vw,17px)] ${
                      i === 0
                        ? "sm:pr-3 xl:pr-[clamp(14px,1.9vw,36px)]"
                        : "sm:border-l sm:border-[var(--color-cta-border)] sm:px-3 xl:px-[clamp(14px,1.9vw,36px)]"
                    }`}
                  >
                    <span className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--color-cta-bg-4)] text-[var(--color-cta-text)] shadow transition-transform duration-300 hover:scale-[1.15] hover:shadow-[0_8px_18px_var(--color-cta-shadow-35)] lg:h-[clamp(40px,3.79vw,72px)] lg:w-[clamp(40px,3.79vw,72px)]">
                      <Icon name={icon} className="h-[52%] w-[52%] transition-transform duration-300" />
                    </span>
                    <span className="whitespace-nowrap text-[14px] font-medium leading-[1.25] text-[var(--color-heading)] lg:text-[clamp(12.5px,0.9vw,17px)]">
                      {lines[0]}
                      <br />
                      {lines[1]}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* ---------- Mobile / tablet photo ---------- */}
          <div className="relative lg:hidden">
            <ImagePlaceholder
              src={data.image.src}
              alt={data.image.alt}
              ui={labels}
              className="aspect-[4/3] w-full sm:aspect-[16/9]"
              imgClassName="object-cover object-[48%_20%]"
            />
            <BrighterBadge data={data.badge} className="absolute left-3 top-3 w-[92px] sm:left-5 sm:top-5 sm:w-[120px]" />
          </div>

          {/* ---------- Desktop floating decorations ---------- */}
          <p className="pointer-events-none absolute left-[53.1%] top-[9.5%] z-10 hidden -rotate-[12deg] text-center font-script text-[clamp(17px,1.58vw,30px)] font-medium leading-[0.98] text-[var(--color-white)] lg:block">
            {data.noteLines[0]}
            <br />
            {data.noteLines[1]}
            <br />
            {data.noteLines[2]}
            <br />
            {data.noteLines[3]}
            <svg viewBox="0 0 100 14" className="ml-[18%] mt-[0.35em] block h-[0.4em] w-[92%]" aria-hidden="true">
              <path d="M2 12C35 4 65 2 98 3" fill="none" stroke="var(--color-cta-bg)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </p>
          <BrighterBadge data={data.badge} className="absolute right-[3.6%] top-[10.8%] z-10 hidden w-[clamp(120px,9.26vw,176px)] lg:flex" />
        </div>
      </div>
    </section>
  );
};
