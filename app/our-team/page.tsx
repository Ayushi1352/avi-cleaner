import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TeamGrid } from "@/components/sections/TeamGrid";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.teamBreadcrumb?.seo };

export default function TeamPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.teamBreadcrumb} ui={commonData.globalUI} />
      <TeamGrid data={sectionData.TeamGrid?.variants?.CleaningTeamGrid1} />
    </main>
  );
}
