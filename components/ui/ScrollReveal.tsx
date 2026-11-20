"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 650,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Timing comes from props, so it is set on the element (Tailwind classes must be fixed strings).
  useEffect(() => {
    ref.current?.style.setProperty("transition-duration", `${duration}ms`);
    ref.current?.style.setProperty("transition-delay", `${delay}ms`);
  }, [duration, delay]);

  const variantStyles: Record<string, string> = {
    "fade-up": "translate-y-10",
    "fade-down": "-translate-y-10",
    "fade-left": "translate-x-12",
    "fade-right": "-translate-x-12",
    "zoom-in": "scale-95",
    fade: "",
  };

  const transformClass = variantStyles[variant] || "translate-y-7";

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${transformClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

