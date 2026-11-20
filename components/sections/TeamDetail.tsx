"use client";

import { useState, type SVGAttributes } from "react";
import type { TeamDetailData, TeamDetailProps } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionEyebrow } from "@/components/ui/SectionLabel";
import { fill, mailHref, telHref } from "@/components/ui/text";
import { ui } from "@/components/ui/styles";

const MemberProfile = ({ data }: { data: TeamDetailData }) => {
  const { member, profile } = data;
  // The phone icon is drawn solid like the other two.
  const solid: SVGAttributes<SVGElement> = { fill: "currentColor", strokeWidth: 0 };
  const contacts = [
    { icon: profile.contactIcons.email, text: member.email, href: mailHref(member.email), props: {} },
    { icon: profile.contactIcons.phone, text: member.phone, href: telHref(member.phone), props: solid },
    { icon: profile.contactIcons.address, text: member.location, href: "", props: {} },
  ];

  return (
    <section className="w-full bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr] lg:gap-10 xl:grid-cols-[668fr_607fr_411fr] xl:gap-8 2xl:gap-[47px] 3xl:gap-x-[55px] 3xl:pl-[16px] 3xl:pr-[8px]">
          <div className="relative mx-auto aspect-[668/860] w-full min-w-0 max-w-[560px] overflow-hidden rounded-[20px] shadow-[0_18px_40px_-26px_var(--color-shadow-card-45)] md:max-w-none 2xl:rounded-[24px]">
            <PhotoSlot
              src={member.photo}
              alt={member.name}
              className="absolute inset-0 h-full w-full"
              imgClassName="object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 flex w-[92%] items-center gap-4 rounded-tr-[18px] bg-gradient-to-r from-[var(--color-forest)] to-[var(--color-member-gradient)] px-5 py-5 text-[var(--color-white)] sm:w-[86%] 2xl:gap-6 2xl:rounded-tr-[20px] 2xl:px-[28px] 2xl:py-[30px] 3xl:gap-[46px] 3xl:pl-[66px]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-forest)] 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[90px] 3xl:w-[90px]">
                <Icon name={profile.quoteIcon} className="h-[58%] w-[58%]" />
              </span>
              <p className="min-w-0 max-w-[12.5em] text-[15px] font-medium leading-[1.6] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px]">
                {"“"}{member.photoQuote}{"”"}
              </p>
            </div>
          </div>

          <div className="min-w-0 self-center 3xl:pb-[40px]">
            <h1 className="break-words text-[clamp(34px,4.1vw,79px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-title)]">
              {member.name}
            </h1>
            <p className="mt-3 text-[19px] font-bold text-[var(--color-member-text-2)] xl:text-[22px] 2xl:mt-4 2xl:text-[27px] 3xl:mt-[18px] 3xl:text-[31px]">
              {member.role}
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-[var(--color-text-grey)] xl:text-[16px] 2xl:mt-5 2xl:text-[18px] 3xl:mt-[22px] 3xl:text-[20.5px] 3xl:leading-[1.85]">
              {member.intro}
            </p>

            <ul className="mt-6 space-y-3.5 2xl:mt-8 2xl:space-y-[22px]">
              {contacts.map(({ icon, text, href, props }) => (
                <li key={text} className="flex min-w-0 items-center gap-4 2xl:gap-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-member-bg-5)] text-[var(--color-forest)] 2xl:h-[60px] 2xl:w-[60px] 3xl:h-[76px] 3xl:w-[76px]">
                    <Icon name={icon} className="h-[46%] w-[46%]" {...props} />
                  </span>
                  {href ? (
                    <a href={href} className="min-w-0 break-all text-[15px] font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px]">
                      {text}
                    </a>
                  ) : (
                    <span className="min-w-0 text-[15px] font-medium text-[var(--color-text-dark)] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px]">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-3 2xl:mt-9 2xl:gap-[22px] 3xl:mt-[46px]">
              {profile.socials.map(({ id, name, icon, url }) => (
                <li key={id}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={fill(profile.memberOn, { name: member.name, name2: name })}
                    className={`${ui.btnSolid} flex h-11 w-11 items-center justify-center rounded-full [--btn:var(--color-forest)] 2xl:h-[58px] 2xl:w-[58px] 3xl:h-[70px] 3xl:w-[70px]`}
                  >
                    <Icon name={icon} className="h-5 w-5 2xl:h-6 2xl:w-6 3xl:h-[34px] 3xl:w-[34px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid min-w-0 grid-cols-1 gap-5 self-center rounded-[20px] bg-[var(--color-member-bg-6)] p-6 min-[420px]:grid-cols-2 md:col-span-2 lg:grid-cols-4 xl:col-span-1 xl:grid-cols-1 xl:gap-8 xl:px-6 xl:py-8 2xl:gap-[46px] 2xl:rounded-[28px] 2xl:px-[30px] 2xl:py-[36px] 3xl:mt-[43px] 3xl:gap-[57px] 3xl:self-start 3xl:py-[40px]">
            {member.strengths.map((label, i) => {
              const icon = profile.strengthIcons[i % profile.strengthIcons.length];
              const space = label.indexOf(" ");
              const first = space > 0 ? label.slice(0, space) : label;
              const rest = space > 0 ? label.slice(space + 1) : "";
              return (
                <li key={label} className="flex min-w-0 items-center gap-4 2xl:gap-[32px]">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-member-bg-7)] text-[var(--color-forest)] 2xl:h-[80px] 2xl:w-[80px] 3xl:h-[104px] 3xl:w-[104px]">
                    <Icon name={icon} className="h-[52%] w-[52%]" />
                  </span>
                  <span className="min-w-0 text-[15px] font-semibold leading-[1.45] text-[var(--color-title)] 2xl:text-[18px] 2xl:leading-[1.7] 3xl:text-[21px] 3xl:leading-[1.85]">
                    {first}
                    {rest && (
                      <>
                        {" "}
                        <br className="hidden xl:block" />
                        <span className="xl:whitespace-nowrap">{rest}</span>
                      </>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

const MemberTabs = ({ data }: { data: TeamDetailData }) => {
  const tabs = data.tabs.items;
  const [active, setActive] = useState(tabs[0]?.id);
  const { member } = data;
  const activeTab = tabs.find((tab) => tab.id === active) || tabs[0];
  const heading = fill(activeTab.heading, { first: member.first });

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <svg aria-hidden="true" viewBox="0 0 120 260" className="pointer-events-none absolute bottom-0 left-0 hidden w-[80px] text-[var(--color-member-text-3)] lg:block">
        <path fill="currentColor" d="M0 20c70 40 110 120 90 240H0V20Z" />
      </svg>

      <div className={`${ui.container} relative`}>
        <div className="3xl:pl-[21px] 3xl:pr-[34px]">
          <div role="tablist" aria-label={fill(data.tabs.label, { name: member.name })} className="grid grid-cols-1 gap-1.5 min-[480px]:grid-cols-3">
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

const MemberJourney = ({ data }: { data: TeamDetailData }) => {
  const { member } = data;

  return (
    <section className="w-full bg-[var(--color-member-bg)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="mx-auto max-w-[1080px] text-center">
          <SectionEyebrow center compact className="3xl:[&>span:nth-child(2)]:text-[25px] 3xl:[&>span:first-child]:w-[54px] 3xl:[&>span:last-child]:w-[54px]">
            {data.journey.label}
          </SectionEyebrow>
          <h2 className="mt-3 text-[clamp(28px,3.45vw,66px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-title)] 2xl:mt-4">
            {data.journey.title}
          </h2>
          <p className="mx-auto mt-3 text-[15px] leading-[1.5] text-[var(--color-member-text)] sm:text-[1rem] xl:text-[18px] 2xl:text-[21px] 3xl:text-[24px]">
            {data.journey.description[0] + " "}<br className="hidden xl:block" />
            {data.journey.description[1]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:items-stretch lg:grid-cols-[minmax(0,420px)_1fr] xl:grid-cols-[634fr_1112fr] xl:gap-12 2xl:mt-[42px] 2xl:gap-[71px]">
          <div className="mx-auto flex w-full min-w-0 max-w-[634px] flex-col">
            <div className="overflow-hidden rounded-[20px] shadow-[0_18px_40px_-28px_var(--color-shadow-card-45)] 2xl:rounded-[24px]">
              <PhotoSlot
                src={member.journeyPhoto}
                alt={member.name}
                className="relative aspect-[634/510] w-full"
                imgClassName="object-cover object-top"
              />
              <figure className="relative flex items-start gap-4 overflow-hidden bg-[var(--color-forest)] px-5 py-6 text-[var(--color-white)] sm:px-7 2xl:gap-[50px] 2xl:px-[42px] 2xl:py-[38px]">
                <svg aria-hidden="true" viewBox="0 0 120 140" className="pointer-events-none absolute -bottom-2 right-0 w-[90px] text-[var(--color-white-7)] 2xl:w-[130px]">
                  <path fill="currentColor" d="M118 4C60 8 18 44 14 96c-1 16 4 30 12 40 40 6 74-12 86-52 6-22 8-50 6-80Z" />
                  <path fill="currentColor" d="M96 140c0-22 8-38 24-46v46H96Z" />
                </svg>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-forest)] 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[88px] 3xl:w-[88px]">
                  <Icon name={data.journey.quoteIcon} className="h-[58%] w-[58%]" />
                </span>
                <div className="relative min-w-0">
                  <blockquote className="max-w-[14.2em] text-[15px] italic leading-[1.42] xl:text-[17px] 2xl:text-[20px] 3xl:text-[22px]">
                    {"“"}{member.journeyQuote}{"”"}
                  </blockquote>
                  <figcaption className="mt-3 text-[14px] font-semibold 2xl:mt-[18px] 2xl:text-[19px] 3xl:text-[22px]">
                    {"—"} {member.name}
                  </figcaption>
                </div>
              </figure>
            </div>

            <ul className="mt-4 grid grid-cols-3 content-center rounded-[20px] lg:flex-1 bg-[var(--color-member-bg-2)] px-2 py-6 text-center 2xl:rounded-[24px] 2xl:py-[40px]">
              {member.stats.map((s, i) => (
                <li key={s.label} className={`min-w-0 px-2 ${i > 0 ? "border-l border-[var(--color-member-border)]" : ""}`}>
                  <span className="block text-[24px] font-extrabold leading-none text-[var(--color-team-heading)] xl:text-[28px] 2xl:text-[36px]">{s.value}</span>
                  <span className="mx-auto mt-2 block max-w-[5.6em] text-[13px] leading-[1.35] text-[var(--color-member-text)] xl:text-[15px] 2xl:mt-4 2xl:text-[19px] 3xl:text-[22px]">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ol className="min-w-0 lg:flex lg:flex-col">
            {member.experience.map((e, i) => {
              const last = i === member.experience.length - 1;
              return (
                <li key={e.title + e.years} className="relative grid grid-cols-[44px_1fr] gap-3 pb-5 last:!pb-0 lg:flex-1 sm:grid-cols-[60px_1fr] sm:gap-6 2xl:grid-cols-[84px_1fr] 2xl:gap-[41px] 2xl:pb-[32px]">
                  {!last && (
                    <span aria-hidden="true" className="absolute -bottom-4 left-[21px] top-[60px] w-[2px] bg-[var(--color-member-bg-3)] sm:left-[29px] sm:top-[76px] 2xl:-bottom-5 2xl:left-[41px] 2xl:top-[104px]" />
                  )}
                  <span className="relative z-10 mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-forest)] text-[var(--color-white)] shadow-[0_8px_18px_-8px_var(--color-forest-80)] sm:h-[60px] sm:w-[60px] 2xl:mt-5 2xl:h-[84px] 2xl:w-[84px]">
                    <Icon name={e.icon} className="h-[44%] w-[44%]" />
                  </span>
                  <article className="min-w-0 rounded-[16px] bg-[var(--color-white)] p-5 shadow-[0_14px_34px_-26px_var(--color-shadow-card-40)] sm:p-6 2xl:rounded-[18px] 2xl:px-[32px] 2xl:pb-[28px] 2xl:pt-[26px]">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <h3 className="min-w-0 text-[17px] font-bold leading-snug text-[var(--color-title)] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px]">
                        {e.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-[var(--color-member-bg-4)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-team-heading)] 2xl:-mb-[14px] 2xl:px-6 2xl:py-2.5 2xl:text-[18px] 3xl:text-[22px]">
                        {e.years}
                      </span>
                    </div>
                    <p className="mt-1 text-[14px] font-medium text-[var(--color-primary-dark)] xl:text-[15px] 2xl:mt-0.5 2xl:text-[19px] 3xl:text-[22px]">{e.company}</p>
                    <p className="mt-3 max-w-[720px] text-[14px] leading-[1.5] text-[var(--color-member-text)] xl:text-[15px] 2xl:text-[19px] 3xl:text-[22px]">{e.text}</p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export const TeamDetail = ({ data }: TeamDetailProps) => {
  if (!data) return null;
  return (
    <>
      <MemberProfile data={data} />
      <MemberTabs data={data} />
      <MemberJourney data={data} />
    </>
  );
};
