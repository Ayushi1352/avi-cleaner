import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Policy } from "@/components/sections/Policy";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.refundBreadcrumb?.seo };

export default function RefundCancellationPolicyPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.refundBreadcrumb} ui={commonData.globalUI} />
      <Policy data={sectionData.RefundPolicy?.variants?.CleaningRefundPolicy1} />
    </main>
  );
}
