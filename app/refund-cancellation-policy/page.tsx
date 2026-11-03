import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyContent } from "@/components/sections/PolicyContent";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.refundBreadcrumb?.metaTitle, description: commonData.refundBreadcrumb?.description };

export default function RefundCancellationPolicyPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.refundBreadcrumb} ui={commonData.globalUI} />
      <PolicyContent data={sectionData.RefundPolicy?.variants?.CleaningRefundPolicy1} company={commonData.company} />
    </main>
  );
}
