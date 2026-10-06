"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import PhotoSlot from "@/components/PhotoSlot";
import SectionEyebrow from "@/components/SectionEyebrow";
import HandwrittenNote from "@/components/HandwrittenNote";
import ServiceIcon from "./serviceIcons";
import services from "./servicesData";
import { site, fill, pickIcons } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.servicesPage.text.ServicesGrid;
const uiLinks = site.servicesPage.links.ServicesGrid;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "arrow-right": ArrowRight, "chevron-left": ChevronLeft, "chevron-right": ChevronRight };
const uiIcons = pickIcons(site.servicesPage.icons.ServicesGrid, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.servicesPage.text.ServicesGrid;

const PER_PAGE = site.servicesPage.settings.ServicesGrid.perPage;

function ServiceCard({ service }: { service: any }) {
  const href = fill(uiLinks.servicesSlug, { slug: service.slug });
  return (
    <article className="grid h-full grid-cols-1 rounded-[20px] bg-white p-1.5 shadow-[0_14px_36px_-26px_rgba(11,42,28,0.35)] sm:grid-cols-[48%_1fr] md:grid-cols-1 xl:grid-cols-[47%_1fr]">
      {/* Photo + icon badge */}
      <div className="relative">
        <Link href={href} aria-label={service.title} className="block h-full">
          <PhotoSlot
            src={service.image}
            alt={service.title}
            label={service.image.replace("/images/", "")}
            className="relative aspect-[16/10] h-full w-full rounded-[16px] sm:aspect-auto sm:min-h-[220px] md:aspect-[16/10] md:min-h-0 xl:aspect-auto xl:min-h-[230px] 2xl:min-h-[260px] 2xl:rounded-[18px] 3xl:min-h-[333px]"
          />
        </Link>
        <span className="absolute -bottom-7 left-4 flex h-14 w-14 items-center justify-center rounded-full border-[5px] border-white bg-[#1f5a41] text-white sm:-right-8 sm:bottom-auto sm:left-auto sm:top-4 sm:h-16 sm:w-16 md:-bottom-7 md:left-4 md:right-auto md:top-auto xl:-right-8 xl:bottom-auto xl:left-auto xl:top-4 2xl:-right-[42px] 2xl:top-[14px] 2xl:h-[84px] 2xl:w-[84px] 2xl:border-[6px] 3xl:-right-[45px] 3xl:h-[90px] 3xl:w-[90px]">
          <ServiceIcon name={service.icon} className="h-6 w-6 2xl:h-8 2xl:w-8 3xl:h-9 3xl:w-9" />
        </span>
      </div>

      {/* Text */}
      <div className="flex min-w-0 flex-col px-4 pb-5 pt-10 sm:pl-12 sm:pr-4 sm:pt-[72px] md:pl-4 md:pt-10 xl:pl-12 xl:pt-[76px] 2xl:pl-[50px] 2xl:pr-4 2xl:pt-[62px] 3xl:pb-[16px] 3xl:pr-2.5 3xl:pt-[88px]">
        <h3 className="text-[18px] font-bold leading-[1.2] text-[#0b1a12] xl:text-[19px] 2xl:text-[22px] 3xl:text-[24px]">
          <Link href={href} className="transition-colors hover:text-green">
            {service.title}
          </Link>
        </h3>
        <p className="mt-2.5 text-[14px] leading-[1.45] text-[#5a6172] 2xl:text-[16px] 3xl:mt-3 3xl:text-[17px]">
          {service.short}
        </p>
        <div className="mt-auto pt-4 2xl:pt-5">
          <Link
            href={href}
            className="btn-solid btn-yellow group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full px-6 py-2.5 text-[14px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd86b] 2xl:px-6 2xl:py-3 2xl:text-[15px] 3xl:px-[34px] 3xl:py-[14px] 3xl:text-[17px]"
          >
            {copy.readMore}
            <uiIcons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/** "What We Provide — Comprehensive Cleaning Services You Can Trust" grid with pagination. */
export default function ServicesGrid() {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const totalPages = Math.max(1, Math.ceil(services.length / PER_PAGE));
  const visible = services.slice((page - 1) * PER_PAGE, page * PER_PAGE);

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
    <section ref={sectionRef} className="w-full scroll-mt-24 bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative overflow-hidden bg-[#f3fbf6] py-12 sm:py-14 2xl:pb-[48px] 2xl:pt-[40px]">
        {/* Leaf, top left */}
        <svg aria-hidden="true" viewBox="0 0 300 330" className="pointer-events-none absolute left-0 top-10 hidden w-[200px] text-[#e2f4ea] md:block 2xl:w-[300px]">
          <path fill="currentColor" d="M10 0c90 20 150 90 160 180 5 40-5 80-25 110C60 260 15 190 8 110 5 70 5 30 10 0Z" />
          <path fill="currentColor" d="M150 320c10-70 60-120 130-130-10 70-60 120-130 130Z" />
          <path fill="none" stroke="#f3fbf6" strokeWidth="6" strokeLinecap="round" d="M30 40c50 80 90 170 110 280" />
        </svg>
        <HandwrittenNote className="absolute right-[4%] top-12 hidden text-[34px] xl:block 2xl:right-[5%] 2xl:top-[70px] 2xl:text-[44px] 3xl:text-[54px]" />

        <div className="container-x relative">
          <div className="mx-auto max-w-[1000px] text-center">
            <SectionEyebrow center compact className="3xl:[&>span:first-child]:w-[72px] 3xl:[&>span:last-child]:w-[72px]">{copy.whatWeProvide}</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(28px,3.15vw,60px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0b1a12] 2xl:mt-5">
              {copy.comprehensiveCleaning}
              <br className="hidden sm:block" />{" " + copy.servicesYouCanTrust}
            </h2>
            <p className="mx-auto mt-4 text-[15px] leading-[1.4] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:text-[20px] 3xl:mt-[22px] 3xl:text-[22px]">
              {copy.fromHomesToOfficesWe + " "}<br className="hidden xl:block" />
              {copy.aCleanerHealthierAndHappier}
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-[1800px] grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3 2xl:mt-[34px] 2xl:gap-[28px] 3xl:px-[6px]">
            {visible.map((s) => (
              <li key={s.slug} className="min-w-0">
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav aria-label={copy.servicesPages} className="mt-10 flex justify-center 2xl:mt-[38px]">
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
        </div>
      </div>
    </section>
  );
}
