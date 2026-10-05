"use client";

import { useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhotoLightbox from "./PhotoLightbox";
import ScrollReveal from "@/components/ScrollReveal";
import galleryData from "@/data/gallery.json";

// Text lives in src/data/gallery.json under text.GalleryPhotos.
const copy = galleryData.text.GalleryPhotos;

const PER_PAGE = 6;

// Gallery photos (stand-ins from the rest of the site; swap in your own).
// Content lives in src/data/gallery.json.
const photos = galleryData.photos;

/** Gallery page photos grid and lightbox with pagination. */
export default function GalleryPhotos() {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const totalPages = Math.max(1, Math.ceil(photos.length / PER_PAGE));
  const visible = photos.slice((page - 1) * PER_PAGE, page * PER_PAGE);

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
    "flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold shadow-[0_4px_14px_-4px_rgba(11,42,28,0.3)] transition-colors 2xl:h-12 2xl:w-12 2xl:text-[16px] 3xl:h-[50px] 3xl:w-[50px]";
  const idle =
    "bg-white text-[#0b1a12] hover:bg-[#0c3f2e] hover:text-white disabled:pointer-events-none disabled:opacity-60";

  return (
    <>
      <section ref={sectionRef} className="w-full scroll-mt-24 bg-white py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
        <div className="container-x">
          <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-5 2xl:gap-x-[35px] 2xl:gap-y-[28px] 3xl:px-[7px]">
            {visible.map((p, idx) => {
              const globalIndex = (page - 1) * PER_PAGE + idx;
              return (
                <ScrollReveal key={p.src} variant="fade-up" delay={idx * 110} duration={580}>
                  <li
                    className="card-border-animated group min-w-0 cursor-pointer overflow-hidden rounded-[10px] shadow-[0_10px_26px_-20px_rgba(11,42,28,0.5)] 2xl:rounded-[12px]"
                    onClick={() => openAt(globalIndex)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View image: ${p.alt}`}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openAt(globalIndex)}
                  >
                    <div className="relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className={`block aspect-[573/378] h-full w-full object-cover ${p.pos || "object-[center_top]"} transition-transform duration-500 group-hover:scale-105`}
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                        <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/90 text-[#14573f] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
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
            <nav aria-label={copy.photoGalleryPages} className="mt-9 flex justify-center 2xl:mt-[36px]">
              <ul className="flex flex-wrap items-center justify-center gap-2.5 2xl:gap-3">
                <li>
                  <button
                    type="button"
                    onClick={() => goTo(page - 1)}
                    disabled={page === 1}
                    aria-label={copy.previousPage}
                    className={`${btn} ${idle}`}
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={3} />
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <li key={n}>
                    <button
                      type="button"
                      onClick={() => goTo(n)}
                      aria-label={`Page ${n}`}
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
                    <ChevronRight className="h-4 w-4" strokeWidth={3} />
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
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
