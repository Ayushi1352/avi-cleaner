import HomeHeroSection from "@/components/HomeHeroSection";
import AboutSection from "@/components/AboutSection";
import OurServicesSection from "@/components/OurServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import RecentProjectsSection from "@/components/RecentProjectsSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import ClientTestimonialsCarouselSection from "@/components/ClientTestimonialsCarouselSection";
import NewsAndArticlesSection from "@/components/NewsAndArticlesSection";

export default function Home() {
  return (
    <main className="grow">
      <HomeHeroSection />
      <AboutSection />
      <OurServicesSection />
      <WhyChooseUsSection />
      <RecentProjectsSection />
      <CtaBannerSection />
      <ClientTestimonialsCarouselSection />
      <NewsAndArticlesSection />
    </main>
  );
}
