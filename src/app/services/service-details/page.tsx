import PageHero from "@/components/PageHero";
import ServiceOverview from "@/components/ServiceOverview";
import CleaningChecklist from "@/components/CleaningChecklist";
import WhyChooseService from "@/components/WhyChooseService";
import PartnerCtaSection from "@/components/PartnerCtaSection";
import services from "@/components/servicesData";
import { site, fill } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.servicesPage.text.DetailPage;
const uiLinks = site.servicesPage.links.DetailPage;
const uiImages = site.servicesPage.images.DetailPage;

// Text lives in src/data/site.json.
const copy = site.servicesPage.text.DetailPage;

// One common detail page for every service: it shows the first service in site.json.
const service = services[0];

export const metadata = {
  title: fill(uiText.titleAvicleaner, { title: service.title }),
  description: service.short,
};

// Navbar and footer come from the root layout; the page banner and CTA banner are shared with other pages.
// Intro, checklist and "why choose" sections are unique to this page.
export default function ServiceDetailPage() {
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
