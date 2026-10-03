import React from "react";
import { ArrowRight, House } from "lucide-react";
import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { LeafIcon, ShieldCheckIcon, UsersIcon } from "./icons";

// Cleaner photo, widened to the right so it fills the banner behind the badge.
const CTA_PHOTO = "/images/cta-cleaner-wide.webp";
// Room photo that shows faintly through the green panel.
const CTA_ROOM = "/images/project-living.webp";

const badges = [
  { icon: LeafIcon, line1: "Eco-Friendly", line2: "Products" },
  { icon: ShieldCheckIcon, line1: "Trusted &", line2: "Verified Team" },
  { icon: UsersIcon, line1: "100%", line2: "Customer Satisfaction" },
];

function Spark({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} style={style}>
      <path d="M12 1c1 6.2 3.8 9 10 10-6.2 1-9 3.8-10 10-1-6.2-3.8-9-10-10 6.2-1 9-3.8 10-10Z" />
    </svg>
  );
}

function BrighterBadge({ className = "" }) {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center rounded-full bg-[#fcde76] text-center text-[#1f5a41] shadow-lg ${className}`}
    >
      <span className="relative block h-[30%] w-[30%] cursor-pointer transition-transform duration-300 hover:scale-125">
        <House className="h-full w-full animate-icon-pulse-subtle" strokeWidth={2} />
        <Spark className="absolute -left-[38%] top-[38%] h-[30%] w-[30%] animate-icon-twinkle" />
        <Spark className="absolute -right-[30%] -top-[12%] h-[34%] w-[34%] animate-icon-twinkle" style={{ animationDelay: "0.7s" }} />
        <Spark className="absolute -left-[12%] -top-[8%] h-[18%] w-[18%] animate-icon-twinkle" style={{ animationDelay: "1.4s" }} />
      </span>
      <span className="mt-[5%] text-[11px] font-semibold leading-[1.2] lg:text-[clamp(11px,0.84vw,16px)]">
        A Cleaner
        <br />
        Brighter
        <br />
        Tomorrow
      </span>
    </div>
  );
}

export default function CtaBannerSection({ eyebrow = "Let's Make It Cleaner" }) {
  return (
    <section className="bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[20px] bg-[#f1faf9] lg:grid lg:min-h-[clamp(430px,31.77vw,604px)] lg:grid-rows-[437fr_167fr] lg:rounded-[6px]">
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
              src={CTA_PHOTO}
              alt="Avicleaner cleaner wiping a counter"
              loading="lazy"
              className="absolute bottom-0 right-0 h-[104%] w-auto max-w-none! translate-x-[9%] xl:translate-x-0 [mask-image:linear-gradient(to_right,transparent,#000_14%)]"
            />
            {/* Light ribbon that follows the panel edge */}
            <div className="absolute inset-0 translate-x-[2.6%] bg-[#f1faf9] [clip-path:url(#cta-panel)]" />
            {/* Green panel with the room photo showing through */}
            <div className="absolute inset-0 overflow-hidden bg-[#21493c] [clip-path:url(#cta-panel)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]"
                style={{ backgroundImage: `url(${CTA_ROOM})` }}
              />
              <div className="absolute inset-0 bg-[#21493c]/[0.86]" />
            </div>
          </div>

          {/* ---------- Content ---------- */}
          <div className="relative z-10 bg-[#21493c] px-6 pb-10 pt-10 sm:px-10 lg:bg-transparent lg:pb-[clamp(16px,1.2vw,22px)] lg:pl-[6.1%] lg:pr-[46%] lg:pt-[clamp(34px,3.6vw,68px)]">
            {eyebrow && (
              <div className="mb-4 flex items-center gap-[18px] lg:mb-[clamp(10px,1vw,19px)]">
                <span className="h-[2px] w-9 shrink-0 bg-[#fcde76] lg:w-[clamp(36px,2.74vw,52px)]" />
                <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/85 lg:text-[clamp(11px,0.84vw,16px)]">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2 className="text-[clamp(30px,3.68vw,70px)] font-extrabold leading-[1.07] tracking-[-0.01em] text-white lg:whitespace-nowrap">
              Experience the Best
              <br />
              <span className="text-[#fcde76]">Cleaning Service</span> Today!
            </h2>
            <p className="mt-4 text-[15px] leading-[1.5] text-white/95 lg:mt-[clamp(6px,0.5vw,10px)] lg:text-[clamp(15px,1.08vw,20.5px)]">
              A cleaner space leads to a healthier, happier you. Book our
              professional <br className="hidden xl:block" />
              cleaning service now and enjoy a fresh, spotless environment.
            </p>
            <Link
              href="/book-now"
              className="btn-solid btn-yellow group mt-7 inline-flex h-12 items-center gap-3 rounded-full px-7 text-[15px] font-bold [--btn:#fcde76] lg:mt-[clamp(16px,1.1vw,21px)] lg:h-[clamp(48px,3.31vw,63px)] lg:gap-[clamp(10px,0.8vw,15px)] lg:px-[clamp(24px,2.2vw,42px)] lg:text-[clamp(15px,1vw,19px)]"
            >
              Request a Quote
              <ArrowRight className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ---------- Light strip with badges ---------- */}
          <div className="relative z-10 px-6 py-7 sm:px-10 lg:flex lg:items-center lg:py-0 lg:pb-[clamp(10px,3.4vw,65px)] lg:pl-[6.1%]">
            <ul className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-x-0 sm:gap-y-4">
              {badges.map(({ icon: Icon, line1, line2 }, i) => (
                <li
                  key={line2}
                  className={`flex items-center gap-3 lg:gap-[clamp(8px,0.9vw,17px)] ${
                    i === 0
                      ? "sm:pr-3 xl:pr-[clamp(14px,1.9vw,36px)]"
                      : "sm:border-l sm:border-[#c5d3cd] sm:px-3 xl:px-[clamp(14px,1.9vw,36px)]"
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#dbefe3] text-[#114b32] shadow-sm transition-transform duration-300 hover:scale-115 hover:shadow-[0_8px_18px_rgba(17,75,50,0.35)] lg:h-[clamp(40px,3.79vw,72px)] lg:w-[clamp(40px,3.79vw,72px)]">
                    <Icon className="h-[52%] w-[52%] transition-transform duration-300" />
                  </span>
                  <span className="whitespace-nowrap text-[14px] font-medium leading-[1.25] text-navy lg:text-[clamp(12.5px,0.9vw,17px)]">
                    {line1}
                    <br />
                    {line2}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Mobile / tablet photo ---------- */}
          <div className="relative lg:hidden">
            <ImagePlaceholder
              src={CTA_PHOTO}
              alt="Avicleaner cleaner wiping a counter"
              placeholderLabel="cta-cleaner-wide.webp"
              className="aspect-[4/3] w-full sm:aspect-[16/9]"
              imgClassName="object-cover object-[38%_20%]"
            />
            <BrighterBadge className="absolute right-4 top-4 w-[110px] sm:w-[130px]" />
          </div>

          {/* ---------- Desktop floating decorations ---------- */}
          <p className="pointer-events-none absolute left-[53.1%] top-[9.5%] z-10 hidden -rotate-[12deg] text-center font-script text-[clamp(17px,1.58vw,30px)] font-medium leading-[0.98] text-white lg:block">
            Cleaner
            <br />
            Spaces
            <br />
            Happier
            <br />
            Lives
            <svg viewBox="0 0 100 14" className="ml-[18%] mt-[0.35em] block h-[0.4em] w-[92%]" aria-hidden="true">
              <path d="M2 12C35 4 65 2 98 3" fill="none" stroke="#fcde76" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </p>
          <BrighterBadge className="absolute right-[3.6%] top-[10.8%] z-10 hidden w-[clamp(120px,9.26vw,176px)] lg:flex" />
        </div>
      </div>
    </section>
  );
}
