import Link from "next/link";
import type { BreadcrumbData, GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ui } from "@/components/ui/styles";

/**
 * Inner-page banner: cleaner photo, dark gradient on the left, the page title in white
 * and a dark translucent breadcrumb pill. The first path is the home link; the last one is the current page.
 */
export const Breadcrumb = ({ data, ui: labels }: { data?: BreadcrumbData; ui: GlobalUIData }) => {
  if (!data) return null;
  const [home, ...items] = data.paths;

  return (
    <section className="relative isolate w-full overflow-hidden bg-[var(--color-banner-bg)]">
      {/* Background cleaner image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.bgImage}
        alt={data.bgImageAlt}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[68%_20%] sm:object-[72%_20%] lg:object-[78%_22%]"
      />

      {/* Dark gradient overlay on the left to ensure perfect text contrast while preserving image details on right */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-black-80)] via-[var(--color-black-50)] via-45% to-[var(--color-black-20)] lg:from-[var(--color-black-75)] lg:via-[var(--color-black-40)] lg:to-transparent" />

      <div className={`${ui.container} relative z-10`}>
        <ScrollReveal variant="fade-up" duration={600}>
          <div className="flex min-h-[240px] min-w-0 flex-col justify-center py-12 sm:min-h-[290px] md:min-h-[340px] lg:min-h-[390px] xl:min-h-[430px] 2xl:pl-6 3xl:pl-10">
            <h1 className="break-words text-[clamp(2.2rem,4.4vw,4.8rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-white)] drop-shadow-[0_1px_2px_var(--color-black-15)]">
              {data.title}
            </h1>

            <nav
              aria-label={labels.breadcrumb}
              className="mt-4 inline-flex w-fit max-w-full flex-nowrap items-center gap-x-1.5 gap-y-1 whitespace-nowrap rounded-full border border-[var(--color-white-25)] bg-[var(--color-black-35)] px-3.5 py-2 text-[clamp(10px,3.2vw,13px)] font-medium text-[var(--color-white)] backdrop-blur-md sm:mt-5 sm:flex-wrap sm:gap-x-3 sm:whitespace-normal sm:px-6 sm:py-2.5 sm:text-[15px] xl:mt-6 xl:px-7 xl:py-3 xl:text-[16px]"
            >
              <Link href={home.url} className="shrink-0 text-[var(--color-white-90)] transition-colors hover:text-[var(--color-white)] hover:underline">
                {home.label}
              </Link>
              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                  <span key={item.id} className={`inline-flex items-center gap-x-1.5 sm:gap-x-3 ${isLast ? "min-w-0" : "shrink-0"}`}>
                    <Icon name={labels.breadcrumbIcon} className="h-3 w-3 shrink-0 text-[var(--color-white-70)] sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
                    {isLast ? (
                      <span aria-current="page" className="truncate font-semibold text-[var(--color-banner-text)] sm:whitespace-normal">
                        {item.label}
                      </span>
                    ) : item.url ? (
                      <Link href={item.url} className="text-[var(--color-white-90)] transition-colors hover:text-[var(--color-white)] hover:underline">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[var(--color-white-90)]">{item.label}</span>
                    )}
                  </span>
                );
              })}
            </nav>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
