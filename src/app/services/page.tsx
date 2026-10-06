import PageHero from "@/components/PageHero";
import ServicesGrid from "./ServicesGrid";
import CallUsBanner from "./CallUsBanner";
import CleaningProcess from "./CleaningProcess";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.servicesPage.text.Page;

export const metadata = site.servicesPage.meta.Page;

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
