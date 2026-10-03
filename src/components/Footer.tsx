"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { LeafIcon, SendIcon, ShieldCheckIcon, UsersIcon } from "./icons";
import { FacebookIcon, InstagramIcon, LinkedinIcon, socialLinks, XIcon, YoutubeIcon } from "./socialIcons";

const usefulLinks1 = [
  "Home",
  "About Us",
  "Why Choose Us",
  "Mission & Vision",
  "Our Team",
  "How It Works",
  "Testimonials",
];

const usefulLinks2 = [
  "Awards & Certificates",
  "Services",
  "Blog",
  "Gallery",
  "Career",
  "FAQ",
  "Contact Us",
];
const serviceLinks = [
  "Home Cleaning",
  "Office Cleaning",
  "Kitchen Cleaning",
  "Bathroom Cleaning",
  "Window Cleaning",
  "Deep Cleaning",
  "Move In/Out Cleaning",
  "Customized Cleaning",
];
const socials = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "X", icon: XIcon },
  { name: "Instagram", icon: InstagramIcon },
  { name: "LinkedIn", icon: LinkedinIcon },
  { name: "YouTube", icon: YoutubeIcon },
];
const badges = [
  { icon: LeafIcon, label: ["Eco-Friendly", "Products"] },
  { icon: ShieldCheckIcon, label: ["Trusted &", "Verified Team"] },
  { icon: UsersIcon, label: ["100% Customer", "Satisfaction"] },
];

function ColumnTitle({ children }) {
  return (
    <h4 className="text-[20px] font-bold text-white 2xl:text-[24px]">
      {children}
      <span className="mt-3 block h-[5px] w-10 rounded-full bg-[#fadb64] 2xl:mt-4" />
    </h4>
  );
}

const PAGE_LINKS = {
  Home: "/",
  "About Us": "/about-us",
  "Why Choose Us": "/why-choose-us",
  "Mission & Vision": "/mission-vision",
  "Our Team": "/team",
  "How It Works": "/how-it-works",
  Testimonials: "/testimonials",
  "Awards & Certificates": "/awards",
  Gallery: "/gallery",
  Blog: "/blog",
  Services: "/services",
  FAQ: "/faq",
  "Contact Us": "/contact-us",
  Career: "/about-us",
  "Home Deep Cleaning": "/services/home-deep-cleaning",
  "Office Professional Cleaning": "/services/office-professional-cleaning",
  "Kitchen Hygiene Cleaning": "/services/kitchen-hygiene-cleaning",
  "Windows Deep Cleaning": "/services/windows-deep-cleaning",
  "Commercial Building Cleaning": "/services/commercial-building-cleaning",
  "Deep Carpet Cleaning": "/services/deep-carpet-cleaning",
  "Office Cleaning": "/services/office-professional-cleaning",
  "Kitchen Cleaning": "/services/kitchen-hygiene-cleaning",
  "Bathroom Cleaning": "/services/home-deep-cleaning",
  "Window Cleaning": "/services/windows-deep-cleaning",
  "Deep Cleaning": "/services/home-deep-cleaning",
  "Move In/Out Cleaning": "/services/home-deep-cleaning",
  "Customized Cleaning": "/services/commercial-building-cleaning",
};

function LinkList({ items }) {
  return (
    <ul className="mt-6 space-y-3.5 2xl:mt-8 2xl:space-y-[17px]">
      {items.map((item) => (
        <li key={item}>
          <Link
            href={PAGE_LINKS[item] ?? "/services"}
            className="group inline-flex items-center gap-3 text-[15px] text-white/90 transition hover:text-[#fadb64] 2xl:gap-4 2xl:text-[17px]"
          >
            <ChevronRight className="h-4 w-4 shrink-0 text-[#fadb64] transition-transform group-hover:translate-x-0.5 2xl:h-5 2xl:w-5" strokeWidth={3} />
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
        <div className="grid grid-cols-1 gap-10 pb-12 pt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-[1.3fr_0.85fr_0.85fr_0.95fr_1.35fr] xl:gap-8 2xl:gap-11 2xl:pb-[56px] 2xl:pt-[66px]">
          {/* Brand + contact */}
          <div className="min-w-0">
            <Logo isFooter className="h-[76px] w-[260px] 2xl:h-[96px] 2xl:w-[355px]" />
            <p className="mt-4 max-w-[380px] text-[15px] leading-[1.55] text-white/85 2xl:text-[18px]">
              We provide professional cleaning services for homes and
              businesses, ensuring a cleaner, healthier and more comfortable
              environment for you.
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-white/90 2xl:space-y-2.5 2xl:text-[17px]">
              <li className="flex items-center gap-4 2xl:gap-6">
                <span className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1c6a4d] text-white shadow-sm transition-transform duration-300 hover:scale-115 2xl:h-[46px] 2xl:w-[46px]">
                  <Phone className="h-4 w-4 animate-icon-pulse-subtle" fill="currentColor" strokeWidth={0} />
                </span>
                <a href="tel:+568925896325" className="transition-colors hover:text-[#fadb64]">+5689 2589 6325</a>
              </li>
              <li className="flex items-center gap-4 2xl:gap-6">
                <span className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1c6a4d] text-white shadow-sm transition-transform duration-300 hover:scale-115 2xl:h-[46px] 2xl:w-[46px]">
                  <Mail className="h-4 w-4 animate-icon-float" />
                </span>
                <a href="mailto:info@avicleaner.com" className="break-all transition-colors hover:text-[#fadb64]">info@avicleaner.com</a>
              </li>
              <li className="flex items-center gap-4 2xl:gap-6">
                <span className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1c6a4d] text-white shadow-sm transition-transform duration-300 hover:scale-115 2xl:h-[46px] 2xl:w-[46px]">
                  <MapPin className="h-4 w-4 animate-icon-pulse-subtle" />
                </span>
                <span>21 King Street Melbourne, 3000, Australia</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 2xl:flex-nowrap">
              {socials.map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href={socialLinks[name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-white/90 text-white transition-transform duration-300 hover:scale-115 2xl:h-[50px] 2xl:w-[50px]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful links - Column 1 */}
          <div className="min-w-0 xl:pt-5">
            <ColumnTitle>Useful Links</ColumnTitle>
            <LinkList items={usefulLinks1} />
          </div>

          {/* Useful links - Column 2 */}
          <div className="min-w-0 xl:pt-5">
            <ColumnTitle>Useful Links</ColumnTitle>
            <LinkList items={usefulLinks2} />
          </div>

          {/* Services */}
          <div className="min-w-0 xl:pt-5">
            <ColumnTitle>Our Services</ColumnTitle>
            <LinkList items={serviceLinks} />
          </div>

          {/* Newsletter */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-2 xl:col-span-1 xl:pt-5">
            <ColumnTitle>Our Newsletter</ColumnTitle>
            <p className="mt-6 max-w-[380px] text-[15px] leading-[1.55] text-white/85 2xl:mt-8 2xl:text-[18px]">
              Subscribe to our newsletter for the latest cleaning tips, special
              offers and updates straight to your inbox.
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-6 flex h-[56px] w-full max-w-[425px] items-center gap-3 rounded-full bg-white pl-5 pr-1.5 2xl:h-[62px] 2xl:pl-7"
            >
              <Mail className="h-5 w-5 shrink-0 text-green-dark" fill="currentColor" stroke="white" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent text-[15px] text-navy outline-none placeholder:text-[#8a929e] 2xl:text-[17px]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fadb64] text-green-dark transition hover:bg-green-dark hover:text-[#fadb64] 2xl:h-[50px] 2xl:w-[50px]"
              >
                <SendIcon className="h-5 w-5" />
              </button>
            </form>
            {done && (
              <p className="mt-2 text-sm text-[#fadb64]">Thanks for subscribing!</p>
            )}

            <ul className="mt-7 grid max-w-[520px] grid-cols-3 2xl:mt-10">
              {badges.map(({ icon: Icon, label }, i) => (
                <li
                  key={label[1]}
                  className={`flex min-w-0 flex-col items-center px-1 text-center ${
                    i > 0 ? "border-l border-white/25" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#cfe6d6] text-green-dark shadow-sm transition-transform duration-300 hover:scale-115 2xl:h-[62px] 2xl:w-[62px]">
                    <Icon className="h-6 w-6 2xl:h-7 2xl:w-7 transition-transform duration-300" />
                  </span>
                  <span className="mt-2.5 whitespace-nowrap text-[12.5px] leading-[1.4] text-white/95 2xl:mt-3 2xl:text-[14px] 3xl:text-[16px]">
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
          <div className="flex flex-col items-center gap-3 py-6 text-center text-[14px] text-white/90 md:flex-row md:justify-between md:text-left 2xl:py-[34px] 2xl:text-[16px]">
            <p>&copy; 2025 Avicleaner. All Rights Reserved.</p>
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-[#fadb64]">Privacy Policy</Link>
              <span className="text-white/40">|</span>
              <Link href="/privacy-policy" className="hover:text-[#fadb64]">Terms &amp; Conditions</Link>
              <span className="text-white/40">|</span>
              <Link href="/services" className="hover:text-[#fadb64]">Sitemap</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
