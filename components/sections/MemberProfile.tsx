import type { SVGAttributes } from "react";
import type { GlobalUIData, TeamDetailData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { fillLabel, mailHref, telHref } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

/** Top of the Team Detail page: photo, name, contact info and strengths. */
export const MemberProfile = ({ data, ui: labels }: { data?: TeamDetailData; ui?: GlobalUIData }) => {
  if (!data) return null;
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
          {/* ---------- Photo with quote bar ---------- */}
          <div className="relative mx-auto aspect-[668/860] w-full min-w-0 max-w-[560px] overflow-hidden rounded-[20px] shadow-[0_18px_40px_-26px_var(--color-shadow-card-45)] md:max-w-none 2xl:rounded-[24px]">
            <PhotoSlot
              src={member.photo}
              alt={member.name}
              ui={labels}
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

          {/* ---------- Name, intro, contact ---------- */}
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
                    aria-label={fillLabel(profile.memberOn, { name: member.name, name2: name })}
                    className={`${ui.btnSolid} flex h-11 w-11 items-center justify-center rounded-full [--btn:var(--color-forest)] 2xl:h-[58px] 2xl:w-[58px] 3xl:h-[70px] 3xl:w-[70px]`}
                  >
                    <Icon name={icon} className="h-5 w-5 2xl:h-6 2xl:w-6 3xl:h-[34px] 3xl:w-[34px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Strengths card ---------- */}
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
