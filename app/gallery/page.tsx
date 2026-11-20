import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.galleryBreadcrumb?.seo };

export default function GalleryPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      <Gallery data={sectionData.Gallery?.variants?.CleaningGallery1} />
    </main>
  );
}
