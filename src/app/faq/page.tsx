import PageHero from "@/components/PageHero";
import FaqAccordion from "./FaqAccordion";

export const metadata = {
  title: "FAQ | Avicleaner",
  description:
    "Quick answers to common questions about Avicleaner's cleaning services, booking process, pricing, products and satisfaction guarantee.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function FaqPage() {
  return (
    <main className="grow">
      <PageHero title="FAQ" />
      <FaqAccordion />
    </main>
  );
}
