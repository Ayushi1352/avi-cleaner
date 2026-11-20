import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogGrid } from "@/components/sections/BlogGrid";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.blogBreadcrumb?.seo };

export default function BlogPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogBreadcrumb} ui={commonData.globalUI} />
      <BlogGrid data={sectionData.BlogGrid?.variants?.CleaningBlogGrid1} />
    </main>
  );
}
