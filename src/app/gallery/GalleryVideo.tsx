"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import HandwrittenNote from "@/components/HandwrittenNote";
import ScrollReveal from "@/components/ScrollReveal";
import GalleryVideoCard from "./GalleryVideoCard";
import { site, fill, pickIcons } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.galleryPage.text.GalleryVideo;
const uiLinks = site.galleryPage.links.GalleryVideo;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "chevron-left": ChevronLeft, "chevron-right": ChevronRight, "arrow-right": ArrowRight };
const uiIcons = pickIcons(site.galleryPage.icons.GalleryVideo, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.galleryPage.text.GalleryVideo;

const PER_PAGE = site.galleryPage.settings.GalleryVideo.perPage;

// Content lives in src/data/site.json.
const videos = site.galleryPage.videos;

/** Gallery page video section: "See Our Cleaning in Action" with pagination. */
export default function GalleryVideo() {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const totalPages = Math.max(1, Math.ceil(videos.length / PER_PAGE));
  const visible = videos.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold shadow-[0_4px_14px_-4px_rgba(11,42,28,0.3)] transition-colors 2xl:h-12 2xl:w-12 2xl:text-[16px] 3xl:h-[50px] 3xl:w-[50px]";
  const idle =
    "bg-white text-[#0b1a12] hover:bg-[#0c3f2e] hover:text-white disabled:pointer-events-none disabled:opacity-60";

  return (
    <section ref={sectionRef} className="relative w-full scroll-mt-24 overflow-hidden bg-[#f3fbf7] py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
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
            {copy.videoGallery}
          </SectionEyebrow>
          <h2 className="mt-2 text-[clamp(28px,3.45vw,66px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0b1a12] 2xl:mt-3">
            {copy.seeOur + " "}<span className="text-[#14573f]">{copy.cleaningIn}</span>{" " + copy.action}
          </h2>
          <p className="mx-auto mt-2 text-[15px] leading-[1.45] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-3 2xl:text-[21px] 3xl:text-[24.5px]">
            {copy.watchOurVideosToSee + " "}<br className="hidden xl:block" />
            {copy.forHomesAndBusinesses}
          </p>
        </div>

        <ul className="mt-9 grid grid-cols-1 gap-x-5 gap-y-7 min-[480px]:grid-cols-2 lg:grid-cols-3 2xl:mt-[44px] 2xl:gap-x-[36px] 2xl:gap-y-[32px] 3xl:px-[12px]">
          {visible.map((v, i) => (
            <li key={v.title} className="min-w-0">
              <ScrollReveal variant="fade-up" delay={i * 120} duration={600}>
                <GalleryVideoCard video={v} />
              </ScrollReveal>
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <nav aria-label={copy.videoGalleryPages} className="mt-10 flex justify-center 2xl:mt-[38px]">
            <ul className="flex flex-wrap items-center justify-center gap-2.5 2xl:gap-3">
              <li>
                <button
                  type="button"
                  onClick={() => goTo(page - 1)}
                  disabled={page === 1}
                  aria-label={copy.previousPage}
                  className={`${btn} ${idle}`}
                >
                  <uiIcons.chevronLeft className="h-4 w-4" strokeWidth={3} />
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  <button
                    type="button"
                    onClick={() => goTo(n)}
                    aria-label={fill(uiText.pageN, { n })}
                    aria-current={n === page ? "page" : undefined}
                    className={`${btn} ${n === page ? "bg-[#0c3f2e] text-white" : idle}`}
                  >
                    {n}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => goTo(page + 1)}
                  disabled={page === totalPages}
                  aria-label={copy.nextPage}
                  className={`${btn} ${idle}`}
                >
                  <uiIcons.chevronRight className="h-4 w-4" strokeWidth={3} />
                </button>
              </li>
            </ul>
          </nav>
        )}

        <div className="mt-10 text-center 2xl:mt-[52px]">
          <Link
            href={uiLinks.bookNow}
            className="btn-solid btn-yellow group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-9 py-3.5 text-[15px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd86b] xl:text-[17px] 2xl:px-14 2xl:py-5 2xl:text-[21px] 3xl:h-[82px] 3xl:w-[416px] 3xl:gap-5 3xl:px-0 3xl:py-0 3xl:text-[24px]"
          >
            {copy.bookACleaningService}
            <uiIcons.arrowRight className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
