import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import {
  DiamondIcon,
  LeafIcon,
  SproutIcon,
  ThumbUpIcon,
  UsersIcon,
} from "./icons";

const ABOUT_IMG_1 =
  "/images/home/about-1.webp";
const ABOUT_IMG_2 =
  "/images/home/about-2.webp";
const ABOUT_IMG_3 =
  "/images/home/about-3.webp";

const features = [
  { icon: DiamondIcon, title: "Reliable Service", subtitle: "On-Time & Consistent" },
  { icon: UsersIcon, title: "Expert Cleaners", subtitle: "Trained & Verified Staff" },
  { icon: LeafIcon, title: "Eco-Friendly", subtitle: "Safe for You & the Planet" },
  { icon: ThumbUpIcon, title: "Customer Satisfaction", subtitle: "Our Top Priority" },
];

function CleanBadge({ className = "" }) {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center rounded-full border-[clamp(4px,0.65cqw,6px)] border-white bg-[#2a7a38] text-center text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3)] ${className}`}
    >
      <SproutIcon className="mb-[5%] h-[22%] w-[22%]" />
      <span className="font-poppins text-[clamp(11px,1.95cqw,19px)] font-medium leading-[1.15]">
        Clean
        <br />
        Greener
        <br />
        Healthier
      </span>
    </div>
  );
}

function StatCard({ className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[24px] bg-[#f3f8f3] text-center sm:rounded-[clamp(20px,3cqw,30px)] ${className}`}
    >
      <UsersIcon className="h-[clamp(28px,6.6cqw,64px)] w-[clamp(28px,6.6cqw,64px)] text-green" />
      <span className="mt-[clamp(4px,1cqw,10px)] font-poppins text-[clamp(26px,4.9cqw,47px)] font-bold leading-none text-navy">
        30+
      </span>
      <span className="mt-[clamp(6px,1.5cqw,14px)] font-poppins text-[clamp(12px,2.1cqw,20px)] text-[#48536f]">
        Years of Experience
      </span>
    </div>
  );
}

function TrustedBadge({ className = "" }) {
  return (
    <div
      className={`flex items-center gap-[clamp(8px,1.8cqw,17px)] rounded-[clamp(12px,1.9cqw,18px)] bg-white py-[clamp(8px,1.7cqw,16px)] pl-[clamp(10px,2cqw,19px)] pr-[clamp(12px,2.3cqw,22px)] shadow-[0_12px_30px_-12px_rgba(11,27,69,0.3)] ${className}`}
    >
      <span className="relative flex h-[clamp(34px,5.6cqw,54px)] w-[clamp(34px,5.6cqw,54px)] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#2a7a38] text-white shadow-sm transition-transform duration-300 hover:scale-115">
        <span className="absolute inset-0 rounded-full bg-[#2a7a38]/40 animate-ping opacity-30 pointer-events-none" />
        <ShieldCheck className="h-[56%] w-[56%] animate-icon-heartbeat" strokeWidth={2} />
      </span>
      <span className="whitespace-nowrap font-poppins text-[clamp(11px,1.95cqw,19px)] font-medium leading-[1.25] text-navy">
        Trusted by
        <br />
        Happy Clients
      </span>
    </div>
  );
}

export default function AboutSection({ showButton = true }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white pt-12 sm:pt-14 xl:pt-16 2xl:pt-[54px] pb-10 sm:pb-12 xl:pb-14 2xl:pb-[42px]"
    >
      {/* Decorative pale leaf + arcs on the right */}
      <svg
        aria-hidden="true"
        viewBox="0 0 480 770"
        preserveAspectRatio="xMaxYMin meet"
        className="pointer-events-none absolute bottom-0 right-0 top-[8%] hidden h-[92%] w-auto lg:block"
      >
        <path
          fill="#ecf4ec"
          d="M208 3c92-3 192 17 272 59v438C440 380 330 150 208 3Z"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="10"
          strokeLinecap="round"
          d="M290 50c90 60 150 160 182 290"
        />
        <path
          fill="none"
          stroke="#ecf4ec"
          strokeWidth="42"
          d="M0 778c200-38 400-158 488-338"
        />
        <path
          fill="none"
          stroke="#ecf4ec"
          strokeWidth="42"
          d="M96 796c170-30 330-110 400-232"
        />
      </svg>

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[955fr_762fr] lg:gap-10 xl:gap-14 2xl:gap-[clamp(56px,3.8vw,72px)]">
          {/* ---------- Collage ---------- */}
          <div className="@container mx-auto w-full min-w-0 max-w-[720px] lg:max-w-none">
            {/* Phones: stacked collage */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              <div className="relative col-span-2">
                <ImagePlaceholder
                  src={ABOUT_IMG_1}
                  alt="Avicleaner cleaner smiling and ready to clean"
                  placeholderLabel="about-cleaner-woman.jpg"
                  className="aspect-[4/3] w-full rounded-[22px]"
                />
                <CleanBadge className="absolute -bottom-6 right-4 z-10 w-[104px]" />
              </div>
              <ImagePlaceholder
                src={ABOUT_IMG_2}
                alt="Sofa being vacuumed"
                placeholderLabel="about-sofa-vacuum.jpg"
                className="aspect-square w-full rounded-[20px]"
              />
              <div className="relative">
                <ImagePlaceholder
                  src={ABOUT_IMG_3}
                  alt="Cleaning supplies bucket with bottles and cloth"
                  placeholderLabel="about-supplies.jpg"
                  className="aspect-square w-full rounded-[20px]"
                />
                {/* Sits on the third photo, like the tablet/desktop collage */}
                <TrustedBadge className="absolute bottom-2 right-2 z-10 origin-bottom-right max-[399px]:scale-[0.88]" />
              </div>
              <StatCard className="col-span-2 py-6" />
            </div>

            {/* Tablet + desktop: overlapping collage (955 x 747 in the design) */}
            <div className="relative hidden aspect-[955/747] w-full sm:block">
              <ImagePlaceholder
                src={ABOUT_IMG_1}
                alt="Avicleaner cleaner smiling and ready to clean"
                placeholderLabel="about-cleaner-woman.jpg"
                className="absolute left-0 top-0 h-[67.5%] w-[64.2%] rounded-[clamp(18px,3.4cqw,32px)]"
              />
              <ImagePlaceholder
                src={ABOUT_IMG_2}
                alt="Sofa being vacuumed"
                placeholderLabel="about-sofa-vacuum.jpg"
                className="absolute right-0 top-0 h-[52.2%] w-[33.5%] rounded-[clamp(18px,3.4cqw,32px)]"
              />
              {/* White frame cuts the notch out of the two photos above it */}
              <div className="absolute bottom-[-1.9%] right-[-1.5%] h-[49%] w-[52.2%] rounded-[clamp(22px,4.4cqw,42px)] bg-white p-[1.5cqw]">
                <ImagePlaceholder
                  src={ABOUT_IMG_3}
                  alt="Cleaning supplies bucket with bottles and cloth"
                  placeholderLabel="about-supplies.jpg"
                  className="h-full w-full rounded-[clamp(18px,3.4cqw,32px)]"
                />
              </div>
              <StatCard className="absolute bottom-[1.3%] left-[3.1%] h-[28.1%] w-[43.5%]" />
              <CleanBadge className="absolute left-[55.9%] top-[28.8%] w-[19.3%]" />
              <TrustedBadge className="absolute bottom-[3.2%] right-[1.6%]" />
            </div>
          </div>

          {/* ---------- Content ---------- */}
          <div className="min-w-0 font-poppins lg:pt-[1vw]">
            <div className="flex items-center gap-4">
              <span className="h-[2.5px] w-[clamp(40px,2.6vw,49px)] shrink-0 rounded-full bg-green" />
              <span className="text-[clamp(16px,1.42vw,27px)] font-medium leading-[1.3] text-green">
                About Us
              </span>
            </div>

            <h2 className="mt-[clamp(14px,1.55vw,30px)] text-[clamp(30px,3.63vw,69px)] font-bold leading-[1.115] tracking-[-0.01em] text-navy">
              Delivering Quality
              <br />
              <span className="text-green">Cleaning Services</span>
            </h2>

            <p className="mt-[clamp(16px,1.45vw,28px)] text-[clamp(15px,1.135vw,21.6px)] leading-[1.455] text-[#474f63]">
              At Avicleaner, we believe a clean space leads to a healthier,{" "}
              <br className="hidden xl:block" />
              happier and more productive life. Our professional team{" "}
              <br className="hidden xl:block" />
              is committed to providing high-quality cleaning services{" "}
              <br className="hidden xl:block" />
              for homes, offices, and commercial spaces with care and precision.
            </p>

            <ul className="mt-[clamp(26px,1.8vw,34px)] grid grid-cols-1 gap-x-6 gap-y-[clamp(16px,1.05vw,20px)] min-[420px]:grid-cols-2 2xl:max-w-[clamp(0px,36.8vw,700px)]">
              {features.map(({ icon: Icon, title, subtitle }) => (
                <li
                  key={title}
                  className="flex min-w-0 items-center gap-[clamp(12px,1vw,19px)]"
                >
                  <span className="flex h-[clamp(48px,3.79vw,72px)] w-[clamp(48px,3.79vw,72px)] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#e7f1e8] text-green shadow-sm transition-all duration-300 hover:scale-115 hover:shadow-[0_6px_18px_rgba(42,124,53,0.3)]">
                    <Icon className="h-[54%] w-[54%] transition-transform duration-300" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[clamp(15px,1vw,19px)] font-semibold leading-tight text-navy">
                      {title}
                    </span>
                    <span className="mt-[clamp(3px,0.32vw,6px)] block text-[clamp(13px,0.815vw,15.5px)] leading-tight text-[#55607a]">
                      {subtitle}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {showButton && (
              <Link
                href="/about-us"
                className="btn-solid group mt-[clamp(30px,2.1vw,40px)] inline-flex h-[clamp(50px,3.9vw,74px)] items-center gap-[clamp(10px,0.75vw,14px)] rounded-full px-[clamp(28px,2.5vw,48px)] text-[clamp(15px,1.1vw,21px)] font-medium"
              >
                Read More
                <ArrowRight className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
