"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Clock, MessageCircleMore } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import HandwrittenNote from "@/components/HandwrittenNote";
import { ShieldCheckIcon, ThumbUpIcon, UsersIcon } from "@/components/icons";
import { site, pickIcons } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiLinks = site.faqPage.links.FaqAccordion;
const uiImages = site.faqPage.images.FaqAccordion;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "chevron-down": ChevronDown, "message-circle-more": MessageCircleMore, "arrow-right": ArrowRight };
const uiIcons = pickIcons(site.faqPage.icons.FaqAccordion, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.faqPage.text.FaqAccordion;

// Put your own photo here to replace the stand-in.
const PHOTO = uiImages.aboutSupplies;

function BroomIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5 13 11" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path fill="currentColor" d="m10.6 9 4.4 4.4-1.5 1.7c-1.9 3.2-4.9 5-9.5 5.5 1.2-1.3 1.6-2.4 1.7-3.6-.9.6-1.9.9-3 1 2.6-2.4 3-5 6.200-7.400L10.600 9Z" />
    </svg>
  );
}
function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm0 9h2v2H7v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-8 4h2v2H7v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Z"
      />
    </svg>
  );
}
function CoinsIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="8" ry="3.5" />
      <path d="M4 9.900c1.600 1.500 4.600 2.400 8 2.400s6.400-.9 8-2.400v2.300c0 1.900-3.600 3.500-8 3.500s-8-1.600-8-3.500V9.900Z" />
      <path d="M4 15c1.600 1.500 4.600 2.400 8 2.400s6.400-.9 8-2.400v2.300c0 1.900-3.600 3.500-8 3.500s-8-1.600-8-3.500V15Z" />
    </svg>
  );
}
function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="4.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect key={deg} x="10.4" y="1.6" width="3.2" height="4.4" rx="0.9" fill="currentColor" transform={`rotate(${deg} 12 12)`} />
      ))}
    </svg>
  );
}

// Icons by the name used in src/data/site.json.
const faqsIcons = {
  broom: BroomIcon,
  calendar: CalendarIcon,
  "shield-check": ShieldCheckIcon,
  coins: CoinsIcon,
  gear: GearIcon,
  clock: (p: any) => <Clock {...p} strokeWidth={2.6} />,
  users: UsersIcon,
  "thumb-up": ThumbUpIcon,
};

// Content lives in src/data/site.json.
const faqs = site.faqPage.faqs.map((item) => ({ ...item, icon: faqsIcons[item.icon] }));

function FaqItem({ faq, index, open, onToggle }: {
  faq: any;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = faq.icon;
  const id = `faq-${index}`;
  return (
    <li className="min-w-0 overflow-hidden rounded-[10px] bg-white shadow-[0_6px_22px_-16px_rgba(11,42,28,0.4)] ring-1 ring-[#e7efeb] 2xl:rounded-[12px]">
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className={`flex w-full min-w-0 cursor-pointer items-center gap-3 px-3 text-left transition-[background-color,padding] duration-300 sm:gap-4 sm:px-4 xl:gap-6 2xl:gap-8 2xl:px-5 3xl:gap-[40px] 3xl:pl-[25px] 3xl:pr-[40px] ${
            open ? "bg-[#edf9f3] py-3 3xl:py-[13px]" : "py-2 hover:bg-[#f5fbf8] 3xl:py-[7px]"
          }`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d5f2e3] text-[#12583f] sm:h-11 sm:w-11 xl:h-12 xl:w-12 2xl:h-[54px] 2xl:w-[54px] 3xl:h-[62px] 3xl:w-[62px]">
            <Icon className="h-[52%] w-[52%]" />
          </span>
          <span className="min-w-0 flex-1 text-[15px] font-semibold leading-snug text-[#0b1a12] sm:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]">
            {faq.q}
          </span>
          <uiIcons.chevronDown
            className={`h-5 w-5 shrink-0 text-[#0b1a12] transition-transform duration-300 2xl:h-6 2xl:w-6 3xl:h-7 3xl:w-7 ${open ? "rotate-180" : ""}`}
            strokeWidth={2.4}
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className={`min-h-0 overflow-hidden ${open ? "visible" : "invisible"}`}>
          <p className="px-4 pb-5 pt-4 text-[14.5px] leading-[1.6] text-[#5f6c69] sm:pl-[76px] sm:pr-8 sm:text-[15px] xl:pl-[88px] xl:text-[16px] 2xl:pb-6 2xl:pl-[106px] 2xl:pt-5 2xl:text-[18px] 3xl:pb-[26px] 3xl:pl-[127px] 3xl:pr-[56px] 3xl:pt-[22px] 3xl:text-[21px] 3xl:leading-[1.5]">
            {faq.a}
          </p>
        </div>
      </div>
    </li>
  );
}

/** FAQ page body: photo and help card on the left, accordion on the right. */
export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,#f6fcf9_0%,#eef9f3_100%)] 2xl:rounded-[20px]">
          {/* Leaves, top right */}
          <svg aria-hidden="true" viewBox="0 0 130 230" className="pointer-events-none absolute right-0 top-3 -z-10 w-[70px] text-[#ddf3e7] sm:w-[90px] 2xl:top-[20px] 2xl:w-[125px]">
            <path fill="currentColor" d="M22 4c52 8 92 48 104 104 2 12 4 26 4 38-34-6-66-28-86-62C32 62 24 34 22 4Z" />
            <path fill="currentColor" d="M130 96v128c-28-12-50-40-56-76-2-14-2-28 2-40 22-2 40-6 54-12Z" opacity=".75" />
            <path fill="none" stroke="#f6fcf9" strokeWidth="4" strokeLinecap="round" d="M40 30c24 34 52 70 86 112" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,31%)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-8 xl:gap-x-10 3xl:gap-x-[54px]">
            {/* ---------- Photo ---------- */}
            <div className="relative order-1 aspect-[16/10] w-full overflow-hidden sm:aspect-[16/8] lg:aspect-[563/698] lg:rounded-br-[16px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTO} alt={copy.avicleanerCleaningSuppliesReadyFor} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[62%_70%] lg:object-[68%_bottom]" />
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(8_40_28/0.72)_0%,rgb(8_40_28/0.4)_32%,rgb(8_40_28/0)_62%)]" />
              <HandwrittenNote color="text-white" className="absolute left-[7%] top-[16%] text-[clamp(26px,5vw,44px)] lg:top-[28%] lg:text-[clamp(24px,2.4vw,46px)]" />
            </div>

            {/* ---------- Accordion ---------- */}
            <div className="order-2 min-w-0 px-4 pb-8 pt-9 sm:px-6 sm:pt-10 lg:row-span-2 lg:pb-12 lg:pl-0 lg:pr-6 xl:pr-8 2xl:pt-[44px] 3xl:pb-[75px] 3xl:pr-[44px]">
              <div className="text-center">
                <SectionEyebrow center className="3xl:[&>span:first-child]:w-[50px] 3xl:[&>span:last-child]:w-[50px] 3xl:[&>span:nth-child(2)]:text-[17px]">
                  {copy.faqs}
                </SectionEyebrow>
                <h2 className="mt-3 text-[clamp(26px,3.25vw,62px)] font-extrabold leading-[1.14] tracking-[-0.015em] text-[#0b1a12] 2xl:mt-4">
                  <span className="text-[#12583f]">{copy.frequently}</span>{" " + copy.askedQuestions}
                </h2>
                <p className="mx-auto mt-3 max-w-[940px] text-[15px] leading-[1.5] text-[#5f6c69] sm:text-base xl:text-[17px] 2xl:mt-4 2xl:text-[19px] 3xl:text-[22px]">
                  {copy.findQuickAnswersToCommon}
                </p>
              </div>

              <ul className="mt-6 space-y-3 2xl:mt-8 2xl:space-y-3.5 3xl:mt-[34px] 3xl:space-y-[14px]">
                {faqs.map((faq, i) => (
                  <FaqItem key={faq.q} faq={faq} index={i} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
                ))}
              </ul>
            </div>

            {/* ---------- Help card ---------- */}
            <div className="order-3 min-w-0 px-4 pb-8 sm:px-6 lg:self-start lg:pb-12 lg:pl-[7%] lg:pr-0 lg:pt-5 2xl:pt-[25px] 3xl:pb-[75px]">
              <div className="relative isolate overflow-hidden rounded-[12px] bg-[#12503a] px-6 pb-8 pt-7 text-white lg:px-5 xl:px-7 2xl:rounded-[14px] 2xl:pb-10 2xl:pt-9 3xl:pb-[48px] 3xl:pl-[43px] 3xl:pr-[30px] 3xl:pt-[42px]">
                <svg aria-hidden="true" viewBox="0 0 200 220" className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[120px] text-white/[0.08] 2xl:w-[180px]">
                  <path fill="currentColor" d="M200 20c-50 20-84 66-84 124 0 26 8 52 22 76h62V20Z" />
                  <path fill="currentColor" d="M10 220c16-46 56-76 108-78-4 32-22 60-50 78H10Z" />
                </svg>

                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9f3e5] text-[#12583f] 2xl:h-[68px] 2xl:w-[68px] 3xl:h-[80px] 3xl:w-[80px]">
                  <uiIcons.messageCircleMore className="h-[52%] w-[52%]" strokeWidth={2} />
                </span>
                <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] 2xl:mt-6 2xl:text-[13px] 3xl:mt-[30px] 3xl:text-[15px]">
                  {copy.stillHaveQuestions}
                </p>
                <h2 className="mt-2 text-[24px] font-bold leading-tight lg:text-[21px] xl:text-[25px] 2xl:mt-3 2xl:text-[28px] 3xl:text-[32px]">
                  {copy.wereHereToHelp}
                </h2>
                <p className="mt-2.5 text-[15px] leading-[1.55] text-white/90 lg:text-[14px] xl:text-[15px] 2xl:mt-3 2xl:text-[17px] 3xl:text-[19px]">
                  {copy.cantFindTheAnswerYoure}
                </p>
                <Link
                  href={uiLinks.contactUs}
                  className="btn-solid btn-yellow group mt-5 inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-7 py-3 text-[15px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd659] 2xl:mt-6 2xl:px-9 2xl:py-3.5 2xl:text-[18px] 3xl:mt-[26px] 3xl:h-[62px] 3xl:w-[225px] 3xl:px-0 3xl:py-0 3xl:text-[20px]"
                >
                  {copy.contactUs}
                  <uiIcons.arrowRight className="h-[1em] w-[1em] transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
