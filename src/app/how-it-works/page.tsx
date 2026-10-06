import PageHero from "@/components/PageHero";
import ProcessSteps from "./ProcessSteps";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.howItWorksPage.text.Page;

export const metadata = site.howItWorksPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function HowItWorksPage() {
  return (
    <main className="grow">
      <PageHero title={copy.howItWorks} />
      <ProcessSteps />
    </main>
  );
}
