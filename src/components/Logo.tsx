"use client";

import siteData from "@/data/site.json";

// Text lives in src/data/site.json under text.Logo.
const copy = siteData.text.Logo;


const MAIN_LOGO = "/images/logo.png";

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
