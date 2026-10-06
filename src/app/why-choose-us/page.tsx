import PageHero from "@/components/PageHero";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import ClientTestimonialsCarouselSection from "@/components/ClientTestimonialsCarouselSection";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.whyChooseUsPage;

export const metadata = site.whyChooseUsPage.meta.Page;

// Only the page banner is unique to this page.
// Every other section is shared with the home and about pages.
export default function WhyChooseUsPage() {
  return (
    <main className="grow">
      <PageHero title={copy.whyChooseUs} />
      <WhyChooseUsSection />
      <CtaBannerSection eyebrow={copy.letsMakeItCleaner} />
      <ClientTestimonialsCarouselSection />
    </main>
  );
}
