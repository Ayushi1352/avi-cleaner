// Blog posts for the Blog page and the Blog Detail pages.
// Each post gets a detail page at /blog/<slug>.
// Photos are stand-ins from the rest of the site: swap `image` for your own.
//
// `intro`, `body`, `subheading`, `subtext`, `quote`, `closing` and `image2`
// are optional. Anything left out is filled with the placeholder text below.

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const EXCERPT =
  "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.";

const posts = [
  {
    title: "Top 5 Tips for a Spotless Home",
    slug: "top-5-tips-for-a-spotless-home",
    category: "Home Cleaning",
    date: "Mar 18, 2024",
    image: "/images/home/blog-spotless-home.webp",
    image2: "/images/service-kitchen.webp",
    author: "Priya Sharma",
    recent: true,
    excerpt: "Keep your home fresh and organized with these simple yet effective cleaning tips from our experts.",
    intro: "Keeping your living spaces pristine doesn't have to be an overwhelming weekend chore. By breaking down household maintenance into smart, actionable routines, you can enjoy a fresh, clean environment every single day.",
    subheading: "Smart Cleaning Strategies",
    subtext: "Focus on high-touch zones, establish a 15-minute daily reset, and use quality microfibre cloths with the proper eco-friendly cleaning agents.",
  },
  {
    title: "Why Professional Cleaning Saves You Time",
    slug: "why-professional-cleaning-saves-you-time",
    category: "Cleaning Tips",
    date: "Apr 26, 2024",
    image: "/images/home/blog-professional-cleaning.webp",
    image2: "/images/about-sofa-vacuum.webp",
    author: "Rahul Mehta",
    recent: true,
    excerpt: "Discover how professional cleaning services can help you save time, reduce stress, and enjoy a healthier space.",
    intro: "In today's fast-paced world, hours spent scrubbing tiles and vacuuming carpets can easily consume your valuable leisure and family time. Professional cleaning gives you back precious weekend hours while delivering deeper sanitation.",
    subheading: "Efficiency Meets Deep Hygiene",
    subtext: "Trained professionals use industrial-grade equipment, specialized sanitization methods, and systematic checklists to cover areas that are often overlooked.",
  },
  {
    title: "Eco-Friendly Cleaning Effective Solutions",
    slug: "eco-friendly-cleaning-effective-solutions",
    category: "Eco Friendly",
    date: "Jun 07, 2024",
    image: "/images/home/blog-eco-friendly.webp",
    image2: "/images/mission/mission-cleaning.webp",
    author: "Sneha Kapoor",
    recent: true,
    excerpt: "Learn simple and sustainable cleaning solutions that are safe for your family and the environment.",
    intro: "Switching to green cleaning products protects indoor air quality, protects waterways, and keeps pets and children safe from harmful residues.",
    subheading: "Non-Toxic & Highly Effective",
    subtext: "Natural citrus solvents, baking soda, and plant-derived surfactants cut through grease and grime just as powerfully as traditional chemical cleaners.",
  },
  {
    title: "How a Clean Office Boosts Productivity",
    slug: "how-a-clean-office-boosts-productivity",
    category: "Office Cleaning",
    date: "Jul 15, 2024",
    image: "/images/blog-4.webp",
    image2: "/images/service-office.webp",
    author: "Rahul Mehta",
    recent: true,
    excerpt: "See how a tidy, sanitized workspace helps teams stay focused, healthy and motivated every day.",
    intro: "The physical condition of an office speaks volumes about its culture and directly influences employee focus and morale. A tidy, well-sanitized desk and clutter-free common area set the tone for peak cognitive performance.",
    subheading: "Workplace Wellness",
    subtext: "Sanitized desks, fresh air circulation, and sparkling communal areas instill pride in the workplace and foster better collaborative focus.",
  },
  { title: "10 Simple Cleaning Tips for a Healthier Home", category: "Cleaning Tips", date: "Dec 20, 2022", image: "/images/service-kitchen.webp" },
  { title: "Must-Have Cleaning Supplies for Every Home", category: "Home Cleaning", date: "Dec 20, 2022", image: "/images/about-supplies.webp" },
  { title: "How a Clean Workspace Boosts Productivity", category: "Office Cleaning", date: "Dec 20, 2022", image: "/images/service-office.webp" },
  { title: "Eco-Friendly Cleaning: A Better Tomorrow", category: "Eco Friendly", date: "Dec 20, 2022", image: "/images/mission/mission-cleaning.webp" },
  { title: "How Often Should You Clean Different Areas of Your Home?", category: "Cleaning Tips", date: "Dec 20, 2022", image: "/images/about-sofa-vacuum.webp" },
  { title: "Our Commitment to Cleaner, Healthier Communities", category: "Company News", date: "Dec 20, 2022", image: "/images/mission/partner-cta.webp" },
  {
    title: "Why You Need Virtual Assistant for Your Company",
    category: "Virtual Assistant",
    date: "Dec 20, 2022",
    image: "/images/service-team.webp",
    image2: "/images/cta-cleaner.webp",
    recent: true,
    intro:
      "A virtual assistant can help streamline your operations, save time, and allow you to focus on what matters most. Whether you’re a small business or a growing enterprise, having the right support makes a big difference.",
    subheading: "Benefits of a Virtual Assistant",
    subtext:
      "A virtual assistant can handle routine tasks, manage schedules, respond to emails, and keep your business organized. This results in improved productivity and a better work-life balance.",
  },
  { title: "How to Keep Your Home Clean and Healthy", category: "Home Cleaning", date: "Dec 18, 2022", image: "/images/project-living.webp", recent: true },
  { title: "Best Office Cleaning Tips for Productivity", category: "Office Cleaning", date: "Dec 15, 2022", image: "/images/project-office.webp", recent: true },
  { title: "Eco-Friendly Cleaning for a Better Tomorrow", category: "Eco Friendly", date: "Dec 12, 2022", image: "/images/why-choose-us.webp", recent: true },
  { title: "Window Cleaning Made Simple", category: "Cleaning Tips", date: "Dec 10, 2022", image: "/images/mission/vision-window.webp" },
  { title: "A Spotless Kitchen in Five Easy Steps", category: "Deep Cleaning", date: "Dec 08, 2022", image: "/images/project-kitchen.webp" },
];

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export interface Post {
  title: string;
  slug?: string;
  category?: string;
  date?: string;
  image?: string;
  image2?: string;
  author?: string | { name: string; role?: string; avatar?: string } | null;
  authorRole?: string;
  authorAvatar?: string;
  recent?: boolean;
  excerpt?: string;
  intro?: string;
  subheading?: string;
  subtext?: string;
  quote?: string;
  closing?: string;
}

(posts as Post[]).forEach((p) => {
  p.slug = p.slug || slugify(p.title);
  if (p.author && typeof p.author === "object") {
    p.authorRole = (p.author as { name: string; role?: string; avatar?: string }).role;
    p.authorAvatar = (p.author as { name: string; role?: string; avatar?: string }).avatar;
    p.author = (p.author as { name: string }).name;
  }
  p.author = (p.author as string) || "Admin";
  p.excerpt = p.excerpt || EXCERPT;
});

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

/** Full detail for a post: its own text, with placeholders for the rest. */
export function getPostDetail(post) {
  return {
    ...post,
    image2: post.image2 || "/images/cta-cleaner.webp",
    intro: post.intro || `${post.excerpt} A clean space is healthier, calmer and more welcoming, and a few good habits make it easy to keep it that way.`,
    body: post.body || LOREM,
    subheading: post.subheading || "Why It Matters",
    subtext:
      post.subtext ||
      "Regular, well-planned cleaning removes dust, germs and allergens before they build up. This results in a fresher space, better health and more time for the things you enjoy.",
    quote:
      post.quote ||
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    closing:
      post.closing ||
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  };
}

export const recentPosts = posts.filter((p) => p.recent).slice(0, 3);

export const popularCategories = [
  { name: "Home Cleaning", count: "12" },
  { name: "Office Cleaning", count: "08" },
  { name: "Deep Cleaning", count: "15" },
  { name: "Eco Friendly", count: "10" },
  { name: "Cleaning Tips", count: "18" },
  { name: "Company News", count: "06" },
];

export const sidebarTags = ["Assistant", "Advice", "Virtual", "Design", "Blog", "Support", "Finance", "Projects"];
export const relatedTags = ["Assistant", "Advice", "Virtual", "Business", "Support"];

export default posts;
