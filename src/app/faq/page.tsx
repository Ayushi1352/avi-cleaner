import PageHero from "@/components/PageHero";
import FaqAccordion from "./FaqAccordion";
import faqData from "@/data/faq.json";

// Text lives in src/data/faq.json under text.Page.
const copy = faqData.text.Page;

export const metadata = faqData.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function FaqPage() {
  return (
    <main className="grow">
      <PageHero title={copy.faq} />
      <FaqAccordion />
    </main>
  );
}
