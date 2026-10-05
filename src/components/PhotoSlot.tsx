"use client";

import { useEffect, useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

/**
 * Image slot for the About page. Put the file at `src` (inside /public)
 * and it shows automatically. Until then a soft placeholder is rendered.
 * The mount check catches images that failed before React hydrated,
 * so broken-image alt text never shows.
 */
export default function PhotoSlot({
  src,
  alt = "",
  label = "Image",
  className = "",
  imgClassName = "object-cover object-[center_top]",
  placeholderClassName = "bg-mint text-green-dark/70",
}) {
  const [failed, setFailed] = useState(!src);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`overflow-hidden ${failed ? placeholderClassName : ""} ${className}`}>
      {failed ? (
        <div className="absolute inset-0 flex select-none flex-col items-center justify-center gap-2 p-3 text-center">
          <ImageIcon className="h-7 w-7" strokeWidth={1.6} />
          <span className="max-w-full break-all text-[11px] font-semibold uppercase tracking-wider">
            {label}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full ${imgClassName}`}
        />
      )}
    </div>
  );
}
