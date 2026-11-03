import type { AwardsData, CertificateItem } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TrophyIllustration } from "@/components/ui/TrophyIllustration";
import { ui } from "@/components/ui/styles";

// Frame and mark colour of each certificate, by the tone templates.json gives it.
const TONES: Record<string, { frame: string; mark: string }> = {
  blue: { frame: "border-[var(--color-cert-blue)] [outline-color:var(--color-cert-blue)]", mark: "text-[var(--color-cert-blue)]" },
  green: { frame: "border-[var(--color-cert-green)] [outline-color:var(--color-cert-green)]", mark: "text-[var(--color-cert-green)]" },
  grey: { frame: "border-[var(--color-cert-grey)] [outline-color:var(--color-cert-grey)]", mark: "text-[var(--color-cert-grey)]" },
};

const EYEBROW =
  "[&>span:nth-child(2)]:font-semibold 3xl:[&>span:first-child]:w-[52px] 3xl:[&>span:last-child]:w-[52px] 3xl:[&>span:nth-child(2)]:text-[24px]";
const H2 = "mt-2 text-[clamp(28px,3.25vw,62px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[var(--color-title)] 2xl:mt-3";
const LEAD = "mx-auto mt-2 max-w-[1000px] text-balance text-[15px] leading-[1.5] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-3 2xl:text-[21px] 3xl:text-[25.5px]";
const GRID = "grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5 2xl:gap-[30px]";

function Certificate({ cert, leafIcon }: { cert: CertificateItem; leafIcon: string }) {
  const tone = TONES[cert.tone] ?? TONES.grey;
  return (
    <div className="rounded-[12px] bg-[var(--color-white)] p-3 shadow-[0_10px_30px_-20px_var(--color-shadow-card-40)] 2xl:rounded-[14px] 2xl:p-4 3xl:p-[20px]">
      <div
        className={`flex aspect-[372/286] flex-col items-center justify-center border-[3px] border-double px-3 py-4 text-center outline outline-1 -outline-offset-[7px] 2xl:border-4 ${tone.frame}`}
      >
        {cert.mark === "leaf" ? (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-awards-bg)] text-[var(--color-white)] lg:h-10 lg:w-10 xl:h-14 xl:w-14 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[88px] 3xl:w-[88px]">
            <Icon name={leafIcon} className="h-[58%] w-[58%]" />
          </span>
        ) : (
          <span
            className={`text-[34px] font-extrabold leading-none tracking-[-0.03em] lg:text-[28px] xl:text-[38px] 2xl:text-[52px] 3xl:text-[70px] ${cert.mark === "OSHA" ? "text-[var(--color-heading-dark)]" : tone.mark}`}
          >
            {cert.mark}
          </span>
        )}
        <span className="mt-2 block text-[15px] font-bold leading-tight text-[var(--color-title)] lg:text-[13px] xl:text-[16px] 2xl:mt-3 2xl:text-[20px] 3xl:text-[24px]">
          {cert.title}
        </span>
        <span className="mt-1 block text-[12.5px] leading-snug text-[var(--color-form-label)] lg:text-[11.5px] xl:text-[13.5px] 2xl:text-[16px] 3xl:text-[19px]">
          {cert.text}
        </span>
      </div>
    </div>
  );
}

/** Award & Certificate page body. */
export const AwardsGrid = ({ data }: { data?: AwardsData }) => {
  if (!data) return null;

  return (
    <>
      {/* ---------- Achievements ---------- */}
      <section className="w-full bg-[var(--color-awards-bg-2)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
        <div className={`${ui.container} text-center`}>
          <SectionEyebrow center compact className={EYEBROW}>{data.achievements.label}</SectionEyebrow>
          <h2 className={H2}>{data.achievements.title}</h2>
          <p className={LEAD}>
            {data.achievements.description}
          </p>

          <ul className={`mt-9 2xl:mt-[42px] 3xl:px-[60px] ${GRID}`}>
            {data.achievements.items.map(({ id, icon, title, lines: text }) => (
              <li key={id} className="flex min-w-0 flex-col items-center">
                <span className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[var(--color-awards-bg-3)] text-[var(--color-forest-dark)] shadow transition-transform duration-300 hover:scale-[1.15] xl:h-24 xl:w-24 2xl:h-[116px] 2xl:w-[116px] 3xl:h-[142px] 3xl:w-[142px]">
                  <Icon name={icon} className="h-[50%] w-[50%]" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[18px] font-bold leading-tight text-[var(--color-title)] lg:text-[16px] xl:text-[19px] 2xl:mt-5 2xl:text-[22px] 3xl:mt-[24px] 3xl:text-[26px]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.5] text-[var(--color-text-grey)] lg:text-[13.5px] xl:text-[15.5px] 2xl:mt-2.5 2xl:text-[19px] 3xl:text-[22.5px]">
                  {text[0]} <br className="hidden xl:block" />
                  {text[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Awards ---------- */}
      <section className="w-full bg-[var(--color-awards-bg-4)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
        <div className={`${ui.container} text-center`}>
          <SectionEyebrow center compact className={EYEBROW}>{data.awards.label}</SectionEyebrow>
          <h2 className={H2}>{data.awards.title}</h2>
          <p className={`${LEAD} max-w-[820px]`}>
            {data.awards.description}
          </p>

          <ul className={`mt-8 2xl:mt-[34px] ${GRID}`}>
            {data.awards.items.map((a) => (
              <li key={a.id} className="min-w-0">
                <article className="flex h-full flex-col items-center rounded-[14px] bg-[var(--color-white)] px-4 pb-6 pt-5 shadow-[0_10px_30px_-22px_var(--color-shadow-card-40)] 2xl:rounded-[18px] 2xl:pb-8 3xl:pb-[38px] 3xl:pt-[22px]">
                  <TrophyIllustration variant={a.variant} labels={data.awards.trophy} className="h-[150px] w-auto lg:h-[130px] xl:h-[170px] 2xl:h-[230px] 3xl:h-[300px]" />
                  <h3 className="mt-4 text-[17px] font-bold leading-tight text-[var(--color-title)] lg:text-[15px] xl:text-[18px] 2xl:mt-6 2xl:text-[21px] 3xl:text-[25.5px]">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.45] text-[var(--color-text-grey)] lg:text-[13.5px] xl:text-[15.5px] 2xl:mt-2.5 2xl:text-[19px] 3xl:text-[23px]">
                    {a.org}
                    <br />
                    {a.year}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Certifications ---------- */}
      <section className="w-full bg-[var(--color-awards-bg-2)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
        <div className={`${ui.container} text-center`}>
          <SectionEyebrow center compact className={EYEBROW}>{data.certificates.label}</SectionEyebrow>
          <h2 className={H2}>{data.certificates.title}</h2>
          <p className={`${LEAD} max-w-[900px]`}>
            {data.certificates.description}
          </p>

          <ul className={`mt-8 2xl:mt-[30px] 3xl:px-[24px] ${GRID}`}>
            {data.certificates.items.map((c) => (
              <li key={c.id} className="min-w-0">
                <Certificate cert={c} leafIcon={data.certificates.leafIcon} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
