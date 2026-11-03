import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { GalleryPhotos } from "@/components/sections/GalleryPhotos";
import { GalleryVideo } from "@/components/sections/GalleryVideo";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.galleryBreadcrumb?.metaTitle, description: commonData.galleryBreadcrumb?.description };

export default function GalleryPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      <GalleryPhotos data={sectionData.GalleryPhotos?.variants?.CleaningGalleryPhotos1} />
      <GalleryVideo data={sectionData.GalleryVideo?.variants?.CleaningGalleryVideo1} ui={commonData.globalUI} />
    </main>
  );
}
