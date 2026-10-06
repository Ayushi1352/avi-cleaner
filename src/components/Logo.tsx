"use client";

import { site } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiImages = site.navbar.images.Logo;

// Text lives in src/data/site.json.
const copy = site.navbar.text.Logo;


const MAIN_LOGO = uiImages.logo;

export default function Logo({
  className = "",
  isFooter = false,
}: {
  className?: string;
  isFooter?: boolean;
}) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MAIN_LOGO}
        alt={copy.avicleaner}
        className="h-full w-full object-contain object-left"
      />
    </div>
  );
}
