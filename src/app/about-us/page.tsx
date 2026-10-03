import AboutHero from "./AboutHero";
import AboutSection from "@/components/AboutSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export const metadata = {
  title: "About Us | Avicleaner",
  description:
    "Learn about Avicleaner: professional, eco-friendly cleaning services for homes, offices and commercial spaces.",
};

export default function AboutUsPage() {
  return (
    <main className="grow">
      <AboutHero />
      <AboutSection showButton={false} />
      <CtaBannerSection eyebrow="Let's Make It Cleaner" />
      <WhyChooseUsSection />
    </main>
  );
}
