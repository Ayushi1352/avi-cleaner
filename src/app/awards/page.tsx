import PageHero from "@/components/PageHero";
import AwardsGrid from "./AwardsGrid";

export const metadata = {
  title: "Award & Certificate | Avicleaner",
  description: "Awards and professional certifications that recognize Avicleaner's quality, safety and eco-friendly cleaning.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function AwardsPage() {
  return (
    <main className="grow">
      <PageHero title="Award & Certificate" />
      <AwardsGrid />
    </main>
  );
}
