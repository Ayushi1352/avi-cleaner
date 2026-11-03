import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { CleaningChecklist } from "@/components/sections/CleaningChecklist";
import { WhyChooseService } from "@/components/sections/WhyChooseService";
import { PartnerCtaSection } from "@/components/sections/PartnerCtaSection";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.serviceDetailBreadcrumb?.metaTitle, description: commonData.serviceDetailBreadcrumb?.description };

export default function ServiceDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.serviceDetailBreadcrumb} ui={commonData.globalUI} />
      <ServiceOverview data={sectionData.ServiceDetail?.variants?.CleaningServiceDetail1} ui={commonData.globalUI} />
      <CleaningChecklist data={sectionData.ServiceDetail?.variants?.CleaningServiceDetail1} ui={commonData.globalUI} />
      <WhyChooseService data={sectionData.ServiceDetail?.variants?.CleaningServiceDetail1} ui={commonData.globalUI} />
      <PartnerCtaSection data={sectionData.ServiceDetail?.variants?.CleaningServiceDetail1?.cta} showLeaf={false} wide />
    </main>
  );
}
