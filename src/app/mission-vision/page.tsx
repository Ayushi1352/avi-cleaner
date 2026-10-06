import PageHero from "@/components/PageHero";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import CoreValues from "./CoreValues";
import PartnerCtaSection from "@/components/PartnerCtaSection";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.missionVisionPage.text.Page;

export const metadata = site.missionVisionPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
// Mission, Vision, Core Values and the Partner banner are unique to this page.
export default function MissionVisionPage() {
  return (
    <main className="grow">
      <PageHero title={copy.missionVision} />
      <OurMission />
      <OurVision />
      <CoreValues />
      <PartnerCtaSection />
    </main>
  );
}
