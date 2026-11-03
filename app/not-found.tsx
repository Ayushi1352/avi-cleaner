import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { NotFoundSection } from "@/components/sections/NotFoundSection";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.notFoundMeta?.title, description: commonData.notFoundMeta?.description };

export default function NotFound() {
  return (
    <main className="flex-1">
      <NotFoundSection data={sectionData.NotFound?.variants?.CleaningNotFound1} />
    </main>
  );
}
