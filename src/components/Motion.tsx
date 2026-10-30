"use client";

import { useEffect } from "react";

// Tailwind classes can't declare keyframes, so the site's endless icon motion and the card border
// sweep run through the Web Animations API. Every step keeps the easing a CSS keyframe would have.
type Loop = { duration: number; easing: string; frames: Keyframe[] };

const loops: Record<string, Loop> = {
  float: {
    duration: 3000,
    easing: "ease-in-out",
    frames: [{ transform: "translateY(0)" }, { transform: "translateY(-4px)" }, { transform: "translateY(0)" }],
  },
  // Give the element origin-bottom.
  sway: {
    duration: 3500,
    easing: "ease-in-out",
    frames: [
      { transform: "rotate(0deg)" },
      { transform: "rotate(-6deg)", offset: 0.25 },
      { transform: "rotate(6deg)", offset: 0.75 },
      { transform: "rotate(0deg)" },
    ],
  },
  twinkle: {
    duration: 2200,
    easing: "ease-in-out",
    frames: [
      { transform: "scale(1) rotate(0deg)", opacity: 0.9, filter: "drop-shadow(0 0 2px rgba(252, 217, 100, 0.4))" },
      { transform: "scale(1.22) rotate(10deg)", opacity: 1, filter: "drop-shadow(0 0 7px rgba(252, 217, 100, 0.95))" },
      { transform: "scale(1) rotate(0deg)", opacity: 0.9, filter: "drop-shadow(0 0 2px rgba(252, 217, 100, 0.4))" },
    ],
  },
  heartbeat: {
    duration: 2600,
    easing: "ease-in-out",
    frames: [
      { transform: "scale(1)" },
      { transform: "scale(1.12)", offset: 0.14 },
      { transform: "scale(1)", offset: 0.28 },
      { transform: "scale(1.08)", offset: 0.42 },
      { transform: "scale(1)", offset: 0.7 },
      { transform: "scale(1)" },
    ],
  },
  pulse: {
    duration: 2500,
    easing: "ease-in-out",
    frames: [{ transform: "scale(1)" }, { transform: "scale(1.06)" }, { transform: "scale(1)" }],
  },
  // Ring that grows and fades out behind an icon.
  radar: {
    duration: 2200,
    easing: "cubic-bezier(0.2, 0.8, 0.4, 1)",
    frames: [
      { transform: "scale(0.9)", opacity: 0.8 },
      { transform: "scale(1.55)", opacity: 0, offset: 0.7 },
      { transform: "scale(1.55)", opacity: 0 },
    ],
  },
  spin: {
    duration: 18000,
    easing: "linear",
    frames: [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
  },
  shimmer: {
    duration: 2200,
    easing: "ease-in-out",
    frames: [
      { opacity: 0.85, transform: "scale(1)" },
      { opacity: 1, transform: "scale(1.12)", filter: "drop-shadow(0 0 5px rgba(252, 217, 100, 0.8))" },
      { opacity: 0.85, transform: "scale(1)" },
    ],
  },
};

/** Gradient border of ui.cardBorder, moving while the card is hovered. */
const SWEEP: Keyframe[] = [{ backgroundPosition: "0% 50%" }, { backgroundPosition: "100% 50%" }, { backgroundPosition: "0% 50%" }];

/**
 * Plays the site's decorative motion.
 *
 * data-motion="float | sway | twinkle | heartbeat | pulse | radar | spin | shimmer" loops an
 * element for as long as it is on the page; data-motion-delay="<ms>" waits before the first cycle.
 * data-card-border (with ui.cardBorder) runs the border sweep while the card is hovered.
 *
 * With reduced motion turned on nothing moves.
 */
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const seen = new WeakSet<Element>();
    const sweeps = new Map<Element, Animation>();
    const running: Animation[] = [];

    const enter = (e: Event) => {
      const card = e.currentTarget as Element;
      sweeps.get(card)?.cancel();
      sweeps.set(card, card.animate(SWEEP, { duration: 2800, easing: "linear", iterations: Infinity, pseudoElement: "::after" }));
    };
    const leave = (e: Event) => {
      const card = e.currentTarget as Element;
      sweeps.get(card)?.cancel();
      sweeps.delete(card);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement | SVGElement>("[data-motion]").forEach((el) => {
        if (seen.has(el)) return;
        const loop = loops[el.dataset.motion ?? ""];
        if (!loop) return;
        seen.add(el);
        running.push(
          el.animate(
            loop.frames.map((f) => ({ easing: loop.easing, ...f })),
            { duration: loop.duration, delay: Number(el.dataset.motionDelay ?? 0), iterations: Infinity },
          ),
        );
      });
      document.querySelectorAll("[data-card-border]").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };

    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    scan();
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      sweeps.forEach((a) => a.cancel());
      running.forEach((a) => a.cancel());
      document.querySelectorAll("[data-card-border]").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return null;
}
