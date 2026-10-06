import PageHero from "@/components/PageHero";
import FaqAccordion from "./FaqAccordion";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.faqPage.text.Page;

export const metadata = site.faqPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function FaqPage() {
  return (
    <main className="grow">
      <PageHero title={copy.faq} />
      <FaqAccordion />
    </main>
  );
}
