import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import MemberProfile from "./MemberProfile";
import MemberTabs from "./MemberTabs";
import MemberJourney from "./MemberJourney";
import members, { getMemberBySlug, getMemberDetail } from "@/app/team/teamMembersData";

// Pre-build one detail page per team member.
export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Team Member | Avicleaner" };
  return {
    title: `${member.name} - ${member.role} | Avicleaner`,
    description: `Meet ${member.name}, ${member.role} at Avicleaner.`,
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
          { label: "Team", href: "/team" },
          { label: detail.name },
        ]}
      />
      <MemberProfile member={detail} />
      <MemberTabs member={detail} />
      <MemberJourney member={detail} />
    </main>
  );
}
