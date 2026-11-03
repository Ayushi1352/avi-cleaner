import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BookingForm } from "@/components/sections/BookingForm";

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.bookingBreadcrumb?.metaTitle, description: commonData.bookingBreadcrumb?.description };

export default function BookNowPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.bookingBreadcrumb} ui={commonData.globalUI} />
      <BookingForm data={sectionData.Booking?.variants?.CleaningBooking1} />
    </main>
  );
}
