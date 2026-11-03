import Link from "next/link";
import type { AboutUsData, GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ui } from "@/components/ui/styles";

const Lines = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((line, i) => (
      <span key={line}>
        {i > 0 && <br />}
        {line}
      </span>
    ))}
  </>
);

const CleanBadge = ({ data, className = "" }: { data: AboutUsData["badge"]; className?: string }) => {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center rounded-full border-[clamp(4px,0.65cqw,6px)] border-[var(--color-white)] bg-[var(--color-button)] text-center text-[var(--color-white)] shadow-[0_10px_30px_-12px_var(--color-black-30)] ${className}`}
    >
      <Icon name={data.icon} className="mb-[5%] h-[22%] w-[22%]" />
      <span className="font-poppins text-[clamp(11px,1.95cqw,19px)] font-medium leading-[1.15]">
        <Lines lines={data.lines} />
      </span>
    </div>
  );
};

const StatCard = ({ data, className = "" }: { data: AboutUsData["stat"]; className?: string }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[24px] bg-[var(--color-about-bg)] text-center sm:rounded-[clamp(20px,3cqw,30px)] ${className}`}
    >
      <Icon name={data.icon} className="h-[clamp(28px,6.6cqw,64px)] w-[clamp(28px,6.6cqw,64px)] text-[var(--color-primary)]" />
      <span className="mt-[clamp(4px,1cqw,10px)] font-poppins text-[clamp(26px,4.9cqw,47px)] font-bold leading-none text-[var(--color-heading)]">
        {data.value}
      </span>
      <span className="mt-[clamp(6px,1.5cqw,14px)] font-poppins text-[clamp(12px,2.1cqw,20px)] text-[var(--color-about-text)]">
        {data.label}
      </span>
    </div>
  );
};

const TrustedBadge = ({ data, className = "" }: { data: AboutUsData["trusted"]; className?: string }) => {
  return (
    <div
      className={`flex items-center gap-[clamp(8px,1.8cqw,17px)] rounded-[clamp(12px,1.9cqw,18px)] bg-[var(--color-white)] py-[clamp(8px,1.7cqw,16px)] pl-[clamp(10px,2cqw,19px)] pr-[clamp(12px,2.3cqw,22px)] shadow-[0_12px_30px_-12px_var(--color-shadow-heading-30)] ${className}`}
    >
      <span className="relative flex h-[clamp(34px,5.6cqw,54px)] w-[clamp(34px,5.6cqw,54px)] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--color-button)] text-[var(--color-white)] shadow transition-transform duration-300 hover:scale-[1.15]">
        <span className="absolute inset-0 rounded-full bg-[var(--color-button-40)] animate-ping opacity-30 pointer-events-none" />
        <Icon name={data.icon} motion="heartbeat" className="h-[56%] w-[56%]" strokeWidth={2} />
      </span>
      <span className="whitespace-nowrap font-poppins text-[clamp(11px,1.95cqw,19px)] font-medium leading-[1.25] text-[var(--color-heading)]">
        <Lines lines={data.lines} />
      </span>
    </div>
  );
};

export const AboutSection = ({ data, ui: labels, showButton = true }: { data?: AboutUsData; ui?: GlobalUIData; showButton?: boolean }) => {
  if (!data) return null;
  const [img1, img2, img3] = data.images;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--color-white)] pt-12 sm:pt-14 xl:pt-16 2xl:pt-[54px] pb-10 sm:pb-12 xl:pb-14 2xl:pb-[42px]"
    >
      {/* Decorative pale leaf + arcs on the right */}
      <svg
        aria-hidden="true"
        viewBox="0 0 480 770"
        preserveAspectRatio="xMaxYMin meet"
        className="pointer-events-none absolute bottom-0 right-0 top-[8%] hidden h-[92%] w-auto lg:block"
      >
        <path
          fill="var(--color-about-fill)"
          d="M208 3c92-3 192 17 272 59v438C440 380 330 150 208 3Z"
        />
        <path
          fill="none"
          stroke="var(--color-white)"
          strokeWidth="10"
          strokeLinecap="round"
          d="M290 50c90 60 150 160 182 290"
        />
        <path
          fill="none"
          stroke="var(--color-about-fill)"
          strokeWidth="42"
          d="M0 778c200-38 400-158 488-338"
        />
        <path
          fill="none"
          stroke="var(--color-about-fill)"
          strokeWidth="42"
          d="M96 796c170-30 330-110 400-232"
        />
      </svg>

      <div className={`${ui.container} relative`}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[955fr_762fr] lg:gap-10 xl:gap-14 2xl:gap-[clamp(56px,3.8vw,72px)]">
          {/* ---------- Collage: Stationary (Image vahi hai) ---------- */}
          <div className="[container-type:inline-size] mx-auto w-full min-w-0 max-w-[720px] lg:max-w-none">
            {/* Phones: stacked collage */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              <div className="relative col-span-2">
                <ImagePlaceholder
                  src={img1.src}
                  alt={img1.alt}
                  ui={labels}
                  className="aspect-[4/3] w-full rounded-[22px]"
                />
                <CleanBadge data={data.badge} className="absolute -bottom-6 right-4 z-10 w-[104px]" />
              </div>
              <ImagePlaceholder
                src={img2.src}
                alt={img2.alt}
                ui={labels}
                className="aspect-square w-full rounded-[20px]"
              />
              <div className="relative">
                <ImagePlaceholder
                  src={img3.src}
                  alt={img3.alt}
                  ui={labels}
                  className="aspect-square w-full rounded-[20px]"
                />
                {/* Sits on the third photo, like the tablet/desktop collage */}
                <TrustedBadge data={data.trusted} className="absolute bottom-2 right-2 z-10 origin-bottom-right max-[399px]:scale-[0.88]" />
              </div>
              <StatCard data={data.stat} className="col-span-2 py-6" />
            </div>

            {/* Tablet + desktop: overlapping collage (955 x 747 in the design) */}
            <div className="relative hidden aspect-[955/747] w-full sm:block">
              <ImagePlaceholder
                src={img1.src}
                alt={img1.alt}
                ui={labels}
                className="absolute left-0 top-0 h-[67.5%] w-[64.2%] rounded-[clamp(18px,3.4cqw,32px)]"
              />
              <ImagePlaceholder
                src={img2.src}
                alt={img2.alt}
                ui={labels}
                className="absolute right-0 top-0 h-[52.2%] w-[33.5%] rounded-[clamp(18px,3.4cqw,32px)]"
              />
              {/* White frame cuts the notch out of the two photos above it */}
              <div className="absolute bottom-[-1.9%] right-[-1.5%] h-[49%] w-[52.2%] rounded-[clamp(22px,4.4cqw,42px)] bg-[var(--color-white)] p-[1.5cqw]">
                <ImagePlaceholder
                  src={img3.src}
                  alt={img3.alt}
                  ui={labels}
                  className="h-full w-full rounded-[clamp(18px,3.4cqw,32px)]"
                />
              </div>
              <StatCard data={data.stat} className="absolute bottom-[1.3%] left-[3.1%] h-[28.1%] w-[43.5%]" />
              <CleanBadge data={data.badge} className="absolute left-[55.9%] top-[28.8%] w-[19.3%]" />
              <TrustedBadge data={data.trusted} className="absolute bottom-[3.2%] right-[1.6%]" />
            </div>
          </div>

          {/* ---------- Content: Slides in from the right (Text aara h side se) ---------- */}
          <ScrollReveal variant="fade-left" duration={800} className="min-w-0 font-poppins lg:pt-[1vw]">
            <div className="flex items-center gap-4">
              <span className="h-[2.5px] w-[clamp(40px,2.6vw,49px)] shrink-0 rounded-full bg-[var(--color-primary)]" />
              <span className="text-[clamp(16px,1.42vw,27px)] font-medium leading-[1.3] text-[var(--color-primary)]">
                {data.label}
              </span>
            </div>

            <h2 className="mt-[clamp(14px,1.55vw,30px)] text-[clamp(30px,3.63vw,69px)] font-bold leading-[1.115] tracking-[-0.01em] text-[var(--color-heading)]">
              {data.title.top}
              <br />
              <span className="text-[var(--color-primary)]">{data.title.highlight}</span>
            </h2>

            <p className="mt-[clamp(16px,1.45vw,28px)] text-[clamp(15px,1.135vw,21.6px)] leading-[1.455] text-[var(--color-about-text-2)]">
              {data.description.map((line, i) => (
                <span key={line}>
                  {i > 0 && (
                    <>
                      {" "}
                      <br className="hidden xl:block" />
                    </>
                  )}
                  {line}
                </span>
              ))}
            </p>

            <ul className="mt-[clamp(26px,1.8vw,34px)] grid grid-cols-1 gap-x-6 gap-y-[clamp(16px,1.05vw,20px)] min-[420px]:grid-cols-2 2xl:max-w-[clamp(0px,36.8vw,700px)]">
              {data.features.map(({ id, icon, title, subtitle }) => (
                <li
                  key={id}
                  className="flex min-w-0 items-center gap-[clamp(12px,1vw,19px)]"
                >
                  <span className="flex h-[clamp(48px,3.79vw,72px)] w-[clamp(48px,3.79vw,72px)] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--color-about-bg-2)] text-[var(--color-primary)] shadow transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_6px_18px_var(--color-primary-30)]">
                    <Icon name={icon} className="h-[54%] w-[54%] transition-transform duration-300" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[clamp(15px,1vw,19px)] font-semibold leading-tight text-[var(--color-heading)]">
                      {title}
                    </span>
                    <span className="mt-[clamp(3px,0.32vw,6px)] block text-[clamp(13px,0.815vw,15.5px)] leading-tight text-[var(--color-about-text-3)]">
                      {subtitle}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {showButton && (
              <Link
                href={data.button.href}
                className={`${ui.btnSolid} group mt-[clamp(30px,2.1vw,40px)] inline-flex h-[clamp(50px,3.9vw,74px)] items-center gap-[clamp(10px,0.75vw,14px)] rounded-full px-[clamp(28px,2.5vw,48px)] text-[clamp(15px,1.1vw,21px)] font-medium`}
              >
                {data.button.label}
                <Icon name={data.button.icon} className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
