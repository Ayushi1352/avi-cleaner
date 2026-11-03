import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.aboutBreadcrumb?.metaTitle, description: commonData.aboutBreadcrumb?.description };

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutSection data={sectionData.AboutUs?.variants?.CleaningAboutUs1} ui={commonData.globalUI} showButton={false} />
      <CtaBannerSection data={sectionData.CtaBanner?.variants?.CleaningCtaBanner1} ui={commonData.globalUI} />
      <WhyChooseUsSection data={sectionData.WhyChooseUs?.variants?.CleaningWhyChooseUs1} ui={commonData.globalUI} />
    </main>
  );
}
