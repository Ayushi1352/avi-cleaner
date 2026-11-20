"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Image slot. Put your file in /public/images with the same name as `src`
 * and it shows automatically. Until then the soft mint box keeps the layout in place.
 */
export const ImagePlaceholder = ({
  src,
  alt = "",
  className = "",
  imgClassName = "object-cover object-[center_top]",
  children = null,
}: {
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
}) => {
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Catch a failure that happened before React hydrated (onError missed).
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setHasError(true);
  }, []);
  const position = /(^|\s)absolute(\s|$)/.test(className) ? "" : "relative";

  return (
    <div className={`${position} overflow-hidden bg-[var(--color-bg-mint)] ${className}`}>
      {!hasError && src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full ${imgClassName}`}
          onError={() => setHasError(true)}
        />
      )}
      {children}
    </div>
  );
};
