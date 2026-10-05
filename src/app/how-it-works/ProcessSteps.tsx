import { Clock, ShieldCheck } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import { LeafIcon, ThumbUpIcon, UsersIcon } from "@/components/icons";
import { GearSolidIcon } from "@/components/solidIcons";

const steps = [
  {
    no: "01",
    title: "Book a Service",
    text: "Choose your service, select a convenient date and time, and book online or via phone in just a few clicks.",
    image: "/images/services/step-book.webp",
  },
  {
    no: "02",
    title: "Team Arrives",
    text: "Our trained and verified cleaning team arrives at your location on time with all necessary equipment.",
    image: "/images/services/step-team.webp",
  },
  {
    no: "03",
    title: "Cleaning Process",
    text: "Our team follows a detailed checklist to deep clean every corner, ensuring a safe, fresh and healthy environment.",
    image: "/images/services/step-cleaning.webp",
  },
  {
    no: "04",
    title: "Final Result",
    text: "Enjoy a spotless, refreshed space. We ensure your complete satisfaction before we leave.",
    image: "/images/services/step-result.webp",
  },
];

const benefits = [
  { icon: (c: string) => <Clock className={c} strokeWidth={2.2} />, title: "Quick & Easy Booking", sub: "Schedule in minutes" },
  { icon: (c: string) => <GearSolidIcon className={c} />, title: "Customized Cleaning", sub: "Tailored to your needs" },
  { icon: (c: string) => <UsersIcon className={c} />, title: "Verified Professionals", sub: "Trained and background-checked" },
  { icon: (c: string) => <ThumbUpIcon className={c} />, title: "Satisfaction Guaranteed", sub: "We get it right, every time" },
  { icon: (c: string) => <ShieldCheck className={c} strokeWidth={2.2} />, title: "Safe & Eco-Friendly", sub: "Family and pet-friendly products" },
  { icon: (c: string) => <LeafIcon className={c} />, title: "A Healthier Environment", sub: "Cleaner spaces for a brighter tomorrow" },
];

const WHY_PHOTO = "/images/how-it-works/why-it-works.webp";
const EYEBROW =
  "[&>span:nth-child(2)]:font-medium 3xl:[&>span:first-child]:w-[48px] 3xl:[&>span:last-child]:w-[48px] 3xl:[&>span:nth-child(2)]:text-[24px]";

function DashedArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 24" fill="none" stroke="#1d4a37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M3 12h44" strokeDasharray="7 8" />
      <path d="M56 4l10 8-10 8M50 12h15" />
    </svg>
  );
}

/** "How it Work" page body: four steps and the "Why It Works" band. */
export default function ProcessSteps() {
  return (
    <>
      {/* ---------- Steps ---------- */}
      <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
        <div className="bg-[#fafefc] pb-10 pt-12 sm:pt-14 2xl:pb-[58px] 2xl:pt-[52px]">
          <div className="container-x">
            <div className="mx-auto max-w-[1200px] text-center">
              <SectionEyebrow center compact className={EYEBROW}>Simple Steps</SectionEyebrow>
              <h2 className="mt-3 text-[clamp(28px,3.35vw,64px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#0b1a12] 2xl:mt-4">
                How Our Cleaning Process Works
              </h2>
              <p className="mx-auto mt-3 text-[15px] leading-[1.45] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:text-[21px] 3xl:text-[26px]">
                We make it easy for you. Just follow these simple steps and
                enjoy a cleaner, <br className="hidden xl:block" />
                fresher and healthier space.
              </p>
            </div>

            <ol className="mx-auto mt-12 grid max-w-[440px] grid-cols-1 gap-10 sm:max-w-none sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-14 2xl:mt-[60px] 2xl:gap-x-[72px] 3xl:-mx-[8px] 3xl:gap-x-[88px]">
              {steps.map((s, i) => (
                <li key={s.no} className="relative min-w-0">
                  <article className="flex h-full flex-col rounded-[18px] bg-white p-2 pb-6 text-center shadow-[0_14px_36px_-26px_rgba(11,42,28,0.4)] 2xl:rounded-[22px] 2xl:p-2.5 2xl:pb-7 3xl:p-[12px] 3xl:pb-[22px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[374/336] w-full rounded-[14px] object-cover object-[center_top] 2xl:rounded-[18px]"
                    />
                    <h3 className="mt-5 text-[19px] font-bold leading-tight text-[#0b1a12] lg:text-[17px] xl:text-[20px] 2xl:mt-7 2xl:text-[25px] 3xl:mt-[34px] 3xl:text-[30px]">
                      {s.title}
                    </h3>
                    <p className="mt-2 px-2 text-[15px] leading-[1.45] text-[#39544a] lg:px-0 lg:text-[13.5px] xl:px-1 xl:text-[15.5px] 2xl:mt-3 2xl:text-[20px] 3xl:px-[4px] 3xl:text-[24.5px] 3xl:leading-[37px]">
                      {s.text}
                    </p>
                  </article>

                  {/* Step number */}
                  <span className="absolute -top-3 left-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#14633f] text-[18px] font-bold text-white ring-4 ring-white lg:h-11 lg:w-11 lg:text-[16px] xl:h-14 xl:w-14 xl:text-[21px] 2xl:-top-4 2xl:left-4 2xl:h-[72px] 2xl:w-[72px] 2xl:text-[28px] 2xl:ring-[5px] 3xl:left-[20px] 3xl:h-[92px] 3xl:w-[92px] 3xl:text-[36px] 3xl:ring-[6px]">
                    {s.no}
                  </span>

                  {/* Dashed arrow to the next step (4-column layout only) */}
                  {i < steps.length - 1 && (
                    <DashedArrow className="absolute left-full top-[32%] hidden w-7 translate-x-[6px] lg:block xl:w-10 xl:translate-x-2 2xl:w-12 2xl:translate-x-3 3xl:top-[35%] 3xl:w-[74px] 3xl:translate-x-[7px]" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Why it works ---------- */}
      <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
        <div className="mx-4 rounded-[22px] bg-[#f0fbf5] p-5 sm:mx-6 sm:p-8 lg:mx-10 lg:p-8 2xl:ml-0 2xl:mr-[47px] 2xl:rounded-l-none 2xl:rounded-r-[28px] 2xl:py-[34px] 2xl:pl-[72px] 2xl:pr-8 3xl:pl-[89px] 3xl:pr-[30px]">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-8 xl:gap-12 3xl:grid-cols-[661px_minmax(0,1fr)] 3xl:gap-[66px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={WHY_PHOTO}
              alt="Avicleaner cleaner wiping a kitchen counter"
              loading="lazy"
              className="mx-auto aspect-[661/604] w-full max-w-[560px] rounded-[18px] object-cover object-[center_top] lg:max-w-none 2xl:rounded-[22px]"
            />

            <div className="min-w-0">
              <SectionEyebrow compact className={EYEBROW}>Why It Works</SectionEyebrow>
              <h2 className="mt-3 text-[clamp(26px,2.9vw,55px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#0b1a12] 2xl:mt-4">
                A Better Cleaning Experience
              </h2>
              <p className="mt-3 text-[15px] leading-[1.45] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:text-[21px] 3xl:max-w-[900px] 3xl:text-[26px]">
                Our well-structured process ensures high-quality results with
                complete transparency and customer satisfaction.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 xl:gap-y-6 2xl:mt-8 2xl:gap-y-[30px] 3xl:grid-cols-[500px_minmax(0,1fr)] 3xl:gap-x-0">
                {benefits.map(({ icon, title, sub }) => (
                  <li key={title} className="flex min-w-0 items-center gap-3 xl:gap-4 2xl:gap-5 3xl:gap-[24px]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d4a37] text-white lg:h-11 lg:w-11 xl:h-14 xl:w-14 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[88px] 3xl:w-[88px]">
                      {icon("h-[52%] w-[52%]")}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[16px] font-bold leading-tight text-[#0b1a12] lg:text-[14.5px] xl:text-[17px] 2xl:text-[21px] 3xl:text-[26px]">
                        {title}
                      </span>
                      <span className="mt-1 block text-[14px] leading-snug text-[#6a7572] lg:text-[13px] xl:text-[14.5px] 2xl:mt-1.5 2xl:text-[18px] 3xl:whitespace-nowrap 3xl:text-[21px]">
                        {sub}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
