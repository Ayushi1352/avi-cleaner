import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ProcessSteps } from "@/components/sections/ProcessSteps";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.howItWorksBreadcrumb?.metaTitle, description: commonData.howItWorksBreadcrumb?.description };

export default function HowItWorksPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.howItWorksBreadcrumb} ui={commonData.globalUI} />
      <ProcessSteps data={sectionData.ProcessSteps?.variants?.CleaningProcessSteps1} />
    </main>
  );
}
