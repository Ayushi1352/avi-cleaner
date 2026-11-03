import type { CompanyData, ContactMapData } from "@/types/templates.types";
import { fillLabel } from "@/components/ui/helpers";

/** Contact page: full-width Google map ("View on Map" scrolls here). */
export const ContactMap = ({ data, company }: { data?: ContactMapData; company: CompanyData }) => {
  if (!data) return null;
  const src = fillLabel(data.embedUrl, { addressQuery: company.addressLines.join(" ").replace(/ /g, "+") });
  return (
    <section id="map" aria-label={data.label} className="w-full scroll-mt-[90px] bg-[var(--color-map-bg)] 2xl:scroll-mt-[120px]">
      <iframe
        src={src}
        title={data.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[340px] w-full border-0 sm:h-[420px] lg:h-[520px] 2xl:h-[660px] 3xl:h-[830px]"
      />
    </section>
  );
};
