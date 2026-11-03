import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PrivacyContent } from "@/components/sections/PrivacyContent";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.privacyBreadcrumb?.metaTitle, description: commonData.privacyBreadcrumb?.description };

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.privacyBreadcrumb} ui={commonData.globalUI} />
      <PrivacyContent data={sectionData.PrivacyPolicy?.variants?.CleaningPrivacyPolicy1} company={commonData.company} />
    </main>
  );
}
