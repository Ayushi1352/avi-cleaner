import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronRight, House, Users } from "lucide-react";
import PhotoSlot from "@/components/PhotoSlot";
import SectionEyebrow from "@/components/SectionEyebrow";
import HandwrittenNote from "@/components/HandwrittenNote";
import ScrollReveal from "@/components/ScrollReveal";
import { SparklesIcon } from "@/components/icons";
import servicesData from "@/data/services.json";

// Text lives in src/data/services.json under text.CleaningProcess.
const copy = servicesData.text.CleaningProcess;

// Icons by the name used in src/data/services.json.
const stepsIcons = {
  "calendar-days": (c: string) => <CalendarDays className={c} strokeWidth={1.8} />,
  users: (c: string) => <Users className={c} strokeWidth={1.8} />,
  sparkles: (c: string) => <SparklesIcon className={c} />,
  house: (c: string) => <House className={c} strokeWidth={1.8} />,
};

// Content lives in src/data/services.json.
const steps = servicesData.processSteps.map((item) => ({ ...item, icon: stepsIcons[item.icon] }));

/** "How It Works — How Our Cleaning Process Works For You". */
export default function CleaningProcess() {
  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative overflow-hidden bg-[#f3fbf6] py-12 sm:py-14 2xl:pb-[40px] 2xl:pt-[48px]">
        {/* Leaf, top left */}
        <svg aria-hidden="true" viewBox="0 0 300 330" className="pointer-events-none absolute left-0 top-6 hidden w-[180px] text-[#e2f4ea] md:block 2xl:w-[240px]">
          <path fill="currentColor" d="M10 0c90 20 150 90 160 180 5 40-5 80-25 110C60 260 15 190 8 110 5 70 5 30 10 0Z" />
          <path fill="currentColor" d="M150 320c10-70 60-120 130-130-10 70-60 120-130 130Z" />
        </svg>
        <HandwrittenNote className="absolute right-[3%] top-10 hidden text-[34px] xl:block 2xl:top-[56px] 2xl:text-[44px] 3xl:text-[52px]" />

        <div className="container-x relative">
          <ScrollReveal variant="fade-up" duration={700}>
            <div className="mx-auto max-w-[1060px] text-center">
              <SectionEyebrow center compact className="3xl:[&>span:first-child]:w-[72px] 3xl:[&>span:last-child]:w-[72px]">{copy.howItWorks}</SectionEyebrow>
              <h2 className="mt-3 text-[clamp(28px,3.25vw,62px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0b1a12] 2xl:mt-4">
                {copy.howOurCleaningProcess}
                <br className="hidden sm:block" />{" " + copy.worksForYou}
              </h2>
              <p className="mx-auto mt-4 text-[15px] leading-[1.45] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
                {copy.weMakeItSimpleAnd + " "}<br className="hidden xl:block" />
                {copy.andLetOurProfessionalTeam}
              </p>
            </div>
          </ScrollReveal>

          <ol className="mx-auto mt-10 grid max-w-[1880px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 2xl:mt-[40px] 2xl:gap-[56px] 3xl:-mx-[34px] 3xl:max-w-none">
            {steps.map((s, i) => (
              <li key={s.no} className="relative min-w-0">
                <ScrollReveal variant="fade-up" delay={i * 120} duration={650} className="h-full">
                  <article className="card-border-animated flex h-full flex-col items-center rounded-[22px] bg-white/80 px-5 pb-8 pt-6 text-center shadow-[0_14px_36px_-28px_rgba(11,42,28,0.35)] 2xl:rounded-[24px] 2xl:px-8 2xl:pb-10 2xl:pt-[22px] 3xl:px-[50px] 3xl:pb-[24px] 3xl:pt-[18px]">
                    <div className="relative w-[62%] max-w-[240px] 3xl:w-[240px]">
                      <PhotoSlot
                        src={s.image}
                        alt={s.title}
                        label={s.image.replace("/images/", "")}
                        className="relative aspect-square w-full rounded-full border-[6px] border-white shadow-[0_10px_30px_-16px_rgba(11,42,28,0.45)] 2xl:border-[8px]"
                      />
                      <span className="absolute -right-[14%] top-[2%] flex aspect-square w-[40%] items-center justify-center rounded-full border-[4px] border-white bg-[#1f5a41] text-white 2xl:border-[6px]">
                        {s.icon("h-[46%] w-[46%]")}
                      </span>
                      <span className="absolute -bottom-[9%] left-1/2 flex aspect-square w-[26%] -translate-x-1/2 items-center justify-center rounded-full bg-[#fdd86b] text-[clamp(13px,1.15vw,22px)] font-bold text-[#0b1a12]">
                        {s.no}
                      </span>
                    </div>
                    <h3 className="mt-8 text-[20px] font-bold leading-tight text-[#0f3a2a] xl:text-[22px] 2xl:mt-9 2xl:text-[26px] 3xl:mt-[22px] 3xl:text-[30px]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[1.55] text-[#5a6172] xl:text-[15px] 2xl:text-[18px] 3xl:mt-[10px] 3xl:text-[21.5px] 3xl:leading-[1.4]">
                      {s.text}
                    </p>
                  </article>
                </ScrollReveal>

                {/* Dotted connector with arrow (desktop only) */}
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute left-full top-[30%] z-10 hidden w-10 -translate-y-1/2 items-center justify-center lg:flex 2xl:w-[56px] 3xl:left-[calc(100%-62px)] 3xl:top-[40.5%] 3xl:w-[180px]">
                    <span className="absolute inset-x-0 top-1/2 border-t-[3px] border-dotted border-[#1f5a41]/70" />
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#1f5a41] text-white 2xl:h-[46px] 2xl:w-[46px] 3xl:h-[50px] 3xl:w-[50px] 3xl:shadow-[0_0_0_9px_#fbfefc]">
                      <ChevronRight className="h-4 w-4 2xl:h-6 2xl:w-6" strokeWidth={2.6} />
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ol>

          {/* Bottom row */}
          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between 2xl:mt-[40px] 3xl:mt-[26px]">
              <p className="flex items-center gap-2 font-script text-[26px] font-semibold text-[#1f5a41] sm:order-1 2xl:pl-[40px] 2xl:text-[34px] 3xl:text-[38px]" aria-hidden="true">
                <svg viewBox="0 0 40 40" className="h-8 w-8 2xl:h-11 2xl:w-11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M30 34C14 36 6 24 12 10" />
                  <path d="M6 14 12 8l5 6" />
                </svg>
                {copy.itsThatEasy}
              </p>
              <Link
                href="/book-now"
                className="btn-solid btn-yellow group order-first inline-flex items-center gap-3 whitespace-nowrap rounded-full px-8 py-3.5 text-[15px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd86b] sm:order-2 2xl:px-11 2xl:py-[19px] 2xl:text-[19px] 3xl:px-[48px] 3xl:py-[19px] 3xl:text-[22px]"
              >
                {copy.bookYourCleaningToday}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </Link>
              <div className="hidden items-center gap-3 sm:order-3 sm:flex 2xl:pr-[20px]" aria-hidden="true">
                <svg viewBox="0 0 40 30" className="h-7 w-9 text-[#1f5a41]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                  <path d="M4 22 12 26M12 8l6 12M26 4v12" />
                </svg>
                <HandwrittenNote lines={copy.noteLines} className="-rotate-[8deg] text-[20px] 2xl:text-[26px] 3xl:text-[30px]" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
