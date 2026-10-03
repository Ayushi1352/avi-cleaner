import PageHero from "@/components/PageHero";
import TeamGrid from "./TeamGrid";

export const metadata = {
  title: "Our Team | Avicleaner",
  description:
    "Meet the Avicleaner team: trained, verified cleaning professionals dedicated to high-quality service and your satisfaction.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
// The team grid is unique to this page.
export default function TeamPage() {
  return (
    <main className="grow">
      <PageHero title="Our Team" crumb="Team" />
      <TeamGrid />
    </main>
  );
}
