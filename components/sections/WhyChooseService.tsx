import type { GlobalUIData, ServiceDetailData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ui } from "@/components/ui/styles";

export const WhyChooseService = ({ data, ui: labels }: { data?: ServiceDetailData; ui?: GlobalUIData }) => {
  if (!data) return null;
  const { service, why } = data;
  return (
    <section className="w-full bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,40%)_1fr] xl:gap-12 2xl:gap-[76px] 3xl:grid-cols-[573px_1fr] 3xl:pl-[12px]">
          <PhotoSlot
            src={why.image.src}
            alt={why.image.alt}
            ui={labels}
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
