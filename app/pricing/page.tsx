import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PricingPlans } from "@/components/sections/PricingPlans";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.pricingBreadcrumb?.metaTitle, description: commonData.pricingBreadcrumb?.description };

export default function PricingPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.pricingBreadcrumb} ui={commonData.globalUI} />
      <PricingPlans data={sectionData.Pricing?.variants?.CleaningPricing1} ui={commonData.globalUI} />
    </main>
  );
}
