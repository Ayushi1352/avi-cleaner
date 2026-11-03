import Link from "next/link";
import type { GlobalUIData, MissionVisionData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ui } from "@/components/ui/styles";

function GoalCard({ card, className = "" }: { card: MissionVisionData["card"]; className?: string }) {
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

/** "Our Mission — A Cleaner Tomorrow" with photo and Our Goal card. */
export const OurMission = ({ data, ui: labels }: { data?: MissionVisionData; ui?: GlobalUIData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[var(--color-white)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="lg:px-2 xl:px-10 2xl:pl-[90px] 2xl:pr-[70px] 3xl:pl-[122px] 3xl:pr-[116px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[685fr_830fr] lg:gap-8 xl:gap-10 2xl:gap-[50px]">
            {/* ---------- Text ---------- */}
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
                href={data.button.href}
                className={`${ui.btnSolid} ${ui.btnYellow} group mt-8 inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold sm:text-base 2xl:mt-8 2xl:px-10 2xl:py-[18px] 2xl:text-[19px] 3xl:h-[80px] 3xl:w-[296px] 3xl:justify-center 3xl:text-[22px]`}
              >
                {data.button.label}
                <Icon name={data.button.icon} className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </Link>
            </div>

            {/* ---------- Visual ---------- */}
            <div className="[container-type:inline-size] mx-auto w-full min-w-0 max-w-[830px]">
              {/* Phones: photo with card overlapping below */}
              <div className="sm:hidden">
                <PhotoSlot
                  src={data.image.src}
                  alt={data.image.alt}
                  ui={labels}
                  className="relative aspect-[4/3] w-full rounded-[20px]"
                />
                <GoalCard card={data.card} className="relative -mt-16 ml-auto w-[88%]" />
              </div>

              {/* Tablet + desktop: overlapping layout from the design */}
              <div className="relative hidden aspect-[830/600] w-full sm:block">
                <PhotoSlot
                  src={data.image.src}
                  alt={data.image.alt}
                  ui={labels}
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
