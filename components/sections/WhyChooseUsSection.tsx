import Link from "next/link";
import type { GlobalUIData, WhyChooseUsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTag } from "@/components/ui/SectionTag";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ui } from "@/components/ui/styles";

// The section's own green (eyebrow, "One Clean" and the quote button).
const ACCENT = { text: "text-[var(--color-why-us-button)]", line: "bg-[var(--color-why-us-button)]" };

export const WhyChooseUsSection = ({ data, ui: labels }: { data?: WhyChooseUsData; ui?: GlobalUIData }) => {
  if (!data) return null;

  return (
    <section id="why-us" className="bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className={ui.container}>
        <div className="relative overflow-hidden rounded-[20px] bg-[var(--color-bg-section)] px-5 py-8 sm:px-8 sm:py-9 lg:px-10 xl:px-[72px] xl:py-10 2xl:rounded-[4px] 2xl:py-[36px] 2xl:pl-[96px] 2xl:pr-[40px]">
          {/* Pale leaf decoration */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 400"
            className="pointer-events-none absolute left-0 top-0 w-[70%] max-w-[900px] text-[var(--color-bg-mint)] opacity-70"
          >
            <path fill="currentColor" d="M0 0h400C330 140 180 250 0 270V0Z" />
          </svg>

          {/* Out-of-focus plant in the bottom-right corner (behind the content) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.plantImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute -bottom-12 right-0 hidden h-[68%] w-auto !max-w-none translate-x-[30%] select-none lg:block opacity-80"
          />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-5 xl:gap-10 2xl:gap-[64px]">
            {/* ---------- Content: Stationary (Text vahi hai) ---------- */}
            <div className="min-w-0">
              <SectionTag accent={ACCENT}>{data.label}</SectionTag>
              <h2 className="mt-4 text-[clamp(30px,3.2vw,62px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-heading)] 2xl:mt-5">
                {data.title.top}
                <br />
                <span className={ACCENT.text}>{data.title.highlight}</span>{" " + data.title.after}
              </h2>
              <p className="mt-5 max-w-[760px] text-[15px] leading-[1.5] text-[var(--color-text)] sm:text-[1rem] xl:text-[18px] 2xl:text-[20px]">
                {data.description}
              </p>

              <ul className="mt-8 grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2 2xl:mt-9 2xl:gap-5">
                {data.stats.map(({ id, icon, value, label, text }) => (
                  <li
                    key={id}
                    data-card-border className={`${ui.cardBorder} flex min-w-0 items-center gap-4 rounded-[16px] bg-[var(--color-why-us-bg)] px-4 py-5 lg:gap-3 lg:px-3.5 xl:gap-4 xl:px-5 2xl:gap-[26px] 2xl:px-[24px] 2xl:py-[26px]`}
                  >
                    <span className="relative flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--color-card-dark)] text-[var(--color-white)] shadow transition-transform duration-300 hover:scale-[1.15] hover:shadow-[0_8px_20px_-4px_var(--color-card-dark-50)] lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-[80px] 2xl:w-[80px]">
                      <Icon name={icon} className="h-6 w-6 2xl:h-8 2xl:w-8" strokeWidth={1.7} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[24px] font-bold leading-none text-[var(--color-heading)] xl:text-[26px] 2xl:text-[34px]">
                        {value}
                      </span>
                      <span className="mt-1.5 block text-[15px] font-medium leading-tight text-[var(--color-heading)] 2xl:text-[18px]">
                        {label}
                      </span>
                      <span className="mt-1.5 block text-[12.5px] leading-snug text-[var(--color-text-muted)] 2xl:text-[14.5px]">
                        {text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3 2xl:mt-7">
                <Link
                  href={data.primaryButton.href}
                  className={`${ui.btnSolid} group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold [--btn:var(--color-why-us-button)] 2xl:px-[42px] 2xl:py-5 2xl:text-[18px]`}
                                  >
                  {data.primaryButton.label}
                  <Icon name={data.primaryButton.icon} className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
                <Link
                  href={data.secondaryButton.href}
                  className={`${ui.btnOutline} group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold [--btn-ink:var(--color-heading)] [--btn:var(--color-why-us-button)] 2xl:px-[42px] 2xl:py-5 2xl:text-[18px]`}
                >
                  {data.secondaryButton.label}
                  <Icon name={data.secondaryButton.icon} className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* ---------- Visual ---------- */}
            <ScrollReveal variant="fade-left" duration={800} className="relative mx-auto w-full min-w-0 max-w-[760px] pt-6 sm:pt-12 lg:max-w-[560px] lg:pt-10 xl:max-w-[760px] xl:pt-16 2xl:pt-[84px]">
              {/* Handwritten note */}
              <p className="absolute right-2 top-0 -rotate-[10deg] text-right font-script text-[24px] font-semibold leading-[0.95] text-[var(--color-heading)] sm:right-0 sm:text-[30px] lg:-right-2 lg:top-1 lg:text-[2.1rem] xl:right-0 xl:top-0 xl:text-[30px] 2xl:text-[40px]">
                {data.partnerLines[0]}
                <br />
                {data.partnerLines[1]}
                <br />
                {data.partnerLines[2]}
                <svg viewBox="0 0 100 12" className="ml-auto mt-1 block h-2.5 w-[80%]" aria-hidden="true">
                  <path d="M2 10C35 3 65 2 98 4" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </p>

              <div className="relative mt-16 sm:mt-10 sm:mr-[15%] lg:mr-0 lg:mt-6 xl:mr-[15%] xl:mt-10">
                <ImagePlaceholder
                  src={data.image.src}
                  alt={data.image.alt}
                  ui={labels}
                  className="aspect-[715/620] w-full rounded-[28px] rounded-tl-[90px] sm:rounded-[36px] sm:rounded-tl-[140px]"
                />

                {/* Play button with radar ring pulse */}
                <Link
                  href={data.video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={data.video.label}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-primary-dark)] shadow-[0_10px_30px_-8px_var(--color-black-35)] transition-transform duration-300 hover:scale-[1.15] hover:shadow-[0_15px_35px_-6px_var(--color-primary-40)] sm:h-20 sm:w-20 2xl:h-[90px] 2xl:w-[90px]"
                >
                  <span data-motion="radar" className="absolute inset-0 rounded-full bg-[var(--color-primary-20)] pointer-events-none" />
                  <span className="absolute inset-0 rounded-full bg-[var(--color-white-70)] animate-ping opacity-30 pointer-events-none" />
                  <Icon name={data.video.icon} className="ml-1 h-6 w-6 sm:h-8 sm:w-8" />
                </Link>

                {/* Clean Greener Brighter */}
                <div className="absolute -left-2 top-[10%] flex flex-col justify-center rounded-[18px] bg-[var(--color-card-dark)] px-4 py-4 text-[var(--color-white)] shadow-lg sm:-left-6 sm:px-5 sm:py-5 lg:-left-2 lg:top-[12%] xl:-left-6 xl:top-[10%] 2xl:-left-[25px] 2xl:h-[155px] 2xl:w-[147px] 2xl:rounded-[20px] 2xl:px-6">
                  <span className="inline-block cursor-pointer transition-transform duration-300 hover:scale-125 self-start">
                    <Icon name={data.badge.icon} className="h-6 w-6 sm:h-8 sm:w-8" />
                  </span>
                  <span className="mt-2 text-[13px] font-semibold leading-[1.3] sm:text-[15px] 2xl:text-[18px]">
                    {data.badge.lines[0]}
                    <br />
                    {data.badge.lines[1]}
                    <br />
                    {data.badge.lines[2]}
                  </span>
                </div>

                {/* A cleaner today */}
                <div className="absolute -bottom-6 right-2 flex max-w-[calc(100%-16px)] items-center gap-3 rounded-[14px] bg-[var(--color-white)] px-4 py-3 shadow-[0_12px_30px_-12px_var(--color-shadow-heading-35)] sm:bottom-[8%] sm:right-[-13%] lg:bottom-3 lg:right-2 xl:bottom-[8%] xl:right-[-13%] sm:px-5 sm:py-4 2xl:gap-4 2xl:px-6">
                  <span className="inline-block cursor-pointer transition-transform duration-300 hover:scale-125">
                    <Icon name={data.tagline.icon} className="h-7 w-7 shrink-0 text-[var(--color-primary)] 2xl:h-9 2xl:w-9" />
                  </span>
                  <span className="text-[13px] font-medium leading-[1.35] text-[var(--color-heading)] sm:text-[14px] 2xl:text-[17px]">
                    {data.tagline.lines[0]}
                    <br />{data.tagline.lines[1]}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
