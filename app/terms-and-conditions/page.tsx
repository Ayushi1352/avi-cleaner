import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Policy } from "@/components/sections/Policy";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.termsBreadcrumb?.seo };

export default function TermsAndConditionsPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.termsBreadcrumb} ui={commonData.globalUI} />
      <Policy data={sectionData.TermsPolicy?.variants?.CleaningTermsPolicy1} />
    </main>
  );
}
