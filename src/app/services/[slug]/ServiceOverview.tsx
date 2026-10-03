import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoSlot from "@/components/PhotoSlot";
import SectionEyebrow from "@/components/SectionEyebrow";
import { HomeIcon, LeafIcon, ShieldCheckIcon, SparklesIcon, UsersIcon } from "@/components/icons";

const features = [
  { icon: LeafIcon, lines: ["Safe &", "Eco-Friendly"] },
  { icon: ShieldCheckIcon, lines: ["Trained &", "Verified Staff"] },
  { icon: SparklesIcon, lines: ["Deep &", "Detailed Cleaning"] },
  { icon: HomeIcon, lines: ["Customized", "Solutions"] },
];

/** Service Detail top: photo with trust badge, title, intro, features and CTA. */
export default function ServiceOverview({ service }: { service: any }) {
  return (
    <section className="w-full bg-white py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 xl:grid-cols-[878fr_828fr] xl:gap-12 2xl:gap-[72px] 3xl:pl-[16px]">
          {/* Photo */}
          <div className="relative mx-auto w-full min-w-0 max-w-[878px]">
            <PhotoSlot
              src={service.detailImage || service.image}
              alt={service.title}
              label={(service.detailImage || service.image).replace("/images/", "")}
              className="relative aspect-[878/722] w-full rounded-[18px] shadow-[0_18px_40px_-28px_rgba(11,42,28,0.45)] 2xl:rounded-[20px]"
            />
            <div className="absolute bottom-3 left-3 flex max-w-[calc(100%-24px)] items-center gap-3 rounded-[14px] bg-[#14503a] px-3.5 py-3 text-white sm:bottom-5 sm:left-5 2xl:bottom-[12px] 2xl:left-[38px] 2xl:gap-4 2xl:rounded-[16px] 2xl:px-5 2xl:py-4 3xl:gap-6 3xl:pr-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#14503a] 2xl:h-[58px] 2xl:w-[58px] 3xl:h-[82px] 3xl:w-[82px]">
                <UsersIcon className="h-1/2 w-1/2" />
              </span>
              <span className="min-w-0 text-[13px] font-medium leading-[1.35] sm:text-[15px] 2xl:text-[20px] 3xl:text-[24px]">
                Trusted by
                <br />
                1000+ Happy Families
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="min-w-0">
            <SectionEyebrow compact className="3xl:[&>span:first-child]:w-[46px] 3xl:[&>span:last-child]:w-[46px] 3xl:[&>span:nth-child(2)]:text-[23px]">Our Service</SectionEyebrow>
            <h1 className="mt-3 break-words text-[clamp(30px,3.45vw,66px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#0b1a12] 2xl:mt-5">
              {service.title}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-5 2xl:text-[21px] 3xl:mt-6 3xl:max-w-[815px] 3xl:text-[27px] 3xl:leading-[1.48]">
              {service.intro}
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-x-3 gap-y-6 sm:flex sm:justify-between sm:gap-3 2xl:mt-9 3xl:max-w-[815px] 3xl:pl-[2px] 3xl:pr-[4px]">
              {features.map(({ icon: Icon, lines }) => (
                <li key={lines.join(" ")} className="flex min-w-0 flex-col items-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e2f7eb] text-[#0f4a35] 2xl:h-[90px] 2xl:w-[90px] 3xl:h-[112px] 3xl:w-[112px]">
                    <Icon className="h-[50%] w-[50%]" />
                  </span>
                  <span className="mt-3 text-[13.5px] leading-[1.35] text-[#1d2433] xl:text-[15px] 2xl:text-[18px] 3xl:mt-[18px] 3xl:text-[23.5px]">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/book-now"
              className="btn-solid btn-yellow group mt-8 inline-flex items-center gap-3 whitespace-nowrap rounded-full px-8 py-3.5 text-[15px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd86b] 2xl:mt-10 2xl:px-11 2xl:py-5 2xl:text-[20px] 3xl:mt-[52px] 3xl:min-w-[354px] 3xl:justify-center 3xl:gap-5 3xl:py-[27px] 3xl:text-[25px]"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
