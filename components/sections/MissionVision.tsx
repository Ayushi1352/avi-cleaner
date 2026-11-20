import Link from "next/link";
import type { CoreValuesData, MissionVisionPartData, MissionVisionProps } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionEyebrow } from "@/components/ui/SectionLabel";
import { ui } from "@/components/ui/styles";

function GoalCard({ card, className = "" }: { card: MissionVisionPartData["card"]; className?: string }) {
  return (
    <div
      className={`rounded-[18px] bg-[var(--color-mission-bg)] p-6 shadow-[0_18px_40px_-26px_var(--color-mission-shadow-45)] sm:rounded-[clamp(16px,2.4cqw,22px)] sm:p-[clamp(26px,7.2cqw,60px)] ${className}`}
    >
      <Icon name={card.icon} className="h-16 w-16 text-[var(--color-mission-heading)] sm:h-[clamp(56px,13.3cqw,110px)] sm:w-[clamp(56px,13.3cqw,110px)]" />
      <h3 className="mt-4 text-[22px] font-bold leading-tight text-[var(--color-heading-dark)] sm:mt-[clamp(14px,2.6cqw,24px)] sm:text-[clamp(20px,3.6cqw,30px)]">
        {card.title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-text-grey)] sm:mt-[clamp(8px,1.5cqw,13px)] sm:text-[clamp(14px,2.9cqw,24px)] sm:leading-[1.47]">
        {card.text[0]}{" "}
        <strong className="font-semibold text-[var(--color-text-dark)]">{card.text[1]}</strong>{" "}
        {card.text[2]}
      </p>
    </div>
  );
}

const OurMission = ({ data }: { data: MissionVisionPartData }) => {

  return (
    <section className="w-full bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="lg:px-2 xl:px-10 2xl:pl-[90px] 2xl:pr-[70px] 3xl:pl-[122px] 3xl:pr-[116px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[685fr_830fr] lg:gap-8 xl:gap-10 2xl:gap-[50px]">
            <div className="min-w-0 max-w-[760px]">
              <SectionEyebrow>{data.label}</SectionEyebrow>
              <h2 className="mt-4 text-[clamp(32px,3.95vw,76px)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--color-heading-dark)] 2xl:mt-4">
                {data.title[0]}
                <br />
                {data.title[1]}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-5 2xl:text-[20px] 3xl:text-[23.5px] 3xl:leading-[1.64]">
                {data.description[0]}{" "}
                <br className="hidden 3xl:block" />
                {data.description[1]}{" "}
                <br className="hidden 3xl:block" />
                {data.description[2]}{" "}
                <br className="hidden 3xl:block" />
                {data.description[3]}{" "}
                <br className="hidden 3xl:block" />
                {data.description[4]}{" "}
                <br className="hidden 3xl:block" />
                {data.description[5]}
              </p>
              <Link
                href={data.buttonUrl}
                className={`${ui.btnSolid} ${ui.btnYellow} group mt-8 inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold sm:text-base 2xl:mt-8 2xl:px-10 2xl:py-[18px] 2xl:text-[19px] 3xl:h-[80px] 3xl:w-[296px] 3xl:justify-center 3xl:text-[22px]`}
              >
                {data.buttonText}
                <Icon name={data.buttonIcon} className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </Link>
            </div>

            <div className="[container-type:inline-size] mx-auto w-full min-w-0 max-w-[830px]">
              <div className="sm:hidden">
                <PhotoSlot
                  src={data.image.src}
                  alt={data.image.alt}
                  className="relative aspect-[4/3] w-full rounded-[20px]"
                />
                <GoalCard card={data.card} className="relative -mt-16 ml-auto w-[88%]" />
              </div>

              <div className="relative hidden aspect-[830/600] w-full sm:block">
                <PhotoSlot
                  src={data.image.src}
                  alt={data.image.alt}
                  className="absolute inset-y-0 left-0 w-[68%] rounded-[clamp(16px,2.65cqw,22px)]"
                />
                <GoalCard card={data.card} className="absolute left-[52.6%] top-[16.6%] w-[47.4%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function FocusCard({ card, className = "" }: { card: MissionVisionPartData["card"]; className?: string }) {
  return (
    <div
      className={`rounded-[18px] bg-[var(--color-vision-bg)] p-6 text-[var(--color-white)] shadow-[0_18px_40px_-20px_var(--color-mission-shadow-60)] sm:rounded-[clamp(14px,2.2cqw,18px)] sm:px-[clamp(22px,7.1cqw,57px)] sm:py-[clamp(18px,3.7cqw,30px)] ${className}`}
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-vision-bg-2)] text-[var(--color-mission-heading)] sm:h-[clamp(60px,13.7cqw,110px)] sm:w-[clamp(60px,13.7cqw,110px)]">
        <Icon name={card.icon} className="h-1/2 w-1/2" />
      </span>
      <h3 className="mt-4 text-[22px] font-bold leading-tight sm:mt-[clamp(10px,2.2cqw,18px)] sm:text-[clamp(20px,3.75cqw,30px)]">
        {card.title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.55] text-[var(--color-white-90)] sm:mt-[clamp(8px,1.4cqw,12px)] sm:text-[clamp(14px,3cqw,24px)] sm:leading-[1.42]">
        {card.text[0] + " "}<br className="hidden sm:block" />
        {card.text[1] + " "}<br className="hidden sm:block" />
        {card.text[2]}
      </p>
    </div>
  );
}

const OurVision = ({ data }: { data: MissionVisionPartData }) => {

  return (
    <section className="relative w-full bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <svg
        aria-hidden="true"
        viewBox="0 0 320 420"
        className="pointer-events-none absolute -top-[110px] right-[2%] hidden w-[220px] text-[var(--color-vision-text)] lg:block 2xl:w-[300px] 3xl:right-[4.4%] 3xl:w-[330px]"
      >
        <path fill="currentColor" d="M250 10c-60 40-90 110-70 190 10 40 40 70 70 90 40-50 60-110 50-180C295 60 275 30 250 10Z" />
        <path fill="currentColor" d="M40 170c60-30 140-20 200 40 20 20 30 40 35 60-70 10-140-5-190-45C60 205 48 190 40 170Z" />
        <path fill="none" stroke="var(--color-white)" strokeWidth="6" strokeLinecap="round" d="M250 40c-20 80-15 170 30 240M80 190c60 5 130 30 190 80" />
        <path fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" d="M280 290c10 40 20 80 40 120" />
      </svg>

      <div className={`${ui.container} relative`}>
        <div className="lg:px-2 xl:px-10 2xl:pl-[50px] 2xl:pr-[90px] 3xl:pl-[50px] 3xl:pr-[146px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[802fr_720fr] lg:gap-8 xl:gap-14 2xl:gap-[93px]">
            <div className="[container-type:inline-size] order-2 mx-auto w-full min-w-0 max-w-[802px] lg:order-1">
              <div className="sm:hidden">
                <PhotoSlot
                  src={data.image.src}
                  alt={data.image.alt}
                  className="relative aspect-[4/3] w-full rounded-[20px]"
                />
                <FocusCard card={data.card} className="relative -mt-16 w-[88%]" />
              </div>

              <div className="relative hidden aspect-[802/641] w-full sm:block">
                <PhotoSlot
                  src={data.image.src}
                  alt={data.image.alt}
                  className="absolute right-0 top-0 h-[91.2%] w-[92.9%] rounded-[clamp(16px,2.7cqw,22px)]"
                />
                <FocusCard card={data.card} className="absolute left-0 top-[43.4%] w-[50.1%]" />
              </div>
            </div>

            <div className="order-1 min-w-0 max-w-[760px] lg:order-2">
              <SectionEyebrow>{data.label}</SectionEyebrow>
              <h2 className="mt-4 text-[clamp(32px,3.95vw,76px)] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--color-heading-dark)] 2xl:mt-4">
                {data.title[0]}
                <br />
                {data.title[1]}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-6 2xl:text-[20px] 3xl:text-[23.5px] 3xl:leading-[1.64]">
                {data.description[0]}{" "}
                <br className="hidden 3xl:block" />
                {data.description[1]}{" "}
                <strong className="font-medium text-[var(--color-text-dark)]">{data.description[2]}</strong>{" "}
                <br className="hidden 3xl:block" />
                {data.description[3]}{" "}
                <br className="hidden 3xl:block" />
                {data.description[4]}{" "}
                <br className="hidden 3xl:block" />
                {data.description[5]}{" "}
                <strong className="font-medium text-[var(--color-text-dark)]">
                  {data.description[6]}
                </strong>
              </p>
              <Link
                href={data.buttonUrl}
                className={`${ui.btnSolid} ${ui.btnYellow} group mt-8 inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold sm:text-base 2xl:mt-9 2xl:px-10 2xl:py-[18px] 2xl:text-[19px] 3xl:h-[82px] 3xl:w-[268px] 3xl:justify-center 3xl:text-[22px]`}
              >
                {data.buttonText}
                <Icon name={data.buttonIcon} className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreValues = ({ data }: { data: CoreValuesData }) => {

  return (
    <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className={ui.container}>
        <div className="rounded-[20px] bg-[var(--color-values-bg)] px-5 pb-10 pt-10 sm:px-8 lg:px-10 2xl:mx-[20px] 2xl:rounded-[26px] 2xl:pb-[52px] 2xl:pt-[32px] 3xl:ml-[32px] 3xl:mr-[80px]">
          <div className="mx-auto max-w-[900px] text-center">
            <SectionEyebrow center>{data.label}</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(28px,3.1vw,60px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-values-text)] 2xl:mt-3">
              {data.title}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.55] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[18px] 2xl:mt-2 2xl:text-[21px] 3xl:text-[24px]">
              {data.description}
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-y-10 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 2xl:mt-[32px]">
            {data.values.map(({ id, icon, title, lines: text }, i) => (
              <li
                key={id}
                className={`relative flex min-w-0 flex-col items-center px-3 text-center xl:px-6 ${
                  i > 0
                    ? "lg:before:absolute lg:before:bottom-[4%] lg:before:left-0 lg:before:top-[12%] lg:before:w-px lg:before:bg-[var(--color-values-bg-2)] lg:before:content-['']"
                    : ""
                }`}
              >
                <span className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[var(--color-values-bg-3)] text-[var(--color-mission-heading)] shadow transition-transform duration-300 hover:scale-[1.15] xl:h-24 xl:w-24 2xl:h-[112px] 2xl:w-[112px] 3xl:h-[130px] 3xl:w-[130px]">
                  <Icon name={icon} className="h-[52%] w-[52%]" />
                </span>
                <h3 className="mt-5 text-[19px] font-bold leading-tight text-[var(--color-heading-dark)] xl:text-[21px] 2xl:mt-5 2xl:text-[24px] 3xl:text-[28px]">
                  {title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.5] text-[var(--color-text-grey)] xl:text-[16px] 2xl:mt-3 2xl:text-[19px] 3xl:text-[23px]">
                  {text[0]} <br className="hidden lg:block" />
                  {text[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/** Mission, vision and core values: the three parts of the Mission & Vision page. */
export const MissionVision = ({ data }: MissionVisionProps) => {
  if (!data) return null;
  return (
    <>
      <OurMission data={data.mission} />
      <OurVision data={data.vision} />
      <CoreValues data={data.coreValues} />
    </>
  );
};
