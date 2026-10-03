import PageHero from "@/components/PageHero";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import ClientTestimonialsCarouselSection from "@/components/ClientTestimonialsCarouselSection";

export const metadata = {
  title: "Why Choose Us | Avicleaner",
  description:
    "Why homes and businesses trust Avicleaner: trained professionals, eco-friendly products and 100% customer satisfaction.",
};

// Only the page banner is unique to this page.
// Every other section is shared with the home and about pages.
export default function WhyChooseUsPage() {
  return (
    <main className="grow">
      <PageHero title="Why Choose Us" />
      <WhyChooseUsSection />
      <CtaBannerSection eyebrow="Let's Make It Cleaner" />
      <ClientTestimonialsCarouselSection />
    </main>
  );
}
