import { Gem, Leaf, ShieldCheck, Users } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import { LeafIcon } from "@/components/icons";
import TrophyIllustration from "./TrophyIllustration";
import awardsData from "@/data/awards.json";

// Text lives in src/data/awards.json under text.AwardsGrid.
const copy = awardsData.text.AwardsGrid;

// Icons by the name used in src/data/awards.json.
const achievementsIcons = {
  gem: Gem,
  leaf: Leaf,
  users: Users,
  "shield-check": ShieldCheck,
};

// Content lives in src/data/awards.json.
const achievements = awardsData.achievements.map((item) => ({ ...item, icon: achievementsIcons[item.icon] }));

// Content lives in src/data/awards.json.
const awards = awardsData.awards;

// Content lives in src/data/awards.json.
const certificates = awardsData.certificates;

const EYEBROW =
  "[&>span:nth-child(2)]:font-semibold 3xl:[&>span:first-child]:w-[52px] 3xl:[&>span:last-child]:w-[52px] 3xl:[&>span:nth-child(2)]:text-[24px]";
const H2 = "mt-2 text-[clamp(28px,3.25vw,62px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#0b1a12] 2xl:mt-3";
const LEAD = "mx-auto mt-2 max-w-[1000px] text-balance text-[15px] leading-[1.5] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-3 2xl:text-[21px] 3xl:text-[25.5px]";
const GRID = "grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5 2xl:gap-[30px]";

function Certificate({ cert }: { cert: any }) {
  return (
    <div className="rounded-[12px] bg-white p-3 shadow-[0_10px_30px_-20px_rgba(11,42,28,0.4)] 2xl:rounded-[14px] 2xl:p-4 3xl:p-[20px]">
      <div
        className="flex aspect-[372/286] flex-col items-center justify-center border-[3px] border-double px-3 py-4 text-center outline outline-1 -outline-offset-[7px] 2xl:border-4"
        style={{ borderColor: cert.color, outlineColor: cert.color }}
      >
        {cert.mark === "leaf" ? (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a8c4a] text-white lg:h-10 lg:w-10 xl:h-14 xl:w-14 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[88px] 3xl:w-[88px]">
            <LeafIcon className="h-[58%] w-[58%]" />
          </span>
        ) : (
          <span
            className="text-[34px] font-extrabold leading-none tracking-[-0.03em] lg:text-[28px] xl:text-[38px] 2xl:text-[52px] 3xl:text-[70px]"
            style={{ color: cert.mark === "OSHA" ? "#101418" : cert.color }}
          >
            {cert.mark}
          </span>
        )}
        <span className="mt-2 block text-[15px] font-bold leading-tight text-[#0b1a12] lg:text-[13px] xl:text-[16px] 2xl:mt-3 2xl:text-[20px] 3xl:text-[24px]">
          {cert.title}
        </span>
        <span className="mt-1 block text-[12.5px] leading-snug text-[#3f4a5a] lg:text-[11.5px] xl:text-[13.5px] 2xl:text-[16px] 3xl:text-[19px]">
          {cert.text}
        </span>
      </div>
    </div>
  );
}

/** Award & Certificate page body. */
export default function AwardsGrid() {
  return (
    <>
      {/* ---------- Achievements ---------- */}
      <section className="w-full bg-[#fbfdfc] py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
        <div className="container-x text-center">
          <SectionEyebrow center compact className={EYEBROW}>{copy.ourAchievements}</SectionEyebrow>
          <h2 className={H2}>{copy.recognitionThatInspiresUs}</h2>
          <p className={LEAD}>
            {copy.ourAwardsAndCertificationsReflect}
          </p>

          <ul className={`mt-9 2xl:mt-[42px] 3xl:px-[60px] ${GRID}`}>
            {achievements.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex min-w-0 flex-col items-center">
                <span className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[#dff5ea] text-[#124734] shadow-sm transition-transform duration-300 hover:scale-115 xl:h-24 xl:w-24 2xl:h-[116px] 2xl:w-[116px] 3xl:h-[142px] 3xl:w-[142px]">
                  <Icon className="h-[50%] w-[50%]" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[18px] font-bold leading-tight text-[#0b1a12] lg:text-[16px] xl:text-[19px] 2xl:mt-5 2xl:text-[22px] 3xl:mt-[24px] 3xl:text-[26px]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.5] text-[#5a6172] lg:text-[13.5px] xl:text-[15.5px] 2xl:mt-2.5 2xl:text-[19px] 3xl:text-[22.5px]">
                  {text[0]} <br className="hidden xl:block" />
                  {text[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Awards ---------- */}
      <section className="w-full bg-[#edf8f4] py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
        <div className="container-x text-center">
          <SectionEyebrow center compact className={EYEBROW}>{copy.ourAwards}</SectionEyebrow>
          <h2 className={H2}>{copy.awardsWeAreProudOf}</h2>
          <p className={`${LEAD} max-w-[820px]`}>
            {copy.theseAwardsMotivateUsTo}
          </p>

          <ul className={`mt-8 2xl:mt-[34px] ${GRID}`}>
            {awards.map((a) => (
              <li key={a.title} className="min-w-0">
                <article className="flex h-full flex-col items-center rounded-[14px] bg-white px-4 pb-6 pt-5 shadow-[0_10px_30px_-22px_rgba(11,42,28,0.4)] 2xl:rounded-[18px] 2xl:pb-8 3xl:pb-[38px] 3xl:pt-[22px]">
                  <TrophyIllustration variant={a.variant} className="h-[150px] w-auto lg:h-[130px] xl:h-[170px] 2xl:h-[230px] 3xl:h-[300px]" />
                  <h3 className="mt-4 text-[17px] font-bold leading-tight text-[#0b1a12] lg:text-[15px] xl:text-[18px] 2xl:mt-6 2xl:text-[21px] 3xl:text-[25.5px]">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.45] text-[#5a6172] lg:text-[13.5px] xl:text-[15.5px] 2xl:mt-2.5 2xl:text-[19px] 3xl:text-[23px]">
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
      <section className="w-full bg-[#fbfdfc] py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
        <div className="container-x text-center">
          <SectionEyebrow center compact className={EYEBROW}>{copy.ourCertifications}</SectionEyebrow>
          <h2 className={H2}>{copy.ourProfessionalCertifications}</h2>
          <p className={`${LEAD} max-w-[900px]`}>
            {copy.weFollowIndustryStandardsAnd}
          </p>

          <ul className={`mt-8 2xl:mt-[30px] 3xl:px-[24px] ${GRID}`}>
            {certificates.map((c) => (
              <li key={c.title} className="min-w-0">
                <Certificate cert={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
