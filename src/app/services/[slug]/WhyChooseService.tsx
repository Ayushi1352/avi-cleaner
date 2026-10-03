import { Heart } from "lucide-react";
import PhotoSlot from "@/components/PhotoSlot";
import SectionEyebrow from "@/components/SectionEyebrow";
import { LeafIcon, ShieldCheckIcon, UsersIcon } from "@/components/icons";

/* Solid icons drawn to match the design. */
function CoinsSolidIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6.5" y="2.6" width="13" height="3.5" rx="1.75" />
      <rect x="4.5" y="7.1" width="13" height="3.5" rx="1.75" />
      <rect x="6.5" y="11.6" width="13" height="3.5" rx="1.75" />
      <rect x="4.5" y="16.1" width="13" height="3.5" rx="1.75" />
    </svg>
  );
}

function CalendarSolidIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Z"
      />
      <g fill="#e4f9ee">
        <rect x="5" y="7.6" width="14" height="1.2" />
        <rect x="6.6" y="11" width="2.4" height="2.4" rx="0.4" />
        <rect x="10.8" y="11" width="2.4" height="2.4" rx="0.4" />
        <rect x="15" y="11" width="2.4" height="2.4" rx="0.4" />
        <rect x="6.6" y="15" width="2.4" height="2.4" rx="0.4" />
        <rect x="10.8" y="15" width="2.4" height="2.4" rx="0.4" />
        <rect x="15" y="15" width="2.4" height="2.4" rx="0.4" />
      </g>
    </svg>
  );
}

const items = [
  { icon: (c: string) => <UsersIcon className={c} />, label: "Experienced & Skilled Team" },
  { icon: (c: string) => <ShieldCheckIcon className={c} />, label: "Satisfaction Guaranteed" },
  { icon: (c: string) => <LeafIcon className={c} />, label: "Eco-Friendly Products" },
  { icon: (c: string) => <CoinsSolidIcon className={c} />, label: "Affordable Pricing" },
  { icon: (c: string) => <CalendarSolidIcon className={c} />, label: "Flexible Scheduling" },
  { icon: (c: string) => <Heart className={c} fill="currentColor" strokeWidth={0} />, label: "Healthy Living Environment" },
];

/** "Why Choose Us — Why Choose Our <Service>?" */
export default function WhyChooseService({ service }: { service: any }) {
  return (
    <section className="w-full bg-white py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,40%)_1fr] xl:gap-12 2xl:gap-[76px] 3xl:grid-cols-[573px_1fr] 3xl:pl-[12px]">
          <PhotoSlot
            src={service.whyImage || "/images/services/why-choose-service.webp"}
            alt="Gloved hands wiping a marble counter"
            label={(service.whyImage || "/images/services/why-choose-service.webp").replace("/images/", "")}
            className="relative mx-auto aspect-square w-full max-w-[573px] rounded-[18px] shadow-[0_18px_40px_-28px_rgba(11,42,28,0.45)] 2xl:rounded-[20px]"
          />

          <div className="min-w-0">
            <SectionEyebrow compact className="3xl:-ml-[36px] 3xl:[&>span:first-child]:w-[46px] 3xl:[&>span:last-child]:w-[46px] 3xl:[&>span:nth-child(2)]:text-[23px]">Why Choose Us</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(28px,2.9vw,55px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#0b1a12] 2xl:mt-4">
              Why Choose Our
              <br className="hidden sm:block" /> {service.whyName || service.title} Service?
            </h2>
            <p className="mt-3 max-w-[760px] text-[15px] leading-[1.6] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-4 2xl:text-[21px] 3xl:max-w-[720px] 3xl:text-[27.5px] 3xl:leading-[1.38]">
              We are committed to delivering high-quality cleaning services with
              reliability, safety and care.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 2xl:mt-8 2xl:gap-y-[14px] 3xl:mt-[26px] 3xl:grid-cols-[622px_1fr] 3xl:gap-x-0">
              {items.map(({ icon, label }) => (
                <li key={label} className="flex min-w-0 items-center gap-4 2xl:gap-[38px]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e4f9ee] text-[#0f4a35] 2xl:h-[70px] 2xl:w-[70px] 3xl:h-[84px] 3xl:w-[84px]">
                    {icon("h-[52%] w-[52%]")}
                  </span>
                  <span className="min-w-0 text-[15px] font-medium leading-snug text-[#1d2433] xl:text-[16px] 2xl:text-[21px] 3xl:whitespace-nowrap 3xl:text-[26px]">
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
}
