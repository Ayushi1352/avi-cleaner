import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogGrid } from "@/components/sections/BlogGrid";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.blogBreadcrumb?.metaTitle, description: commonData.blogBreadcrumb?.description };

export default function BlogPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogBreadcrumb} ui={commonData.globalUI} />
      <BlogGrid data={sectionData.BlogGrid?.variants?.CleaningBlogGrid1} />
    </main>
  );
}
