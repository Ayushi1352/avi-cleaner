"use client";

import { useEffect, useRef, useState } from "react";
import type { GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/**
 * Image slot for the inner pages. Put the file at `src` (inside /public)
 * and it shows automatically. Until then a soft placeholder is rendered.
 * The mount check catches images that failed before React hydrated,
 * so broken-image alt text never shows.
 */
export const PhotoSlot = ({
  src,
  alt = "",
  ui,
  className = "",
  imgClassName = "object-cover object-[center_top]",
  placeholderClassName = "bg-[var(--color-bg-mint)] text-[var(--color-primary-dark-70)]",
}: {
  src?: string;
  alt?: string;
  ui?: GlobalUIData;
  className?: string;
  imgClassName?: string;
  placeholderClassName?: string;
}) => {
  const [failed, setFailed] = useState(!src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`overflow-hidden ${failed ? placeholderClassName : ""} ${className}`}>
      {failed ? (
        ui && (
          <div className="absolute inset-0 flex select-none flex-col items-center justify-center gap-2 p-3 text-center">
            <Icon name={ui.imageIcon} className="h-7 w-7" strokeWidth={1.6} />
            <span className="max-w-full break-all text-[11px] font-semibold uppercase tracking-wider">{ui.image}</span>
          </div>
        )
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={imgRef} src={src} alt={alt} onError={() => setFailed(true)} className={`absolute inset-0 h-full w-full ${imgClassName}`} />
      )}
    </div>
  );
};
