import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TeamDetail } from "@/components/sections/TeamDetail";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.teamDetailBreadcrumb?.seo };

export default function TeamDetailPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.teamDetailBreadcrumb} ui={commonData.globalUI} />
      <TeamDetail data={sectionData.TeamDetail?.variants?.CleaningTeamDetail1} />
    </main>
  );
}
