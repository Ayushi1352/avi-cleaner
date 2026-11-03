import type { GlobalUIData, TeamDetailData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ui } from "@/components/ui/styles";

/** "Work Experience — My Professional Journey": photo card, stats and timeline. */
export const MemberJourney = ({ data, ui: labels }: { data?: TeamDetailData; ui?: GlobalUIData }) => {
  if (!data) return null;
  const { member } = data;

  return (
    <section className="w-full bg-[var(--color-member-bg)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        {/* Header */}
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
          {/* ---------- Photo, quote, stats ---------- */}
          <div className="mx-auto flex w-full min-w-0 max-w-[634px] flex-col">
            <div className="overflow-hidden rounded-[20px] shadow-[0_18px_40px_-28px_var(--color-shadow-card-45)] 2xl:rounded-[24px]">
              <PhotoSlot
                src={member.journeyPhoto}
                alt={member.name}
                ui={labels}
                className="relative aspect-[634/510] w-full"
                imgClassName="object-cover object-top"
              />
              <figure className="relative flex items-start gap-4 overflow-hidden bg-[var(--color-forest)] px-5 py-6 text-[var(--color-white)] sm:px-7 2xl:gap-[50px] 2xl:px-[42px] 2xl:py-[38px]">
                {/* Faint leaf, bottom right */}
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

          {/* ---------- Timeline ---------- */}
          <ol className="min-w-0 lg:flex lg:flex-col">
            {member.experience.map((e, i) => {
              const last = i === member.experience.length - 1;
              return (
                <li key={e.title + e.years} className="relative grid grid-cols-[44px_1fr] gap-3 pb-5 last:!pb-0 lg:flex-1 sm:grid-cols-[60px_1fr] sm:gap-6 2xl:grid-cols-[84px_1fr] 2xl:gap-[41px] 2xl:pb-[32px]">
                  {/* connector line */}
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
