import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.whyChooseUsBreadcrumb?.seo };

export default function WhyChooseUsPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.whyChooseUsBreadcrumb} ui={commonData.globalUI} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.CleaningWhyChooseUs1} />
      <CtaBanner data={sectionData.CtaBanner?.variants?.CleaningCtaBanner1} />
      <Testimonials data={sectionData.Testimonials?.variants?.CleaningTestimonials1} />
    </main>
  );
}
