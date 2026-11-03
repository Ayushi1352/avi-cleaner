import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogDetailData, SocialLink } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { ui } from "@/components/ui/styles";

const BODY = "text-[15px] leading-[1.6] text-[var(--color-text-grey)] sm:text-[1rem] xl:text-[17px] 2xl:text-[20px] 3xl:text-[25.5px] 3xl:leading-[1.62]";
const YELLOW = `${ui.btnSolid} ${ui.btnYellow}`;

function Tag({ children, href, small = false }: { children: ReactNode; href: string; small?: boolean }) {
  return (
    <Link
      href={href}
      className={`${YELLOW} inline-flex items-center rounded-full font-semibold ${
        small
          ? "px-4 py-1.5 text-[13px] 2xl:px-5 2xl:py-2 2xl:text-[15px] 3xl:px-[26px] 3xl:py-[13px] 3xl:text-[19px]"
          : "px-4 py-2 text-[14px] 2xl:px-6 2xl:py-2.5 2xl:text-[17px] 3xl:px-[32px] 3xl:py-[15px] 3xl:text-[22px]"
      }`}
    >
      {children}
    </Link>
  );
}

function SocialRow({ socials, big = false }: { socials: SocialLink[]; big?: boolean }) {
  return (
    <ul className={`flex flex-wrap ${big ? "gap-4 2xl:gap-6 3xl:gap-[30px]" : "gap-3 2xl:gap-4 3xl:gap-[24px]"}`}>
      {socials.map(({ id, name, icon, url }) => (
        <li key={id}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`${YELLOW} flex items-center justify-center rounded-full ${
              big ? "h-12 w-12 2xl:h-16 2xl:w-16 3xl:h-[84px] 3xl:w-[84px]" : "h-10 w-10 2xl:h-12 2xl:w-12 3xl:h-[56px] 3xl:w-[56px]"
            }`}
          >
            <Icon name={icon} className="h-[46%] w-[46%]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[16px] bg-[var(--color-white)] p-5 shadow-[0_10px_34px_-20px_var(--color-shadow-card-40)] sm:p-6 2xl:rounded-[20px] 2xl:p-8 3xl:px-[40px] 3xl:pb-[40px] 3xl:pt-[44px]">
      <h2 className="border-b border-[var(--color-blog-article-border)] pb-3 text-[19px] font-bold text-[var(--color-title)] xl:text-[21px] 2xl:pb-4 2xl:text-[25px] 3xl:pb-[26px] 3xl:text-[31px]">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Blog Detail page body: article on the left, sidebar on the right. */
export const BlogArticle = ({ data }: { data?: BlogDetailData }) => {
  if (!data) return null;
  const { post } = data;
  return (
    <section className="w-full bg-[var(--color-bg-card)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32%)] lg:gap-7 xl:gap-10 3xl:grid-cols-[1180px_minmax(0,1fr)] 3xl:gap-[52px] 3xl:pl-[19px]">
          {/* ---------- Article ---------- */}
          <article className="min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[1180/640] w-full rounded-[14px] object-cover object-[center_top] 2xl:rounded-[18px]"
            />

            <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[var(--color-text-grey)] xl:text-[15px] 2xl:mt-7 2xl:gap-x-9 2xl:text-[18px] 3xl:mt-[44px] 3xl:gap-x-[46px] 3xl:text-[24px]">
              <span className="inline-flex items-center gap-2 2xl:gap-3 3xl:gap-[18px]">
                <Icon name={data.icons.date} className="h-[1.15em] w-[1.15em] text-[var(--color-blog-article-text)]" strokeWidth={2.4} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2 2xl:gap-3 3xl:gap-[18px]">
                <Icon name={data.icons.author} className="h-[1.15em] w-[1.15em] text-[var(--color-blog-article-text)]" fill="currentColor" strokeWidth={0} />
                {data.byLabel + " "}{post.author}
              </span>
              <span className="inline-flex items-center gap-2 2xl:gap-3 3xl:gap-[18px]">
                <Icon name={data.icons.category} className="h-[1.15em] w-[1.15em] text-[var(--color-blog-article-text)]" fill="currentColor" strokeWidth={0} />
                {post.category}
              </span>
            </p>

            <h1 className="mt-3 text-[clamp(24px,2.45vw,47px)] font-extrabold leading-[1.2] tracking-[-0.015em] text-[var(--color-title)] 2xl:mt-5 3xl:mt-[30px]">
              {post.title}
            </h1>
            <p className={`mt-2 2xl:mt-3 ${BODY}`}>{post.intro}</p>
            <p className={`mt-4 2xl:mt-5 3xl:mt-[22px] ${BODY}`}>{post.body}</p>

            <h2 className="mt-6 text-[clamp(20px,2.05vw,39px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-[var(--color-title)] 2xl:mt-8 3xl:mt-[36px]">
              {post.subheading}
            </h2>
            <p className={`mt-2 2xl:mt-3 ${BODY}`}>{post.subtext}</p>

            <blockquote className="mt-6 flex gap-4 rounded-[14px] bg-[var(--color-blog-article-bg)] p-5 sm:gap-6 sm:p-6 2xl:mt-8 2xl:gap-8 2xl:rounded-[18px] 2xl:px-10 2xl:py-8 3xl:mt-[34px] 3xl:gap-[52px] 3xl:py-[44px] 3xl:pl-[52px] 3xl:pr-[40px]">
              <span className="shrink-0 border-b-[3px] border-[var(--color-blog-article-text)] pb-1.5 self-start text-[var(--color-forest-dark)] 2xl:border-b-4 2xl:pb-2">
                <Icon name={data.icons.quote} className="h-8 w-8 rotate-180 2xl:h-11 2xl:w-11 3xl:h-[58px] 3xl:w-[58px]" />
              </span>
              <p className="min-w-0 text-[15px] font-medium italic leading-[1.6] text-[var(--color-forest-dark)] sm:text-[1rem] xl:text-[17px] 2xl:text-[20px] 3xl:text-[25.5px] 3xl:leading-[1.75]">
                {"“"}{post.quote}{"”"}
              </p>
            </blockquote>

            <p className={`mt-6 2xl:mt-8 3xl:mt-[34px] ${BODY}`}>{post.closing}</p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image2}
              alt=""
              loading="lazy"
              className="mt-6 aspect-[1180/392] w-full rounded-[14px] object-cover object-[center_top] 2xl:mt-8 2xl:rounded-[18px]"
            />

            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between 2xl:mt-9">
              <div className="min-w-0">
                <h3 className="text-[17px] font-bold text-[var(--color-title)] xl:text-[19px] 2xl:text-[23px] 3xl:text-[28px]">{data.relatedTagsTitle}</h3>
                <ul className="mt-3 flex flex-wrap gap-2.5 2xl:mt-4 2xl:gap-3.5 3xl:gap-[20px]">
                  {data.relatedTags.map((t) => (
                    <li key={t}>
                      <Tag small href={data.tagLink}>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 sm:text-right">
                <h3 className="text-[17px] font-bold text-[var(--color-title)] xl:text-[19px] 2xl:text-[23px] 3xl:pr-[20px] 3xl:text-[28px]">{data.shareTitle}</h3>
                <div className="mt-3 2xl:mt-4">
                  <SocialRow socials={data.socials} />
                </div>
              </div>
            </div>
          </article>

          {/* ---------- Sidebar ---------- */}
          <aside className="grid min-w-0 grid-cols-1 content-start gap-6 md:grid-cols-2 lg:grid-cols-1 2xl:gap-8 3xl:gap-[44px]">
            <SideCard title={data.categoriesTitle}>
              <ul>
                {data.categories.map((c) => (
                  <li key={c.id} className="border-b border-[var(--color-blog-article-border)] last:border-b-0">
                    <Link
                      href={data.tagLink}
                      className="flex items-center justify-between gap-3 py-3 text-[15px] text-[var(--color-form-label)] transition-colors hover:text-[var(--color-primary)] xl:text-[16px] 2xl:py-4 2xl:text-[20px] 3xl:py-[21px] 3xl:text-[27px]"
                    >
                      <span className="min-w-0">{c.name}</span>
                      <span className="shrink-0">{"("}{c.count}{")"}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SideCard>

            <SideCard title={data.recentTitle}>
              <ul>
                {data.recentPosts.map((p) => (
                  <li key={p.id} className="border-b border-[var(--color-blog-article-border)] py-4 last:border-b-0 last:pb-0 2xl:py-5 3xl:py-[26px]">
                    <Link href={p.href} className="group flex items-center gap-3.5 2xl:gap-5 3xl:gap-[32px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[168/128] w-[92px] shrink-0 rounded-[8px] object-cover object-[center_top] lg:w-[76px] xl:w-[100px] 2xl:w-[130px] 2xl:rounded-[10px] 3xl:w-[168px]"
                      />
                      <span className="min-w-0">
                        <span className="block text-[15px] font-medium leading-[1.35] text-[var(--color-text-dark)] transition-colors group-hover:text-[var(--color-primary)] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[25px]">
                          {p.title}
                        </span>
                        <span className="mt-1.5 flex items-center gap-2 text-[13.5px] text-[var(--color-text-grey)] lg:text-[13px] xl:text-[14.5px] 2xl:mt-2.5 2xl:gap-3 2xl:text-[17px] 3xl:text-[23px]">
                          <Icon name={data.icons.date} className="h-[1.1em] w-[1.1em] shrink-0 text-[var(--color-blog-article-text)]" strokeWidth={2.4} />
                          {p.date}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SideCard>

            <SideCard title={data.tagsTitle}>
              <ul className="mt-5 flex flex-wrap gap-2.5 2xl:mt-7 2xl:gap-3.5 3xl:mt-[34px] 3xl:gap-x-[14px] 3xl:gap-y-[20px]">
                {data.tags.map((t) => (
                  <li key={t}>
                    <Tag href={data.tagLink}>{t}</Tag>
                  </li>
                ))}
              </ul>
            </SideCard>

            <SideCard title={data.followTitle}>
              <div className="mt-5 2xl:mt-7 3xl:mt-[36px] 3xl:pl-[34px]">
                <SocialRow socials={data.socials} big />
              </div>
            </SideCard>
          </aside>
        </div>
      </div>
    </section>
  );
};
