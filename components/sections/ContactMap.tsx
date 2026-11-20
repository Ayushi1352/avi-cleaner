import type { CompanyData, ContactMapData } from "@/types/templates.types";
import { mapUrl } from "@/components/ui/text";

export const ContactMap = ({ data, company }: { data?: ContactMapData; company: CompanyData }) => {
  if (!data) return null;
  const src = mapUrl(company.mapEmbedUrl, company.address);
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
