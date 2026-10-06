"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhotoSlot from "@/components/PhotoSlot";
import SectionEyebrow from "@/components/SectionEyebrow";
import members from "./teamMembersData";
import { FacebookIcon, InstagramIcon, LinkedinIcon, socialLinks, XIcon } from "@/components/socialIcons";
import { site, fill, pickIcons } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.teamPage.text.TeamGrid;
const uiLinks = site.teamPage.links.TeamGrid;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "chevron-left": ChevronLeft, "chevron-right": ChevronRight };
const uiIcons = pickIcons(site.teamPage.icons.TeamGrid, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.teamPage.text.TeamGrid;

const PER_PAGE = site.teamPage.settings.TeamGrid.perPage;

// Icons by the name used in src/data/site.json.
const socialsIcons = {
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

// Content lives in src/data/site.json.
const socials = site.teamPage.gridSocials.map((item) => ({ ...item, icon: socialsIcons[item.icon] }));

/** Page numbers with ellipsis, e.g. 1 2 3 … 5 */
function pageItems(total: number, current: number) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  if (current <= 3) [2, 3].forEach((p) => pages.add(p));
  if (current >= total - 2) [total - 1, total - 2].forEach((p) => pages.add(p));
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | string)[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - (sorted[i - 1] as number) > 1) out.push("…");
    out.push(p);
  });
  return out;
}

function MemberCard({ member }: { member: any }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_14px_36px_-24px_rgba(11,42,28,0.35)] 2xl:rounded-[18px]">
      <Link href={fill(uiLinks.ourTeamSlug, { slug: member.slug })} aria-label={fill(uiText.viewName, { name: member.name })} className="group block overflow-hidden">
        <PhotoSlot
          src={member.photo}
          alt={member.name}
          label={member.photo.replace("/images/", "")}
          className="relative aspect-[418/395] w-full transition-transform duration-500 group-hover:scale-[1.03]"
          imgClassName="object-cover object-top"
        />
      </Link>
      <div className="flex flex-1 flex-col items-center px-4 pb-6 pt-5 text-center 2xl:pb-7 2xl:pt-[18px]">
        <Link href={fill(uiLinks.ourTeamSlug, { slug: member.slug })} className="group/name block">
          <h3 className="text-[19px] font-bold leading-tight text-[#0c2c1e] transition-colors group-hover/name:text-green xl:text-[21px] 2xl:text-[24px] 3xl:text-[27.5px]">
            {member.name}
          </h3>
          <p className="mt-1.5 text-[14px] leading-snug text-[#4b5068] xl:text-[15px] 2xl:mt-1 2xl:text-[18px] 3xl:text-[21px]">
            {member.role}
          </p>
        </Link>
        <ul className="mt-auto flex flex-wrap justify-center gap-2 pt-5 xl:gap-2.5 2xl:gap-[18px] 2xl:pt-[26px]">
          {socials.map(({ name, icon: Icon }) => (
            <li key={name}>
              <a
                href={socialLinks[name as keyof typeof socialLinks]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={fill(uiText.nameOnName2, { name: member.name, name2: name })}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c9efdd] text-[#06160f] transition hover:bg-green-dark hover:text-white xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 3xl:h-[54px] 3xl:w-[54px]"
              >
                <Icon className="h-[18px] w-[18px] xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 3xl:h-[29px] 3xl:w-[29px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** "Our Team — Meet the Experts Behind Our Sparkling Clean!" */
export default function TeamGrid() {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const totalPages = Math.max(1, Math.ceil(members.length / PER_PAGE));
  const visible = members.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const btn =
    "flex h-8 min-w-8 items-center justify-center rounded-full px-1 text-[13px] font-semibold transition shadow-[0_3px_8px_-3px_rgba(11,42,28,0.25)] 2xl:h-[34px] 2xl:min-w-[34px] 2xl:text-[14px]";

  return (
    <section ref={sectionRef} className="w-full scroll-mt-24 bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative overflow-hidden bg-[#f6fcf9] pb-12 pt-12 sm:pb-14 2xl:pb-[40px] 2xl:pt-[52px]">
        {/* Leaf decoration, top left */}
        <svg
          aria-hidden="true"
          viewBox="0 0 300 380"
          className="pointer-events-none absolute left-0 top-2 hidden w-[200px] text-[#e4f5ec] md:block 2xl:w-[300px]"
        >
          <path fill="currentColor" d="M10 0c90 20 150 90 160 180 5 40-5 80-25 110C60 260 15 190 8 110 5 70 5 30 10 0Z" />
          <path fill="currentColor" d="M150 360c10-70 60-120 130-130-10 70-60 120-130 130Z" />
          <path fill="none" stroke="#f6fcf9" strokeWidth="6" strokeLinecap="round" d="M30 40c50 80 90 170 110 320" />
        </svg>

        {/* Handwritten note, top right */}
        <p className="pointer-events-none absolute right-[4%] top-12 hidden -rotate-[16deg] font-script text-[34px] font-medium leading-[0.95] text-[#2f6d4a] xl:block 2xl:right-[4%] 2xl:top-[70px] 2xl:text-[46px] 3xl:text-[54px]">
          {copy.cleaner}
          <br />
          <span className="pl-[0.4em]">{copy.spaces}</span>
          <br />
          {copy.happier}
          <br />
          <span className="pl-[0.9em]">{copy.lives}</span>
          <svg viewBox="0 0 160 30" className="-ml-[0.4em] mt-1 block w-[3.6em]" aria-hidden="true">
            <path d="M4 26C60 12 110 5 156 2" fill="none" stroke="#fdd75a" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </p>

        <div className="container-x relative">
          {/* Header */}
          <div className="mx-auto max-w-[940px] text-center">
            <SectionEyebrow center>{copy.ourTeam}</SectionEyebrow>
            <h2 className="mt-4 text-[clamp(28px,3.36vw,64px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#06291c] 2xl:mt-5">
              {copy.meetTheExpertsBehind}
              <br className="hidden sm:block" />{" " + copy.ourSparklingClean}
            </h2>
            <p className="mx-auto mt-4 max-w-[940px] text-[15px] leading-[1.56] text-[#4b5068] sm:text-base xl:text-[18px] 2xl:mt-5 2xl:text-[21px] 3xl:text-[25px]">
              {copy.ourDedicatedAndExperiencedTeam}{" "}
              <span className="whitespace-nowrap">{copy.highQuality}</span>{" "}
              <br className="hidden xl:block" />
              {copy.cleaningServicesAndEnsureYour}
            </p>
          </div>

          {/* Grid */}
          <ul className="mx-auto mt-10 grid max-w-[1760px] grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:gap-6 2xl:mt-[40px] 2xl:gap-[28px] 3xl:px-[10px]">
            {visible.map((m) => (
              <li key={m.name} className="min-w-0">
                <MemberCard member={m} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label={copy.teamPages} className="flex justify-center py-8 2xl:py-[36px]">
          <ul className="flex flex-wrap items-center justify-center gap-1.5 2xl:gap-1">
            <li>
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                aria-label={copy.previousPage}
                className={`${btn} bg-[#e3f5eb] text-[#0b2a1c] hover:bg-[#0f5a36] hover:text-white disabled:pointer-events-none`}
              >
                <uiIcons.chevronLeft className="h-4 w-4" strokeWidth={2.6} />
              </button>
            </li>
            {pageItems(totalPages, page).map((item, i) =>
              item === "…" ? (
                <li key={`gap-${i}`} className={`${btn} bg-[#e3f5eb] text-[#0b2a1c]`}>
                  {"…"}
                </li>
              ) : (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => goTo(item as number)}
                    aria-label={fill(uiText.pageItem, { item })}
                    aria-current={item === page ? "page" : undefined}
                    className={`${btn} ${item === page
                        ? "bg-[#0f5a36] text-white"
                        : "bg-[#e3f5eb] text-[#0b2a1c] hover:bg-[#0f5a36] hover:text-white"
                      }`}
                  >
                    {item}
                  </button>
                </li>
              )
            )}
            <li>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                aria-label={copy.nextPage}
                className={`${btn} bg-[#e3f5eb] text-[#0b2a1c] hover:bg-[#0f5a36] hover:text-white disabled:pointer-events-none`}
              >
                <uiIcons.chevronRight className="h-4 w-4" strokeWidth={2.6} />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
}
