import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PrivacyPolicy } from "@/components/sections/PrivacyPolicy";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.privacyBreadcrumb?.seo };

export default function PrivacyPolicyPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.privacyBreadcrumb} ui={commonData.globalUI} />
      <PrivacyPolicy data={sectionData.PrivacyPolicy?.variants?.CleaningPrivacyPolicy1} />
    </main>
  );
}
