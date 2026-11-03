"use client";

import { useState, useCallback, useRef } from "react";
import type { GalleryPhotosData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { PhotoLightbox } from "@/components/ui/PhotoLightbox";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { fillLabel } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

// Which part of a photo stays in view. A photo in templates.json can set "focus": "top".
const PHOTO_FOCUS: Record<string, string> = { top: "object-top", default: "object-[center_top]" };

/** Gallery page photos grid and lightbox with pagination. */
export const GalleryPhotos = ({ data }: { data?: GalleryPhotosData }) => {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const photos = data?.photos ?? [];
  const perPage = data?.perPage ?? 1;
  const totalPages = Math.max(1, Math.ceil(photos.length / perPage));
  const visible = photos.slice((page - 1) * perPage, page * perPage);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // null = lightbox closed; number = index of open photo
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAt = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % photos.length)),
    []
  );

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold shadow-[0_4px_14px_-4px_var(--color-shadow-card-30)] transition-colors 2xl:h-12 2xl:w-12 2xl:text-[16px] 3xl:h-[50px] 3xl:w-[50px]";
  const idle =
    "bg-[var(--color-white)] text-[var(--color-title)] hover:bg-[var(--color-card-badge)] hover:text-[var(--color-white)] disabled:pointer-events-none disabled:opacity-60";

  if (!data) return null;

  return (
    <>
      <section ref={sectionRef} className="w-full scroll-mt-24 bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
        <div className={ui.container}>
          <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-5 2xl:gap-x-[35px] 2xl:gap-y-[28px] 3xl:px-[7px]">
            {visible.map((p, idx) => {
              const globalIndex = (page - 1) * perPage + idx;
              return (
                <ScrollReveal key={p.id} variant="fade-up" delay={idx * 110} duration={580}>
                  <li
                    data-card-border className={`${ui.cardBorder} group min-w-0 cursor-pointer overflow-hidden rounded-[10px] shadow-[0_10px_26px_-20px_var(--color-shadow-card-50)] 2xl:rounded-[12px]`}
                    onClick={() => openAt(globalIndex)}
                    role="button"
                    tabIndex={0}
                    aria-label={fillLabel(data.viewImage, { alt: p.alt })}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openAt(globalIndex)}
                  >
                    <div className="relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className={`block aspect-[573/378] h-full w-full object-cover ${PHOTO_FOCUS[p.focus ?? "default"] ?? PHOTO_FOCUS.default} transition-transform duration-500 group-hover:scale-105`}
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-[var(--color-black-0)] transition-colors duration-300 group-hover:bg-[var(--color-black-30)]">
                        <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-[var(--color-white-90)] text-[var(--color-gallery-accent)] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-5 w-5">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                            <path d="M11 8v6M8 11h6" strokeLinecap="round" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </li>
                </ScrollReveal>
              );
            })}
          </ul>

          {totalPages > 1 && (
            <nav aria-label={data.pagination.label} className="mt-9 flex justify-center 2xl:mt-[36px]">
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
      </section>

      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={photos}
          labels={data.lightbox}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
};
