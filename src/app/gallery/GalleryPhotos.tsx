"use client";

import { useState, useCallback } from "react";
import PhotoLightbox from "./PhotoLightbox";

// Gallery photos (stand-ins from the rest of the site; swap in your own).
const photos = [
  { src: "/images/service-kitchen.webp", alt: "Cleaner wiping a kitchen counter" },
  { src: "/images/about-sofa-vacuum.webp", alt: "Sofa being vacuumed" },
  { src: "/images/why-choose-us.webp", alt: "Cleaner mopping a living room floor" },
  { src: "/images/project-living.webp", alt: "Clean, bright living room" },
  { src: "/images/mission/vision-window.webp", alt: "Window being cleaned with a squeegee" },
  { src: "/images/project-office.webp", alt: "Clean office space" },
  { src: "/images/mission/mission-cleaning.webp", alt: "Gloved hand wiping a counter" },
  { src: "/images/about-supplies.webp", alt: "Cleaning supplies" },
  { src: "/images/service-office.webp", alt: "Office being cleaned" },
  { src: "/images/about-cleaner-woman.webp", alt: "Smiling cleaner ready to clean" },
  { src: "/images/mission/partner-cta.webp", alt: "Avicleaner cleaning team" },
  { src: "/images/service-team.webp", alt: "Avicleaner team members" },
];

/** Gallery page photos grid and lightbox. */
export default function GalleryPhotos() {
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

  return (
    <>
      <section className="w-full bg-white py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
        <div className="container-x">
          <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-5 2xl:gap-x-[35px] 2xl:gap-y-[28px] 3xl:px-[7px]">
            {photos.map((p, i) => (
              <li
                key={p.src}
                className="group min-w-0 cursor-pointer overflow-hidden rounded-[10px] shadow-[0_10px_26px_-20px_rgba(11,42,28,0.5)] 2xl:rounded-[12px]"
                onClick={() => openAt(i)}
                role="button"
                tabIndex={0}
                aria-label={`View image: ${p.alt}`}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openAt(i)}
              >
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="block aspect-[573/378] h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
            ))}
          </ul>
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
