import PageHero from "@/components/PageHero";
import PricingPlans from "./PricingPlans";

export const metadata = {
  title: "Pricing | Avicleaner",
  description:
    "Affordable cleaning plans for every need. Compare Avicleaner's Basic, Standard and Premium plans and pick the right one for your home or office.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function PricingPage() {
  return (
    <main className="grow">
      <PageHero title="Our Pricing" crumb="Pricing" />
      <PricingPlans />
    </main>
  );
}
