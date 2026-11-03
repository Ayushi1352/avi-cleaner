import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyContent } from "@/components/sections/PolicyContent";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.termsBreadcrumb?.metaTitle, description: commonData.termsBreadcrumb?.description };

export default function TermsAndConditionsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.termsBreadcrumb} ui={commonData.globalUI} />
      <PolicyContent data={sectionData.TermsPolicy?.variants?.CleaningTermsPolicy1} company={commonData.company} />
    </main>
  );
}
