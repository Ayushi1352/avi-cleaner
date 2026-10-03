"use client";

import React, { useEffect, useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

/**
 * Image slot. Put your file in /public/images with the same name as `src`
 * and it shows automatically. Until then a soft placeholder is rendered,
 * so the layout never breaks.
 */
export default function ImagePlaceholder({
  src,
  alt = "",
  className = "",
  imgClassName = "object-cover object-center",
  placeholderLabel = "Image",
  children = null,
}: {
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  placeholderLabel?: string;
  children?: React.ReactNode;
}) {
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Catch a failure that happened before React hydrated (onError missed).
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setHasError(true);
  }, []);
  const position = /(^|\s)absolute(\s|$)/.test(className) ? "" : "relative";

  return (
    <div className={`${position} overflow-hidden bg-mint ${className}`}>
      {!hasError && src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full ${imgClassName}`}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center text-green-dark/70 select-none">
          <ImageIcon className="h-7 w-7" strokeWidth={1.6} />
          <span className="max-w-full break-all text-[11px] font-semibold uppercase tracking-wider">
            {placeholderLabel}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
