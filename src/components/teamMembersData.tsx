import { site, fill, contact } from "@/data/index";

// Team members for the Our Team page and the Team Detail page.
// Add or remove people here; pagination (8 per page) updates automatically.
// Every member links to the one common detail page (/our-team/team-details), which shows the first member.
// Photos go in /public/images/team/ with the file name used below.
//
// `detail` is optional. Anything you leave out is filled with placeholder
// content built from the member's name and role (see getMemberDetail below),
// so replace it with real details when you have them.

export interface Member {
  name: string;
  role: string;
  photo: string;
  href: string;
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

// Content lives in src/data/site.json.
const members: Member[] = site.teamPage.members.map((item) => ({ ...item }));

/** Full detail for a member: their own data, with the defaults from site.json for the rest. */
export function getMemberDetail(member) {
  const first = member.name.split(" ")[0];
  const d = member.detail || {};
  // Default texts live in src/data/site.json and use these {placeholders}.
  const defaults = site.teamPage.memberDefaults;
  const vars = { name: member.name, first, firstLower: first.toLowerCase(), role: member.role };
  return {
    name: member.name,
    first,
    role: member.role,
    href: member.href,
    photo: d.photo || member.photo,
    journeyPhoto: d.journeyPhoto || d.photo || member.photo,
    intro: d.intro || fill(defaults.intro, vars),
    email: d.email || fill(defaults.email, vars),
    phone: d.phone || contact.phone,
    location: d.location || contact.address,
    photoQuote: d.photoQuote || defaults.photoQuote,
    strengths: d.strengths || defaults.strengths,
    about: d.about || defaults.about.map((text) => fill(text, vars)),
    quote: d.quote || defaults.quote,
    responsibilities: d.responsibilities || defaults.responsibilities.map((text) => fill(text, vars)),
    journeyQuote: d.journeyQuote || defaults.journeyQuote,
    stats: d.stats || defaults.stats,
    experience:
      d.experience ||
      defaults.experience.map((item) => ({ ...item, title: fill(item.title, vars), text: fill(item.text, vars) })),
  };
}

export default members;
