import PageHero from "@/components/PageHero";
import ServicesGrid from "./ServicesGrid";
import CallUsBanner from "./CallUsBanner";
import CleaningProcess from "./CleaningProcess";
import servicesData from "@/data/services.json";

// Text lives in src/data/services.json under text.Page.
const copy = servicesData.text.Page;

export const metadata = servicesData.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function ServicesPage() {
  return (
    <main className="grow">
      <PageHero title={copy.services} />
      <ServicesGrid />
      <CallUsBanner />
      <CleaningProcess />
    </main>
  );
}
