import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceOverview from "./ServiceOverview";
import CleaningChecklist from "./CleaningChecklist";
import WhyChooseService from "./WhyChooseService";
import PartnerCtaSection from "@/components/PartnerCtaSection";
import services, { getServiceBySlug } from "@/app/services/servicesData";
import { site, fill } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.servicesPage.text.DetailPage;
const uiLinks = site.servicesPage.links.DetailPage;
const uiImages = site.servicesPage.images.DetailPage;

// Text lives in src/data/site.json.
const copy = site.servicesPage.text.DetailPage;

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
  if (!service) return { title: uiText.servicesAvicleaner };
  return {
    title: fill(uiText.titleAvicleaner, { title: service.title }),
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
          { label: uiText.services, href: uiLinks.services },
          { label: service.title },
        ]}
      />
      <ServiceOverview service={service} />
      <CleaningChecklist service={service} />
      <WhyChooseService service={service} />
      <PartnerCtaSection
        eyebrow={service.ctaEyebrow}
        title={fill(uiText.bookYourTitleToday, { title: service.title })}
        text={service.ctaText}
        buttonLabel={copy.getAFreeQuote}
        buttonHref={uiLinks.bookNow}
        image={uiImages.detailCta}
        showLeaf={false}
        wide
      />
    </main>
  );
}
