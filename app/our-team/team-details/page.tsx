import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { MemberProfile } from "@/components/sections/MemberProfile";
import { MemberTabs } from "@/components/sections/MemberTabs";
import { MemberJourney } from "@/components/sections/MemberJourney";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.teamDetailBreadcrumb?.metaTitle, description: commonData.teamDetailBreadcrumb?.description };

export default function TeamDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.teamDetailBreadcrumb} ui={commonData.globalUI} />
      <MemberProfile data={sectionData.TeamDetail?.variants?.CleaningTeamDetail1} ui={commonData.globalUI} />
      <MemberTabs data={sectionData.TeamDetail?.variants?.CleaningTeamDetail1} />
      <MemberJourney data={sectionData.TeamDetail?.variants?.CleaningTeamDetail1} ui={commonData.globalUI} />
    </main>
  );
}
