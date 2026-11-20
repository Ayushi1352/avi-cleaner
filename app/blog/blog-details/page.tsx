import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogDetail } from "@/components/sections/BlogDetail";

export const metadata: Metadata = { ...(rawData as CleaningTemplateData).common.blogDetailBreadcrumb?.seo };

export default function BlogDetailPage() {
  const templateData: CleaningTemplateData = rawData;
  const sectionData = templateData?.categories?.Cleaning?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={sectionData.BlogDetail?.variants?.CleaningBlogDetail1} />
    </main>
  );
}
