import { Gem, Leaf, ShieldCheck, Users } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import { LeafIcon } from "@/components/icons";
import TrophyIllustration from "./TrophyIllustration";

const achievements = [
  { icon: Gem, title: "Quality Service", text: ["Recognized for", "outstanding service delivery."] },
  { icon: Leaf, title: "Eco-Friendly Practices", text: ["Awarded for sustainable", "and green cleaning solutions."] },
  { icon: Users, title: "Customer Satisfaction", text: ["Trusted and appreciated", "by our clients."] },
  { icon: ShieldCheck, title: "Safety & Compliance", text: ["Certified for maintaining", "highest safety standards."] },
];

const awards = [
  { variant: "star-wreath", title: "Best Cleaning Service", org: "National Business Awards", year: "2023" },
  { variant: "globe", title: "Excellence in Customer Service", org: "Service Industry Awards", year: "2022" },
  { variant: "star", title: "Green Business Award", org: "Sustainability Awards", year: "2022" },
  { variant: "medal", title: "Trusted Service Provider", org: "Local Business Awards", year: "2021" },
];

const certificates = [
  { mark: "ISO", color: "#1f4f9c", title: "ISO 9001:2015", text: "Quality Management System" },
  { mark: "ISO", color: "#1c7a45", title: "ISO 14001:2015", text: "Environmental Management" },
  { mark: "OSHA", color: "#8f979c", title: "OSHA", text: "Occupational Safety and Health Administration" },
  { mark: "leaf", color: "#8f979c", title: "Green Cleaning Certified", text: "Eco-Friendly Cleaning Practices" },
];

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
          <SectionEyebrow center compact className={EYEBROW}>Our Achievements</SectionEyebrow>
          <h2 className={H2}>Recognition That Inspires Us</h2>
          <p className={LEAD}>
            Our awards and certifications reflect our dedication to delivering
            high-quality, reliable and eco-friendly cleaning services. We are
            proud to be recognized by leading organizations for our hard work
            and customer commitment.
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
          <SectionEyebrow center compact className={EYEBROW}>Our Awards</SectionEyebrow>
          <h2 className={H2}>Awards We Are Proud Of</h2>
          <p className={`${LEAD} max-w-[820px]`}>
            These awards motivate us to continue delivering cleaner, healthier
            and happier spaces for our valued clients.
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
          <SectionEyebrow center compact className={EYEBROW}>Our Certifications</SectionEyebrow>
          <h2 className={H2}>Our Professional Certifications</h2>
          <p className={`${LEAD} max-w-[900px]`}>
            We follow industry standards and are certified by trusted
            organizations to ensure safe, effective and eco-friendly cleaning
            services.
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
