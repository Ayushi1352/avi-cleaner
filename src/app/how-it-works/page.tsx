import PageHero from "@/components/PageHero";
import ProcessSteps from "./ProcessSteps";
import howItWorksData from "@/data/how-it-works.json";

// Text lives in src/data/how-it-works.json under text.Page.
const copy = howItWorksData.text.Page;

export const metadata = howItWorksData.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function HowItWorksPage() {
  return (
    <main className="grow">
      <PageHero title={copy.howItWorks} />
      <ProcessSteps />
    </main>
  );
}
