import SectionEyebrow from "@/components/SectionEyebrow";
import { LeafIcon, ShieldCheckIcon, StarIcon, UsersIcon } from "@/components/icons";

const values = [
  { icon: UsersIcon, title: "Customer First", text: ["Your satisfaction is", "our priority."] },
  { icon: LeafIcon, title: "Sustainability", text: ["We care for your space", "and our planet."] },
  { icon: ShieldCheckIcon, title: "Integrity", text: ["We do what’s right,", "always."] },
  { icon: StarIcon, title: "Excellence", text: ["We strive for the", "highest standards."] },
];

/** "Our Core Values — What Drives Us". */
export default function CoreValues() {
  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="container-x">
        <div className="rounded-[20px] bg-[#ecf9f2] px-5 pb-10 pt-10 sm:px-8 lg:px-10 2xl:mx-[20px] 2xl:rounded-[26px] 2xl:pb-[52px] 2xl:pt-[32px] 3xl:ml-[32px] 3xl:mr-[80px]">
          <div className="mx-auto max-w-[900px] text-center">
            <SectionEyebrow center>Our Core Values</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(28px,3.1vw,60px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#08140f] 2xl:mt-3">
              What Drives Us
            </h2>
            <p className="mt-3 text-[15px] leading-[1.55] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-2 2xl:text-[21px] 3xl:text-[24px]">
              These values shape our work, our team, and our commitment to you.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-y-10 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 2xl:mt-[32px]">
            {values.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={`relative flex min-w-0 flex-col items-center px-3 text-center xl:px-6 ${
                  i > 0 ? "core-divider" : ""
                }`}
              >
                <span className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[#cff1df] text-[#0d2e22] shadow-sm transition-transform duration-300 hover:scale-115 xl:h-24 xl:w-24 2xl:h-[112px] 2xl:w-[112px] 3xl:h-[130px] 3xl:w-[130px]">
                  <Icon className="h-[52%] w-[52%]" />
                </span>
                <h3 className="mt-5 text-[19px] font-bold leading-tight text-[#101418] xl:text-[21px] 2xl:mt-5 2xl:text-[24px] 3xl:text-[28px]">
                  {title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.5] text-[#5a6172] xl:text-[16px] 2xl:mt-3 2xl:text-[19px] 3xl:text-[23px]">
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
}
