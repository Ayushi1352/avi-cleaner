"use client";

import { useRef, useState } from "react";
import type { GlobalUIData, TestimonialItem, TestimonialsGridData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { fillLabel } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

function ReviewCard({ review, data }: { review: TestimonialItem; data: TestimonialsGridData }) {
  return (
    <article className="relative flex h-full min-w-0 flex-col rounded-[14px] bg-[var(--color-white)] px-5 pb-5 pt-6 shadow-[0_12px_32px_-24px_var(--color-shadow-card-35)] sm:px-6 2xl:rounded-[18px] 2xl:px-8 2xl:pb-6 2xl:pt-7 3xl:px-[39px] 3xl:pb-[18px] 3xl:pt-[32px]">
      {/* Pale closing quote mark, top right */}
      <Icon name={data.icons.quote}
        className="absolute right-4 top-4 h-9 w-9 rotate-180 text-[var(--color-reviews-text)] sm:h-10 sm:w-10 2xl:right-6 2xl:top-5 2xl:h-12 2xl:w-12 3xl:right-[30px] 3xl:top-[22px] 3xl:h-[58px] 3xl:w-[58px]"
      />

      <div className="flex gap-1 text-[var(--color-reviews-text-2)] 3xl:gap-[5px]" role="img" aria-label={data.starsLabel}>
        {Array.from({ length: data.stars }).map((_, i) => (
          <Icon name={data.icons.star} key={i} className="h-[18px] w-[18px] 2xl:h-[22px] 2xl:w-[22px] 3xl:h-[28px] 3xl:w-[28px]" />
        ))}
      </div>

      <blockquote className="mt-3 pr-6 text-[15px] leading-[1.5] text-[var(--color-text-grey)] lg:pr-2 lg:text-[14px] xl:text-[16px] 2xl:mt-4 2xl:pr-8 2xl:text-[19px] 3xl:mt-[14px] 3xl:pr-[34px] 3xl:text-[22.5px] 3xl:leading-[31px]">
        {"“"}{review.quote}{"”"}
      </blockquote>

      <footer className="mt-auto flex items-center gap-3.5 pt-4 2xl:gap-5 2xl:pt-5 3xl:gap-[22px] 3xl:pt-[18px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.avatar}
          alt={review.name}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-full bg-[var(--color-reviews-bg)] object-cover object-top lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 3xl:h-[97px] 3xl:w-[97px]"
        />
        <span className="min-w-0">
          <span className="block text-[16px] font-bold leading-tight text-[var(--color-reviews-text-3)] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[23.5px]">
            {review.name}
          </span>
          <span className="mt-1 block text-[14px] leading-tight text-[var(--color-reviews-text-4)] lg:text-[13px] xl:text-[15px] 2xl:mt-1.5 2xl:text-[18px] 3xl:text-[21px]">
            {review.role}
          </span>
        </span>
      </footer>
    </article>
  );
}

/** Testimonial page body: "What Our Clients Say" with a grid of reviews and pagination. */
export const TestimonialsGrid = ({ data, ui: labels }: { data?: TestimonialsGridData; ui: GlobalUIData }) => {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reviews = data?.reviews ?? [];
  const perPage = data?.perPage ?? 1;
  const totalPages = Math.max(1, Math.ceil(reviews.length / perPage));
  const visible = reviews.slice((page - 1) * perPage, page * perPage);

  if (!data) return null;

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold shadow-[0_4px_14px_-4px_var(--color-shadow-card-30)] transition-colors 2xl:h-12 2xl:w-12 2xl:text-[16px] 3xl:h-[50px] 3xl:w-[50px]";
  const idle =
    "bg-[var(--color-white)] text-[var(--color-title)] hover:bg-[var(--color-card-badge)] hover:text-[var(--color-white)] disabled:pointer-events-none disabled:opacity-60";

  return (
    <section ref={sectionRef} className="w-full scroll-mt-24 bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-reviews-gradient)] via-[var(--color-reviews-gradient-2)] to-[var(--color-reviews-gradient-3)] pb-10 pt-12 sm:pt-14 2xl:pb-[53px] 2xl:pt-[44px]">
        {/* Leaf sprig, top left */}
        <svg aria-hidden="true" viewBox="0 0 260 420" className="pointer-events-none absolute left-0 top-4 hidden w-[150px] text-[var(--color-reviews-text-5)] md:block 2xl:w-[250px]">
          <path fill="currentColor" d="M200 20C120 30 70 80 62 150c-2 22 4 42 16 58 58-22 100-80 116-150 2-12 6-26 6-38Z" />
          <path fill="currentColor" d="M-10 150c50 10 82 54 80 110 0 16-6 32-14 44-40-22-64-62-66-110V150Z" />
          <path fill="currentColor" d="M110 300c20-46 62-74 118-78-16 48-58 76-118 78Z" />
          <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M80 206C60 270 30 340 -10 410" />
        </svg>
        {/* Soft curve, bottom right */}
        <svg aria-hidden="true" viewBox="0 0 400 500" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 right-0 hidden h-[60%] w-[22%] text-[var(--color-reviews-text-6)] lg:block">
          <path fill="currentColor" d="M400 0C330 120 300 230 240 330 190 410 110 470 0 500h400V0Z" />
        </svg>
        <HandwrittenNote lines={labels.noteLines} className="absolute right-[5%] top-10 hidden text-[34px] xl:block 2xl:right-[6%] 2xl:top-[26px] 2xl:text-[40px] 3xl:text-[46px]" />

        <div className={`${ui.container} relative`}>
          <div className="mx-auto max-w-[1000px] text-center">
            <SectionEyebrow
              center
              compact
              className="[&>span:nth-child(2)]:font-semibold 2xl:gap-8 3xl:gap-[44px] 3xl:[&>span:first-child]:w-[97px] 3xl:[&>span:last-child]:w-[97px] 3xl:[&>span:nth-child(2)]:text-[23px] [&>span:first-child]:h-[2px] [&>span:last-child]:h-[2px]"
            >
              {data.label}
            </SectionEyebrow>
            <h2 className="mt-2 text-[clamp(30px,3.15vw,60px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[var(--color-reviews-text-7)] 2xl:mt-3">
              {data.title}
            </h2>
            <p className="mx-auto mt-2 text-[15px] leading-[1.6] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-3 2xl:text-[20px] 3xl:text-[23px] 3xl:leading-[38px]">
              {data.description[0] + " "}<br className="hidden xl:block" />
              {data.description[1]}
            </p>
          </div>

          <ul className="mx-auto mt-9 grid max-w-[520px] grid-cols-1 gap-5 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6 2xl:mt-[34px] 2xl:gap-[26px] 3xl:gap-x-[28px] 3xl:pl-[20px] 3xl:pr-[14px]">
            {visible.map((r) => (
              <li key={r.name} className="min-w-0">
                <ReviewCard review={r} data={data} />
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav aria-label={data.pagination.label} className="mt-10 flex justify-center 2xl:mt-[38px]">
              <ul className="flex flex-wrap items-center justify-center gap-2.5 2xl:gap-3">
                <li>
                  <button
                    type="button"
                    onClick={() => goTo(page - 1)}
                    disabled={page === 1}
                    aria-label={data.pagination.previous.label}
                    className={`${btn} ${idle}`}
                  >
                    <Icon name={data.pagination.previous.icon} className="h-4 w-4" strokeWidth={3} />
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <li key={n}>
                    <button
                      type="button"
                      onClick={() => goTo(n)}
                      aria-label={fillLabel(data.pagination.page, { n })}
                      aria-current={n === page ? "page" : undefined}
                      className={`${btn} ${n === page ? "bg-[var(--color-card-badge)] text-[var(--color-white)]" : idle}`}
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
                    aria-label={data.pagination.next.label}
                    className={`${btn} ${idle}`}
                  >
                    <Icon name={data.pagination.next.icon} className="h-4 w-4" strokeWidth={3} />
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};
