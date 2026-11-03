import type { ProcessStepsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ui } from "@/components/ui/styles";

const EYEBROW =
  "[&>span:nth-child(2)]:font-medium 3xl:[&>span:first-child]:w-[48px] 3xl:[&>span:last-child]:w-[48px] 3xl:[&>span:nth-child(2)]:text-[24px]";

function DashedArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 24" fill="none" stroke="var(--color-panel-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M3 12h44" strokeDasharray="7 8" />
      <path d="M56 4l10 8-10 8M50 12h15" />
    </svg>
  );
}

/** "How it Work" page body: four steps and the "Why It Works" band. */
export const ProcessSteps = ({ data }: { data?: ProcessStepsData }) => {
  if (!data) return null;

  return (
    <>
      {/* ---------- Steps ---------- */}
      <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
        <div className="bg-[var(--color-steps-bg)] pb-10 pt-12 sm:pt-14 2xl:pb-[58px] 2xl:pt-[52px]">
          <div className={ui.container}>
            <div className="mx-auto max-w-[1200px] text-center">
              <SectionEyebrow center compact className={EYEBROW}>{data.label}</SectionEyebrow>
              <h2 className="mt-3 text-[clamp(28px,3.35vw,64px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[var(--color-title)] 2xl:mt-4">
                {data.title}
              </h2>
              <p className="mx-auto mt-3 text-[15px] leading-[1.45] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:text-[21px] 3xl:text-[26px]">
                {data.description[0] + " "}<br className="hidden xl:block" />
                {data.description[1]}
              </p>
            </div>

            <ol className="mx-auto mt-12 grid max-w-[440px] grid-cols-1 gap-10 sm:max-w-none sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-14 2xl:mt-[60px] 2xl:gap-x-[72px] 3xl:-mx-[8px] 3xl:gap-x-[88px]">
              {data.steps.map((s, i) => (
                <li key={s.id} className="relative min-w-0">
                  <article className="flex h-full flex-col rounded-[18px] bg-[var(--color-white)] p-2 pb-6 text-center shadow-[0_14px_36px_-26px_var(--color-shadow-card-40)] 2xl:rounded-[22px] 2xl:p-2.5 2xl:pb-7 3xl:p-[12px] 3xl:pb-[22px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[374/336] w-full rounded-[14px] object-cover object-[center_top] 2xl:rounded-[18px]"
                    />
                    <h3 className="mt-5 text-[19px] font-bold leading-tight text-[var(--color-title)] lg:text-[17px] xl:text-[20px] 2xl:mt-7 2xl:text-[25px] 3xl:mt-[34px] 3xl:text-[30px]">
                      {s.title}
                    </h3>
                    <p className="mt-2 px-2 text-[15px] leading-[1.45] text-[var(--color-steps-text)] lg:px-0 lg:text-[13.5px] xl:px-1 xl:text-[15.5px] 2xl:mt-3 2xl:text-[20px] 3xl:px-[4px] 3xl:text-[24.5px] 3xl:leading-[37px]">
                      {s.text}
                    </p>
                  </article>

                  {/* Step number */}
                  <span className="absolute -top-3 left-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-steps-bg-2)] text-[18px] font-bold text-[var(--color-white)] ring-4 ring-[var(--color-white)] lg:h-11 lg:w-11 lg:text-[16px] xl:h-14 xl:w-14 xl:text-[21px] 2xl:-top-4 2xl:left-4 2xl:h-[72px] 2xl:w-[72px] 2xl:text-[28px] 2xl:ring-[5px] 3xl:left-[20px] 3xl:h-[92px] 3xl:w-[92px] 3xl:text-[36px] 3xl:ring-[6px]">
                    {s.no}
                  </span>

                  {/* Dashed arrow to the next step (4-column layout only) */}
                  {i < data.steps.length - 1 && (
                    <DashedArrow className="absolute left-full top-[32%] hidden w-7 translate-x-[6px] lg:block xl:w-10 xl:translate-x-2 2xl:w-12 2xl:translate-x-3 3xl:top-[35%] 3xl:w-[74px] 3xl:translate-x-[7px]" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Why it works ---------- */}
      <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
        <div className="mx-4 rounded-[22px] bg-[var(--color-steps-bg-3)] p-5 sm:mx-6 sm:p-8 lg:mx-10 lg:p-8 2xl:ml-0 2xl:mr-[47px] 2xl:rounded-l-none 2xl:rounded-r-[28px] 2xl:py-[34px] 2xl:pl-[72px] 2xl:pr-8 3xl:pl-[89px] 3xl:pr-[30px]">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-8 xl:gap-12 3xl:grid-cols-[661px_minmax(0,1fr)] 3xl:gap-[66px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.why.image.src}
              alt={data.why.image.alt}
              loading="lazy"
              className="mx-auto aspect-[661/604] w-full max-w-[560px] rounded-[18px] object-cover object-[center_top] lg:max-w-none 2xl:rounded-[22px]"
            />

            <div className="min-w-0">
              <SectionEyebrow compact className={EYEBROW}>{data.why.label}</SectionEyebrow>
              <h2 className="mt-3 text-[clamp(26px,2.9vw,55px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[var(--color-title)] 2xl:mt-4">
                {data.why.title}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.45] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:text-[21px] 3xl:max-w-[900px] 3xl:text-[26px]">
                {data.why.description}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 xl:gap-y-6 2xl:mt-8 2xl:gap-y-[30px] 3xl:grid-cols-[500px_minmax(0,1fr)] 3xl:gap-x-0">
                {data.why.benefits.map(({ id, icon, title, subtitle: sub }) => (
                  <li key={id} className="flex min-w-0 items-center gap-3 xl:gap-4 2xl:gap-5 3xl:gap-[24px]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-panel-dark)] text-[var(--color-white)] lg:h-11 lg:w-11 xl:h-14 xl:w-14 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[88px] 3xl:w-[88px]">
                      {/* Line icons are drawn a little bolder. */}
                      <Icon name={icon} className="h-[52%] w-[52%]" strokeWidth={icon.startsWith("Lu") ? 2.2 : undefined} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[16px] font-bold leading-tight text-[var(--color-title)] lg:text-[14.5px] xl:text-[17px] 2xl:text-[21px] 3xl:text-[26px]">
                        {title}
                      </span>
                      <span className="mt-1 block text-[14px] leading-snug text-[var(--color-steps-text-2)] lg:text-[13px] xl:text-[14.5px] 2xl:mt-1.5 2xl:text-[18px] 3xl:whitespace-nowrap 3xl:text-[21px]">
                        {sub}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
