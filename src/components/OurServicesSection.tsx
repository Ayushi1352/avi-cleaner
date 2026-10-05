"use client";

import Link from "next/link";
import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  Bath,
  House,
  SprayCan,
  Utensils,
} from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionTag from "./SectionTag";
import useCarousel, { slideClass, trackClass } from "./useCarousel";
import { SparklesIcon } from "./icons";
import homeData from "@/data/home.json";

// Text lives in src/data/home.json under text.OurServicesSection.
const copy = homeData.text.OurServicesSection;

const SERVICE_BANNER_IMAGE =
  "/images/home/services-banner.webp";

// Icons by the name used in src/data/home.json.
const servicesIcons = {
  utensils: Utensils,
  house: House,
  "spray-can": SprayCan,
  bath: Bath,
  "app-window": AppWindow,
};

// Content lives in src/data/home.json.
const services = homeData.services.map((item) => ({ ...item, icon: servicesIcons[item.icon] }));

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="flex h-full flex-col rounded-[18px] bg-white p-3.5 shadow-[0_12px_32px_-18px_rgba(11,27,69,0.25)] 2xl:p-4 3xl:p-[18px]">
      <div className="relative overflow-hidden rounded-[10px]">
        <ImagePlaceholder
          src={service.image}
          alt={service.title}
          placeholderLabel={service.image.replace("/images/", "")}
          className="aspect-[305/190] w-full rounded-[10px] lg:aspect-auto lg:h-[clamp(100px,15vh,190px)]"
        />
        <span className="absolute -left-1 -top-1 flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full border-[4px] border-white bg-[#2f5d45] text-white shadow-md transition-transform duration-300 hover:scale-115 hover:shadow-[0_10px_25px_-5px_rgba(47,93,69,0.5)] 2xl:h-[92px] 2xl:w-[92px] 2xl:border-[5px]">
          <Icon className="h-7 w-7 2xl:h-9 2xl:w-9 animate-icon-pulse-subtle" strokeWidth={1.6} />
          <SparklesIcon className="absolute right-3 top-3 h-3 w-3 text-yellow 2xl:right-4 2xl:top-4 2xl:h-4 2xl:w-4 animate-icon-twinkle" />
        </span>
      </div>
      <h3 className="mt-5 text-[18px] font-bold leading-[1.25] text-navy lg:mt-3.5 2xl:mt-4 xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
        {service.title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.5] text-body lg:mt-2 2xl:text-[15.5px] 3xl:text-[16.5px]">
        {service.text}
      </p>
      <div className="mt-auto pt-6 lg:pt-4">
        <Link
          href={service.href}
          className="btn-solid btn-yellow group/btn inline-flex items-center gap-3 rounded-full px-7 py-3 text-[14px] font-semibold 2xl:px-8 2xl:py-3 2xl:text-[15px] 3xl:px-9 3xl:py-[14px]"
        >
          {copy.readMore}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function ProvideCard({ className = "" }) {
  return (
    <div className={`rounded-[16px] bg-[#fddc6b] p-6 sm:p-8 lg:p-6 2xl:px-[30px] 2xl:py-6 3xl:px-[34px] 3xl:py-[30px] ${className}`}>
      <p className="text-[14px] font-medium text-[#1b1b1b] 2xl:text-[17px]">{copy.whatWeProvide}</p>
      <h3 className="mt-4 text-[28px] font-bold leading-[1.13] text-[#111] sm:text-[32px] lg:mt-3 lg:text-[28px] 2xl:text-[32px] 3xl:text-[35px]">
        {copy.bestServices + " "}<br className="hidden 2xl:block" />
        {copy.forYou}
      </h3>
      <span className="mt-5 block h-[3px] w-14 bg-green lg:mt-4" />
      <p className="mt-5 text-[14px] leading-[1.5] text-[#222] lg:mt-4 2xl:text-[15px] 3xl:text-[16px]">
        {copy.fromDeepCleaningToRegular}
      </p>
      <Link
        href="/book-now"
        className="btn-solid btn-forest group mt-7 inline-flex items-center gap-3 whitespace-nowrap rounded-full px-7 py-3.5 text-[14px] font-medium lg:mt-5 2xl:mt-5 2xl:px-8 2xl:py-3.5 2xl:text-[15px] 3xl:mt-6 3xl:px-9 3xl:py-4 3xl:text-[16px]"
      >
        {copy.requestAQuote}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  const mobile = useCarousel(services.length, { loop: false });
  const desktop = useCarousel(services.length, { loop: false });

  const header = (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:items-center">
      <div className="min-w-0 flex-1">
        <SectionTag>{copy.ourServices}</SectionTag>
        <h2 className="mt-2 text-[clamp(22px,2.2vw,48px)] font-bold leading-tight tracking-[-0.015em] text-navy sm:whitespace-nowrap lg:mt-2.5">
          {copy.bestCleaning + " "}<span className="text-green">{copy.servicesForYou}</span>
        </h2>
        <p className="mt-2 max-w-[680px] text-[14px] leading-[1.5] text-body sm:text-[15px] xl:text-[16.5px] 2xl:text-[18px]">
          {copy.weProvideReliableAndProfessional}
        </p>
      </div>

      <div className="shrink-0 self-start sm:self-center">
        <Link
          href="/services"
          className="btn-outline group inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold [--btn-ink:#0b1b45] [--btn:#2a7c35] sm:px-6 sm:py-2.5 sm:text-[14px] 2xl:px-7 2xl:py-3 2xl:text-[15px]"
        >
          <span className="whitespace-nowrap">{copy.viewAllServices}</span>
          <ArrowRight className="h-3.5 w-3.5 stroke-[2.2] transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <section id="services" className="scroll-mt-24 bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[20px] bg-[#f7f9fa] lg:rounded-[4px]">
          {/* Decorative pale leaves */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 800"
            className="pointer-events-none absolute -right-10 top-0 h-full text-mint opacity-60"
          >
            <path fill="currentColor" d="M600 0H320c40 160 150 260 280 300V0Z" />
            <path fill="currentColor" d="M600 520c-160-10-300 90-360 280h360V520Z" />
          </svg>

          {/* ---------- Below 1280px: stacked ---------- */}
          <div className="relative space-y-8 p-5 sm:p-8 lg:hidden">
            {header}
            <div className="grid gap-5 md:grid-cols-2">
              <ImagePlaceholder
                src={SERVICE_BANNER_IMAGE}
                alt={copy.avicleanerCleaningTeam}
                placeholderLabel="service-team.jpg"
                className="aspect-[4/3] w-full rounded-[16px] md:aspect-auto md:min-h-[340px]"
                imgClassName="object-cover object-top"
              />
              <ProvideCard />
            </div>

            <div className="min-w-0">
              <div
                ref={mobile.setViewport}
                className="overflow-hidden py-3 [--gap:16px] [--per:1] sm:[--per:2]"
              >
                <div className={trackClass} style={mobile.trackStyle}>
                  {services.map((s) => (
                    <div key={s.title} className={slideClass}>
                      <ServiceCard service={s} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-3 sm:mt-5">
                <button
                  type="button"
                  onClick={mobile.prev}
                  disabled={!mobile.canPrev}
                  aria-label={copy.previousService}
                  className={`btn-outline flex h-11 w-11 items-center justify-center rounded-full [--btn-ink:#6b7384] [--btn-ring:#d9e2dc] [--btn:#1f5a41] transition-opacity duration-200 ${!mobile.canPrev ? "opacity-35 cursor-not-allowed pointer-events-none" : "cursor-pointer"
                    }`}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={mobile.next}
                  disabled={!mobile.canNext}
                  aria-label={copy.nextService}
                  className={`btn-solid btn-forest flex h-11 w-11 items-center justify-center rounded-full transition-opacity duration-200 ${!mobile.canNext ? "opacity-35 cursor-not-allowed pointer-events-none" : "cursor-pointer"
                    }`}
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* ---------- 1280px and up: design layout ---------- */}
          <div className="relative hidden lg:block">
            <ImagePlaceholder
              src={SERVICE_BANNER_IMAGE}
              alt={copy.avicleanerCleaningTeam}
              placeholderLabel="service-team.jpg"
              className="absolute inset-y-0 left-0 w-[29.9%]"
              imgClassName="object-cover object-top"
            />
            <div className="relative pb-3 pl-[35.4%] pr-8 pt-4 xl:pr-10 2xl:pb-3 2xl:pr-[56px] 2xl:pt-[24px] 3xl:pb-4 3xl:pt-[32px]">
              {header}
            </div>
            <div className="relative flex items-start gap-[30px] pb-4 pl-[19.6%] pr-8 xl:pr-10 2xl:pb-4 2xl:pr-[48px]">
              <ProvideCard className="relative z-10 w-[clamp(270px,17.5vw,318px)] shrink-0" />
              <div className="min-w-0 flex-1">
                <div
                  ref={desktop.setViewport}
                  className="overflow-hidden py-3 [--gap:16px] lg:[--per:1] xl:[--per:2] xl:[--gap:20px] 2xl:[--per:3] 2xl:[--gap:24px]"
                >
                  <div className={trackClass} style={desktop.trackStyle}>
                    {services.map((s) => (
                      <div key={s.title} className={slideClass}>
                        <ServiceCard service={s} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-3 lg:mt-3 2xl:mt-4">
                  <button
                    type="button"
                    onClick={desktop.prev}
                    disabled={!desktop.canPrev}
                    aria-label={copy.previousService}
                    className={`btn-outline flex h-11 w-11 items-center justify-center rounded-full [--btn-ink:#6b7384] [--btn-ring:#d9e2dc] [--btn:#1f5a41] transition-opacity duration-200 2xl:h-12 2xl:w-12 ${!desktop.canPrev ? "opacity-35 cursor-not-allowed pointer-events-none" : "cursor-pointer"
                      }`}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={desktop.next}
                    disabled={!desktop.canNext}
                    aria-label={copy.nextService}
                    className={`btn-solid btn-forest flex h-11 w-11 items-center justify-center rounded-full transition-opacity duration-200 2xl:h-12 2xl:w-12 ${!desktop.canNext ? "opacity-35 cursor-not-allowed pointer-events-none" : "cursor-pointer"
                      }`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
