import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Awards } from "@/components/sections/Awards";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.awardsBreadcrumb?.seo };

export default function AwardsPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.awardsBreadcrumb} ui={commonData.globalUI} />
      <Awards data={sectionData.Awards?.variants?.CleaningAwards1} />
    </main>
  );
}
