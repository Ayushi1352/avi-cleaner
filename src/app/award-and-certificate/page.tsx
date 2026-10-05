import PageHero from "@/components/PageHero";
import AwardsGrid from "./AwardsGrid";
import awardsData from "@/data/awards.json";

// Text lives in src/data/awards.json under text.Page.
const copy = awardsData.text.Page;

export const metadata = awardsData.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function AwardsPage() {
  return (
    <main className="grow">
      <PageHero title={copy.awardCertificate} />
      <AwardsGrid />
    </main>
  );
}
