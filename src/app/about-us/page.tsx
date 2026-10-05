import AboutHero from "./AboutHero";
import AboutSection from "@/components/AboutSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import aboutData from "@/data/about.json";

// Text lives in src/data/about.json under text.Page.
const copy = aboutData.text.Page;

export const metadata = aboutData.meta.Page;

export default function AboutUsPage() {
  return (
    <main className="grow">
      <AboutHero />
      <AboutSection showButton={false} />
      <CtaBannerSection eyebrow={copy.letsMakeItCleaner} />
      <WhyChooseUsSection />
    </main>
  );
}
