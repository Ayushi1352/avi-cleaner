"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, User } from "lucide-react";
import posts from "./blogPostsData";
import { site, fill, pickIcons } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.blogPage.text.BlogGrid;
const uiLinks = site.blogPage.links.BlogGrid;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "calendar-days": CalendarDays, user: User, "arrow-right": ArrowRight, "chevron-left": ChevronLeft, "chevron-right": ChevronRight };
const uiIcons = pickIcons(site.blogPage.icons.BlogGrid, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.blogPage.text.BlogGrid;

const PER_PAGE = site.blogPage.settings.BlogGrid.perPage;

function BlogCard({ post }: { post: any }) {
  const href = fill(uiLinks.blogSlug, { slug: post.slug });
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_10px_30px_-18px_rgba(11,42,28,0.4)] 2xl:rounded-[14px]">
      <Link href={href} aria-label={post.title} className="group relative block aspect-[563/204] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-[8px] bg-[#124734] px-3 py-1 text-[12.5px] font-medium text-white xl:text-[13.5px] 2xl:left-5 2xl:top-5 2xl:px-4 2xl:py-1.5 2xl:text-[15px] 3xl:rounded-[10px] 3xl:text-[17px]">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 2xl:px-[18px] 2xl:pb-[22px] 2xl:pt-5">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#6b7280] 2xl:text-[14px] 3xl:gap-x-4 3xl:text-[15.5px]">
          <span className="inline-flex items-center gap-1.5 2xl:gap-2">
            <uiIcons.calendarDays className="h-[1.1em] w-[1.1em] text-[#1f7a4d]" strokeWidth={2.4} />
            {post.date}
          </span>
          <span aria-hidden="true" className="text-[#c6ccd3]">{"|"}</span>
          <span className="inline-flex items-center gap-1.5 2xl:gap-2">
            <uiIcons.user className="h-[1.1em] w-[1.1em] text-[#f0a52b]" fill="currentColor" strokeWidth={0} />
            {copy.by + " "}{typeof post.author === "object" ? post.author.name : (post.author || site.blogPage.postDefaults.author)}
          </span>
        </p>

        <h3 className="mt-2.5 max-w-[15.5em] text-[18px] font-bold leading-[1.25] text-[#0b1a12] lg:text-[16px] xl:text-[19px] 2xl:mt-3 2xl:text-[21px] 3xl:text-[23.5px]">
          <Link href={href} className="transition-colors hover:text-green">
            {post.title}
          </Link>
        </h3>

        <div className="mt-2 flex flex-1 flex-wrap items-end justify-between gap-x-4 gap-y-3 2xl:mt-2.5">
          <p className="min-w-[170px] flex-1 text-[13.5px] leading-[1.5] text-[#6b7280] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16.5px]">
            {post.excerpt}
          </p>
          <Link
            href={href}
            className="btn-solid btn-yellow group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-2.5 text-[13.5px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd659] xl:text-[14px] 2xl:px-6 2xl:py-3 2xl:text-[15px] 3xl:px-[28px] 3xl:py-[15px] 3xl:text-[16.5px]"
          >
            {copy.readMore}
            <uiIcons.arrowRight className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Blog page body: post grid with pagination (6 per page). */
export default function BlogGrid() {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const totalPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  const visible = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold shadow-[0_4px_14px_-4px_rgba(11,42,28,0.3)] transition-colors 2xl:h-12 2xl:w-12 2xl:text-[16px] 3xl:h-[50px] 3xl:w-[50px]";
  const idle = "bg-white text-[#0b1a12] hover:bg-[#0c3f2e] hover:text-white disabled:pointer-events-none disabled:opacity-60";

  return (
    <section ref={sectionRef} className="w-full scroll-mt-24 bg-[#fbfcfc] py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      <div className="container-x">
        <ul className="mx-auto grid max-w-[560px] grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-5 2xl:gap-x-[34px] 2xl:gap-y-[26px] 3xl:px-[24px]">
          {visible.map((p) => (
            <li key={p.slug} className="min-w-0">
              <BlogCard post={p} />
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <nav aria-label={copy.blogPages} className="mt-9 flex justify-center 2xl:mt-[28px]">
            <ul className="flex flex-wrap items-center justify-center gap-2.5 2xl:gap-3">
              <li>
                <button type="button" onClick={() => goTo(page - 1)} disabled={page === 1} aria-label={copy.previousPage} className={`${btn} ${idle}`}>
                  <uiIcons.chevronLeft className="h-4 w-4" strokeWidth={3} />
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  <button
                    type="button"
                    onClick={() => goTo(n)}
                    aria-label={fill(uiText.pageN, { n })}
                    aria-current={n === page ? "page" : undefined}
                    className={`${btn} ${n === page ? "bg-[#0c3f2e] text-white" : idle}`}
                  >
                    {n}
                  </button>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => goTo(page + 1)} disabled={page === totalPages} aria-label={copy.nextPage} className={`${btn} ${idle}`}>
                  <uiIcons.chevronRight className="h-4 w-4" strokeWidth={3} />
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
