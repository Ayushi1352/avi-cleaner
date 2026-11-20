import Link from "next/link";
import type { ServiceDetailData, ServiceDetailProps } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionEyebrow } from "@/components/ui/SectionLabel";
import { ui } from "@/components/ui/styles";

const ServiceOverview = ({ data }: { data: ServiceDetailData }) => {
  const { service, overview } = data;
  return (
    <section className="w-full bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 xl:grid-cols-[878fr_828fr] xl:gap-12 2xl:gap-[72px] 3xl:pl-[16px]">
          <div className="relative mx-auto w-full min-w-0 max-w-[878px]">
            <PhotoSlot
              src={service.image}
              alt={service.title}
              className="relative aspect-[878/722] w-full rounded-[18px] shadow-[0_18px_40px_-28px_var(--color-shadow-card-45)] 2xl:rounded-[20px]"
              imgClassName="object-cover object-[center_top]"
            />
            <div className="absolute bottom-3 left-3 flex max-w-[calc(100%-24px)] items-center gap-3 rounded-[14px] bg-[var(--color-check-icon)] px-3.5 py-3 text-[var(--color-white)] sm:bottom-5 sm:left-5 2xl:bottom-[12px] 2xl:left-[38px] 2xl:gap-4 2xl:rounded-[16px] 2xl:px-5 2xl:py-4 3xl:gap-6 3xl:pr-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-check-icon)] 2xl:h-[58px] 2xl:w-[58px] 3xl:h-[82px] 3xl:w-[82px]">
                <Icon name={overview.trusted.icon} className="h-1/2 w-1/2" />
              </span>
              <span className="min-w-0 text-[13px] font-medium leading-[1.35] sm:text-[15px] 2xl:text-[20px] 3xl:text-[24px]">
                {overview.trusted.lines[0]}
                <br />
                {overview.trusted.lines[1]}
              </span>
            </div>
          </div>

          <div className="min-w-0">
            <SectionEyebrow compact className="3xl:[&>span:first-child]:w-[46px] 3xl:[&>span:last-child]:w-[46px] 3xl:[&>span:nth-child(2)]:text-[23px]">{overview.label}</SectionEyebrow>
            <h1 className="mt-3 break-words text-[clamp(30px,3.45vw,66px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[var(--color-title)] 2xl:mt-5">
              {service.title}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-5 2xl:text-[21px] 3xl:mt-6 3xl:max-w-[815px] 3xl:text-[27px] 3xl:leading-[1.48]">
              {service.intro}
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-x-3 gap-y-6 sm:flex sm:justify-between sm:gap-3 2xl:mt-9 3xl:max-w-[815px] 3xl:pl-[2px] 3xl:pr-[4px]">
              {overview.features.map(({ id, icon, lines }) => (
                <li key={id} className="flex min-w-0 flex-col items-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-service-bg)] text-[var(--color-forest)] 2xl:h-[90px] 2xl:w-[90px] 3xl:h-[112px] 3xl:w-[112px]">
                    <Icon name={icon} className="h-[50%] w-[50%]" />
                  </span>
                  <span className="mt-3 text-[13.5px] leading-[1.35] text-[var(--color-text-dark)] xl:text-[15px] 2xl:text-[18px] 3xl:mt-[18px] 3xl:text-[23.5px]">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={overview.buttonUrl}
              className={`${ui.btnSolid} ${ui.btnYellow} group mt-8 inline-flex items-center gap-3 whitespace-nowrap rounded-full px-8 py-3.5 text-[15px] font-bold 2xl:mt-10 2xl:px-11 2xl:py-5 2xl:text-[20px] 3xl:mt-[52px] 3xl:min-w-[354px] 3xl:justify-center 3xl:gap-5 3xl:py-[27px] 3xl:text-[25px]`}
            >
              {overview.buttonText}
              <Icon name={overview.buttonIcon} className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CleaningChecklist = ({ data }: { data: ServiceDetailData }) => {
  const { service, checklist } = data;
  const list = service.checklist;
  const half = Math.ceil(list.length / 2);
  const columns = [list.slice(0, half), list.slice(half)];

  return (
    <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className={ui.container}>
        <div className="grid grid-cols-1 items-center gap-8 rounded-[22px] bg-[var(--color-checklist-bg)] p-5 sm:p-8 lg:grid-cols-[1fr_minmax(0,44%)] xl:gap-10 xl:p-10 2xl:gap-[40px] 2xl:rounded-[26px] 2xl:py-[45px] 2xl:pl-[60px] 2xl:pr-[42px] 3xl:grid-cols-[1fr_670px] 3xl:gap-[28px] 3xl:pl-[64px]">
          <div className="min-w-0">
            <SectionEyebrow compact className="3xl:[&>span:first-child]:w-[46px] 3xl:[&>span:last-child]:w-[46px] 3xl:[&>span:nth-child(2)]:text-[23px]">{checklist.label}</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(28px,3.3vw,63px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[var(--color-title)] 2xl:mt-4">
              {checklist.title}
            </h2>
            <p className="mt-3 max-w-[760px] text-[15px] leading-[1.6] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-4 2xl:text-[22px] 3xl:max-w-[750px] 3xl:text-[28.5px] 3xl:leading-[1.46]">
              {service.checklistIntro}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] 2xl:mt-9 2xl:gap-x-8 3xl:mt-[46px] 3xl:grid-cols-[505px_1fr] 3xl:gap-x-0">
              {columns.map((col, c) => (
                <ul key={c} className="space-y-3.5 2xl:space-y-[26px]">
                  {col.map((item) => (
                    <li key={item} className="flex min-w-0 items-start gap-3 text-[15px] leading-snug text-[var(--color-text-dark)] xl:text-[16px] 2xl:gap-4 2xl:text-[20px] 3xl:gap-[18px] 3xl:whitespace-nowrap 3xl:text-[23px]">
                      <Icon name={checklist.checkIcon} className="mt-[0.05em] h-[1.3em] w-[1.3em] shrink-0 text-[var(--color-forest)]" />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[700px]">
            <PhotoSlot
              src={service.checklistImage}
              alt={service.title}
              className="relative aspect-[680/550] w-full rounded-[16px] 2xl:rounded-[18px]"
            />
            <div className="absolute bottom-0 right-0 flex max-w-[calc(100%-16px)] items-center gap-3 rounded-[14px] bg-[var(--color-checklist-bg-2)] px-4 py-3 text-[var(--color-white)] 2xl:gap-5 2xl:rounded-[18px] 2xl:px-7 2xl:py-5 3xl:gap-[28px] 3xl:py-[26px] 3xl:pl-[22px] 3xl:pr-[30px]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-forest)] 2xl:h-[56px] 2xl:w-[56px] 3xl:h-[84px] 3xl:w-[84px]">
                <Icon name={checklist.badge.icon} className="h-1/2 w-1/2" />
              </span>
              <span className="text-[14px] font-medium leading-[1.45] sm:text-[15px] 2xl:text-[20px] 3xl:text-[26px]">
                {checklist.badge.lines[0]}
                <br />{checklist.badge.lines[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseService = ({ data }: { data: ServiceDetailData }) => {
  const { service, why } = data;
  return (
    <section className="w-full bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,40%)_1fr] xl:gap-12 2xl:gap-[76px] 3xl:grid-cols-[573px_1fr] 3xl:pl-[12px]">
          <PhotoSlot
            src={why.image.src}
            alt={why.image.alt}
            className="relative mx-auto aspect-square w-full max-w-[573px] rounded-[18px] shadow-[0_18px_40px_-28px_var(--color-shadow-card-45)] 2xl:rounded-[20px]"
          />

          <div className="min-w-0">
            <SectionEyebrow compact className="3xl:-ml-[36px] 3xl:[&>span:first-child]:w-[46px] 3xl:[&>span:last-child]:w-[46px] 3xl:[&>span:nth-child(2)]:text-[23px]">{why.label}</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(28px,2.9vw,55px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[var(--color-title)] 2xl:mt-4">
              {why.title.lead}
              <br className="hidden sm:block" /> {service.whyName}{" " + why.title.after}
            </h2>
            <p className="mt-3 max-w-[760px] text-[15px] leading-[1.6] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-4 2xl:text-[21px] 3xl:max-w-[720px] 3xl:text-[27.5px] 3xl:leading-[1.38]">
              {why.description}
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 2xl:mt-8 2xl:gap-y-[14px] 3xl:mt-[26px] 3xl:grid-cols-[622px_1fr] 3xl:gap-x-0">
              {why.items.map(({ id, icon, label }) => (
                <li key={id} className="flex min-w-0 items-center gap-4 2xl:gap-[38px]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-why-service-fill)] text-[var(--color-forest)] 2xl:h-[70px] 2xl:w-[70px] 3xl:h-[84px] 3xl:w-[84px]">
                    <Icon name={icon} className="h-[52%] w-[52%]" />
                  </span>
                  <span className="min-w-0 text-[15px] font-medium leading-snug text-[var(--color-text-dark)] xl:text-[16px] 2xl:text-[21px] 3xl:whitespace-nowrap 3xl:text-[26px]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceDetail = ({ data }: ServiceDetailProps) => {
  if (!data) return null;
  return (
    <>
      <ServiceOverview data={data} />
      <CleaningChecklist data={data} />
      <WhyChooseService data={data} />
    </>
  );
};
