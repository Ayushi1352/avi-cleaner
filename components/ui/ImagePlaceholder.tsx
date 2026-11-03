"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/**
 * Image slot. Put your file in /public/images with the same name as `src`
 * and it shows automatically. Until then a soft placeholder (icon + label from
 * templates.json common.globalUI) is rendered, so the layout never breaks.
 */
export const ImagePlaceholder = ({
  src,
  alt = "",
  className = "",
  imgClassName = "object-cover object-[center_top]",
  ui,
  children = null,
}: {
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  ui?: GlobalUIData;
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
        ui && (
          <div className="absolute inset-0 flex select-none flex-col items-center justify-center gap-2 p-3 text-center text-[var(--color-primary-dark-70)]">
            <Icon name={ui.imageIcon} className="h-7 w-7" strokeWidth={1.6} />
            <span className="max-w-full break-all text-[11px] font-semibold uppercase tracking-wider">{ui.image}</span>
          </div>
        )
      )}
      {children}
    </div>
  );
};
