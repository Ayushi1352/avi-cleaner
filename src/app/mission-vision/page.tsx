import PageHero from "@/components/PageHero";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import CoreValues from "./CoreValues";
import PartnerCtaSection from "@/components/PartnerCtaSection";

export const metadata = {
  title: "Mission & Vision | Avicleaner",
  description:
    "Our mission is a cleaner tomorrow and our vision is cleaner spaces and happier lives. Discover the values that drive Avicleaner.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
// Mission, Vision, Core Values and the Partner banner are unique to this page.
export default function MissionVisionPage() {
  return (
    <main className="grow">
      <PageHero title="Mission & Vision" />
      <OurMission />
      <OurVision />
      <CoreValues />
      <PartnerCtaSection />
    </main>
  );
}
