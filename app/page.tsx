import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutUs } from "@/components/sections/AboutUs";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blogs } from "@/components/sections/Blogs";

export default function Home() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.CleaningHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.CleaningAboutUs1} />
      <Services data={sectionData.Services?.variants?.CleaningServices1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.CleaningWhyChooseUs1} />
      <RecentProjects data={sectionData.RecentProjects?.variants?.CleaningRecentProjects1} />
      <CtaBanner data={sectionData.CtaBanner?.variants?.CleaningCtaBanner1} />
      <Testimonials data={sectionData.Testimonials?.variants?.CleaningTestimonials1} />
      <Blogs data={sectionData.Blogs?.variants?.CleaningBlogs1} />
    </main>
  );
}
