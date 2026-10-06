"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { LeafIcon, SendIcon, ShieldCheckIcon, UsersIcon } from "./icons";
import { FacebookIcon, InstagramIcon, LinkedinIcon, socialLinks, XIcon, YoutubeIcon } from "./socialIcons";
import { site, pickIcons, contact } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiLinks = site.footer.links.Footer;
const uiContact = contact;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "chevron-right": ChevronRight, phone: Phone, mail: Mail, "map-pin": MapPin, send: SendIcon };
const uiIcons = pickIcons(site.footer.icons.Footer, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.footer;

// Content lives in src/data/site.json.
const usefulLinks1 = site.footer.footerUsefulLinks1;

// Content lives in src/data/site.json.
const usefulLinks2 = site.footer.footerUsefulLinks2;
// Content lives in src/data/site.json.
const serviceLinks = site.footer.footerServiceLinks;
// Icons by the name used in src/data/site.json.
const socialsIcons = {
  facebook: FacebookIcon,
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

// Content lives in src/data/site.json.
const socials = site.footer.footerSocials.map((item) => ({ ...item, icon: socialsIcons[item.icon] }));
// Icons by the name used in src/data/site.json.
const badgesIcons = {
  leaf: LeafIcon,
  "shield-check": ShieldCheckIcon,
  users: UsersIcon,
};

// Content lives in src/data/site.json.
const badges = site.footer.footerBadges.map((item) => ({ ...item, icon: badgesIcons[item.icon] }));

function ColumnTitle({ children }) {
  return (
    <h4 className="text-[17px] font-bold text-white 2xl:text-[19px]">
      {children}
      <span className="mt-2 block h-[3.5px] w-9 rounded-full bg-[#fadb64] 2xl:mt-2.5" />
    </h4>
  );
}

// Content lives in src/data/site.json.
const PAGE_LINKS = site.footer.footerPageLinks;

function LinkList({ items }) {
  return (
    <ul className="mt-4 space-y-2 2xl:mt-5 2xl:space-y-2.5">
      {items.map((item) => (
        <li key={item}>
          <Link
            href={PAGE_LINKS[item] ?? uiLinks.services}
            className="group inline-flex items-center gap-2 whitespace-nowrap text-[13.5px] text-white/90 transition hover:text-[#fadb64] 2xl:gap-2.5 2xl:text-[14.5px]"
          >
            <uiIcons.chevronRight className="h-3.5 w-3.5 shrink-0 text-[#fadb64] transition-transform group-hover:translate-x-0.5 2xl:h-4 2xl:w-4" strokeWidth={3} />
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#0a4030] to-[#073b2e] text-white">
      {/* Watermark logo mark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        className="pointer-events-none absolute right-[-30px] top-[60px] hidden w-[340px] text-white/[0.07] 2xl:block"
      >
        <path fill="currentColor" d="M150 40 40 130l14 16 14-11v35h20v-51l62-51 90 74-14 18c-20 26-55 42-92 42H120v20h18c50 0 92-24 116-60l20 14 12-16L150 40Z" />
        <rect x="160" y="110" width="22" height="22" fill="currentColor" />
        <rect x="186" y="110" width="22" height="22" fill="currentColor" />
        <rect x="160" y="136" width="22" height="22" fill="currentColor" />
        <rect x="186" y="136" width="22" height="22" fill="currentColor" />
        <path fill="currentColor" d="M110 70 70 190l-40 60h110l-10-60 20-120h-40Z" opacity=".9" />
        <path fill="currentColor" d="M290 200c-60-10-120 10-150 60 60 10 120-10 150-60Z" />
        <path fill="currentColor" d="m60 40 6 16 16 6-16 6-6 16-6-16-16-6 16-6 6-16Zm20 60 4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" />
      </svg>

      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 pb-10 pt-10 sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-6 lg:grid-cols-3 xl:grid-cols-[minmax(258px,1.2fr)_0.75fr_0.75fr_1.15fr_1.25fr] xl:gap-6 2xl:grid-cols-[minmax(342px,1.2fr)_0.75fr_0.75fr_1.15fr_1.25fr] 3xl:grid-cols-[minmax(442px,1.2fr)_0.75fr_0.75fr_1.15fr_1.25fr] 2xl:gap-8 2xl:pb-12 2xl:pt-12">
          {/* Brand + contact */}
          <div className="col-span-2 min-w-0 sm:col-span-1">
            <Link
              href={uiLinks.home}
              aria-label={copy.avicleanerHome}
              className="inline-flex items-center rounded-[12px] bg-white px-3 py-1.5 shadow-sm transition-transform duration-200 hover:scale-[1.02] sm:rounded-[14px] sm:px-3.5 sm:py-2 2xl:rounded-[16px] 2xl:px-4 2xl:py-2.5"
            >
              <Logo className="h-[46px] w-[150px] sm:h-[54px] sm:w-[180px] lg:h-[52px] lg:w-[170px] xl:h-[64px] xl:w-[230px] 2xl:h-[80px] 2xl:w-[310px] 3xl:h-[100px] 3xl:w-[410px]" />
            </Link>
            <p className="mt-3 max-w-[340px] text-[13.5px] leading-[1.5] text-white/85 2xl:text-[14.5px]">
              {copy.weProvideProfessionalCleaningServices}
            </p>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/90 2xl:space-y-2 2xl:text-[14.5px]">
              <li className="flex items-center gap-3 2xl:gap-4">
                <span className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1c6a4d] text-white shadow-sm transition-transform duration-300 hover:scale-115 2xl:h-9 2xl:w-9">
                  <uiIcons.phone className="h-3.5 w-3.5 animate-icon-pulse-subtle" fill="currentColor" strokeWidth={0} />
                </span>
                <a href={uiContact.phoneHref} className="transition-colors hover:text-[#fadb64]">{uiContact.phone}</a>
              </li>
              <li className="flex items-center gap-3 2xl:gap-4">
                <span className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1c6a4d] text-white shadow-sm transition-transform duration-300 hover:scale-115 2xl:h-9 2xl:w-9">
                  <uiIcons.mail className="h-3.5 w-3.5 animate-icon-float" />
                </span>
                <a href={uiContact.emailHref} className="break-all transition-colors hover:text-[#fadb64]">{uiContact.email}</a>
              </li>
              <li className="flex items-center gap-3 2xl:gap-4">
                <span className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1c6a4d] text-white shadow-sm transition-transform duration-300 hover:scale-115 2xl:h-9 2xl:w-9">
                  <uiIcons.mapPin className="h-3.5 w-3.5 animate-icon-pulse-subtle" />
                </span>
                <span>{uiContact.address}</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2.5 2xl:flex-nowrap">
              {socials.map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href={socialLinks[name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-white/90 text-white transition-transform duration-300 hover:scale-115 2xl:h-10 2xl:w-10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful links - Column 1 */}
          <div className="min-w-0 xl:pt-2">
            <ColumnTitle>{copy.usefulLinks}</ColumnTitle>
            <LinkList items={usefulLinks1} />
          </div>

          {/* Useful links - Column 2 */}
          <div className="min-w-0 xl:pt-2">
            <ColumnTitle>{copy.usefulLinks}</ColumnTitle>
            <LinkList items={usefulLinks2} />
          </div>

          {/* Services */}
          <div className="col-span-2 min-w-0 sm:col-span-1 xl:pt-2">
            <ColumnTitle>{copy.ourServices}</ColumnTitle>
            <LinkList items={serviceLinks} />
          </div>

          {/* Newsletter */}
          <div className="col-span-2 min-w-0 xl:col-span-1 xl:pt-2">
            <ColumnTitle>{copy.ourNewsletter}</ColumnTitle>
            <p className="mt-4 max-w-[340px] text-[13.5px] leading-[1.5] text-white/85 2xl:mt-5 2xl:text-[14.5px]">
              {copy.subscribeToOurNewsletterFor}
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-4 flex h-[48px] w-full max-w-[425px] items-center gap-2.5 rounded-full bg-white pl-4 pr-1.5 2xl:h-[52px] 2xl:pl-5"
            >
              <uiIcons.mail className="h-4 w-4 shrink-0 text-green-dark" fill="currentColor" stroke="white" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={copy.enterEmailAddress}
                aria-label={copy.emailAddress}
                className="min-w-0 flex-1 bg-transparent text-[13.5px] text-navy outline-none placeholder:text-[#8a929e] 2xl:text-[14.5px]"
              />
              <button
                type="submit"
                aria-label={copy.subscribe}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fadb64] text-green-dark transition hover:bg-green-dark hover:text-[#fadb64] 2xl:h-10 2xl:w-10"
              >
                <uiIcons.send className="h-4 w-4" />
              </button>
            </form>
            {done && (
              <p className="mt-2 text-sm text-[#fadb64]">{copy.thanksForSubscribing}</p>
            )}

            <ul className="mt-5 grid max-w-[460px] grid-cols-3 2xl:mt-6">
              {badges.map(({ icon: Icon, label }, i) => (
                <li
                  key={label[1]}
                  className={`flex min-w-0 flex-col items-center px-1 text-center ${
                    i > 0 ? "border-l border-white/25" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#cfe6d6] text-green-dark shadow-sm transition-transform duration-300 hover:scale-115 2xl:h-11 2xl:w-11">
                    <Icon className="h-5 w-5 2xl:h-6 2xl:w-6 transition-transform duration-300" />
                  </span>
                  <span className="mt-2 whitespace-nowrap text-[11.5px] leading-[1.3] text-white/95 2xl:text-[12.5px]">
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/20">
        <div className="container-x">
          <div className="flex flex-col items-center gap-2.5 py-4 text-center text-[13px] text-white/90 md:flex-row md:justify-between md:text-left 2xl:py-5 2xl:text-[14px]">
            <p>{copy.text2025AvicleanerAllRightsReserved}</p>
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
              <Link href={uiLinks.privacyPolicy} className="hover:text-[#fadb64]">{copy.privacyPolicy}</Link>
              <span className="text-white/40">{"|"}</span>
              <Link href={uiLinks.termsAndConditions} className="hover:text-[#fadb64]">{copy.termsConditions}</Link>
              <span className="text-white/40">{"|"}</span>
              <Link href={uiLinks.refundCancellationPolicy} className="hover:text-[#fadb64]">{copy.refundCancellationPolicy}</Link>
              <span className="text-white/40">{"|"}</span>
              <Link href={uiLinks.services} className="hover:text-[#fadb64]">{copy.sitemap}</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
