import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CallUsBanner } from "@/components/sections/CallUsBanner";
import { CleaningProcess } from "@/components/sections/CleaningProcess";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.servicesBreadcrumb?.metaTitle, description: commonData.servicesBreadcrumb?.description };

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      <ServicesGrid data={sectionData.ServicesGrid?.variants?.CleaningServicesGrid1} ui={commonData.globalUI} />
      <CallUsBanner data={sectionData.CallUsBanner?.variants?.CleaningCallUsBanner1} company={commonData.company} ui={commonData.globalUI} />
      <CleaningProcess data={sectionData.CleaningProcess?.variants?.CleaningCleaningProcess1} ui={commonData.globalUI} />
    </main>
  );
}
