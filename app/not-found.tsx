import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { NotFoundSection } from "@/components/sections/NotFoundSection";

const templateData: CleaningTemplateData = rawData;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.notFound?.seo };

export default function NotFound() {
  return (
    <main className="flex-1">
      <NotFoundSection data={commonData.notFound} />
    </main>
  );
}
