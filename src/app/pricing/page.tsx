import PageHero from "@/components/PageHero";
import PricingPlans from "./PricingPlans";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.pricingPage.text.Page;

export const metadata = site.pricingPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function PricingPage() {
  return (
    <main className="grow">
      <PageHero title={copy.ourPricing} crumb={copy.pricing} />
      <PricingPlans />
    </main>
  );
}
