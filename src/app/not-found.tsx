import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";
import { HomeIcon } from "@/components/icons";
import notFoundData from "@/data/not-found.json";

// Text lives in src/data/not-found.json under text.NotFound.
const copy = notFoundData.text.NotFound;

export const metadata = notFoundData.meta.NotFound;

// Photo on the right side of the page (stand-in: swap for your own).
const PHOTO = "/images/about-supplies.webp";

function Spark({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 1c1 6.2 3.8 9 10 10-6.2 1-9 3.8-10 10-1-6.2-3.8-9-10-10 6.2-1 9-3.8 10-10Z" />
    </svg>
  );
}

/** The "0" of 404: a ring holding a house, a leaf and a broom. */
function ZeroMark({ className = "" }) {
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden="true">
      {/* sparkles */}
      <path fill="#0f3f2d" d="M22 20c2 12 8 18 20 20-12 2-18 8-20 20-2-12-8-18-20-20 12-2 18-8 20-20Z" />
      <path fill="#0f3f2d" d="M52 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12Z" />
      <path fill="#0f3f2d" d="M6 78c1 8 6 13 14 14-8 1-13 6-14 14-1-8-6-13-14-14 8-1 13-6 14-14Z" transform="translate(8 0)" />
      {/* ring */}
      <ellipse cx="112" cy="124" rx="84" ry="104" fill="#0f3f2d" />
      {/* house cut-out */}
      <path fill="#f7fbf9" d="M112 62 52 116v84h120v-84l-60-54Z" />
      {/* window */}
      <g fill="#0f3f2d">
        <rect x="96" y="120" width="14" height="14" />
        <rect x="114" y="120" width="14" height="14" />
        <rect x="96" y="138" width="14" height="14" />
        <rect x="114" y="138" width="14" height="14" />
      </g>
      {/* leaf */}
      <path fill="#5aa832" d="M30 150c44 0 78 26 92 78-48 8-84-18-92-78Z" />
      <path fill="none" stroke="#f7fbf9" strokeWidth="4" strokeLinecap="round" d="M44 164c26 14 46 34 62 60" />
      {/* broom */}
      <path fill="none" stroke="#0f3f2d" strokeWidth="11" strokeLinecap="round" d="M186 74 152 168" />
      <path fill="#0f3f2d" d="M132 160l42 16 10 18-6 40-76-28 14-34 16-12Z" />
      <path fill="none" stroke="#f7fbf9" strokeWidth="3" strokeLinecap="round" d="M122 204l10-22M140 212l10-24M158 220l8-24" />
    </svg>
  );
}

// Icons by the name used in src/data/not-found.json.
const quickLinksIcons = {
  home: (c) => <HomeIcon className={c} />,
  spark: (c) => <Spark className={c} />,
  headphones: (c) => <Headphones className={c} strokeWidth={2.4} />,
};

// Content lives in src/data/not-found.json.
const quickLinks = notFoundData.quickLinks.map((item) => ({ ...item, icon: quickLinksIcons[item.icon] }));

export default function NotFound() {
  return (
    <main className="grow">
      <section className="relative isolate w-full overflow-hidden bg-[#f6fbf9]">
        {/* Photo on the right, fading into the page */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTO}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden h-full w-[36%] object-cover object-[center_top] [mask-image:linear-gradient(90deg,transparent,#000_45%)] lg:block"
        />
        {/* Blurred plant, bottom left */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/plant-blur.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 -z-10 hidden h-[42%] w-auto max-w-none! -translate-x-[45%] translate-y-[20%] -scale-x-100 lg:block"
        />
        {/* Sticky note */}
        <p
          aria-hidden="true"
          className="absolute right-[1.5%] top-[4%] hidden rotate-[6deg] bg-[#e9dfa4] px-5 py-6 text-center font-script text-[26px] font-medium leading-[1.05] text-[#1f5a41] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.4)] xl:block 2xl:px-7 2xl:py-8 2xl:text-[36px]"
        >
          {copy.cleaner}
          <br />
          {copy.spaces}
          <br />
          {copy.happier}
          <br />
          {copy.lives}
        </p>

        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-10 pb-10 pt-12 sm:pt-16 lg:grid-cols-[minmax(0,30%)_minmax(0,36%)] lg:gap-8 lg:pb-14 lg:pt-20 xl:gap-12 2xl:pb-[80px] 2xl:pt-[150px] 3xl:grid-cols-[530px_680px] 3xl:gap-[24px] 3xl:pl-[58px] 3xl:pt-[196px]">
            {/* ---------- Text ---------- */}
            <div className="min-w-0 text-center lg:text-left">
              <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#0b1a12] 2xl:text-[15px]">
                {copy.oops}
                <span className="mx-auto mt-3 block h-[3px] w-12 rounded-full bg-[#fdd659] lg:mx-0 2xl:w-[64px]" />
              </p>
              <h1 className="mt-6 text-[clamp(32px,3.3vw,63px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0b1a12] 2xl:mt-9">
                {copy.pageNotFound}
              </h1>
              <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.6] text-[#5a6172] sm:text-base lg:mx-0 xl:text-[18px] 2xl:mt-6 2xl:text-[21px] 3xl:text-[23px]">
                {copy.thePageYoureLookingFor}
              </p>
              <Link
                href="/"
                className="btn-solid btn-yellow group mt-7 inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-8 py-3.5 text-[16px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd659] 2xl:mt-9 2xl:px-10 2xl:py-[18px] 2xl:text-[21px] 3xl:h-[72px] 3xl:w-[288px] 3xl:px-0 3xl:py-0 3xl:text-[25px]"
              >
                {copy.backToHome}
                <ArrowRight className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </Link>
            </div>

            {/* ---------- 404 mark ---------- */}
            <div className="min-w-0 text-center">
              <p
                aria-label="404"
                className="flex items-center justify-center text-[clamp(110px,30vw,230px)] font-black leading-[0.9] tracking-[-0.04em] text-[#0f3f2d] lg:text-[clamp(120px,15.6vw,300px)]"
              >
                <span aria-hidden="true">4</span>
                <ZeroMark className="mx-[0.02em] h-[0.92em] w-auto shrink-0" />
                <span aria-hidden="true">4</span>
              </p>
              <p className="mt-4 -rotate-[5deg] font-script text-[clamp(26px,3.3vw,62px)] font-medium leading-[1.05] text-[#1f5a41] 2xl:mt-8" aria-hidden="true">
                {copy.cleanPathsAlways}
                <br />
                {copy.leadHome}
                <svg viewBox="0 0 220 24" className="mx-auto mt-1 block w-[4.4em]" aria-hidden="true">
                  <path d="M4 20C70 10 150 5 216 3" fill="none" stroke="#fdd659" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </p>
            </div>
          </div>

          {/* ---------- Quick links ---------- */}
          <ul className="mx-auto grid max-w-[420px] grid-cols-1 gap-5 pb-12 sm:max-w-none sm:grid-cols-3 sm:gap-0 lg:mx-0 lg:max-w-[63%] 2xl:pb-[70px] 3xl:ml-[58px] 3xl:max-w-[1150px]">
            {quickLinks.map(({ href, title, text, icon }, i) => (
              <li key={title} className={`min-w-0 ${i > 0 ? "sm:border-l sm:border-[#d5dfdb]" : ""}`}>
                <Link href={href} className="flex items-center gap-3 sm:justify-center sm:px-2 lg:gap-3 xl:gap-4 2xl:gap-6 3xl:gap-[30px]">
                  <span className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#d7ecdf] text-[#0f3f2d] shadow-sm transition-transform duration-300 hover:scale-115 sm:h-12 sm:w-12 lg:h-11 lg:w-11 xl:h-14 xl:w-14 2xl:h-[76px] 2xl:w-[76px]">
                    {icon("h-[50%] w-[50%]")}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[17px] font-bold leading-tight text-[#0b1a12] sm:text-[14px] lg:text-[13.5px] xl:text-[17px] 2xl:text-[21px]">
                      {title}
                    </span>
                    <span className="mt-1 block text-[14.5px] leading-snug text-[#5a6172] sm:text-[12.5px] lg:text-[12px] xl:text-[14px] 2xl:mt-1.5 2xl:text-[17px]">
                      {text}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
