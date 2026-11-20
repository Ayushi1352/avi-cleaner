"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import type { GalleryPhotosData, GalleryProps, GalleryVideoData, GalleryVideoItem, LightboxLabels } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { Pagination } from "@/components/ui/Pagination";
import { SectionEyebrow } from "@/components/ui/SectionLabel";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { fill } from "@/components/ui/text";
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

const GalleryPhotos = ({ data }: { data: GalleryPhotosData }) => {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const photos = data.photos;
  const perPage = data.perPage;
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

/**
 * Video card.
 * - If `video.src` is a YouTube URL (youtu.be / youtube.com), the card shows
 *   the thumbnail image with a play-button overlay. Clicking it opens the
 *   YouTube video in a new tab.
 * - If `video.src` is a local/remote MP4 path, the browser's native player is
 *   rendered (original behaviour).
 * - If `video.src` is empty the card shows only the thumbnail image.
 */

const YOUTUBE_REGEX =
  /(?:youtu\.be\/|youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/;

function isYouTubeUrl(url: string) {
  return YOUTUBE_REGEX.test(url);
}

const GalleryVideoCard = ({ video, playLabel }: { video: GalleryVideoItem; playLabel: string }) => {
  const isYT = video.src ? isYouTubeUrl(video.src) : false;

  return (
    <article data-card-border className={`${ui.cardBorder} min-w-0`}>
      <div className="relative aspect-[570/290] w-full overflow-hidden rounded-[10px] bg-[var(--color-eyebrow-text)] 2xl:rounded-[12px]">
        {isYT ? (
          <a
            href={video.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={fill(playLabel, { title: video.title })}
            className="group absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={video.thumb}
              alt={video.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[var(--color-black-30)] transition-colors duration-300 group-hover:bg-[var(--color-black-45)]" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white-90)] text-[var(--color-gallery-accent)] shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 translate-x-0.5 sm:h-7 sm:w-7"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </a>
        ) : video.src ? (
          <video
            src={video.src}
            poster={video.thumb}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumb}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <h3 className="mt-3 text-[17px] font-bold leading-tight text-[var(--color-title)] lg:text-[16px] xl:text-[19px] 2xl:mt-4 2xl:text-[22px] 3xl:mt-[18px] 3xl:text-[25px]">
        {video.title}
      </h3>
      <p className="mt-1 text-[14px] leading-snug text-[var(--color-text-grey)] lg:text-[13px] xl:text-[15px] 2xl:mt-1.5 2xl:text-[17px] 3xl:text-[20px]">
        {video.text}
      </p>
    </article>
  );
};

const GalleryVideo = ({ data }: { data: GalleryVideoData }) => {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videos = data.videos;
  const perPage = data.perPage;
  const totalPages = Math.max(1, Math.ceil(videos.length / perPage));
  const visible = videos.slice((page - 1) * perPage, page * perPage);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="relative w-full scroll-mt-24 overflow-hidden bg-[var(--color-gallery-bg)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <svg aria-hidden="true" viewBox="0 0 260 420" className="pointer-events-none absolute left-0 top-8 hidden w-[140px] text-[var(--color-gallery-text)] md:block 2xl:w-[230px]">
        <path fill="currentColor" d="M200 20C120 30 70 80 62 150c-2 22 4 42 16 58 58-22 100-80 116-150 2-12 6-26 6-38Z" />
        <path fill="currentColor" d="M-10 150c50 10 82 54 80 110 0 16-6 32-14 44-40-22-64-62-66-110V150Z" />
        <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M80 206C60 270 30 340 -10 410" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 220 220" className="pointer-events-none absolute bottom-0 right-0 hidden w-[150px] text-[var(--color-gallery-text)] md:block 2xl:w-[250px]">
        <path fill="currentColor" d="M176 8c-34 30-48 78-34 128 4 14 10 26 20 36 30-22 50-58 50-102 0-22-12-44-36-62Z" />
        <path fill="currentColor" d="M10 150c36-22 86-22 128 6 10 8 18 16 22 26-44 14-90 10-124-12-10-6-20-12-26-20Z" />
      </svg>
      <HandwrittenNote lines={data.noteLines} className="absolute right-[4%] top-8 hidden text-[34px] xl:block 2xl:top-[40px] 2xl:text-[42px] 3xl:text-[50px]" />

      <div className={`${ui.container} relative`}>
        <div className="mx-auto max-w-[1100px] text-center">
          <SectionEyebrow
            center
            compact
            className="[&>span:first-child]:h-[2px] [&>span:last-child]:h-[2px] 2xl:gap-8 3xl:gap-[46px] 3xl:[&>span:first-child]:w-[104px] 3xl:[&>span:last-child]:w-[104px] 3xl:[&>span:nth-child(2)]:text-[24px]"
          >
            {data.label}
          </SectionEyebrow>
          <h2 className="mt-2 text-[clamp(28px,3.45vw,66px)] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-title)] 2xl:mt-3">
            {data.title.lead + " "}<span className="text-[var(--color-gallery-accent)]">{data.title.highlight}</span>{" " + data.title.after}
          </h2>
          <p className="mx-auto mt-2 text-[15px] leading-[1.45] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-3 2xl:text-[21px] 3xl:text-[24.5px]">
            {data.description[0] + " "}<br className="hidden xl:block" />
            {data.description[1]}
          </p>
        </div>

        <ul className="mt-9 grid grid-cols-1 gap-x-5 gap-y-7 min-[480px]:grid-cols-2 lg:grid-cols-3 2xl:mt-[44px] 2xl:gap-x-[36px] 2xl:gap-y-[32px] 3xl:px-[12px]">
          {visible.map((v, i) => (
            <li key={v.id} className="min-w-0">
              <ScrollReveal variant="fade-up" delay={i * 120} duration={600}>
                <GalleryVideoCard video={v} playLabel={data.playVideo} />
              </ScrollReveal>
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <Pagination page={page} totalPages={totalPages} onChange={goTo} labels={data.pagination} className="mt-10 2xl:mt-[38px]" />
        )}

        <div className="mt-10 text-center 2xl:mt-[52px]">
          <Link
            href={data.buttonUrl}
            className={`${ui.btnSolid} ${ui.btnYellow} group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-9 py-3.5 text-[15px] font-bold xl:text-[17px] 2xl:px-14 2xl:py-5 2xl:text-[21px] 3xl:h-[82px] 3xl:w-[416px] 3xl:gap-5 3xl:px-0 3xl:py-0 3xl:text-[24px]`}
          >
            {data.buttonText}
            <Icon name={data.buttonIcon} className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const Gallery = ({ data }: GalleryProps) => {
  if (!data) return null;
  return (
    <>
      <GalleryPhotos data={data.photos} />
      <GalleryVideo data={data.video} />
    </>
  );
};
