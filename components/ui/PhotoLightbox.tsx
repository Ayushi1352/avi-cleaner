"use client";

import { useCallback, useEffect } from "react";
import type { LightboxLabels } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

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

export const PhotoLightbox = ({ photos, index, labels, onClose, onPrev, onNext }: LightboxProps) => {
  const photo = photos[index];
  const total = photos.length;

  // Keyboard navigation
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
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    /* Backdrop */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={labels.dialog}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--color-black-95)] p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      {/* Content wrapper — stop propagation so clicking image doesn't close */}
      <div className="relative flex max-h-[92vh] max-w-[92vw] flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {/* Counter */}
        <span className="mb-2.5 select-none rounded-full bg-[var(--color-white-15)] px-3.5 py-1 text-[13px] font-semibold text-[var(--color-white-90)] backdrop-blur">
          {index + 1} {"/"} {total}
        </span>

        {/* Image — fits tightly to natural dimensions with no empty space on sides */}
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

        {/* Caption */}
        <p className="mt-3 max-w-[85vw] select-none text-center text-[13.5px] font-medium text-[var(--color-white-80)]">{photo.alt}</p>
      </div>

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label={labels.close}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-white-15)] text-[var(--color-white)] backdrop-blur-md transition-all hover:scale-105 hover:bg-[var(--color-white-30)] sm:right-6 sm:top-6 sm:h-12 sm:w-12"
      >
        <Icon name={labels.closeIcon} className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
      </button>

      {/* Prev button */}
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

      {/* Next button */}
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
