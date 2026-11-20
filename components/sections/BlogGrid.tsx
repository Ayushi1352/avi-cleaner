"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { BlogGridData, BlogGridProps, BlogGridPost } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { Pagination } from "@/components/ui/Pagination";
import { ui } from "@/components/ui/styles";

function BlogCard({ post, data }: { post: BlogGridPost; data: BlogGridData }) {
  const href = post.url;
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[12px] bg-[var(--color-white)] shadow-[0_10px_30px_-18px_var(--color-shadow-card-40)] 2xl:rounded-[14px]">
      <Link href={href} aria-label={post.title} className="group relative block aspect-[563/204] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-[8px] bg-[var(--color-forest-dark)] px-3 py-1 text-[12.5px] font-medium text-[var(--color-white)] xl:text-[13.5px] 2xl:left-5 2xl:top-5 2xl:px-4 2xl:py-1.5 2xl:text-[15px] 3xl:rounded-[10px] 3xl:text-[17px]">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 2xl:px-[18px] 2xl:pb-[22px] 2xl:pt-5">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[var(--color-blog-text)] 2xl:text-[14px] 3xl:gap-x-4 3xl:text-[15.5px]">
          <span className="inline-flex items-center gap-1.5 2xl:gap-2">
            <Icon name={data.icons.date} className="h-[1.1em] w-[1.1em] text-[var(--color-link)]" strokeWidth={2.4} />
            {post.date}
          </span>
          <span aria-hidden="true" className="text-[var(--color-blog-text-2)]">{"|"}</span>
          <span className="inline-flex items-center gap-1.5 2xl:gap-2">
            <Icon name={data.icons.author} className="h-[1.1em] w-[1.1em] text-[var(--color-blog-text-3)]" fill="currentColor" strokeWidth={0} />
            {data.byLabel + " "}{post.author}
          </span>
        </p>

        <h3 className="mt-2.5 max-w-[15.5em] text-[18px] font-bold leading-[1.25] text-[var(--color-title)] lg:text-[16px] xl:text-[19px] 2xl:mt-3 2xl:text-[21px] 3xl:text-[23.5px]">
          <Link href={href} className="transition-colors hover:text-[var(--color-primary)]">
            {post.title}
          </Link>
        </h3>

        <div className="mt-2 flex flex-1 flex-wrap items-end justify-between gap-x-4 gap-y-3 2xl:mt-2.5">
          <p className="min-w-[170px] flex-1 text-[13.5px] leading-[1.5] text-[var(--color-blog-text)] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16.5px]">
            {post.excerpt}
          </p>
          <Link
            href={href}
            className={`${ui.btnSolid} ${ui.btnYellow} group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-2.5 text-[13.5px] font-bold xl:text-[14px] 2xl:px-6 2xl:py-3 2xl:text-[15px] 3xl:px-[28px] 3xl:py-[15px] 3xl:text-[16.5px]`}
          >
            {data.readMore.label}
            <Icon name={data.readMore.icon} className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export const BlogGrid = ({ data }: BlogGridProps) => {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const posts = data?.posts ?? [];
  const perPage = data?.perPage ?? 1;
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const visible = posts.slice((page - 1) * perPage, page * perPage);

  if (!data) return null;

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="w-full scroll-mt-24 bg-[var(--color-bg-card)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <ul className="mx-auto grid max-w-[560px] grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-5 2xl:gap-x-[34px] 2xl:gap-y-[26px] 3xl:px-[24px]">
          {visible.map((p) => (
            <li key={p.id} className="min-w-0">
              <BlogCard post={p} data={data} />
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <Pagination page={page} totalPages={totalPages} onChange={goTo} labels={data.pagination} className="mt-9 2xl:mt-[28px]" />
        )}
      </div>
    </section>
  );
};
