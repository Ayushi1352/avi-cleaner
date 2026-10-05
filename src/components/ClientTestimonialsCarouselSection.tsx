"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionTag from "./SectionTag";
import CarouselDots from "./CarouselDots";
import ScrollReveal from "./ScrollReveal";
import { QuoteIcon, StarIcon } from "./icons";

// Quotes are kept to a similar length so every card looks equally full.
const testimonials = [
  {
    quote:
      "Avicleaner did an amazing job at our home! The team was professional, on time, and paid great attention to detail. Our house has never looked this clean and fresh.",
    name: "Priya Sharma",
    role: "Happy Homeowner",
    avatar: "/images/avatar-1.webp",
  },
  {
    quote:
      "Professional, reliable, and thorough! Avicleaner transformed our space completely. Great customer service and eco-friendly products that are safe for our family.",
    name: "Sneha Kapoor",
    role: "Regular Customer",
    avatar: "/images/avatar-2.webp",
  },
  {
    quote:
      "Booking was simple and the cleaners arrived right on time. Every room was spotless when they finished the job. We now use Avicleaner every month without fail.",
    name: "Amit Verma",
    role: "Office Manager",
    avatar: "/images/blog-author-1.webp",
  },
  {
    quote:
      "Excellent service! Our office looks so clean and organized now. The staff was friendly, efficient, and careful with our equipment. We will definitely book again!",
    name: "Rahul Mehta",
    role: "Business Owner",
    avatar: "/images/avatar-3.webp",
  },
  {
    quote:
      "Courteous and efficient crew. They handled high-touch surfaces and deep stains with great attention to hygiene. Highly recommended for commercial cleaning!",
    name: "Vikram Singh",
    role: "Facility Manager",
    avatar: "/images/team/team-5.webp",
  },
  {
    quote:
      "Our workspace has never been healthier or more inviting. Booking was effortless and the spotless results truly exceeded our team's expectations!",
    name: "Neha Malhotra",
    role: "HR Director",
    avatar: "/images/team/team-3.webp",
  },
];

function Stars({ className = "" }) {
  return (
    <div className={`flex justify-center gap-1.5 text-[#f7b924] ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 hover:scale-135 hover:rotate-6 cursor-pointer"
          style={{ animationDelay: `${i * 180}ms` }}
        >
          <StarIcon className="h-full w-auto animate-icon-shimmer" />
        </span>
      ))}
    </div>
  );
}

function Author({ t, big = false }) {
  return (
    <div className={`flex items-center justify-center text-left ${big ? "mt-5 gap-4 2xl:gap-6" : "mt-5 gap-4"}`}>
      <ImagePlaceholder
        src={t.avatar}
        alt={t.name}
        placeholderLabel=""
        className={`shrink-0 rounded-full border-[3px] border-white shadow-[0_0_0_1px_#dfe7e2] ${
          big ? "h-16 w-16 2xl:h-[88px] 2xl:w-[88px]" : "h-12 w-12 2xl:h-[70px] 2xl:w-[70px]"
        }`}
        imgClassName="object-cover object-top"
      />
      <div className="min-w-0">
        <p className={`font-bold text-navy ${big ? "text-[16px] 2xl:text-[20px]" : "text-[14px] 2xl:text-[17px]"}`}>
          {t.name}
        </p>
        <p className={`text-muted ${big ? "text-[13px] 2xl:text-[15px]" : "text-[12px] 2xl:text-[14px]"}`}>
          {t.role}
        </p>
      </div>
    </div>
  );
}

const mod = (n, m) => ((n % m) + m) % m;

// Allow CSS custom properties in style objects.
type CSSVars = CSSProperties & Record<string, string | number>;

// Where a slide sits for a given distance from the centre.
// --tx-m is the phone offset; --tx / --ry / --sc drive the desktop coverflow.
function slideStyle(offset: number, hasEntered: boolean = true): CSSVars {
  const dir = Math.sign(offset);
  const dist = Math.abs(offset);

  if (!hasEntered) {
    if (dist === 0) {
      return {
        "--tx-m": "0px",
        "--tx": "0px",
        "--ry": "0deg",
        "--sc": 0.88,
        "--op": 0,
        transform: "translateY(40px)",
      };
    }
    if (dist === 1) {
      return {
        "--tx-m": `calc(${dir * 140}% + ${dir * 40}px)`,
        "--tx": `calc(${dir * 120}% + ${dir * 16}px)`,
        "--ry": `${dir * -30}deg`,
        "--sc": 0.5,
        "--op": 0,
        transform: `translateX(${dir * 50}px)`,
      };
    }
  }

  if (dist === 0) return { "--tx-m": "0px", "--tx": "0px", "--ry": "0deg", "--sc": 1, "--op": 1 };
  if (dist === 1) {
    return {
      "--tx-m": `calc(${dir * 100}% + ${dir * 40}px)`,
      "--tx": `calc(${dir * 83}% + ${dir * 16}px)`,
      "--ry": `${dir * -22}deg`,
      "--sc": 0.66,
      "--op": 0.85,
    };
  }
  return {
    "--tx-m": `calc(${dir * 200}% + ${dir * 80}px)`,
    "--tx": `${dir * 150}%`,
    "--ry": `${dir * -22}deg`,
    "--sc": 0.5,
    "--op": 0,
  };
}

export default function TestimonialsSection() {
  // `pos` runs on without wrapping so slides always travel the short way round.
  const [pos, setPos] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const total = testimonials.length;
  const index = mod(pos, total);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setHasEntered(true);
      setEntranceDone(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          obs.unobserve(el);
          setTimeout(() => {
            setEntranceDone(true);
          }, 1100);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Automatic sliding: advance to next slide every 4 seconds unless hovered/focused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setPos((p) => p + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (i: number) => {
    let delta = i - index;
    if (delta > total / 2) delta -= total;
    if (delta < -total / 2) delta += total;
    setPos((p) => p + delta);
  };

  // Enough off-screen slides on each side for the furthest dot jump to slide in.
  const reach = 2 + Math.ceil(total / 2);
  const slides = [];
  for (let k = pos - reach; k <= pos + reach; k++) slides.push(k);

  return (
    <section id="testimonials" className="bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="container-x">
        <div
          ref={sectionRef}
          className="relative overflow-hidden rounded-[20px] bg-[#f7f9fa] px-4 py-8 sm:px-8 sm:py-10 xl:px-12 2xl:rounded-[4px] 2xl:px-[56px] 2xl:pb-[36px] 2xl:pt-[32px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Leaf + handwritten note */}
          <svg
            aria-hidden="true"
            viewBox="0 0 400 360"
            className="pointer-events-none absolute left-0 top-0 hidden w-[300px] text-[#e3efe6] xl:block 2xl:w-[380px]"
          >
            <path fill="currentColor" d="M0 0h40c170 30 290 140 350 320C220 330 80 260 20 140 5 100 0 50 0 0Z" />
            <path fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" d="M60 40c90 60 170 150 240 260" />
          </svg>
          <p className="pointer-events-none absolute left-8 top-10 hidden -rotate-[14deg] font-script text-[30px] font-medium leading-[0.95] text-[#1d4a3a] xl:block 2xl:left-[100px] 2xl:top-[62px] 2xl:text-[38px]">
            Trusted
            <br />
            by Happy
            <br />
            &nbsp;&nbsp;Clients
            <svg viewBox="0 0 100 14" className="mt-1 block h-3 w-full" aria-hidden="true">
              <path d="M2 12C35 4 65 2 98 3" fill="none" stroke="#2a7c35" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </p>

          {/* Out-of-focus plant leaves in the bottom-left corner */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/plant-blur.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute bottom-0 left-0 hidden h-[58%] w-auto max-w-none! -translate-x-[46%] translate-y-[36%] -scale-x-100 select-none lg:block"
          />

          {/* Pale arcs in the bottom-right corner */}
          <svg
            aria-hidden="true"
            viewBox="0 0 300 260"
            className="pointer-events-none absolute bottom-0 right-0 hidden w-[220px] lg:block 2xl:w-[300px]"
          >
            <path fill="none" stroke="#e9f3eb" strokeWidth="44" d="M0 290C150 270 270 180 320 20" />
            <path fill="none" stroke="#e9f3eb" strokeWidth="26" d="M150 290c80-22 140-70 172-140" />
          </svg>

          {/* Header */}
          <ScrollReveal variant="fade-up" duration={700}>
            <div className="relative mx-auto max-w-[900px] text-center">
              <SectionTag center>Testimonials</SectionTag>
              <h2 className="mt-4 text-[clamp(30px,3.2vw,62px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-navy">
                What Our Clients are Saying
                <br />
                <span className="text-[#2a6a4a]">About Us</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-[1.4] text-body sm:text-base xl:text-[18px] 2xl:text-[20.5px]">
                Real feedback from real people. See why homeowners and businesses{" "}
                <br className="hidden md:block" />
                trust Avicleaner for their cleaning needs.
              </p>
            </div>
          </ScrollReveal>

          {/* Slider: every slide shares one grid cell, so all cards get the same size */}
          <div className="relative mt-12 grid 2xl:mt-[30px]">
            {slides.map((k) => {
              const t = testimonials[mod(k, total)];
              const offset = k - pos;
              const active = offset === 0;
              const side = Math.abs(offset) === 1;

              const getDelay = () => {
                if (entranceDone || !hasEntered) return "0ms";
                if (offset === 0) return "100ms"; // Center card rises from bottom
                if (offset === -1) return "320ms"; // Left card slides in from left
                if (offset === 1) return "540ms"; // Right card slides in from right
                return "0ms";
              };

              return (
                <article
                  key={k}
                  aria-hidden={!active}
                  onClick={side ? () => setPos(k) : undefined}
                  style={{
                    ...slideStyle(offset, hasEntered),
                    transitionDelay: getDelay(),
                  }}
                  className={`relative flex w-full flex-col justify-center justify-self-center rounded-[24px] px-5 pb-8 pt-12 text-center opacity-(--op) transition-[transform,opacity,background-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] [grid-area:1/1] [transform:translateX(var(--tx-m))] motion-reduce:transition-none sm:px-10 lg:w-[46%] lg:[transform:perspective(1200px)_translateX(var(--tx))_rotateY(var(--ry))_scale(var(--sc))] 2xl:px-[70px] 2xl:pb-7 2xl:pt-[62px] ${
                    active
                      ? "z-20 bg-white shadow-[0_20px_50px_-24px_rgba(11,27,69,0.3)]"
                      : side
                        ? "z-10 cursor-pointer bg-[#edf5ef] shadow-none"
                        : "pointer-events-none z-0 bg-[#edf5ef] shadow-none"
                  }`}
                >
                  <span
                    className={`absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-[22%] items-center justify-center rounded-full bg-green-dark text-white shadow-md transition-[transform,opacity] duration-500 hover:scale-115 hover:-rotate-6 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <QuoteIcon className="h-6 w-6 2xl:h-7 2xl:w-7" />
                  </span>
                  <Stars className="h-5 2xl:h-6" />
                  <p className="mt-5 text-balance text-[15px] leading-[1.5] text-body sm:text-base xl:text-[18px] 2xl:mt-6 2xl:text-[20px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <Author t={t} big />
                </article>
              );
            })}
          </div>

          {/* Dots & Navigation Arrows */}
          <div className="relative mt-8 flex items-center justify-center gap-3.5 2xl:mt-6">
            <button
              type="button"
              onClick={() => setPos((p) => p - 1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#124734] shadow-[0_2px_10px_-2px_rgba(11,42,28,0.25)] transition-all hover:bg-[#124734] hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.6} />
            </button>
            <CarouselDots pages={total} index={index} goTo={goTo} />
            <button
              type="button"
              onClick={() => setPos((p) => p + 1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#124734] shadow-[0_2px_10px_-2px_rgba(11,42,28,0.25)] transition-all hover:bg-[#124734] hover:text-white"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.6} />
            </button>
          </div>

          <div className="relative mt-6 flex justify-center">
            <Link
              href="/testimonials"
              className="btn-outline group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[14px] font-semibold [--btn-ink:#0b1b45] [--btn:#2a6a4a] 2xl:px-7 2xl:py-3 2xl:text-[15px]"
            >
              View All Testimonials
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
