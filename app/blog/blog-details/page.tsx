import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogArticle } from "@/components/sections/BlogArticle";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.blogDetailBreadcrumb?.metaTitle, description: commonData.blogDetailBreadcrumb?.description };

export default function BlogDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogArticle data={sectionData.BlogDetail?.variants?.CleaningBlogDetail1} />
    </main>
  );
}
