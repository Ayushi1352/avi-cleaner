import { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Smile, Star, Users } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionTag from "./SectionTag";
import ScrollReveal from "./ScrollReveal";
import { LeafIcon, PlayIcon } from "./icons";
import { site, pickIcons } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.whyChooseUsSection.text.WhyChooseUsSection;
const uiLinks = site.whyChooseUsSection.links.WhyChooseUsSection;
const uiImages = site.whyChooseUsSection.images.WhyChooseUsSection;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "arrow-right": ArrowRight, play: PlayIcon, leaf: LeafIcon };
const uiIcons = pickIcons(site.whyChooseUsSection.icons.WhyChooseUsSection, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.whyChooseUsSection;

type CSSVars = CSSProperties & Record<string, string | number>;

const SECTION_ACCENT_COLOR = "#2f7d4f";

// Icons by the name used in src/data/site.json.
const statsIcons = {
  "shield-check": ShieldCheck,
  users: Users,
  smile: Smile,
  star: Star,
};

// Content lives in src/data/site.json.
const stats = site.whyChooseUsSection.stats.map((item) => ({ ...item, icon: statsIcons[item.icon] }));

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="why-choose-section bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[20px] bg-[#f7f9fa] px-5 py-8 sm:px-8 sm:py-9 lg:px-10 xl:px-[72px] xl:py-10 2xl:rounded-[4px] 2xl:py-[36px] 2xl:pl-[96px] 2xl:pr-[40px]">
          {/* Pale leaf decoration */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 400"
            className="pointer-events-none absolute left-0 top-0 w-[70%] max-w-[900px] text-mint opacity-70"
          >
            <path fill="currentColor" d="M0 0h400C330 140 180 250 0 270V0Z" />
          </svg>

          {/* Out-of-focus plant in the bottom-right corner (behind the content) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={uiImages.plantBlur}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute -bottom-12 right-0 hidden h-[68%] w-auto max-w-none! translate-x-[30%] select-none lg:block opacity-80"
          />

          <div className="why-choose-grid relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-10 2xl:gap-[64px]">
            {/* ---------- Content: Stationary (Text vahi hai) ---------- */}
            <div className="min-w-0">
              <SectionTag accentColor={SECTION_ACCENT_COLOR}>{copy.whyChooseUs}</SectionTag>
              <h2 className="mt-4 text-[clamp(30px,3.2vw,62px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy 2xl:mt-5">
                {copy.makingADifference}
                <br />
                <span style={{ color: SECTION_ACCENT_COLOR }}>{copy.oneClean}</span>{" " + copy.atATime}
              </h2>
              <p className="mt-5 max-w-[760px] text-[15px] leading-[1.5] text-body sm:text-base xl:text-[18px] 2xl:text-[20px]">
                {copy.atAvicleanerWeGoBeyond}
              </p>

              <ul className="mt-8 grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2 2xl:mt-9 2xl:gap-5">
                {stats.map(({ icon: Icon, value, label, sub, anim }) => (
                  <li
                    key={label}
                    className="card-border-animated flex min-w-0 items-center gap-4 rounded-[16px] bg-[#eef5f0] px-4 py-5 lg:gap-3 lg:px-3.5 xl:gap-4 xl:px-5 2xl:gap-[26px] 2xl:px-[24px] 2xl:py-[26px]"
                  >
                    <span className="relative flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#2f5d45] text-white shadow-sm transition-transform duration-300 hover:scale-115 hover:shadow-[0_8px_20px_-4px_rgba(47,93,69,0.5)] lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-[80px] 2xl:w-[80px]">
                      <Icon className={`h-6 w-6 2xl:h-8 2xl:w-8 ${anim}`} strokeWidth={1.7} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[24px] font-bold leading-none text-navy xl:text-[26px] 2xl:text-[34px]">
                        {value}
                      </span>
                      <span className="mt-1.5 block text-[15px] font-medium leading-tight text-navy 2xl:text-[18px]">
                        {label}
                      </span>
                      <span className="mt-1.5 block text-[12.5px] leading-snug text-muted 2xl:text-[14.5px]">
                        {sub}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3 2xl:mt-7">
                <Link
                  href={uiLinks.bookNow}
                  className="btn-solid group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold 2xl:px-[42px] 2xl:py-5 2xl:text-[18px]"
                  style={{ "--btn": SECTION_ACCENT_COLOR } as CSSVars}
                >
                  {copy.getAFreeQuote}
                  <uiIcons.arrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
                <Link
                  href={uiLinks.whyChooseUs}
                  className="btn-outline group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold [--btn-ink:#0b1b45] [--btn:#2f7d4f] 2xl:px-[42px] 2xl:py-5 2xl:text-[18px]"
                >
                  {copy.viewAllBenefits}
                  <uiIcons.arrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* ---------- Visual ---------- */}
            <ScrollReveal variant="fade-left" duration={800} className="why-choose-visual relative mx-auto w-full min-w-0 max-w-[760px] pt-6 sm:pt-12 lg:pt-16 2xl:pt-[84px]">
              {/* Handwritten note */}
              <p className="why-choose-note absolute right-2 top-0 -rotate-[10deg] text-right font-script text-[24px] font-semibold leading-[0.95] text-navy sm:right-0 sm:text-[30px] 2xl:text-[40px]">
                {copy.trusted}
                <br />
                {copy.cleaning}
                <br />
                {copy.partner}
                <svg viewBox="0 0 100 12" className="ml-auto mt-1 block h-2.5 w-[80%]" aria-hidden="true">
                  <path d="M2 10C35 3 65 2 98 4" fill="none" stroke="#2a7c35" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </p>

              <div className="why-choose-image-wrap relative mt-16 sm:mt-10 sm:mr-[15%]">
                <ImagePlaceholder
                  src={uiImages.whyChooseUs}
                  alt={copy.cleanerMoppingALivingRoom}
                  placeholderLabel={uiText.whyChooseUsImage}
                  className="aspect-[715/620] w-full rounded-[28px] rounded-tl-[90px] sm:rounded-[36px] sm:rounded-tl-[140px]"
                />

                {/* Play button with radar ring pulse */}
                <Link
                  href={uiLinks.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={copy.watchOurCleaningVideoOn}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-green-dark shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-115 hover:shadow-[0_15px_35px_-6px_rgba(42,124,53,0.4)] sm:h-20 sm:w-20 2xl:h-[90px] 2xl:w-[90px]"
                >
                  <span className="absolute inset-0 rounded-full bg-green/20 animate-icon-radar pointer-events-none" />
                  <span className="absolute inset-0 rounded-full bg-white/70 animate-ping opacity-30 pointer-events-none" />
                  <uiIcons.play className="ml-1 h-6 w-6 sm:h-8 sm:w-8" />
                </Link>

                {/* Clean Greener Brighter */}
                <div className="why-choose-badge absolute -left-2 top-[10%] flex flex-col justify-center rounded-[18px] bg-[#2f5d45] px-4 py-4 text-white shadow-lg sm:-left-6 sm:px-5 sm:py-5 2xl:-left-[25px] 2xl:h-[155px] 2xl:w-[147px] 2xl:rounded-[20px] 2xl:px-6">
                  <span className="inline-block cursor-pointer transition-transform duration-300 hover:scale-125 self-start">
                    <uiIcons.leaf className="h-6 w-6 sm:h-8 sm:w-8" />
                  </span>
                  <span className="mt-2 text-[13px] font-semibold leading-[1.3] sm:text-[15px] 2xl:text-[18px]">
                    {copy.clean}
                    <br />
                    {copy.greener}
                    <br />
                    {copy.brighter}
                  </span>
                </div>

                {/* A cleaner today */}
                <div className="why-choose-cta absolute -bottom-6 right-2 flex max-w-[calc(100%-16px)] items-center gap-3 rounded-[14px] bg-white px-4 py-3 shadow-[0_12px_30px_-12px_rgba(11,27,69,0.35)] sm:bottom-[8%] sm:right-[-13%] sm:px-5 sm:py-4 2xl:gap-4 2xl:px-6">
                  <span className="inline-block cursor-pointer transition-transform duration-300 hover:scale-125">
                    <uiIcons.leaf className="h-7 w-7 shrink-0 text-green 2xl:h-9 2xl:w-9" />
                  </span>
                  <span className="text-[13px] font-medium leading-[1.35] text-navy sm:text-[14px] 2xl:text-[17px]">
                    {copy.aCleanerToday}
                    <br />{copy.aHealthierTomorrow}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
