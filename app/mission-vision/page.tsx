import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { OurMission } from "@/components/sections/OurMission";
import { OurVision } from "@/components/sections/OurVision";
import { CoreValues } from "@/components/sections/CoreValues";
import { PartnerCtaSection } from "@/components/sections/PartnerCtaSection";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.missionVisionBreadcrumb?.metaTitle, description: commonData.missionVisionBreadcrumb?.description };

export default function MissionVisionPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.missionVisionBreadcrumb} ui={commonData.globalUI} />
      <OurMission data={sectionData.OurMission?.variants?.CleaningOurMission1} ui={commonData.globalUI} />
      <OurVision data={sectionData.OurVision?.variants?.CleaningOurVision1} ui={commonData.globalUI} />
      <CoreValues data={sectionData.CoreValues?.variants?.CleaningCoreValues1} />
      <PartnerCtaSection data={sectionData.PartnerCta?.variants?.CleaningPartnerCta1} />
    </main>
  );
}
