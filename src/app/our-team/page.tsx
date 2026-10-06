import PageHero from "@/components/PageHero";
import TeamGrid from "./TeamGrid";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.teamPage.text.Page;

export const metadata = site.teamPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
// The team grid is unique to this page.
export default function TeamPage() {
  return (
    <main className="grow">
      <PageHero title={copy.ourTeam} crumb={copy.ourTeam} />
      <TeamGrid />
    </main>
  );
}
