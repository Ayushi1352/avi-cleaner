import type { CompanyData, PolicyData } from "@/types/templates.types";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { mailHref, telHref } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

const bodyText =
  "text-[15px] leading-[1.5] text-[var(--color-text)] sm:text-[1rem] xl:text-[19px] 2xl:text-[24px] 3xl:text-[30.5px] 3xl:leading-[42px]";

/** Legal page body: intro and the numbered sections. Mirrors the Privacy Policy layout. */
export const PolicyContent = ({ data, company }: { data?: PolicyData; company: CompanyData }) => {
  if (!data) return null;
  const { sections } = data;
  return (
    <section className="w-full overflow-x-clip bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="bg-[var(--color-bg-light)] pb-8 pt-12 sm:pt-14 2xl:pb-[30px] 2xl:pt-[58px]">
        <div className={ui.container}>
          <div className="mx-auto max-w-[1500px] text-center">
            <SectionEyebrow
              center
              className="[&>span:nth-child(2)]:tracking-[0.14em] 2xl:gap-6 3xl:[&>span:first-child]:w-[88px] 3xl:[&>span:last-child]:w-[88px] 3xl:[&>span:nth-child(2)]:text-[25px]"
            >
              {data.label}
            </SectionEyebrow>
            <h2 className="mt-3 break-words text-[clamp(30px,4.2vw,80px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-policy-heading)] 2xl:mt-4">
              {data.title.lead} <span className="text-[var(--color-forest)]">{data.title.highlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[1480px] text-balance text-[15px] leading-[1.5] text-[var(--color-text)] sm:text-[1rem] xl:text-[19px] 2xl:mt-6 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px]">
              {data.intro}
            </p>
          </div>

          <ol className="mt-8 2xl:mt-[52px] 3xl:px-[38px]">
            {sections.map((s, i) => (
              <li
                key={s.id}
                className={`flex min-w-0 gap-4 py-6 sm:gap-6 lg:gap-8 2xl:gap-[76px] 2xl:py-[32px] ${
                  i < sections.length - 1 ? "border-b border-[var(--color-policy-border)]" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-policy-icon-bg)] text-[17px] font-bold text-[var(--color-forest-dark)] sm:h-14 sm:w-14 sm:text-[20px] xl:h-[72px] xl:w-[72px] xl:text-[26px] 2xl:h-[88px] 2xl:w-[88px] 2xl:text-[32px] 3xl:h-[102px] 3xl:w-[102px] 3xl:text-[39px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1 border-l border-[var(--color-policy-border)] pl-4 sm:pl-6 lg:pl-8 2xl:pl-[78px]">
                  <h3 className="break-words text-[18px] font-bold leading-tight text-[var(--color-forest)] sm:text-[20px] xl:text-[25px] 2xl:text-[31px] 3xl:text-[37px]">
                    {s.title}
                  </h3>
                  <p className={`mt-1.5 break-words 2xl:mt-2 ${bodyText}`}>{s.text}</p>
                  {s.points && (
                    <ul className={`mt-2 list-disc space-y-1 break-words pl-5 marker:text-[var(--color-forest)] 2xl:mt-3 2xl:space-y-2 2xl:pl-8 ${bodyText}`}>
                      {s.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {s.contact && (
                    <p className="mt-3 flex flex-col gap-2 text-[15px] font-bold text-[var(--color-forest)] sm:text-base lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 xl:text-[19px] 2xl:mt-5 2xl:gap-x-11 2xl:text-[24px] 3xl:text-[31px]">
                      <a href={mailHref(company.email)} className="break-all hover:text-[var(--color-primary)]">
                        {company.email}
                      </a>
                      <span aria-hidden="true" className="hidden h-[1.1em] w-px bg-[var(--color-text)] lg:block" />
                      <a href={telHref(company.phone)} className="hover:text-[var(--color-primary)]">
                        {company.phone}
                      </a>
                      <span aria-hidden="true" className="hidden h-[1.1em] w-px bg-[var(--color-text)] lg:block" />
                      <span className="font-medium text-[var(--color-title)]">{company.addressLines.join(" ")}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
