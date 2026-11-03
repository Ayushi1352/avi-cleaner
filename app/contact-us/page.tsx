import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactMap } from "@/components/sections/ContactMap";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.contactBreadcrumb?.metaTitle, description: commonData.contactBreadcrumb?.description };

export default function ContactUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <ContactInfo data={sectionData.ContactInfo?.variants?.CleaningContactInfo1} company={commonData.company} ui={commonData.globalUI} />
      <ContactForm data={sectionData.ContactForm?.variants?.CleaningContactForm1} company={commonData.company} ui={commonData.globalUI} />
      <ContactMap data={sectionData.ContactMap?.variants?.CleaningContactMap1} company={commonData.company} />
    </main>
  );
}
