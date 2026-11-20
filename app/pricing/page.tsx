import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.pricingBreadcrumb?.seo };

export default function PricingPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.pricingBreadcrumb} ui={commonData.globalUI} />
      <Pricing data={sectionData.Pricing?.variants?.CleaningPricing1} />
    </main>
  );
}
