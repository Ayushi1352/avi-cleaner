import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoSlot from "@/components/PhotoSlot";
import SectionEyebrow from "@/components/SectionEyebrow";
import { TargetIcon } from "./missionVisionIcons";
import missionVisionData from "@/data/mission-vision.json";

// Text lives in src/data/mission-vision.json under text.OurMission.
const copy = missionVisionData.text.OurMission;

function GoalCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[18px] bg-[#e8f6f1] p-6 shadow-[0_18px_40px_-26px_rgba(13,66,51,0.45)] sm:rounded-[clamp(16px,2.4cqw,22px)] sm:p-[clamp(26px,7.2cqw,60px)] ${className}`}
    >
      <TargetIcon className="h-16 w-16 text-[#0d2e22] sm:h-[clamp(56px,13.3cqw,110px)] sm:w-[clamp(56px,13.3cqw,110px)]" />
      <h3 className="mt-4 text-[22px] font-bold leading-tight text-[#101418] sm:mt-[clamp(14px,2.6cqw,24px)] sm:text-[clamp(20px,3.6cqw,30px)]">
        {copy.ourGoal}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-[#5a6172] sm:mt-[clamp(8px,1.5cqw,13px)] sm:text-[clamp(14px,2.9cqw,24px)] sm:leading-[1.47]">
        {copy.toMakeEverySpace}{" "}
        <strong className="font-semibold text-[#1d2433]">{copy.cleanerHealthierAnd}</strong>{" "}
        {copy.happierForGenerationsToCome}
      </p>
    </div>
  );
}

/** "Our Mission — A Cleaner Tomorrow" with photo and Our Goal card. */
export default function OurMission() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      <div className="container-x">
        <div className="lg:px-2 xl:px-10 2xl:pl-[90px] 2xl:pr-[70px] 3xl:pl-[122px] 3xl:pr-[116px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[685fr_830fr] lg:gap-8 xl:gap-10 2xl:gap-[50px]">
            {/* ---------- Text ---------- */}
            <div className="min-w-0 max-w-[760px]">
              <SectionEyebrow>{copy.ourMission}</SectionEyebrow>
              <h2 className="mt-4 text-[clamp(32px,3.95vw,76px)] font-bold leading-[1.08] tracking-[-0.02em] text-[#101418] 2xl:mt-4">
                {copy.aCleaner}
                <br />
                {copy.tomorrow}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-5 2xl:text-[20px] 3xl:text-[23.5px] 3xl:leading-[1.64]">
                {copy.ourMissionIsToProvide}{" "}
                <br className="hidden 3xl:block" />
                {copy.servicesThatCreateHealthierSafer}{" "}
                <br className="hidden 3xl:block" />
                {copy.environmentsForHomesAndBusinesses}{" "}
                <br className="hidden 3xl:block" />
                {copy.committedToUsingEcoFriendly}{" "}
                <br className="hidden 3xl:block" />
                {copy.techniquesAndACustomerFirst}{" "}
                <br className="hidden 3xl:block" />
                {copy.spaceShineWithCareAnd}
              </p>
              <Link
                href="/services"
                className="btn-solid btn-yellow group mt-8 inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[15px] font-semibold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd86b] sm:text-base 2xl:mt-8 2xl:px-10 2xl:py-[18px] 2xl:text-[19px] 3xl:h-[80px] 3xl:w-[296px] 3xl:justify-center 3xl:text-[22px]"
              >
                {copy.ourServices}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </Link>
            </div>

            {/* ---------- Visual ---------- */}
            <div className="@container mx-auto w-full min-w-0 max-w-[830px]">
              {/* Phones: photo with card overlapping below */}
              <div className="sm:hidden">
                <PhotoSlot
                  src="/images/mission/mission-cleaning.webp"
                  alt={copy.yellowGlovedHandWipingA}
                  label={copy.missionMissionCleaningJpg}
                  className="relative aspect-[4/3] w-full rounded-[20px]"
                />
                <GoalCard className="relative -mt-16 ml-auto w-[88%]" />
              </div>

              {/* Tablet + desktop: overlapping layout from the design */}
              <div className="relative hidden aspect-[830/600] w-full sm:block">
                <PhotoSlot
                  src="/images/mission/mission-cleaning.webp"
                  alt={copy.yellowGlovedHandWipingA}
                  label={copy.missionMissionCleaningJpg}
                  className="absolute inset-y-0 left-0 w-[68%] rounded-[clamp(16px,2.65cqw,22px)]"
                />
                <GoalCard className="absolute left-[52.6%] top-[16.6%] w-[47.4%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
