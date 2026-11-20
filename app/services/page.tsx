import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CallUsBanner } from "@/components/sections/CallUsBanner";
import { CleaningProcess } from "@/components/sections/CleaningProcess";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.servicesBreadcrumb?.seo };

export default function ServicesPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      <ServicesGrid data={sectionData.ServicesGrid?.variants?.CleaningServicesGrid1} />
      <CallUsBanner data={sectionData.CallUsBanner?.variants?.CleaningCallUsBanner1} />
      <CleaningProcess data={sectionData.CleaningProcess?.variants?.CleaningCleaningProcess1} />
    </main>
  );
}
