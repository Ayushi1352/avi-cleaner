"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Tiny slider helper.
 * Pass `setViewport` as the `ref` of the viewport element and give it the CSS variables
 * `--per` (cards per view) and `--gap` (gap between cards), e.g.
 *   className="[--per:1] sm:[--per:2] xl:[--per:3] [--gap:16px]"
 * Cards per view are read from CSS, so breakpoints live in Tailwind.
 * Pass `setTrack` as the `ref` of the track (with trackClass): it gets the current slide as `--i`.
 */
export function useCarousel(total: number, { loop = false } = {}) {
  const [node, setViewport] = useState<HTMLElement | null>(null);
  const [track, setTrack] = useState<HTMLElement | null>(null);
  const [per, setPer] = useState(1);
  const [rawIndex, setIndex] = useState(0);

  useEffect(() => {
    const read = () => {
      if (!node) return;
      const v = parseInt(
        getComputedStyle(node).getPropertyValue("--per"),
        10
      );
      setPer(Number.isFinite(v) && v > 0 ? v : 1);
    };
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, [node]);

  const maxIndex = Math.max(0, total - per);
  const index = Math.min(rawIndex, maxIndex);

  const canPrev = loop ? true : index > 0;
  const canNext = loop ? true : index < maxIndex;

  const next = useCallback(() => {
    setIndex((v) => {
      const cur = Math.min(v, maxIndex);
      if (cur >= maxIndex) return loop ? 0 : cur;
      return cur + 1;
    });
  }, [maxIndex, loop]);

  const prev = useCallback(() => {
    setIndex((v) => {
      const cur = Math.min(v, maxIndex);
      if (cur <= 0) return loop ? maxIndex : 0;
      return cur - 1;
    });
  }, [maxIndex, loop]);

  useEffect(() => {
    track?.style.setProperty("--i", String(index));
  }, [track, index]);

  return {
    setViewport,
    setTrack,
    per,
    index,
    maxIndex,
    canPrev,
    canNext,
    pages: maxIndex + 1,
    next,
    prev,
    goTo: setIndex,
  };
}

export const slideClass =
  "shrink-0 grow-0 basis-[calc((100%_-_(var(--per)_-_1)_*_var(--gap))_/_var(--per))]";

export const trackClass =
  "flex w-full gap-[var(--gap)] [--i:0] [transform:translateX(calc(var(--i)_*_-1_*_(100%_+_var(--gap))_/_var(--per)))] transition-transform duration-500 ease-out";
