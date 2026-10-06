import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import MemberProfile from "./MemberProfile";
import MemberTabs from "./MemberTabs";
import MemberJourney from "./MemberJourney";
import members, { getMemberBySlug, getMemberDetail } from "@/app/our-team/teamMembersData";
import { site, fill } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.teamPage.text.DetailPage;
const uiLinks = site.teamPage.links.DetailPage;

// Pre-build one detail page per team member.
export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: uiText.teamMemberAvicleaner };
  return {
    title: fill(uiText.nameRoleAvicleaner, { name: member.name, role: member.role }),
    description: fill(uiText.meetNameRoleAtAvicleaner, { name: member.name, role: member.role }),
  };
}

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
// Profile, tabs and journey sections are unique to this page.
export default async function TeamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();
  const detail = getMemberDetail(member);

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
