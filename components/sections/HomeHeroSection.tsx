import Link from "next/link";
import type { HeroData, ImageData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ui } from "@/components/ui/styles";

/* Hero photo: full hero height, pushed off the right edge by 6.4% of the hero width (the design
   value). On taller heroes the photo grows, so it is pushed further right to keep the cleaner clear
   of the text column. */
const HERO_PHOTO = "absolute top-0 right-[min(-6.4cqw,calc(43.5cqw_-_109.2cqh))] h-full w-auto max-w-none";

/* Fades the photo into the page tint on the left (frame, sofa and cleaner stay fully visible), with a
   soft patch behind the feature badges. Wider than the 1920px container, the fade stays tied to the
   text column. */
const HERO_FADE =
  "bg-[image:radial-gradient(ellipse_20%_14%_at_40%_87%,var(--color-hero-fade-92)_60%,var(--color-hero-fade-0)_100%),linear-gradient(90deg,var(--color-hero-bg)_0%,var(--color-hero-fade-97)_30%,var(--color-hero-fade-80)_39%,var(--color-hero-fade-35)_46%,var(--color-hero-fade-0)_51.5%)] min-[1920px]:bg-[image:radial-gradient(ellipse_20%_14%_at_40%_87%,var(--color-hero-fade-92)_60%,var(--color-hero-fade-0)_100%),linear-gradient(90deg,var(--color-hero-bg)_0%,var(--color-hero-fade-97)_calc(50%_-_384px),var(--color-hero-fade-80)_calc(50%_-_211px),var(--color-hero-fade-35)_calc(50%_-_77px),var(--color-hero-fade-0)_calc(50%_+_29px))]";

/* Bottom-left corner of the same photo (blurred plant), independent of where the main photo sits. */
const HERO_PLANT =
  "absolute bottom-0 left-0 h-[22%] w-[7.5%] bg-no-repeat bg-[position:left_bottom] bg-[length:auto_454.5%] [mask-image:radial-gradient(ellipse_100%_100%_at_0%_100%,var(--color-black)_35%,transparent_100%)]";

const HeroImage = ({ image, className }: { image: ImageData; className: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={image.src} alt={image.alt} className={className} />
);

export const HomeHeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;
  const { title, image, primaryButton, secondaryButton } = data;

  return (
    <section className="relative overflow-hidden bg-[var(--color-hero-bg)]">
      {/* Desktop: photo anchored to the right, fading to the page tint on the left */}
      <div className="pointer-events-none absolute inset-0 hidden [container-type:size] lg:block">
        <HeroImage image={image} className={HERO_PHOTO} />
        <div className={`${HERO_FADE} absolute inset-0`} />
        {/* Blurred plant peeking in at the bottom-left corner */}
        <div className={HERO_PLANT} style={{ backgroundImage: `url(${image.src})` }} aria-hidden="true" />
      </div>

      <div className={`${ui.container} relative z-10`}>
        <div className="flex flex-col py-10 sm:py-14 lg:min-h-[500px] lg:justify-center lg:py-12 xl:min-h-[580px] 2xl:min-h-[700px] 3xl:min-h-[862px] 3xl:py-[90px]">
          <ScrollReveal variant="fade-up" duration={750} className="w-full max-w-[620px] lg:max-w-[56%] 3xl:max-w-[940px] 3xl:pl-[26px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 sm:gap-4 3xl:gap-[18px]">
              <span className="h-[3px] w-10 shrink-0 rounded-full bg-[var(--color-primary)] 2xl:w-[56px]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.26em] text-[var(--color-hero-text)] sm:text-[13px] 2xl:text-[15px] 3xl:text-[17px] 3xl:tracking-[0.32em]">
                {data.eyebrow}
              </span>
            </div>

            {/* Heading: first two lines large, third line a step smaller */}
            <h1 className="mt-5 text-[clamp(34px,4.52vw,86px)] font-extrabold tracking-[-0.005em] text-[var(--color-hero-text-2)] 2xl:mt-6 3xl:mt-[30px]">
              <span className="block leading-[1.07]">{title.top}</span>
              <span className="block leading-[1.07] tracking-[0.015em] text-[var(--color-primary)]">{title.highlight}</span>
              <span className="block text-[0.875em] leading-[1.08]">{title.bottom}</span>
            </h1>

            {/* Paragraph: one design line per entry, joined on smaller screens */}
            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.5] text-[var(--color-hero-text-3)] sm:text-[1rem] lg:max-w-none xl:text-[18px] 2xl:mt-5 2xl:text-[21px] 3xl:mt-[22px] 3xl:text-[25px] 3xl:leading-[35px]">
              {data.description.map((line, i) => (
                <span key={line}>
                  {i > 0 && (
                    <>
                      {" "}
                      <br className="hidden lg:block" />
                    </>
                  )}
                  {line}
                </span>
              ))}
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3 sm:gap-5 2xl:mt-8 3xl:gap-[22px]">
              <Link
                href={primaryButton.href}
                className={`${ui.btnSolid} group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[16px] font-bold [--btn:var(--color-hero-button)] xl:px-9 xl:py-4 xl:text-[18px] 2xl:text-[20px] 3xl:h-[72px] 3xl:w-[272px] 3xl:gap-5 3xl:text-[24px]`}
              >
                {primaryButton.label}
                <Icon name={primaryButton.icon} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 2xl:h-5 2xl:w-5" />
              </Link>
              <Link
                href={secondaryButton.href}
                className={`${ui.btnOutline} group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[15px] font-bold [--btn-bg:var(--color-white-50)] [--btn:var(--color-hero-text-2)] xl:px-9 xl:py-4 xl:text-[17px] 2xl:text-[19px] 3xl:h-[72px] 3xl:w-[255px] 3xl:gap-4 3xl:text-[22px]`}
              >
                {secondaryButton.label}
                <Icon name={secondaryButton.icon} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 2xl:h-5 2xl:w-5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Feature badges */}
          <ScrollReveal variant="fade-up" delay={200} duration={750} className="w-full">
            <ul className="mt-9 grid w-full grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 lg:max-w-[52%] lg:grid-cols-2 xl:flex xl:w-auto xl:max-w-none xl:flex-nowrap xl:gap-0 2xl:mt-12 3xl:pl-[26px]">
              {data.features.map((feature, i) => (
                <li
                  key={feature.id}
                  className={`relative flex min-w-0 items-center gap-2.5 sm:gap-3 3xl:gap-[14px] ${
                    i === 0
                      ? "xl:pr-3.5 2xl:pr-5 3xl:pr-6"
                      : "xl:px-3.5 xl:before:absolute xl:before:left-0 xl:before:top-[10%] xl:before:h-[80%] xl:before:w-px xl:before:bg-[var(--color-hero-bg-2)] xl:before:content-[''] 2xl:px-5 3xl:px-6"
                  }`}
                >
                  <span className="relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--color-hero-fill)] text-[var(--color-primary)] shadow transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_6px_18px_var(--color-primary-30)] sm:h-12 sm:w-12 2xl:h-14 2xl:w-14 3xl:h-[74px] 3xl:w-[74px]">
                    <Icon name={feature.icon} className="h-7 w-7 transition-transform duration-300 sm:h-8 sm:w-8 2xl:h-9 2xl:w-9 3xl:h-12 3xl:w-12" />
                  </span>
                  <span className="min-w-0 text-[12.5px] font-medium leading-[1.4] text-[var(--color-hero-text-4)] sm:text-[13px] xl:whitespace-nowrap xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px]">
                    {feature.lines[0]}
                    <br />
                    {feature.lines[1]}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Mobile / tablet photo */}
          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:aspect-[16/9] lg:hidden">
            <HeroImage image={image} className="absolute inset-0 h-full w-full object-cover object-[72%_15%]" />
          </div>
        </div>
      </div>
    </section>
  );
};
