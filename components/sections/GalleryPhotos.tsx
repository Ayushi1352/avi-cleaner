"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { GalleryPhotosData, LightboxLabels } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { Pagination } from "@/components/ui/Pagination";
import { fill } from "@/components/ui/text";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ui } from "@/components/ui/styles";

// Which part of a photo stays in view. A photo in templates.json can set "focus": "top".
const PHOTO_FOCUS: Record<string, string> = { top: "object-top", default: "object-[center_top]" };

interface Photo {
  src: string;
  alt: string;
}

interface LightboxProps {
  photos: Photo[];
  index: number;
  labels: LightboxLabels;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

// Each photo fades and grows in slightly when it opens (Web Animations API, so no CSS keyframes are needed).
const fadeIn = (img: HTMLImageElement | null) => {
  if (!img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  img.animate([{ opacity: 0, transform: "scale(0.96)" }, { opacity: 1, transform: "scale(1)" }], { duration: 220, easing: "ease" });
};

const PhotoLightbox = ({ photos, index, labels, onClose, onPrev, onNext }: LightboxProps) => {
  const photo = photos[index];
  const total = photos.length;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={labels.dialog}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--color-black-95)] p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      {/* Content wrapper — stop propagation so clicking image doesn't close */}
      <div className="relative flex max-h-[92vh] max-w-[92vw] flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <span className="mb-2.5 select-none rounded-full bg-[var(--color-white-15)] px-3.5 py-1 text-[13px] font-semibold text-[var(--color-white-90)] backdrop-blur">
          {index + 1} {"/"} {total}
        </span>

        <div className="relative flex items-center justify-center overflow-hidden rounded-[14px] shadow-[0_25px_70px_-15px_var(--color-black-95)] ring-1 ring-[var(--color-white-10)] sm:rounded-[18px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={photo.src}
            ref={fadeIn}
            src={photo.src}
            alt={photo.alt}
            className="max-h-[72vh] w-auto max-w-[88vw] object-contain sm:max-h-[78vh] sm:max-w-[82vw]"
          />
        </div>

        <p className="mt-3 max-w-[85vw] select-none text-center text-[13.5px] font-medium text-[var(--color-white-80)]">{photo.alt}</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label={labels.close}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-white-15)] text-[var(--color-white)] backdrop-blur-md transition-all hover:scale-105 hover:bg-[var(--color-white-30)] sm:right-6 sm:top-6 sm:h-12 sm:w-12"
      >
        <Icon name={labels.closeIcon} className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label={labels.previous}
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white-15)] text-[var(--color-white)] backdrop-blur-md transition-all hover:scale-105 hover:bg-[var(--color-white-30)] sm:left-6 sm:h-14 sm:w-14"
      >
        <Icon name={labels.previousIcon} className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label={labels.next}
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white-15)] text-[var(--color-white)] backdrop-blur-md transition-all hover:scale-105 hover:bg-[var(--color-white-30)] sm:right-6 sm:h-14 sm:w-14"
      >
        <Icon name={labels.nextIcon} className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
      </button>
    </div>
  );
};

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
    [photos.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % photos.length)),
    [photos.length]
  );

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
                    aria-label={fill(data.viewImage, { alt: p.alt })}
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
            <Pagination page={page} totalPages={totalPages} onChange={goTo} labels={data.pagination} className="mt-9 2xl:mt-[36px]" />
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
