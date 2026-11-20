import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { PartnerCta } from "@/components/sections/PartnerCta";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.serviceDetailBreadcrumb?.seo };

export default function ServiceDetailPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.serviceDetailBreadcrumb} ui={commonData.globalUI} />
      <ServiceDetail data={sectionData.ServiceDetail?.variants?.CleaningServiceDetail1} />
      <PartnerCta data={sectionData.ServiceDetail?.variants?.CleaningServiceDetail1?.cta} showLeaf={false} wide />
    </main>
  );
}
