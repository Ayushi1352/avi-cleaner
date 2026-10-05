import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import siteData from "@/data/site.json";

// Text lives in src/data/site.json under text.PageHero.
const copy = siteData.text.PageHero;

const BANNER_BG =
  "/images/page-banner-cleaner.webp";

/**
 * Inner-page banner: cleaner background without text,
 * dark gradient overlay, page title in white, and dark translucent breadcrumb pill.
 * Shared by About Us, Why Choose Us, Mission & Vision, Team, Team Detail,
 * Services and Service Detail.
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  crumb?: string | (string | BreadcrumbItem)[];
  breadcrumbs?: (string | BreadcrumbItem)[];
}

export default function PageHero({ title, crumb, breadcrumbs }: PageHeroProps) {
  const items: BreadcrumbItem[] = [];
  const rawList = breadcrumbs || (Array.isArray(crumb) ? crumb : null);

  if (rawList && rawList.length > 0) {
    rawList.forEach((item) => {
      if (typeof item === "string") {
        items.push({ label: item });
      } else {
        items.push(item);
      }
    });
  } else {
    items.push({ label: (typeof crumb === "string" ? crumb : null) || title });
  }

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0d1622]">
      {/* Background cleaner image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BANNER_BG}
        alt={copy.avicleanerPageBanner}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[68%_20%] sm:object-[72%_20%] lg:object-[78%_22%]"
      />

      {/* Dark gradient overlay on the left to ensure perfect text contrast while preserving image details on right */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 via-45% to-black/20 lg:from-black/75 lg:via-black/40 lg:to-transparent" />

      <div className="container-x relative z-10">
        <ScrollReveal variant="fade-up" duration={600}>
          <div className="flex min-h-[240px] min-w-0 flex-col justify-center py-12 sm:min-h-[290px] md:min-h-[340px] lg:min-h-[390px] xl:min-h-[430px] 2xl:pl-6 3xl:pl-10">
            <h1 className="break-words text-[clamp(2.2rem,4.4vw,4.8rem)] font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm">
              {title}
            </h1>

            <nav
              aria-label={copy.breadcrumb}
              className="mt-4 inline-flex w-fit max-w-full flex-nowrap items-center gap-x-1.5 gap-y-1 whitespace-nowrap rounded-full border border-white/25 bg-black/35 px-3.5 py-2 text-[clamp(10px,3.2vw,13px)] font-medium sm:flex-wrap sm:whitespace-normal text-white backdrop-blur-md sm:mt-5 sm:gap-x-3 sm:px-6 sm:py-2.5 sm:text-[15px] xl:mt-6 xl:px-7 xl:py-3 xl:text-[16px]"
            >
            <Link href="/" className="shrink-0 text-white/90 transition-colors hover:text-white hover:underline">
              {copy.home}
            </Link>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <span
                  key={`${item.label}-${index}`}
                  className={`inline-flex items-center gap-x-1.5 sm:gap-x-3 ${isLast ? "min-w-0" : "shrink-0"}`}
                >
                  <ArrowRight className="h-3 w-3 shrink-0 text-white/70 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
                  {isLast ? (
                    <span aria-current="page" className="truncate font-semibold text-[#fab515] sm:whitespace-normal">
                      {item.label}
                    </span>
                  ) : item.href ? (
                    <Link
                      href={item.href}
                      className="text-white/90 transition-colors hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{item.label}</span>
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
}
