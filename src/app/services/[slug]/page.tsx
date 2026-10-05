import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceOverview from "./ServiceOverview";
import CleaningChecklist from "./CleaningChecklist";
import WhyChooseService from "./WhyChooseService";
import PartnerCtaSection from "@/components/PartnerCtaSection";
import services, { getServiceBySlug } from "@/app/services/servicesData";

// Pre-build one detail page per service.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = true;

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const service = getServiceBySlug(resolved?.slug);
  if (!service) return { title: "Services | Avicleaner" };
  return {
    title: `${service.title} | Avicleaner`,
    description: service.short,
  };
}

// Navbar and footer come from the root layout; the page banner and CTA banner are shared with other pages.
// Intro, checklist and "why choose" sections are unique to this page.
export default async function ServiceDetailPage({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const service = getServiceBySlug(resolved?.slug);
  if (!service) notFound();

  return (
    <main className="grow">
      <PageHero
        title={service.title}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <ServiceOverview service={service} />
      <CleaningChecklist service={service} />
      <WhyChooseService service={service} />
      <PartnerCtaSection
        eyebrow={service.ctaEyebrow}
        title={`Book Your ${service.title} Today!`}
        text={service.ctaText}
        buttonLabel="Get a Free Quote"
        buttonHref="/book-now"
        image="/images/services/detail-cta.webp"
        showLeaf={false}
        wide
      />
    </main>
  );
}
