"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  src: string;
  alt: string;
}

interface LightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[index];
  const total = photos.length;

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
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
      aria-label="Image lightbox"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Card — stop propagation so clicking image doesn't close */}
      <div
        className="relative mx-4 flex w-[90vw] max-w-[1200px] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Counter */}
        <span className="mb-3 select-none rounded-full bg-white/10 px-4 py-1 text-[13px] font-semibold text-white/80 backdrop-blur-sm">
          {index + 1} / {total}
        </span>

        {/* Image */}
        <div className="flex h-[70vh] max-h-[700px] w-full items-center justify-center sm:h-[76vh] sm:max-h-[820px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="h-full w-full rounded-[14px] object-contain shadow-[0_30px_80px_-10px_rgba(0,0,0,0.7)]"
            style={{ animation: "lbFadeIn 0.22s ease" }}
          />
        </div>

        {/* Caption */}
        <p className="mt-3 max-w-[80vw] select-none text-center text-[13px] text-white/60">
          {photo.alt}
        </p>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:left-5 sm:h-14 sm:w-14"
      >
        <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:right-5 sm:h-14 sm:w-14"
      >
        <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
      </button>

      {/* Fade-in keyframe injected inline (no extra CSS file needed) */}
      <style>{`
        @keyframes lbFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
