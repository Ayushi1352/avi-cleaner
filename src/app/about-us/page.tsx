import AboutHero from "./AboutHero";
import AboutSection from "@/components/AboutSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.aboutPage.text.Page;

export const metadata = site.aboutPage.meta.Page;

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
