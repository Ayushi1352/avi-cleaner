"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CompanyData, HeaderData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { ui } from "@/components/ui/styles";

// A link is active on its own page and on its sub-pages (e.g. /blog/blog-details).
const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export const Header = ({ data, company }: { data?: HeaderData; company: CompanyData }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile drawer when resizing up to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  if (!data) return null;
  const { nav, button } = data;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-header-border)] bg-[var(--color-header-bg-95)] backdrop-blur">
      <div className={ui.container}>
        <div className="flex h-[72px] items-center justify-between gap-4 sm:h-[80px] lg:h-[84px] xl:h-[96px] 2xl:h-[112px] 3xl:h-[138px]">
          {/* Logo */}
          <Link href={company.homeUrl} aria-label={company.homeLabel} className="shrink-0">
            <Logo
              src={company.logo}
              alt={company.logoAlt}
              className="h-[46px] w-[150px] sm:h-[54px] sm:w-[180px] lg:h-[52px] lg:w-[170px] xl:h-[64px] xl:w-[230px] 2xl:h-[80px] 2xl:w-[310px] 3xl:h-[100px] 3xl:w-[410px]"
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8 2xl:gap-11 3xl:gap-[62px]">
            {nav.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`relative whitespace-nowrap py-2 text-[15px] font-semibold transition-colors xl:text-[17px] 2xl:text-[19px] 3xl:text-[22px] ${
                  isActive(link.href, pathname) ? "text-[var(--color-primary)]" : "text-[var(--color-heading)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
                {isActive(link.href, pathname) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[var(--color-primary)] 2xl:-bottom-2" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href={button.href}
            className={`${ui.btnSolid} group hidden shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-header-button)] px-5 py-2.5 text-[15px] font-semibold [--btn:var(--color-header-button)] lg:inline-flex xl:px-7 xl:py-3 xl:text-[17px] 2xl:px-9 2xl:py-4 2xl:text-[19px] 3xl:px-10 3xl:py-[22px] 3xl:text-[21px]`}
          >
            {button.label}
            <Icon name={button.icon} className="h-4 w-4 transition-transform group-hover:translate-x-1 2xl:h-5 2xl:w-5" strokeWidth={2.4} />
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {!open && (
              <Link
                href={button.href}
                className={`${ui.btnSolid} hidden items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-header-button)] px-5 py-2.5 text-sm font-semibold [--btn:var(--color-header-button)] sm:inline-flex`}
              >
                {button.label + " "}
                <Icon name={button.icon} className="h-4 w-4" />
              </Link>
            )}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={data.toggleMenu}
              aria-expanded={open}
              className="rounded-xl p-2 text-[var(--color-heading)] transition hover:bg-[var(--color-bg-mint)]"
            >
              <Icon name={open ? data.icons.close : data.icons.menu} className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Fullscreen Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-50 flex h-[calc(100dvh-72px)] flex-col justify-between border-t border-[var(--color-header-border)] bg-[var(--color-white)] sm:top-[80px] sm:h-[calc(100dvh-80px)] lg:hidden">
          <div className={`${ui.container} flex h-full flex-col justify-between overflow-y-auto py-4 sm:py-6`}>
            <nav className="flex flex-col gap-1 sm:gap-1.5">
              {nav.map((link) => {
                const active = isActive(link.href, pathname);
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-colors sm:py-3 sm:text-base ${
                      active ? "bg-[var(--color-bg-mint)] text-[var(--color-primary)]" : "text-[var(--color-heading)] hover:bg-[var(--color-bg-mint-soft)]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 border-t border-[var(--color-header-border-2)] pt-4 pb-2 sm:pb-4">
              <Link
                href={button.href}
                onClick={() => setOpen(false)}
                className={`${ui.btnSolid} flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-header-button)] px-6 py-3.5 text-base font-semibold [--btn:var(--color-header-button)]`}
              >
                {button.label + " "}
                <Icon name={button.icon} className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
