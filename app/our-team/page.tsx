import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TeamGrid } from "@/components/sections/TeamGrid";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.teamBreadcrumb?.metaTitle, description: commonData.teamBreadcrumb?.description };

export default function TeamPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.teamBreadcrumb} ui={commonData.globalUI} />
      <TeamGrid data={sectionData.TeamGrid?.variants?.CleaningTeamGrid1} ui={commonData.globalUI} />
    </main>
  );
}
