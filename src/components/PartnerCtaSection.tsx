import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

/**
 * Dark green call-to-action banner.
 * Defaults are the Mission & Vision "Partner With Us" banner;
 * other pages (e.g. Service Detail) pass their own text.
 */
export default function PartnerCtaSection({
  eyebrow = "Let's Create a Cleaner Tomorrow",
  title = "Partner With Us for a Cleaner, Brighter Future",
  text = "Together, we can make every space healthier, safer, and happier.",
  buttonLabel = "Contact Us",
  buttonHref = "/contact-us",
  image = "/images/mission/partner-cta.webp",
  showLeaf = true,
  // "wide" = full-width banner with larger type (Service Detail page).
  wide = false,
}) {
  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="container-x">
        <div className={`relative isolate overflow-hidden rounded-[20px] bg-[#014430] 2xl:rounded-[26px] ${wide ? "" : "2xl:mx-[20px] 3xl:ml-[32px] 3xl:mr-[76px]"}`}>
          {/* Photo on the right, tinted green (drop the file in to show it) */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 -z-20 w-full bg-cover bg-center opacity-[0.28] mix-blend-luminosity grayscale lg:w-[52%] lg:[mask-image:linear-gradient(to_right,transparent,#000_40%)]"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#014430] via-[#014430]/85 via-60% to-[#014430]/25" />

          {/* Big faint leaf on the left */}
          {showLeaf && (
            <svg
              aria-hidden="true"
              viewBox="0 0 240 300"
              className="pointer-events-none absolute bottom-0 left-2 -z-10 h-[60%] text-white/[0.15] lg:h-[95%] 2xl:left-3"
            >
              <path fill="currentColor" d="M20 0c90 30 150 100 150 190 0 30-10 60-30 80C60 250 10 190 5 120 3 80 8 40 20 0Z" />
              <path fill="currentColor" d="M120 300c10-60 50-100 110-110-10 60-50 100-110 110Z" />
              <path fill="none" stroke="#034130" strokeOpacity=".75" strokeWidth="6" strokeLinecap="round" d="M30 30c40 70 70 150 95 270" />
            </svg>
          )}

          <div
            className={`flex flex-col gap-7 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pr-10 ${wide ? "2xl:min-h-[276px] 2xl:py-[44px] 2xl:pr-[54px]" : "2xl:min-h-[295px] 2xl:py-[50px] 2xl:pr-[56px]"} ${
              showLeaf ? "lg:pl-[120px] 2xl:pl-[212px]" : "lg:pl-12 2xl:pl-[98px]"
            }`}
          >
            <div className="min-w-0">
              <SectionEyebrow light lines={false} className={wide ? "[&>span]:font-medium [&>span]:text-white/85 3xl:[&>span]:text-[20px]" : ""}>
                {eyebrow}
              </SectionEyebrow>
              <h2 className={`mt-3 leading-[1.2] tracking-[-0.01em] text-white 2xl:mt-3 ${wide ? "text-[clamp(26px,2.77vw,53px)] font-extrabold" : "text-[clamp(26px,2.45vw,47px)] font-bold"}`}>
                {title}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.55] text-white/90 sm:text-base xl:text-[18px] 2xl:text-[21px] 3xl:text-[24.5px]">
                {text}
              </p>
            </div>

            <Link
              href={buttonHref}
              className={`btn-solid btn-yellow group inline-flex w-fit shrink-0 items-center gap-3 whitespace-nowrap rounded-full px-8 py-4 text-[16px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd86b] 2xl:px-11 2xl:py-6 2xl:text-[21px] 3xl:h-[90px] 3xl:justify-center ${wide ? "3xl:min-w-[368px] 3xl:gap-5 3xl:text-[25px]" : "3xl:min-w-[305px] 3xl:text-[24px]"}`}
            >
              {buttonLabel}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 2xl:h-6 2xl:w-6" strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
