import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoSlot from "@/components/PhotoSlot";
import SectionEyebrow from "@/components/SectionEyebrow";
import { EyeIcon } from "./missionVisionIcons";

function FocusCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[18px] bg-[#10463a] p-6 text-white shadow-[0_18px_40px_-20px_rgba(13,66,51,0.6)] sm:rounded-[clamp(14px,2.2cqw,18px)] sm:px-[clamp(22px,7.1cqw,57px)] sm:py-[clamp(18px,3.7cqw,30px)] ${className}`}
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#daf6e7] text-[#0d2e22] sm:h-[clamp(60px,13.7cqw,110px)] sm:w-[clamp(60px,13.7cqw,110px)]">
        <EyeIcon className="h-1/2 w-1/2" />
      </span>
      <h3 className="mt-4 text-[22px] font-bold leading-tight sm:mt-[clamp(10px,2.2cqw,18px)] sm:text-[clamp(20px,3.75cqw,30px)]">
        Our Focus
      </h3>
      <p className="mt-2 text-[15px] leading-[1.55] text-white/90 sm:mt-[clamp(8px,1.4cqw,12px)] sm:text-[clamp(14px,3cqw,24px)] sm:leading-[1.42]">
        A cleaner, greener <br className="hidden sm:block" />
        and brighter future <br className="hidden sm:block" />
        for everyone.
      </p>
    </div>
  );
}

/** "Our Vision — Cleaner Spaces Happier Lives" with photo and Our Focus card. */
export default function OurVision() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      {/* Pale leaves on the right edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 320 420"
        className="pointer-events-none absolute -top-[110px] right-[2%] hidden w-[220px] text-[#e8f5ee] lg:block 2xl:w-[300px] 3xl:right-[4.4%] 3xl:w-[330px]"
      >
        <path fill="currentColor" d="M250 10c-60 40-90 110-70 190 10 40 40 70 70 90 40-50 60-110 50-180C295 60 275 30 250 10Z" />
        <path fill="currentColor" d="M40 170c60-30 140-20 200 40 20 20 30 40 35 60-70 10-140-5-190-45C60 205 48 190 40 170Z" />
        <path fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" d="M250 40c-20 80-15 170 30 240M80 190c60 5 130 30 190 80" />
        <path fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" d="M280 290c10 40 20 80 40 120" />
      </svg>

      <div className="container-x relative">
        <div className="lg:px-6 xl:px-10 2xl:pl-[50px] 2xl:pr-[90px] 3xl:pl-[50px] 3xl:pr-[146px]">
          <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-[802fr_720fr] xl:gap-14 2xl:gap-[93px]">
            {/* ---------- Visual ---------- */}
            <div className="@container order-2 mx-auto w-full min-w-0 max-w-[802px] xl:order-1">
              {/* Phones */}
              <div className="sm:hidden">
                <PhotoSlot
                  src="/images/mission/vision-window.webp"
                  alt="Yellow-gloved hand cleaning a window with a squeegee"
                  label="mission/vision-window.jpg"
                  className="relative aspect-[4/3] w-full rounded-[20px]"
                />
                <FocusCard className="relative -mt-16 w-[88%]" />
              </div>

              {/* Tablet + desktop */}
              <div className="relative hidden aspect-[802/641] w-full sm:block">
                <PhotoSlot
                  src="/images/mission/vision-window.webp"
                  alt="Yellow-gloved hand cleaning a window with a squeegee"
                  label="mission/vision-window.jpg"
                  className="absolute right-0 top-0 h-[91.2%] w-[92.9%] rounded-[clamp(16px,2.7cqw,22px)]"
                />
                <FocusCard className="absolute left-0 top-[43.4%] w-[50.1%]" />
              </div>
            </div>

            {/* ---------- Text ---------- */}
            <div className="order-1 min-w-0 max-w-[760px] xl:order-2">
              <SectionEyebrow>Our Vision</SectionEyebrow>
              <h2 className="mt-4 text-[clamp(32px,3.95vw,76px)] font-bold leading-[1.08] tracking-[-0.02em] text-[#101418] 2xl:mt-4">
                Cleaner Spaces
                <br />
                Happier Lives
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-6 2xl:text-[20px] 3xl:text-[23.5px] 3xl:leading-[1.64]">
                Our vision is to be a trusted and recognized leader in the{" "}
                <br className="hidden 3xl:block" />
                cleaning industry, known{" "}
                <strong className="font-medium text-[#1d2433]">for innovation, sustainability,</strong>{" "}
                <br className="hidden 3xl:block" />
                and exceptional service. We aim to build a cleaner and{" "}
                <br className="hidden 3xl:block" />
                greener future by setting higher standards in cleanliness,{" "}
                <br className="hidden 3xl:block" />
                customer{" "}
                <strong className="font-medium text-[#1d2433]">
                  satisfaction, and environmental responsibility.
                </strong>
              </p>
              <Link
                href="/about-us"
                className="btn-solid btn-yellow group mt-8 inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd86b] sm:text-base 2xl:mt-9 2xl:px-10 2xl:py-[18px] 2xl:text-[19px] 3xl:h-[82px] 3xl:w-[268px] 3xl:justify-center 3xl:text-[22px]"
              >
                About Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
