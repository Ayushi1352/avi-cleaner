import PageHero from "@/components/PageHero";
import MemberProfile from "@/components/MemberProfile";
import MemberTabs from "@/components/MemberTabs";
import MemberJourney from "@/components/MemberJourney";
import members, { getMemberDetail } from "@/components/teamMembersData";
import { site, fill } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.teamPage.text.DetailPage;
const uiLinks = site.teamPage.links.DetailPage;

// One common detail page for every team member: it shows the first member in site.json.
const detail = getMemberDetail(members[0]);

export const metadata = {
  title: fill(uiText.nameRoleAvicleaner, { name: detail.name, role: detail.role }),
  description: fill(uiText.meetNameRoleAtAvicleaner, { name: detail.name, role: detail.role }),
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
// Profile, tabs and journey sections are unique to this page.
export default function TeamDetailPage() {
  return (
    <main className="grow">
      <PageHero
        title={detail.name}
        breadcrumbs={[
          { label: uiText.ourTeam, href: uiLinks.ourTeam },
          { label: detail.name },
        ]}
      />
      <MemberProfile member={detail} />
      <MemberTabs member={detail} />
      <MemberJourney member={detail} />
    </main>
  );
}
