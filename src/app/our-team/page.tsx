import PageHero from "@/components/PageHero";
import TeamGrid from "./TeamGrid";
import teamData from "@/data/team.json";

// Text lives in src/data/team.json under text.Page.
const copy = teamData.text.Page;

export const metadata = teamData.meta.Page;

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
