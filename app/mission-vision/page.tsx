import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { MissionVision } from "@/components/sections/MissionVision";
import { PartnerCta } from "@/components/sections/PartnerCta";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.missionVisionBreadcrumb?.seo };

export default function MissionVisionPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.missionVisionBreadcrumb} ui={commonData.globalUI} />
      <MissionVision data={sectionData.MissionVision?.variants?.CleaningMissionVision1} />
      <PartnerCta data={sectionData.PartnerCta?.variants?.CleaningPartnerCta1} />
    </main>
  );
}
