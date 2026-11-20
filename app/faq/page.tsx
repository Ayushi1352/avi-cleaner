import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.faqBreadcrumb?.seo };

export default function FaqPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.faqBreadcrumb} ui={commonData.globalUI} />
      <Faq data={sectionData.Faq?.variants?.CleaningFaq1} />
    </main>
  );
}
