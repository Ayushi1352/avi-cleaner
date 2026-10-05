import teamData from "@/data/team.json";

// Team members for the Our Team page and the Team Detail page.
// Add or remove people here; pagination (8 per page) and detail pages update automatically.
// Photos go in /public/images/team/ with the file name used below.
//
// `detail` is optional. Anything you leave out is filled with placeholder
// content built from the member's name and role (see getMemberDetail below),
// so replace it with real details when you have them.

export interface Member {
  name: string;
  role: string;
  photo: string;
  slug?: string;
  detail?: {
    photo?: string;
    journeyPhoto?: string;
    intro?: string;
    email?: string;
    phone?: string;
    location?: string;
    photoQuote?: string;
    strengths?: string[];
    about?: string[];
    quote?: string;
    responsibilities?: string[];
    journeyQuote?: string;
    stats?: { value: string; label: string }[];
    experience?: { title: string; company: string; years: string; text: string; icon: string }[];
  };
}

// Content lives in src/data/team.json.
const members: Member[] = teamData.members.map((item) => ({ ...item }));

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

members.forEach((m) => {
  m.slug = slugify(m.name);
});

export function getMemberBySlug(slug) {
  return members.find((m) => m.slug === slug) || null;
}

/** Full detail for a member: their own data, with placeholders for the rest. */
export function getMemberDetail(member) {
  const first = member.name.split(" ")[0];
  const d = member.detail || {};
  return {
    name: member.name,
    first,
    role: member.role,
    slug: member.slug,
    photo: d.photo || member.photo,
    journeyPhoto: d.journeyPhoto || d.photo || member.photo,
    intro:
      d.intro ||
      `${first} makes sure every cleaning job is done with care and attention to detail. As our ${member.role}, ${first} helps us deliver fresh, healthy and spotless spaces for every client.`,
    email: d.email || `${first.toLowerCase()}@avicleaner.com`,
    phone: d.phone || teamData.memberDefaults.phone,
    location: d.location || teamData.memberDefaults.location,
    photoQuote: d.photoQuote || teamData.memberDefaults.photoQuote,
    strengths: d.strengths || teamData.memberDefaults.strengths,
    about: d.about || [
      `${member.name} is a dedicated ${member.role} at Avicleaner. ${first} is passionate about creating clean, healthy and comfortable environments for homes and businesses.`,
      `${first} works closely with the team to make sure every client receives the highest standard of service.`,
    ],
    quote: d.quote || teamData.memberDefaults.quote,
    responsibilities: d.responsibilities || [
      `Deliver high-quality work as our ${member.role}.`,
      "Follow safe, eco-friendly cleaning practices on every job.",
      "Check every space against the Avicleaner quality checklist.",
      "Keep clients informed and happy from start to finish.",
    ],
    journeyQuote: d.journeyQuote || teamData.memberDefaults.journeyQuote,
    stats: d.stats || teamData.memberDefaults.stats,
    experience: d.experience || [
      {
        title: member.role,
        company: "Avicleaner Services | Melbourne",
        years: "2024 - Present",
        text: `Working as ${member.role}, delivering reliable and eco-friendly cleaning for homes and offices with consistent quality.`,
        icon: "briefcase",
      },
      {
        title: "Senior Cleaning Associate",
        company: "Avicleaner Services | Melbourne",
        years: "2023 - 2024",
        text: "Guided new team members on site, handled larger residential and office projects, and kept every job on schedule.",
        icon: "team",
      },
      {
        title: "Cleaning Technician",
        company: "FreshNest Cleaning Co. | Melbourne",
        years: "2022 - 2023",
        text: "Managed regular and deep cleaning visits, followed safety checklists, and maintained high client satisfaction.",
        icon: "gear",
      },
      {
        title: "Cleaning Associate",
        company: "Bright & Clean Services | Melbourne",
        years: "2021 - 2022",
        text: "Started with hands-on residential and office cleaning and learned the quality standards of professional service.",
        icon: "cap",
      },
    ],
  };
}

export default members;
