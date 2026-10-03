import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import HandwrittenNote from "@/components/HandwrittenNote";
import GalleryVideoCard from "./GalleryVideoCard";

const YT = "https://youtu.be/aeeA31ViGjI?si=0U_bovYji75p6AVm";

const videos = [
  { title: "Home Cleaning Service", text: "See how we clean and refresh your home.", thumb: "/images/cta-cleaner.webp", src: YT },
  { title: "Office Cleaning Process", text: "A cleaner workspace for a more productive day.", thumb: "/images/service-office.webp", src: YT },
  { title: "Sofa Deep Cleaning", text: "Watch the deep cleaning process for a fresh look.", thumb: "/images/service-sofa.webp", src: YT },
  { title: "Window Cleaning Tips", text: "Quick tips for sparkling clean windows.", thumb: "/images/mission/vision-window.webp", src: YT },
  { title: "Bathroom Cleaning", text: "Hygienic cleaning for a healthier home.", thumb: "/images/mission/mission-cleaning.webp", src: YT },
  { title: "Our Team at Work", text: "Meet our team and see us in action.", thumb: "/images/mission/partner-cta.webp", src: YT },
];

/** Gallery page video section: "See Our Cleaning in Action". */
export default function GalleryVideo() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f3fbf7] py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      {/* Leaf sprig, left */}
      <svg aria-hidden="true" viewBox="0 0 260 420" className="pointer-events-none absolute left-0 top-8 hidden w-[140px] text-[#e1f3ea] md:block 2xl:w-[230px]">
        <path fill="currentColor" d="M200 20C120 30 70 80 62 150c-2 22 4 42 16 58 58-22 100-80 116-150 2-12 6-26 6-38Z" />
        <path fill="currentColor" d="M-10 150c50 10 82 54 80 110 0 16-6 32-14 44-40-22-64-62-66-110V150Z" />
        <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M80 206C60 270 30 340 -10 410" />
      </svg>
      {/* Leaves, bottom right */}
      <svg aria-hidden="true" viewBox="0 0 220 220" className="pointer-events-none absolute bottom-0 right-0 hidden w-[150px] text-[#e1f3ea] md:block 2xl:w-[250px]">
        <path fill="currentColor" d="M176 8c-34 30-48 78-34 128 4 14 10 26 20 36 30-22 50-58 50-102 0-22-12-44-36-62Z" />
        <path fill="currentColor" d="M10 150c36-22 86-22 128 6 10 8 18 16 22 26-44 14-90 10-124-12-10-6-20-12-26-20Z" />
      </svg>
      <HandwrittenNote className="absolute right-[4%] top-8 hidden text-[34px] xl:block 2xl:top-[40px] 2xl:text-[42px] 3xl:text-[50px]" />

      <div className="container-x relative">
        <div className="mx-auto max-w-[1100px] text-center">
          <SectionEyebrow
            center
            compact
            className="[&>span:first-child]:h-[2px] [&>span:last-child]:h-[2px] 2xl:gap-8 3xl:gap-[46px] 3xl:[&>span:first-child]:w-[104px] 3xl:[&>span:last-child]:w-[104px] 3xl:[&>span:nth-child(2)]:text-[24px]"
          >
            Video Gallery
          </SectionEyebrow>
          <h2 className="mt-2 text-[clamp(28px,3.45vw,66px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0b1a12] 2xl:mt-3">
            See Our <span className="text-[#14573f]">Cleaning in</span> Action
          </h2>
          <p className="mx-auto mt-2 text-[15px] leading-[1.45] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-3 2xl:text-[21px] 3xl:text-[24.5px]">
            Watch our videos to see how we create cleaner, healthier and
            happier spaces <br className="hidden xl:block" />
            for homes and businesses.
          </p>
        </div>

        <ul className="mt-9 grid grid-cols-1 gap-x-5 gap-y-7 min-[480px]:grid-cols-2 lg:grid-cols-3 2xl:mt-[44px] 2xl:gap-x-[36px] 2xl:gap-y-[32px] 3xl:px-[12px]">
          {videos.map((v) => (
            <li key={v.title} className="min-w-0">
              <GalleryVideoCard video={v} />
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center 2xl:mt-[52px]">
          <Link
            href="/book-now"
            className="btn-solid btn-yellow group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-9 py-3.5 text-[15px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd86b] xl:text-[17px] 2xl:px-14 2xl:py-5 2xl:text-[21px] 3xl:h-[82px] 3xl:w-[416px] 3xl:gap-5 3xl:px-0 3xl:py-0 3xl:text-[24px]"
          >
            Book a Cleaning Service
            <ArrowRight className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
