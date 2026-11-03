"use client";

import { useState } from "react";
import Link from "next/link";
import type { FaqData, FaqItemData, GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { ui } from "@/components/ui/styles";

function FaqItem({ faq, toggleIcon, index, open, onToggle }: {
  faq: FaqItemData;
  toggleIcon: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const id = `faq-${index}`;
  return (
    <li className="min-w-0 overflow-hidden rounded-[10px] bg-[var(--color-white)] shadow-[0_6px_22px_-16px_var(--color-shadow-card-40)] ring-1 ring-[var(--color-faq-ring)] 2xl:rounded-[12px]">
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className={`flex w-full min-w-0 cursor-pointer items-center gap-3 px-3 text-left transition-[background-color,padding] duration-300 sm:gap-4 sm:px-4 xl:gap-6 2xl:gap-8 2xl:px-5 3xl:gap-[40px] 3xl:pl-[25px] 3xl:pr-[40px] ${
            open ? "bg-[var(--color-faq-bg)] py-3 3xl:py-[13px]" : "py-2 hover:bg-[var(--color-faq-bg-2)] 3xl:py-[7px]"
          }`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-faq-bg-3)] text-[var(--color-form-accent)] sm:h-11 sm:w-11 xl:h-12 xl:w-12 2xl:h-[54px] 2xl:w-[54px] 3xl:h-[62px] 3xl:w-[62px]">
            <Icon name={faq.icon} className="h-[52%] w-[52%]" strokeWidth={faq.icon === "LuClock" ? 2.6 : undefined} />
          </span>
          <span className="min-w-0 flex-1 text-[15px] font-semibold leading-snug text-[var(--color-title)] sm:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]">
            {faq.question}
          </span>
          <Icon name={toggleIcon}
            className={`h-5 w-5 shrink-0 text-[var(--color-title)] transition-transform duration-300 2xl:h-6 2xl:w-6 3xl:h-7 3xl:w-7 ${open ? "rotate-180" : ""}`}
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
          <p className="px-4 pb-5 pt-4 text-[14.5px] leading-[1.6] text-[var(--color-text-sage)] sm:pl-[76px] sm:pr-8 sm:text-[15px] xl:pl-[88px] xl:text-[16px] 2xl:pb-6 2xl:pl-[106px] 2xl:pt-5 2xl:text-[18px] 3xl:pb-[26px] 3xl:pl-[127px] 3xl:pr-[56px] 3xl:pt-[22px] 3xl:text-[21px] 3xl:leading-[1.5]">
            {faq.answer}
          </p>
        </div>
      </div>
    </li>
  );
}

/** FAQ page body: photo and help card on the left, accordion on the right. */
export const FaqAccordion = ({ data, ui: labels }: { data?: FaqData; ui: GlobalUIData }) => {
  const [openIndex, setOpenIndex] = useState(0);
  if (!data) return null;

  return (
    <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className={ui.container}>
        <div className="relative isolate overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,var(--color-bg-faq)_0%,var(--color-faq-gradient)_100%)] 2xl:rounded-[20px]">
          {/* Leaves, top right */}
          <svg aria-hidden="true" viewBox="0 0 130 230" className="pointer-events-none absolute right-0 top-3 -z-10 w-[70px] text-[var(--color-faq-text)] sm:w-[90px] 2xl:top-[20px] 2xl:w-[125px]">
            <path fill="currentColor" d="M22 4c52 8 92 48 104 104 2 12 4 26 4 38-34-6-66-28-86-62C32 62 24 34 22 4Z" />
            <path fill="currentColor" d="M130 96v128c-28-12-50-40-56-76-2-14-2-28 2-40 22-2 40-6 54-12Z" opacity=".75" />
            <path fill="none" stroke="var(--color-bg-faq)" strokeWidth="4" strokeLinecap="round" d="M40 30c24 34 52 70 86 112" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,31%)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-8 xl:gap-x-10 3xl:gap-x-[54px]">
            {/* ---------- Photo ---------- */}
            <div className="relative order-1 aspect-[16/10] w-full overflow-hidden sm:aspect-[16/8] lg:aspect-[563/698] lg:rounded-br-[16px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.image.src} alt={data.image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[62%_70%] lg:object-[68%_bottom]" />
              <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--color-faq-overlay-72)_0%,var(--color-faq-overlay-40)_32%,var(--color-faq-overlay-0)_62%)]" />
              <HandwrittenNote lines={labels.noteLines} color="text-[var(--color-white)]" className="absolute left-[7%] top-[16%] text-[clamp(26px,5vw,44px)] lg:top-[28%] lg:text-[clamp(24px,2.4vw,46px)]" />
            </div>

            {/* ---------- Accordion ---------- */}
            <div className="order-2 min-w-0 px-4 pb-8 pt-9 sm:px-6 sm:pt-10 lg:row-span-2 lg:pb-12 lg:pl-0 lg:pr-6 xl:pr-8 2xl:pt-[44px] 3xl:pb-[75px] 3xl:pr-[44px]">
              <div className="text-center">
                <SectionEyebrow center className="3xl:[&>span:first-child]:w-[50px] 3xl:[&>span:last-child]:w-[50px] 3xl:[&>span:nth-child(2)]:text-[17px]">
                  {data.label}
                </SectionEyebrow>
                <h2 className="mt-3 text-[clamp(26px,3.25vw,62px)] font-extrabold leading-[1.14] tracking-[-0.015em] text-[var(--color-title)] 2xl:mt-4">
                  <span className="text-[var(--color-form-accent)]">{data.title.highlight}</span>{" " + data.title.after}
                </h2>
                <p className="mx-auto mt-3 max-w-[940px] text-[15px] leading-[1.5] text-[var(--color-text-sage)] sm:text-[1rem] xl:text-[17px] 2xl:mt-4 2xl:text-[19px] 3xl:text-[22px]">
                  {data.description}
                </p>
              </div>

              <ul className="mt-6 space-y-3 2xl:mt-8 2xl:space-y-3.5 3xl:mt-[34px] 3xl:space-y-[14px]">
                {data.faqs.map((faq, i) => (
                  <FaqItem key={faq.id} faq={faq} toggleIcon={data.toggleIcon} index={i} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
                ))}
              </ul>
            </div>

            {/* ---------- Help card ---------- */}
            <div className="order-3 min-w-0 px-4 pb-8 sm:px-6 lg:self-start lg:pb-12 lg:pl-[7%] lg:pr-0 lg:pt-5 2xl:pt-[25px] 3xl:pb-[75px]">
              <div className="relative isolate overflow-hidden rounded-[12px] bg-[var(--color-faq-bg-4)] px-6 pb-8 pt-7 text-[var(--color-white)] lg:px-5 xl:px-7 2xl:rounded-[14px] 2xl:pb-10 2xl:pt-9 3xl:pb-[48px] 3xl:pl-[43px] 3xl:pr-[30px] 3xl:pt-[42px]">
                <svg aria-hidden="true" viewBox="0 0 200 220" className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[120px] text-[var(--color-white-8)] 2xl:w-[180px]">
                  <path fill="currentColor" d="M200 20c-50 20-84 66-84 124 0 26 8 52 22 76h62V20Z" />
                  <path fill="currentColor" d="M10 220c16-46 56-76 108-78-4 32-22 60-50 78H10Z" />
                </svg>

                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-faq-bg-5)] text-[var(--color-form-accent)] 2xl:h-[68px] 2xl:w-[68px] 3xl:h-[80px] 3xl:w-[80px]">
                  <Icon name={data.help.icon} className="h-[52%] w-[52%]" strokeWidth={2} />
                </span>
                <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] 2xl:mt-6 2xl:text-[13px] 3xl:mt-[30px] 3xl:text-[15px]">
                  {data.help.eyebrow}
                </p>
                <h2 className="mt-2 text-[24px] font-bold leading-tight lg:text-[21px] xl:text-[25px] 2xl:mt-3 2xl:text-[28px] 3xl:text-[32px]">
                  {data.help.title}
                </h2>
                <p className="mt-2.5 text-[15px] leading-[1.55] text-[var(--color-white-90)] lg:text-[14px] xl:text-[15px] 2xl:mt-3 2xl:text-[17px] 3xl:text-[19px]">
                  {data.help.text}
                </p>
                <Link
                  href={data.help.button.href}
                  className={`${ui.btnSolid} ${ui.btnYellow} group mt-5 inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-7 py-3 text-[15px] font-bold 2xl:mt-6 2xl:px-9 2xl:py-3.5 2xl:text-[18px] 3xl:mt-[26px] 3xl:h-[62px] 3xl:w-[225px] 3xl:px-0 3xl:py-0 3xl:text-[20px]`}
                >
                  {data.help.button.label}
                  <Icon name={data.help.button.icon} className="h-[1em] w-[1em] transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
