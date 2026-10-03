"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { RoundQuoteIcon } from "@/components/solidIcons";

const TABS = ["About Me", "Responsibilities", "Experience"];

/** Tabs: About Me / Responsibilities / Experience, with a quote card. */
export default function MemberTabs({ member }: { member: any }) {
  const [active, setActive] = useState(TABS[0]);

  const heading: Record<string, string> = {
    "About Me": `About ${member.first}`,
    Responsibilities: "Key Responsibilities",
    Experience: "Experience at a Glance",
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      {/* Faint leaf bottom-left */}
      <svg aria-hidden="true" viewBox="0 0 120 260" className="pointer-events-none absolute bottom-0 left-0 hidden w-[80px] text-[#eef8f2] lg:block">
        <path fill="currentColor" d="M0 20c70 40 110 120 90 240H0V20Z" />
      </svg>

      <div className="container-x relative">
        <div className="3xl:pl-[21px] 3xl:pr-[34px]">
          {/* Tab buttons */}
          <div role="tablist" aria-label={`${member.name} details`} className="grid grid-cols-1 gap-1.5 min-[480px]:grid-cols-3">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`rounded-[14px] px-3 py-3.5 text-[15px] font-bold transition sm:text-[17px] xl:py-5 xl:text-[20px] 2xl:rounded-[18px] 2xl:py-[26px] 2xl:text-[23px] 3xl:py-[30px] 3xl:text-[26px] ${
                  active === tab
                    ? "bg-[#0f4a35] text-white shadow-[0_10px_24px_-14px_rgba(15,74,53,0.8)]"
                    : "bg-[#e8faef] text-[#0f4a35] hover:bg-[#d3efdf]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div role="tabpanel" className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_minmax(0,420px)] 2xl:mt-[38px] 2xl:grid-cols-[1fr_490px] 2xl:gap-[45px] 3xl:mt-[56px]">
            <div className="min-w-0 lg:pl-1.5 2xl:pl-[14px]">
              <h2 className="text-[28px] font-extrabold leading-tight text-[#0b1a12] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px]">
                {heading[active]}
              </h2>

              {active === "About Me" && (
                <div className="mt-4 space-y-4 2xl:mt-5 2xl:space-y-6 3xl:max-w-[1195px]">
                  {member.about.map((p: string) => (
                    <p key={p.slice(0, 24)} className="text-[15px] leading-[1.7] text-[#6a6f7a] sm:text-base xl:text-[18px] 2xl:text-[21px] 3xl:text-[26.5px] 3xl:leading-[1.62]">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {active === "Responsibilities" && (
                <ul className="mt-5 space-y-3.5 2xl:mt-6 2xl:space-y-5">
                  {member.responsibilities.map((r: string) => (
                    <li key={r} className="flex gap-3 text-[15px] leading-[1.6] text-[#6a6f7a] sm:text-base xl:text-[18px] 2xl:text-[21px] 3xl:text-[24px]">
                      <CheckCircle2 className="mt-[0.2em] h-[1.1em] w-[1.1em] shrink-0 text-[#1f5a41]" strokeWidth={2.2} />
                      <span className="min-w-0">{r}</span>
                    </li>
                  ))}
                </ul>
              )}

              {active === "Experience" && (
                <ul className="mt-5 space-y-3 2xl:mt-6 2xl:space-y-4">
                  {member.experience.map((e: any) => (
                    <li key={e.title + e.years} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 rounded-[14px] bg-[#f5faf7] px-4 py-3.5 2xl:px-6 2xl:py-5">
                      <span className="min-w-0">
                        <span className="block text-[16px] font-bold text-[#0b1a12] xl:text-[18px] 2xl:text-[22px]">{e.title}</span>
                        <span className="block text-[14px] text-[#1f5a41] xl:text-[15px] 2xl:text-[18px]">{e.company}</span>
                      </span>
                      <span className="shrink-0 rounded-full bg-[#dff3e8] px-3.5 py-1.5 text-[13px] font-medium text-[#0b1a12] 2xl:text-[16px]">
                        {e.years}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Quote card */}
            <figure className="flex min-w-0 gap-4 rounded-[20px] bg-[#e8f7ee] p-6 sm:p-8 2xl:gap-6 2xl:rounded-[24px] 2xl:px-[38px] 2xl:py-[44px] 3xl:-mt-2 3xl:gap-[22px]">
              <RoundQuoteIcon className="h-9 w-9 shrink-0 text-[#0f4a35] 2xl:h-12 2xl:w-12 3xl:h-[62px] 3xl:w-[62px]" />
              <div className="min-w-0 pt-2 2xl:pt-5 3xl:max-w-[326px] 3xl:pt-[28px]">
                <blockquote className="text-[18px] font-medium italic leading-[1.5] text-[#134c38] xl:text-[21px] 2xl:text-[26px] 3xl:text-[29.5px]">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-[15px] font-semibold text-[#0f4a35] 2xl:mt-5 2xl:text-[21px] 3xl:text-[27px]">
                  &mdash; {member.name}
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
