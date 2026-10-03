"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Tiny slider helper.
 * Pass `setViewport` as the `ref` of the viewport element and give it the CSS variables
 * `--per` (cards per view) and `--gap` (gap between cards), e.g.
 *   className="[--per:1] sm:[--per:2] xl:[--per:3] [--gap:16px]"
 * Cards per view are read from CSS, so breakpoints live in Tailwind.
 */
export default function useCarousel(total, { loop = false } = {}) {
  const [node, setViewport] = useState(null);
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

  const trackStyle = {
    transform: `translateX(calc(${-index} * (100% + var(--gap)) / var(--per)))`,
  };

  return {
    setViewport,
    per,
    index,
    maxIndex,
    canPrev,
    canNext,
    pages: maxIndex + 1,
    next,
    prev,
    goTo: setIndex,
    trackStyle,
  };
}

/** Class for each slide so exactly `--per` cards fit the viewport. */
export const slideClass =
  "shrink-0 grow-0 basis-[calc((100%_-_(var(--per)_-_1)_*_var(--gap))_/_var(--per))]";

/** Class for the track. */
export const trackClass =
  "flex w-full gap-[var(--gap)] transition-transform duration-500 ease-out";
