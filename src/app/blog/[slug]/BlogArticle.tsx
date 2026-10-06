import Link from "next/link";
import { CalendarDays, Folder, User } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, socialLinks, XIcon } from "@/components/socialIcons";
import { RoundQuoteIcon } from "@/components/solidIcons";
import { popularCategories, recentPosts, relatedTags, sidebarTags } from "@/app/blog/blogPostsData";
import { site, fill, pickIcons } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiLinks = site.blogPage.links.BlogArticle;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "calendar-days": CalendarDays, user: User, folder: Folder, "round-quote": RoundQuoteIcon };
const uiIcons = pickIcons(site.blogPage.icons.BlogArticle, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.blogPage.text.BlogArticle;

// Icons by the name used in src/data/site.json.
const socialsIcons = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
};

// Content lives in src/data/site.json.
const socials = site.blogPage.articleSocials.map((item) => ({ ...item, icon: socialsIcons[item.icon] }));

const BODY = "text-[15px] leading-[1.6] text-[#5a6172] sm:text-base xl:text-[17px] 2xl:text-[20px] 3xl:text-[25.5px] 3xl:leading-[1.62]";
const YELLOW = "btn-solid btn-yellow [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd96a]";

function Tag({ children, small = false }: { children: React.ReactNode; small?: boolean }) {
  return (
    <Link
      href={uiLinks.blog}
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

function SocialRow({ big = false }: { big?: boolean }) {
  return (
    <ul className={`flex flex-wrap ${big ? "gap-4 2xl:gap-6 3xl:gap-[30px]" : "gap-3 2xl:gap-4 3xl:gap-[24px]"}`}>
      {socials.map(({ name, icon: Icon }) => (
        <li key={name}>
          <a
            href={socialLinks[name as keyof typeof socialLinks]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`${YELLOW} flex items-center justify-center rounded-full ${
              big ? "h-12 w-12 2xl:h-16 2xl:w-16 3xl:h-[84px] 3xl:w-[84px]" : "h-10 w-10 2xl:h-12 2xl:w-12 3xl:h-[56px] 3xl:w-[56px]"
            }`}
          >
            <Icon className="h-[46%] w-[46%]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[16px] bg-white p-5 shadow-[0_10px_34px_-20px_rgba(11,42,28,0.4)] sm:p-6 2xl:rounded-[20px] 2xl:p-8 3xl:px-[40px] 3xl:pb-[40px] 3xl:pt-[44px]">
      <h2 className="border-b border-[#e6ebe9] pb-3 text-[19px] font-bold text-[#0b1a12] xl:text-[21px] 2xl:pb-4 2xl:text-[25px] 3xl:pb-[26px] 3xl:text-[31px]">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Blog Detail page body: article on the left, sidebar on the right. */
export default function BlogArticle({ post }: { post: any }) {
  return (
    <section className="w-full bg-[#fbfcfc] py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32%)] lg:gap-7 xl:gap-10 3xl:grid-cols-[1180px_minmax(0,1fr)] 3xl:gap-[52px] 3xl:pl-[19px]">
          {/* ---------- Article ---------- */}
          <article className="min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[1180/640] w-full rounded-[14px] object-cover object-[center_top] 2xl:rounded-[18px]"
            />

            <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[#5a6172] xl:text-[15px] 2xl:mt-7 2xl:gap-x-9 2xl:text-[18px] 3xl:mt-[44px] 3xl:gap-x-[46px] 3xl:text-[24px]">
              <span className="inline-flex items-center gap-2 2xl:gap-3 3xl:gap-[18px]">
                <uiIcons.calendarDays className="h-[1.15em] w-[1.15em] text-[#f6c84a]" strokeWidth={2.4} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2 2xl:gap-3 3xl:gap-[18px]">
                <uiIcons.user className="h-[1.15em] w-[1.15em] text-[#f6c84a]" fill="currentColor" strokeWidth={0} />
                {copy.by + " "}{typeof post.author === "object" ? post.author.name : (post.author || site.blogPage.postDefaults.author)}
              </span>
              <span className="inline-flex items-center gap-2 2xl:gap-3 3xl:gap-[18px]">
                <uiIcons.folder className="h-[1.15em] w-[1.15em] text-[#f6c84a]" fill="currentColor" strokeWidth={0} />
                {post.category}
              </span>
            </p>

            <h1 className="mt-3 text-[clamp(24px,2.45vw,47px)] font-extrabold leading-[1.2] tracking-[-0.015em] text-[#0b1a12] 2xl:mt-5 3xl:mt-[30px]">
              {post.title}
            </h1>
            <p className={`mt-2 2xl:mt-3 ${BODY}`}>{post.intro}</p>
            <p className={`mt-4 2xl:mt-5 3xl:mt-[22px] ${BODY}`}>{post.body}</p>

            <h2 className="mt-6 text-[clamp(20px,2.05vw,39px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-[#0b1a12] 2xl:mt-8 3xl:mt-[36px]">
              {post.subheading}
            </h2>
            <p className={`mt-2 2xl:mt-3 ${BODY}`}>{post.subtext}</p>

            <blockquote className="mt-6 flex gap-4 rounded-[14px] bg-[#edf5f2] p-5 sm:gap-6 sm:p-6 2xl:mt-8 2xl:gap-8 2xl:rounded-[18px] 2xl:px-10 2xl:py-8 3xl:mt-[34px] 3xl:gap-[52px] 3xl:py-[44px] 3xl:pl-[52px] 3xl:pr-[40px]">
              <span className="shrink-0 border-b-[3px] border-[#f6c84a] pb-1.5 self-start text-[#124734] 2xl:border-b-4 2xl:pb-2">
                <uiIcons.roundQuote className="h-8 w-8 rotate-180 2xl:h-11 2xl:w-11 3xl:h-[58px] 3xl:w-[58px]" />
              </span>
              <p className="min-w-0 text-[15px] font-medium italic leading-[1.6] text-[#124734] sm:text-base xl:text-[17px] 2xl:text-[20px] 3xl:text-[25.5px] 3xl:leading-[1.75]">
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
                <h3 className="text-[17px] font-bold text-[#0b1a12] xl:text-[19px] 2xl:text-[23px] 3xl:text-[28px]">{copy.relatedTags}</h3>
                <ul className="mt-3 flex flex-wrap gap-2.5 2xl:mt-4 2xl:gap-3.5 3xl:gap-[20px]">
                  {relatedTags.map((t) => (
                    <li key={t}>
                      <Tag small>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 sm:text-right">
                <h3 className="text-[17px] font-bold text-[#0b1a12] xl:text-[19px] 2xl:text-[23px] 3xl:pr-[20px] 3xl:text-[28px]">{copy.socialShare}</h3>
                <div className="mt-3 2xl:mt-4">
                  <SocialRow />
                </div>
              </div>
            </div>
          </article>

          {/* ---------- Sidebar ---------- */}
          <aside className="grid min-w-0 grid-cols-1 content-start gap-6 md:grid-cols-2 lg:grid-cols-1 2xl:gap-8 3xl:gap-[44px]">
            <SideCard title={copy.popularCategory}>
              <ul>
                {popularCategories.map((c) => (
                  <li key={c.name} className="border-b border-[#e6ebe9] last:border-b-0">
                    <Link
                      href={uiLinks.blog}
                      className="flex items-center justify-between gap-3 py-3 text-[15px] text-[#3f4a5a] transition-colors hover:text-green xl:text-[16px] 2xl:py-4 2xl:text-[20px] 3xl:py-[21px] 3xl:text-[27px]"
                    >
                      <span className="min-w-0">{c.name}</span>
                      <span className="shrink-0">{"("}{c.count}{")"}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SideCard>

            <SideCard title={copy.recentPosts}>
              <ul>
                {recentPosts.slice(0, site.blogPage.settings.BlogArticle.recentPosts).map((p) => (
                  <li key={p.slug} className="border-b border-[#e6ebe9] py-4 last:border-b-0 last:pb-0 2xl:py-5 3xl:py-[26px]">
                    <Link href={fill(uiLinks.blogSlug, { slug: p.slug })} className="group flex items-center gap-3.5 2xl:gap-5 3xl:gap-[32px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[168/128] w-[92px] shrink-0 rounded-[8px] object-cover object-[center_top] lg:w-[76px] xl:w-[100px] 2xl:w-[130px] 2xl:rounded-[10px] 3xl:w-[168px]"
                      />
                      <span className="min-w-0">
                        <span className="block text-[15px] font-medium leading-[1.35] text-[#1d2433] transition-colors group-hover:text-green lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[25px]">
                          {p.title}
                        </span>
                        <span className="mt-1.5 flex items-center gap-2 text-[13.5px] text-[#5a6172] lg:text-[13px] xl:text-[14.5px] 2xl:mt-2.5 2xl:gap-3 2xl:text-[17px] 3xl:text-[23px]">
                          <uiIcons.calendarDays className="h-[1.1em] w-[1.1em] shrink-0 text-[#f6c84a]" strokeWidth={2.4} />
                          {p.date}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SideCard>

            <SideCard title={copy.tags}>
              <ul className="mt-5 flex flex-wrap gap-2.5 2xl:mt-7 2xl:gap-3.5 3xl:mt-[34px] 3xl:gap-x-[14px] 3xl:gap-y-[20px]">
                {sidebarTags.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </SideCard>

            <SideCard title={copy.followUs}>
              <div className="mt-5 2xl:mt-7 3xl:mt-[36px] 3xl:pl-[34px]">
                <SocialRow big />
              </div>
            </SideCard>
          </aside>
        </div>
      </div>
    </section>
  );
}
