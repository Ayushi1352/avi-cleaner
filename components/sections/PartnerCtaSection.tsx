import Link from "next/link";
import type { PartnerCtaData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ui } from "@/components/ui/styles";

/**
 * Dark green call-to-action banner.
 * Mission & Vision shows the "Partner With Us" banner; Service Detail passes its own data (wide, no leaf).
 */
export const PartnerCtaSection = ({
  data,
  showLeaf = true,
  // "wide" = full-width banner with larger type (Service Detail page).
  wide = false,
}: {
  data?: PartnerCtaData;
  showLeaf?: boolean;
  wide?: boolean;
}) => {
  if (!data) return null;
  const { eyebrow, title, text, image, button } = data;

  return (
    <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className={ui.container}>
        <div className={`relative isolate overflow-hidden rounded-[20px] bg-[var(--color-partner-cta-bg)] 2xl:rounded-[26px] ${wide ? "" : "2xl:mx-[20px] 3xl:ml-[32px] 3xl:mr-[76px]"}`}>
          {/* Photo on the right, tinted green (drop the file in to show it) */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 -z-20 w-full bg-cover bg-center opacity-[0.28] mix-blend-luminosity grayscale lg:w-[52%] lg:[mask-image:linear-gradient(to_right,transparent,var(--color-black)_40%)]"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-partner-cta-bg)] via-[var(--color-partner-cta-bg-85)] via-60% to-[var(--color-partner-cta-bg-25)]" />

          {/* Big faint leaf on the left */}
          {showLeaf && (
            <svg
              aria-hidden="true"
              viewBox="0 0 240 300"
              className="pointer-events-none absolute bottom-0 left-2 -z-10 h-[60%] text-[var(--color-white-15)] lg:h-[95%] 2xl:left-3"
            >
              <path fill="currentColor" d="M20 0c90 30 150 100 150 190 0 30-10 60-30 80C60 250 10 190 5 120 3 80 8 40 20 0Z" />
              <path fill="currentColor" d="M120 300c10-60 50-100 110-110-10 60-50 100-110 110Z" />
              <path fill="none" stroke="var(--color-partner-cta-stroke)" strokeOpacity=".75" strokeWidth="6" strokeLinecap="round" d="M30 30c40 70 70 150 95 270" />
            </svg>
          )}

          <div
            className={`flex flex-col gap-7 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pr-10 ${wide ? "2xl:min-h-[276px] 2xl:py-[44px] 2xl:pr-[54px]" : "2xl:min-h-[295px] 2xl:py-[50px] 2xl:pr-[56px]"} ${
              showLeaf ? "lg:pl-[120px] 2xl:pl-[212px]" : "lg:pl-12 2xl:pl-[98px]"
            }`}
          >
            <ScrollReveal variant="fade-up" duration={700} className="min-w-0 flex-1">
              <div>
                <SectionEyebrow light lines={false} className={wide ? "[&>span]:font-medium [&>span]:text-[var(--color-white-85)] 3xl:[&>span]:text-[20px]" : ""}>
                  {eyebrow}
                </SectionEyebrow>
                <h2 className={`mt-3 leading-[1.2] tracking-[-0.01em] text-[var(--color-white)] 2xl:mt-3 ${wide ? "text-[clamp(26px,2.77vw,53px)] font-extrabold" : "text-[clamp(26px,2.45vw,47px)] font-bold"}`}>
                  {title}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.55] text-[var(--color-white-90)] sm:text-[1rem] xl:text-[18px] 2xl:text-[21px] 3xl:text-[24.5px]">
                  {text}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150} duration={600} className="shrink-0">
              <Link
                href={button.href}
                className={`${ui.btnSolid} ${ui.btnYellow} group inline-flex w-fit shrink-0 items-center gap-3 whitespace-nowrap rounded-full px-8 py-4 text-[16px] font-bold 2xl:px-11 2xl:py-6 2xl:text-[21px] 3xl:h-[90px] 3xl:justify-center ${wide ? "3xl:min-w-[368px] 3xl:gap-5 3xl:text-[25px]" : "3xl:min-w-[305px] 3xl:text-[24px]"}`}
              >
                {button.label}
                <Icon name={button.icon} className="h-5 w-5 transition-transform group-hover:translate-x-1 2xl:h-6 2xl:w-6" strokeWidth={2.4} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
