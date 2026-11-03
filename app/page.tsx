import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { HomeHeroSection } from "@/components/sections/HomeHeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { OurServicesSection } from "@/components/sections/OurServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { RecentProjectsSection } from "@/components/sections/RecentProjectsSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { ClientTestimonialsCarouselSection } from "@/components/sections/ClientTestimonialsCarouselSection";
import { NewsAndArticlesSection } from "@/components/sections/NewsAndArticlesSection";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export default function Home() {
  return (
    <main className="flex-1">
      <HomeHeroSection data={sectionData.Hero?.variants?.CleaningHero1} />
      <AboutSection data={sectionData.AboutUs?.variants?.CleaningAboutUs1} ui={commonData.globalUI} />
      <OurServicesSection data={sectionData.Services?.variants?.CleaningServices1} ui={commonData.globalUI} />
      <WhyChooseUsSection data={sectionData.WhyChooseUs?.variants?.CleaningWhyChooseUs1} ui={commonData.globalUI} />
      <RecentProjectsSection data={sectionData.RecentProjects?.variants?.CleaningRecentProjects1} ui={commonData.globalUI} />
      <CtaBannerSection data={sectionData.CtaBanner?.variants?.CleaningCtaBanner1} ui={commonData.globalUI} />
      <ClientTestimonialsCarouselSection data={sectionData.Testimonials?.variants?.CleaningTestimonials1} ui={commonData.globalUI} />
      <NewsAndArticlesSection data={sectionData.Blogs?.variants?.CleaningBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
