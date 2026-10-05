import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { LeafIcon, ShieldCheckIcon, SparklesIcon } from "./icons";

// Clean photo with the wall frame and the green swoosh baked in behind the cleaner.
const HERO_IMAGE = "/images/hero-banner-arc.webp";

/* Solid home icon drawn to match the hero design. */
function HeroHomeIcon({ className }) {
  return (
    <svg className={`animate-icon-float ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.6 11.3 12 3.5l9.4 7.8"
      />
      <path
        fill="currentColor"
        d="M5.3 12.1 12 6.5l6.7 5.6v7.7a1.2 1.2 0 0 1-1.2 1.2H6.5a1.2 1.2 0 0 1-1.2-1.2v-7.7Z"
      />
      <rect x="9.9" y="14.3" width="4.2" height="4.3" rx="0.7" fill="#e7f4e8" />
    </svg>
  );
}

const features = [
  { icon: LeafIcon, line1: "Eco-Friendly", line2: "Products" },
  { icon: ShieldCheckIcon, line1: "Trained &", line2: "Trusted Team" },
  { icon: SparklesIcon, line1: "100%", line2: "Satisfaction" },
  { icon: HeroHomeIcon, line1: "Homes & Offices", line2: "Both Covered" },
];

function HeroImage({ className }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={HERO_IMAGE}
      alt="Avicleaner professional cleaner wiping a kitchen counter"
      className={className}
    />
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6fafd]">
      {/* Desktop: photo anchored to the right, fading to the page tint on the left */}
      <div className="hero-photo-wrap pointer-events-none absolute inset-0 hidden lg:block">
        <HeroImage className="hero-photo" />
        <div className="hero-fade absolute inset-0" />
        {/* Blurred plant peeking in at the bottom-left corner */}
        <div className="hero-plant" aria-hidden="true" />
      </div>

      <div className="container-x relative z-10">
        <div className="flex flex-col py-10 sm:py-14 lg:min-h-[500px] lg:justify-center lg:py-12 xl:min-h-[580px] 2xl:min-h-[700px] 3xl:min-h-[862px] 3xl:py-[90px]">
          <ScrollReveal variant="fade-up" duration={750} className="w-full max-w-[620px] lg:max-w-[56%] 3xl:max-w-[940px] 3xl:pl-[26px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 sm:gap-4 3xl:gap-[18px]">
                <span className="h-[3px] w-10 shrink-0 rounded-full bg-green 2xl:w-[56px]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#2b4f73] sm:text-[13px] 2xl:text-[15px] 3xl:text-[17px] 3xl:tracking-[0.32em]">
                  Cleaner Spaces Happier Lives
                </span>
              </div>

            {/* Heading: first two lines large, third line a step smaller */}
            <h1 className="mt-5 text-[clamp(34px,4.52vw,86px)] font-extrabold tracking-[-0.005em] text-[#06264b] 2xl:mt-6 3xl:mt-[30px]">
              <span className="block leading-[1.07]">Professional</span>
              <span className="block leading-[1.07] tracking-[0.015em] text-green">
                Cleaning Services
              </span>
              <span className="block text-[0.875em] leading-[1.08]">
                for a Healthier Tomorrow
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.5] text-[#34465a] sm:text-base lg:max-w-none xl:text-[18px] 2xl:mt-5 2xl:text-[21px] 3xl:mt-[22px] 3xl:text-[25px] 3xl:leading-[35px]">
              We provide reliable and high-quality cleaning services{" "}
              <br className="hidden lg:block" />
              for homes, offices, and commercial spaces. Enjoy a cleaner,{" "}
              <br className="hidden lg:block" />
              fresher and healthier environment with Avicleaner.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3 sm:gap-5 2xl:mt-8 3xl:gap-[22px]">
              <Link
                href="/book-now"
                className="btn-solid group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[16px] font-bold [--btn:#327b37] xl:px-9 xl:py-4 xl:text-[18px] 2xl:text-[20px] 3xl:h-[72px] 3xl:w-[272px] 3xl:gap-5 3xl:text-[24px]"
              >
                Book Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 2xl:h-5 2xl:w-5" />
              </Link>
              <Link
                href="/contact-us"
                className="btn-outline group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[15px] font-bold [--btn-bg:rgb(255_255_255/0.5)] [--btn:#06264b] xl:px-9 xl:py-4 xl:text-[17px] 2xl:text-[19px] 3xl:h-[72px] 3xl:w-[255px] 3xl:gap-4 3xl:text-[22px]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 2xl:h-5 2xl:w-5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Feature badges */}
          <ScrollReveal variant="fade-up" delay={200} duration={750} className="w-full">
            <ul className="mt-9 grid w-full grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 lg:max-w-[52%] lg:grid-cols-2 xl:flex xl:w-auto xl:max-w-none xl:flex-nowrap xl:gap-0 2xl:mt-12 3xl:pl-[26px]">
              {features.map(({ icon: Icon, line1, line2 }, i) => (
                <li
                  key={line1}
                  className={`relative flex min-w-0 items-center gap-2.5 sm:gap-3 3xl:gap-[14px] ${
                    i === 0
                      ? "xl:pr-3.5 2xl:pr-5 3xl:pr-6"
                      : "hero-divider xl:px-3.5 2xl:px-5 3xl:px-6"
                  }`}
                >
                  <span className="relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#e7f4e8] text-green shadow-sm transition-all duration-300 hover:scale-115 hover:shadow-[0_6px_18px_rgba(42,124,53,0.3)] sm:h-12 sm:w-12 2xl:h-14 2xl:w-14 3xl:h-[74px] 3xl:w-[74px]">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 2xl:h-9 2xl:w-9 3xl:h-12 3xl:w-12 transition-transform duration-300" />
                  </span>
                  <span className="min-w-0 text-[12.5px] font-medium leading-[1.4] text-[#12305a] sm:text-[13px] xl:whitespace-nowrap xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px]">
                    {line1}
                    <br />
                    {line2}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Mobile / tablet photo */}
          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:aspect-[16/9] lg:hidden">
            <HeroImage className="absolute inset-0 h-full w-full object-cover object-[72%_15%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
