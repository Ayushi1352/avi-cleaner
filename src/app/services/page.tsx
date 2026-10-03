import PageHero from "@/components/PageHero";
import ServicesGrid from "./ServicesGrid";
import CallUsBanner from "./CallUsBanner";
import CleaningProcess from "./CleaningProcess";

export const metadata = {
  title: "Services | Avicleaner",
  description:
    "Professional home, office, kitchen, window, commercial and carpet cleaning services from Avicleaner.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function ServicesPage() {
  return (
    <main className="grow">
      <PageHero title="Services" />
      <ServicesGrid />
      <CallUsBanner />
      <CleaningProcess />
    </main>
  );
}
