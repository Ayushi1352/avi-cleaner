import Link from "next/link";
import type { CallUsBannerData, CompanyData, GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { telHref } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

/** "Need Help? — Need a Deep Clean? Call Us for Immediate Service!" banner. */
export const CallUsBanner = ({ data, company, ui: labels }: { data?: CallUsBannerData; company: CompanyData; ui: GlobalUIData }) => {
  if (!data) return null;

  return (
    <section className="relative isolate w-full overflow-hidden bg-[var(--color-forest)] text-[var(--color-white)]">
      {/* Blurred copy of the photo fills the banner, tinted green on the left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 scale-110 bg-cover bg-[center_30%] blur-[14px]"
        style={{ backgroundImage: `url(${data.image.src})` }}
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,var(--color-forest)_0%,var(--color-forest-95)_40%,var(--color-forest-80)_56%,var(--color-forest-15)_78%,var(--color-forest-0)_100%)]" />
      {/* Sharp photo of the cleaner on the right (desktop) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.image.src}
        alt={data.image.alt}
        loading="lazy"
        className="pointer-events-none absolute bottom-0 right-[8%] top-0 -z-10 hidden h-full w-auto !max-w-none [mask-image:linear-gradient(90deg,transparent,var(--color-black)_26%,var(--color-black)_82%,transparent)] lg:block"
      />

      {/* Faint leaves, bottom left */}
      <svg aria-hidden="true" viewBox="0 0 200 260" className="pointer-events-none absolute bottom-0 left-0 -z-10 w-[140px] text-[var(--color-white-6)] 2xl:w-[210px]">
        <path fill="currentColor" d="M0 40c80 20 130 90 120 180-2 15-6 28-12 40H0V40Z" />
        <path fill="currentColor" d="M60 260c20-60 70-95 140-100-20 60-70 95-140 100Z" />
      </svg>

      <div className={ui.container}>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-6 2xl:min-h-[730px]">
          {/* ---------- Text ---------- */}
          <div className="min-w-0 py-12 sm:py-16 lg:py-20 lg:pl-4 2xl:self-center 2xl:py-[90px] 3xl:pb-[110px] 3xl:pl-[85px]">
            <SectionEyebrow light compact className="3xl:[&>span:first-child]:w-[52px] 3xl:[&>span:last-child]:w-[52px]">{data.label}</SectionEyebrow>
            <h2 className="mt-4 text-[clamp(30px,3.4vw,65px)] font-extrabold leading-[1.04] tracking-[-0.015em] 2xl:mt-6">
              {data.title.top}
              <br />
              <span className="text-[var(--color-accent-soft)]">{data.title.highlight}</span>{" " + data.title.after}
            </h2>
            <p className="mt-4 max-w-[730px] text-[15px] leading-[1.6] text-[var(--color-white-90)] sm:text-[1rem] xl:text-[18px] 2xl:mt-6 2xl:text-[20px] 3xl:text-[22px] 3xl:leading-[1.55]">
              {data.description}
            </p>

            <ul className="mt-7 flex flex-col gap-4 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-0 2xl:mt-9">
              {data.features.map(({ id, icon, lines }, i) => (
                <li
                  key={id}
                  className={`flex min-w-0 items-center gap-3 min-[480px]:px-3 2xl:gap-6 2xl:px-6 3xl:px-[32px] ${
                    i === 0 ? "min-[480px]:pl-0 2xl:pl-0 3xl:pl-0" : "min-[480px]:border-l min-[480px]:border-[var(--color-white-25)]"
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-white-10)] 2xl:h-[64px] 2xl:w-[64px] 3xl:h-[80px] 3xl:w-[80px]">
                    <Icon name={icon} className="h-5 w-5 2xl:h-7 2xl:w-7 3xl:h-8 3xl:w-8" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 text-[13px] leading-[1.35] text-[var(--color-white-95)] sm:text-[14px] 2xl:text-[18px] 3xl:text-[21px]">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6 2xl:mt-10 2xl:gap-x-14">
              <a href={telHref(company.phone)} className="group flex items-center gap-4 2xl:gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-eyebrow-text)] 2xl:h-[66px] 2xl:w-[66px] 3xl:h-[82px] 3xl:w-[82px]">
                  <Icon name={data.call.icon} className="h-5 w-5 2xl:h-7 2xl:w-7 3xl:h-8 3xl:w-8" fill="currentColor" strokeWidth={0} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] text-[var(--color-white-90)] 2xl:text-[17px] 3xl:text-[20px]">{data.call.label}</span>
                  <span className="block whitespace-nowrap text-[20px] font-bold leading-tight group-hover:text-[var(--color-accent-soft)] 2xl:text-[28px] 3xl:text-[34px]">
                    {company.phone}
                  </span>
                </span>
              </a>
              <Link
                href={data.button.href}
                className={`${ui.btnSolid} ${ui.btnYellow} group inline-flex items-center gap-3 whitespace-nowrap rounded-full px-7 py-3.5 text-[15px] font-bold 2xl:px-10 2xl:py-[18px] 2xl:text-[18px] 3xl:min-w-[290px] 3xl:justify-center 3xl:py-[21px] 3xl:text-[21px]`}
              >
                {data.button.label}
                <Icon name={data.button.icon} className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </Link>
            </div>
          </div>

          {/* ---------- Photo + badge ---------- */}
          <div className="relative mx-auto w-full max-w-[560px] self-end lg:max-w-none lg:self-stretch">
            {/* Phones and tablets: the photo sits below the text */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image.src}
              alt={data.image.alt}
              loading="lazy"
              className="block aspect-[4/3] w-full rounded-t-[20px] object-cover object-top lg:hidden"
            />
            <div className="absolute right-0 top-4 flex aspect-square w-[34%] max-w-[270px] items-center justify-center rounded-[48%_52%_45%_55%/55%_45%_55%_45%] bg-[var(--color-call-us-bg)] shadow-[0_18px_40px_-20px_var(--color-black-60)] lg:top-[11%] 2xl:-right-[16px] 2xl:top-[80px] 2xl:w-[270px]">
              <HandwrittenNote lines={labels.noteLines} color="text-[var(--color-white)]" className="text-[clamp(18px,2.2vw,42px)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
