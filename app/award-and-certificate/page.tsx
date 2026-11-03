import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AwardsGrid } from "@/components/sections/AwardsGrid";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.awardsBreadcrumb?.metaTitle, description: commonData.awardsBreadcrumb?.description };

export default function AwardsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.awardsBreadcrumb} ui={commonData.globalUI} />
      <AwardsGrid data={sectionData.Awards?.variants?.CleaningAwards1} />
    </main>
  );
}
