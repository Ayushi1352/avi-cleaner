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

const members: Member[] = [
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    photo: "/images/team/team-1.webp",
    detail: {
      photo: "/images/team/detail/priya-sharma.webp",
      journeyPhoto: "/images/team/detail/priya-sharma-2.webp",
      intro:
        "Priya ensures that every cleaning project is completed with perfection. With a focus on client satisfaction and team coordination, she keeps our operations running smoothly and delivers high-quality service every time.",
      email: "priya@avicleaner.com",
      phone: "+91 98765 43210",
      location: "New Delhi, India",
      photoQuote: "Clean spaces create happier lives.",
      strengths: ["Reliable Leadership", "Team Management", "Excellent Communication", "Passionate About Clean Spaces"],
      about: [
        "Priya Sharma is an experienced Operations Manager with a strong background in facility management and customer service. She is passionate about creating clean, healthy, and comfortable environments for homes and businesses. Her attention to detail, leadership skills, and dedication to excellence make her a valuable part of the Avicleaner team.",
        "Priya believes that a clean space can improve lives, and she works closely with our team to ensure that every client receives the highest standard of service.",
      ],
      quote: "Leadership is not about being in charge, it’s about taking care of your team and your clients.",
      responsibilities: [
        "Plan and manage daily cleaning operations across homes and offices.",
        "Coordinate schedules, teams and resources for every project.",
        "Run quality checks so every job meets Avicleaner standards.",
        "Handle client communication, feedback and special requests.",
        "Train new team members on safe, eco-friendly cleaning practices.",
      ],
      journeyQuote: "Every space I clean is a step towards a healthier and happier tomorrow.",
      stats: [
        { value: "5+", label: "Years of Experience" },
        { value: "200+", label: "Happy Clients" },
        { value: "100%", label: "Dedication" },
      ],
      experience: [
        {
          title: "Operations Manager",
          company: "Avicleaner Services | New Delhi",
          years: "2022 - Present",
          text: "Currently managing daily operations, client coordination, and quality control to ensure the highest standards in cleaning services.",
          icon: "briefcase",
        },
        {
          title: "Senior Cleaning Specialist",
          company: "CleanHome Solutions | Gurugram",
          years: "2020 - 2022",
          text: "Led a team of cleaning professionals, trained new staff, and handled residential and commercial cleaning projects.",
          icon: "team",
        },
        {
          title: "Facility Management Executive",
          company: "GreenSpaces Pvt. Ltd. | Noida",
          years: "2018 - 2020",
          text: "Managed facility cleaning schedules, maintained client satisfaction, and ensured safe and eco-friendly cleaning practices.",
          icon: "gear",
        },
        {
          title: "Cleaning Assistant",
          company: "Bright & Clean Services | Delhi",
          years: "2017 - 2018",
          text: "Started my career in the cleaning industry, gaining hands-on experience in residential and office cleaning services.",
          icon: "cap",
        },
      ],
    },
  },
  { name: "Rahul Verma", role: "Cleaning Specialist", photo: "/images/team/team-2.webp" },
  { name: "Neha Singh", role: "Cleaning Specialist", photo: "/images/team/team-3.webp" },
  { name: "Amit Kumar", role: "Customer Relations Manager", photo: "/images/team/team-4.webp" },
  { name: "Vikram Patel", role: "Team Leader", photo: "/images/team/team-5.webp" },
  { name: "Sneha Gupta", role: "Housekeeping Expert", photo: "/images/team/team-6.webp" },
  { name: "Arjun Mehta", role: "Deep Cleaning Specialist", photo: "/images/team/team-7.webp" },
  { name: "Kavya Joshi", role: "Quality Supervisor", photo: "/images/team/team-8.webp" },
  { name: "Rohan Das", role: "Window Cleaning Expert", photo: "/images/team/team-9.webp" },
  { name: "Ananya Rao", role: "Office Cleaning Specialist", photo: "/images/team/team-10.webp" },
  { name: "Karan Malhotra", role: "Carpet Care Specialist", photo: "/images/team/team-11.webp" },
  { name: "Pooja Nair", role: "Kitchen Hygiene Expert", photo: "/images/team/team-12.webp" },
  { name: "Siddharth Jain", role: "Move In/Out Specialist", photo: "/images/team/team-13.webp" },
  { name: "Meera Iyer", role: "Eco Cleaning Advisor", photo: "/images/team/team-14.webp" },
  { name: "Aditya Kapoor", role: "Field Supervisor", photo: "/images/team/team-15.webp" },
  { name: "Riya Chawla", role: "Bathroom Sanitization Expert", photo: "/images/team/team-16.webp" },
];

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
    phone: d.phone || "+5689 2589 6325",
    location: d.location || "21 King Street Melbourne, Australia",
    photoQuote: d.photoQuote || "Clean spaces create happier lives.",
    strengths: d.strengths || ["Reliable Service", "Great Teamwork", "Attention to Detail", "Passionate About Clean Spaces"],
    about: d.about || [
      `${member.name} is a dedicated ${member.role} at Avicleaner. ${first} is passionate about creating clean, healthy and comfortable environments for homes and businesses.`,
      `${first} works closely with the team to make sure every client receives the highest standard of service.`,
    ],
    quote: d.quote || "A clean space is the first step to a happy and healthy life.",
    responsibilities: d.responsibilities || [
      `Deliver high-quality work as our ${member.role}.`,
      "Follow safe, eco-friendly cleaning practices on every job.",
      "Check every space against the Avicleaner quality checklist.",
      "Keep clients informed and happy from start to finish.",
    ],
    journeyQuote: d.journeyQuote || "Every space I clean is a step towards a healthier and happier tomorrow.",
    stats: d.stats || [
      { value: "3+", label: "Years of Experience" },
      { value: "100+", label: "Happy Clients" },
      { value: "100%", label: "Dedication" },
    ],
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
