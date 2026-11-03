import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.testimonialsBreadcrumb?.metaTitle, description: commonData.testimonialsBreadcrumb?.description };

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <TestimonialsGrid data={sectionData.TestimonialsGrid?.variants?.CleaningTestimonialsGrid1} ui={commonData.globalUI} />
    </main>
  );
}
