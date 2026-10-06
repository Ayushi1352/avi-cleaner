import PageHero from "@/components/PageHero";
import AwardsGrid from "./AwardsGrid";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.awardsPage.text.Page;

export const metadata = site.awardsPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function AwardsPage() {
  return (
    <main className="grow">
      <PageHero title={copy.awardCertificate} />
      <AwardsGrid />
    </main>
  );
}
