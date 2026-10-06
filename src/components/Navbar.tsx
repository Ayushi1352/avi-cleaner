"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { site, pickIcons } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiLinks = site.navbar.links.Navbar;
// Icons by the name used in src/data/site.json.
const uiIconMap = { "arrow-right": ArrowRight, x: X, menu: Menu };
const uiIcons = pickIcons(site.navbar.icons.Navbar, uiIconMap);

// Text lives in src/data/site.json.
const copy = site.navbar.text.Navbar;

// Content lives in src/data/site.json.
const navLinks = site.navbar.navLinks;

// A link is active on its own page and on its sub-pages (e.g. /blog/some-post).
const isActive = (href, pathname) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Navbar() {
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eef1f4] bg-[#fcfcfe]/95 backdrop-blur">
      <div className="container-x">
        <div className="flex h-[72px] items-center justify-between gap-4 sm:h-[80px] lg:h-[84px] xl:h-[96px] 2xl:h-[112px] 3xl:h-[138px]">
          {/* Logo */}
          <Link href={uiLinks.home} aria-label={copy.avicleanerHome} className="shrink-0">
            <Logo className="h-[46px] w-[150px] sm:h-[54px] sm:w-[180px] lg:h-[52px] lg:w-[170px] xl:h-[64px] xl:w-[230px] 2xl:h-[80px] 2xl:w-[310px] 3xl:h-[100px] 3xl:w-[410px]" />
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8 2xl:gap-11 3xl:gap-[62px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative whitespace-nowrap py-2 text-[15px] font-semibold transition-colors xl:text-[17px] 2xl:text-[19px] 3xl:text-[22px] ${
                  isActive(link.href, pathname) ? "text-green" : "text-navy hover:text-green"
                }`}
              >
                {link.name}
                {isActive(link.href, pathname) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-green 2xl:-bottom-2" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href={uiLinks.bookNow}
            className="btn-solid group hidden shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-r from-green-light to-[#3f7f2c] px-5 py-2.5 text-[15px] font-semibold [--btn:#3f7f2c] lg:inline-flex xl:px-7 xl:py-3 xl:text-[17px] 2xl:px-9 2xl:py-4 2xl:text-[19px] 3xl:px-10 3xl:py-[22px] 3xl:text-[21px]"
          >
            {copy.bookNow}
            <uiIcons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 2xl:h-5 2xl:w-5" strokeWidth={2.4} />
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {!open && (
              <Link
                href={uiLinks.bookNow}
                className="btn-solid hidden items-center gap-2 rounded-full bg-gradient-to-r from-green-light to-[#3f7f2c] px-5 py-2.5 text-sm font-semibold [--btn:#3f7f2c] sm:inline-flex"
              >
                {copy.bookNow + " "}<uiIcons.arrowRight className="h-4 w-4" />
              </Link>
            )}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={copy.toggleMenu}
              aria-expanded={open}
              className="rounded-xl p-2 text-navy transition hover:bg-mint"
            >
              {open ? <uiIcons.x className="h-7 w-7" /> : <uiIcons.menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Fullscreen Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-50 flex h-[calc(100dvh-72px)] flex-col justify-between border-t border-[#eef1f4] bg-white sm:top-[80px] sm:h-[calc(100dvh-80px)] lg:hidden">
          <div className="container-x flex h-full flex-col justify-between overflow-y-auto py-4 sm:py-6">
            <nav className="flex flex-col gap-1 sm:gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href, pathname);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-colors sm:py-3 sm:text-base ${
                      active
                        ? "bg-mint text-green"
                        : "text-navy hover:bg-mint-soft"
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-green" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 border-t border-[#f0f3f6] pt-4 pb-2 sm:pb-4">
              <Link
                href={uiLinks.bookNow}
                onClick={() => setOpen(false)}
                className="btn-solid flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-light to-[#3f7f2c] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-green/20 [--btn:#3f7f2c]"
              >
                {copy.bookNow + " "}<uiIcons.arrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
