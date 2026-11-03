"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import type { CompanyData, FooterData, NavLink } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { mailHref, telHref } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

const ColumnTitle = ({ children }: { children: ReactNode }) => (
  <h4 className="text-[17px] font-bold text-[var(--color-white)] 2xl:text-[19px]">
    {children}
    <span className="mt-2 block h-[3.5px] w-9 rounded-full bg-[var(--color-footer-accent)] 2xl:mt-2.5" />
  </h4>
);

const LinkList = ({ items, icon }: { items: NavLink[]; icon: string }) => (
  <ul className="mt-4 space-y-2 2xl:mt-5 2xl:space-y-2.5">
    {items.map((item) => (
      <li key={item.id}>
        <Link
          href={item.href}
          className="group inline-flex items-center gap-2 whitespace-nowrap text-[13.5px] text-[var(--color-white-90)] transition hover:text-[var(--color-footer-accent)] 2xl:gap-2.5 2xl:text-[14.5px]"
        >
          <Icon name={icon} className="h-3.5 w-3.5 shrink-0 text-[var(--color-footer-accent)] transition-transform group-hover:translate-x-0.5 2xl:h-4 2xl:w-4" strokeWidth={3} />
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

export const Footer = ({ data, company }: { data?: FooterData; company: CompanyData }) => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (!data) return null;
  const { icons, newsletter } = data;

  // Dummy subscribe: nothing is sent anywhere yet, the thank-you note shows for 4 seconds.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  const iconBox =
    "flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--color-footer-bg)] text-[var(--color-white)] shadow transition-transform duration-300 hover:scale-[1.15] 2xl:h-9 2xl:w-9";

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-[var(--color-footer-gradient)] to-[var(--color-footer-gradient-2)] text-[var(--color-white)]">
      {/* Watermark logo mark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        className="pointer-events-none absolute right-[-30px] top-[60px] hidden w-[340px] text-[var(--color-white-7)] 2xl:block"
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

      <div className={`${ui.container} relative`}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 pb-10 pt-10 sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-6 lg:grid-cols-3 xl:grid-cols-[minmax(258px,1.2fr)_0.75fr_0.75fr_1.15fr_1.25fr] xl:gap-6 2xl:grid-cols-[minmax(342px,1.2fr)_0.75fr_0.75fr_1.15fr_1.25fr] 3xl:grid-cols-[minmax(442px,1.2fr)_0.75fr_0.75fr_1.15fr_1.25fr] 2xl:gap-8 2xl:pb-12 2xl:pt-12">
          {/* Brand + contact */}
          <div className="col-span-2 min-w-0 sm:col-span-1">
            <Link
              href={company.homeUrl}
              aria-label={company.homeLabel}
              className="inline-flex items-center rounded-[12px] bg-[var(--color-white)] px-3 py-1.5 shadow transition-transform duration-200 hover:scale-[1.02] sm:rounded-[14px] sm:px-3.5 sm:py-2 2xl:rounded-[16px] 2xl:px-4 2xl:py-2.5"
            >
              <Logo
                src={company.logo}
                alt={company.logoAlt}
                className="h-[46px] w-[150px] sm:h-[54px] sm:w-[180px] lg:h-[52px] lg:w-[170px] xl:h-[64px] xl:w-[230px] 2xl:h-[80px] 2xl:w-[310px] 3xl:h-[100px] 3xl:w-[410px]"
              />
            </Link>
            <p className="mt-3 max-w-[340px] text-[13.5px] leading-[1.5] text-[var(--color-white-85)] 2xl:text-[14.5px]">{data.description}</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-[var(--color-white-90)] 2xl:space-y-2 2xl:text-[14.5px]">
              <li className="flex items-center gap-3 2xl:gap-4">
                <span className={iconBox}>
                  <Icon name={icons.phone} motion="pulse" className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                </span>
                <a href={telHref(company.phone)} className="transition-colors hover:text-[var(--color-footer-accent)]">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 2xl:gap-4">
                <span className={iconBox}>
                  <Icon name={icons.email} motion="float" className="h-3.5 w-3.5" />
                </span>
                <a href={mailHref(company.email)} className="break-all transition-colors hover:text-[var(--color-footer-accent)]">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3 2xl:gap-4">
                <span className={iconBox}>
                  <Icon name={icons.address} motion="pulse" className="h-3.5 w-3.5" />
                </span>
                <span>{company.addressLines.join(" ")}</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2.5 2xl:flex-nowrap">
              {company.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[var(--color-white-90)] text-[var(--color-white)] transition-transform duration-300 hover:scale-[1.15] 2xl:h-10 2xl:w-10"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful links: two columns */}
          {data.usefulLinks.map((column, i) => (
            <div key={i} className="min-w-0 xl:pt-2">
              <ColumnTitle>{data.usefulLinksTitle}</ColumnTitle>
              <LinkList items={column} icon={icons.link} />
            </div>
          ))}

          {/* Services */}
          <div className="col-span-2 min-w-0 sm:col-span-1 xl:pt-2">
            <ColumnTitle>{data.servicesTitle}</ColumnTitle>
            <LinkList items={data.serviceLinks} icon={icons.link} />
          </div>

          {/* Newsletter */}
          <div className="col-span-2 min-w-0 xl:col-span-1 xl:pt-2">
            <ColumnTitle>{newsletter.title}</ColumnTitle>
            <p className="mt-4 max-w-[340px] text-[13.5px] leading-[1.5] text-[var(--color-white-85)] 2xl:mt-5 2xl:text-[14.5px]">{newsletter.text}</p>
            <form
              onSubmit={onSubmit}
              className="mt-4 flex h-[48px] w-full max-w-[425px] items-center gap-2.5 rounded-full bg-[var(--color-white)] pl-4 pr-1.5 2xl:h-[52px] 2xl:pl-5"
            >
              <Icon name={icons.email} className="h-4 w-4 shrink-0 text-[var(--color-primary-dark)]" fill="currentColor" stroke="var(--color-white)" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                aria-label={newsletter.inputLabel}
                className="min-w-0 flex-1 bg-transparent text-[13.5px] text-[var(--color-heading)] outline-none placeholder:text-[var(--color-input-placeholder)] 2xl:text-[14.5px]"
              />
              <button
                type="submit"
                aria-label={newsletter.buttonLabel}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-footer-accent)] text-[var(--color-primary-dark)] transition hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-footer-accent)] 2xl:h-10 2xl:w-10"
              >
                <Icon name={icons.send} className="h-4 w-4" />
              </button>
            </form>
            {done && <p className="mt-2 text-sm text-[var(--color-footer-accent)]">{newsletter.success}</p>}

            <ul className="mt-5 grid max-w-[460px] grid-cols-3 2xl:mt-6">
              {data.badges.map((badge, i) => (
                <li key={badge.id} className={`flex min-w-0 flex-col items-center px-1 text-center ${i > 0 ? "border-l border-[var(--color-white-25)]" : ""}`}>
                  <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--color-footer-bg-2)] text-[var(--color-primary-dark)] shadow transition-transform duration-300 hover:scale-[1.15] 2xl:h-11 2xl:w-11">
                    <Icon name={badge.icon} className="h-5 w-5 transition-transform duration-300 2xl:h-6 2xl:w-6" />
                  </span>
                  <span className="mt-2 whitespace-nowrap text-[11.5px] leading-[1.3] text-[var(--color-white-95)] 2xl:text-[12.5px]">
                    {badge.lines.map((line, j) => (
                      <span key={line}>
                        {j > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[var(--color-white-20)]">
        <div className={ui.container}>
          <div className="flex flex-col items-center gap-2.5 py-4 text-center text-[13px] text-[var(--color-white-90)] md:flex-row md:justify-between md:text-left 2xl:py-5 2xl:text-[14px]">
            <p>{data.copyright}</p>
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
              {data.legalLinks.map((link, i) => (
                <span key={link.id} className="contents">
                  {i > 0 && <span className="text-[var(--color-white-40)]">{"|"}</span>}
                  <Link href={link.href} className="hover:text-[var(--color-footer-accent)]">
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
