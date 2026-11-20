import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutUs } from "@/components/sections/AboutUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.CleaningAboutUs1} showButton={false} />
      <CtaBanner data={sectionData.CtaBanner?.variants?.CleaningCtaBanner1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.CleaningWhyChooseUs1} />
    </main>
  );
}
