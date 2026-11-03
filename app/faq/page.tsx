import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.faqBreadcrumb?.metaTitle, description: commonData.faqBreadcrumb?.description };

export default function FaqPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.faqBreadcrumb} ui={commonData.globalUI} />
      <FaqAccordion data={sectionData.Faq?.variants?.CleaningFaq1} ui={commonData.globalUI} />
    </main>
  );
}
