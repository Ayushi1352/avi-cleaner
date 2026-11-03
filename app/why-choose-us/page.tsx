import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { ClientTestimonialsCarouselSection } from "@/components/sections/ClientTestimonialsCarouselSection";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.whyChooseUsBreadcrumb?.metaTitle, description: commonData.whyChooseUsBreadcrumb?.description };

export default function WhyChooseUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.whyChooseUsBreadcrumb} ui={commonData.globalUI} />
      <WhyChooseUsSection data={sectionData.WhyChooseUs?.variants?.CleaningWhyChooseUs1} ui={commonData.globalUI} />
      <CtaBannerSection data={sectionData.CtaBanner?.variants?.CleaningCtaBanner1} ui={commonData.globalUI} />
      <ClientTestimonialsCarouselSection data={sectionData.Testimonials?.variants?.CleaningTestimonials1} ui={commonData.globalUI} />
    </main>
  );
}
