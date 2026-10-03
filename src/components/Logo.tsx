"use client";

import { useEffect, useRef, useState } from "react";

const MAIN_LOGO =
  "/images/logo.png";
const MAIN_LOGO_FALLBACK = "/images/logo.png";
// Footer (dark background) logo: add a light version here when ready.
const FOOTER_LOGO = "/images/logo-footer.png";

export default function Logo({ className = "", isFooter = false }) {
  const [src, setSrc] = useState(isFooter ? FOOTER_LOGO : MAIN_LOGO);
  const [inverted, setInverted] = useState(false);
  const imgRef = useRef(null);

  const handleError = () => {
    if (src === FOOTER_LOGO || src === MAIN_LOGO) {
      setSrc(isFooter ? MAIN_LOGO : MAIN_LOGO_FALLBACK);
      if (isFooter) setInverted(true);
    } else if (src !== MAIN_LOGO_FALLBACK) {
      setSrc(MAIN_LOGO_FALLBACK);
    }
  };

  // Catch a failure that happened before React hydrated (onError missed).
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) handleError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt="Avicleaner"
        className={`h-full w-full object-contain object-left ${
          inverted ? "brightness-0 invert" : ""
        }`}
        onError={handleError}
      />
    </div>
  );
}
