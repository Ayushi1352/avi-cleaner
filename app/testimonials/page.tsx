import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.testimonialsBreadcrumb?.seo };

export default function TestimonialsPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <TestimonialsGrid data={sectionData.TestimonialsGrid?.variants?.CleaningTestimonialsGrid1} />
    </main>
  );
}
