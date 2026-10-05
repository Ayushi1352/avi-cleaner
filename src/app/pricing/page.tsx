import PageHero from "@/components/PageHero";
import PricingPlans from "./PricingPlans";
import pricingData from "@/data/pricing.json";

// Text lives in src/data/pricing.json under text.Page.
const copy = pricingData.text.Page;

export const metadata = pricingData.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function PricingPage() {
  return (
    <main className="grow">
      <PageHero title={copy.ourPricing} crumb={copy.pricing} />
      <PricingPlans />
    </main>
  );
}
