"use client";

import { useState } from "react";
import type { TeamDetailData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fillLabel } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

/** Tabs: About Me / Responsibilities / Experience, with a quote card. */
export const MemberTabs = ({ data }: { data?: TeamDetailData }) => {
  const tabs = data?.tabs.items ?? [];
  const [active, setActive] = useState(tabs[0]?.id);
  if (!data) return null;
  const { member } = data;
  const activeTab = tabs.find((tab) => tab.id === active) || tabs[0];
  const heading = fillLabel(activeTab.heading, { first: member.first });

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      {/* Faint leaf bottom-left */}
      <svg aria-hidden="true" viewBox="0 0 120 260" className="pointer-events-none absolute bottom-0 left-0 hidden w-[80px] text-[var(--color-member-text-3)] lg:block">
        <path fill="currentColor" d="M0 20c70 40 110 120 90 240H0V20Z" />
      </svg>

      <div className={`${ui.container} relative`}>
        <div className="3xl:pl-[21px] 3xl:pr-[34px]">
          {/* Tab buttons */}
          <div role="tablist" aria-label={fillLabel(data.tabs.label, { name: member.name })} className="grid grid-cols-1 gap-1.5 min-[480px]:grid-cols-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={`rounded-[14px] px-3 py-3.5 text-[15px] font-bold transition sm:text-[17px] xl:py-5 xl:text-[20px] 2xl:rounded-[18px] 2xl:py-[26px] 2xl:text-[23px] 3xl:py-[30px] 3xl:text-[26px] ${
                  active === tab.id
                    ? "bg-[var(--color-forest)] text-[var(--color-white)] shadow-[0_10px_24px_-14px_var(--color-forest-80)]"
                    : "bg-[var(--color-member-bg-8)] text-[var(--color-forest)] hover:bg-[var(--color-member-bg-9)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div role="tabpanel" className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_minmax(0,420px)] 2xl:mt-[38px] 2xl:grid-cols-[1fr_490px] 2xl:gap-[45px] 3xl:mt-[56px]">
            <div className="min-w-0 lg:pl-1.5 2xl:pl-[14px]">
              <h2 className="text-[28px] font-extrabold leading-tight text-[var(--color-title)] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px]">
                {heading}
              </h2>

              {active === "about" && (
                <div className="mt-4 space-y-4 2xl:mt-5 2xl:space-y-6 3xl:max-w-[1195px]">
                  {member.about.map((p) => (
                    <p key={p.slice(0, 24)} className="text-[15px] leading-[1.7] text-[var(--color-member-text)] sm:text-[1rem] xl:text-[18px] 2xl:text-[21px] 3xl:text-[26.5px] 3xl:leading-[1.62]">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {active === "responsibilities" && (
                <ul className="mt-5 space-y-3.5 2xl:mt-6 2xl:space-y-5">
                  {member.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-[15px] leading-[1.6] text-[var(--color-member-text)] sm:text-[1rem] xl:text-[18px] 2xl:text-[21px] 3xl:text-[24px]">
                      <Icon name={data.tabs.checkIcon} className="mt-[0.2em] h-[1.1em] w-[1.1em] shrink-0 text-[var(--color-primary-dark)]" strokeWidth={2.2} />
                      <span className="min-w-0">{r}</span>
                    </li>
                  ))}
                </ul>
              )}

              {active === "experience" && (
                <ul className="mt-5 space-y-3 2xl:mt-6 2xl:space-y-4">
                  {member.experience.map((e) => (
                    <li key={e.title + e.years} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 rounded-[14px] bg-[var(--color-member-bg-10)] px-4 py-3.5 2xl:px-6 2xl:py-5">
                      <span className="min-w-0">
                        <span className="block text-[16px] font-bold text-[var(--color-title)] xl:text-[18px] 2xl:text-[22px]">{e.title}</span>
                        <span className="block text-[14px] text-[var(--color-primary-dark)] xl:text-[15px] 2xl:text-[18px]">{e.company}</span>
                      </span>
                      <span className="shrink-0 rounded-full bg-[var(--color-icon-bg-mint)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-title)] 2xl:text-[16px]">
                        {e.years}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Quote card */}
            <figure className="flex min-w-0 gap-4 rounded-[20px] bg-[var(--color-member-bg-11)] p-6 sm:p-8 2xl:gap-6 2xl:rounded-[24px] 2xl:px-[38px] 2xl:py-[44px] 3xl:-mt-2 3xl:gap-[22px]">
              <Icon name={data.tabs.quoteIcon} className="h-9 w-9 shrink-0 text-[var(--color-forest)] 2xl:h-12 2xl:w-12 3xl:h-[62px] 3xl:w-[62px]" />
              <div className="min-w-0 pt-2 2xl:pt-5 3xl:max-w-[326px] 3xl:pt-[28px]">
                <blockquote className="text-[18px] font-medium italic leading-[1.5] text-[var(--color-member-text-4)] xl:text-[21px] 2xl:text-[26px] 3xl:text-[29.5px]">
                  {"“"}{member.quote}{"”"}
                </blockquote>
                <figcaption className="mt-4 text-[15px] font-semibold text-[var(--color-forest)] 2xl:mt-5 2xl:text-[21px] 3xl:text-[27px]">
                  {"—"} {member.name}
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
