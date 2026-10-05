import blogData from "@/data/blog.json";

// Blog posts for the Blog page and the Blog Detail pages.
// Each post gets a detail page at /blog/<slug>.
// Photos are stand-ins from the rest of the site: swap `image` for your own.
//
// `intro`, `body`, `subheading`, `subtext`, `quote`, `closing` and `image2`
// are optional. Anything left out is filled with the placeholder text below.

const DEFAULT_BODY =
  blogData.postDefaults.body;
const DEFAULT_EXCERPT =
  blogData.postDefaults.excerpt;

// Content lives in src/data/blog.json.
const posts = blogData.posts.map((item) => ({ ...item }));

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
  p.excerpt = p.excerpt || DEFAULT_EXCERPT;
});

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

/** Full detail for a post: its own text, with placeholders for the rest. */
export function getPostDetail(post) {
  return {
    ...post,
    image2: post.image2 || blogData.postDefaults.image2,
    intro: post.intro || `${post.excerpt} A clean space is healthier, calmer and more welcoming, and a few good habits make it easy to keep it that way.`,
    body: post.body || DEFAULT_BODY,
    subheading: post.subheading || blogData.postDefaults.subheading,
    subtext:
      post.subtext ||
      blogData.postDefaults.subtext,
    quote:
      post.quote ||
      blogData.postDefaults.quote,
    closing:
      post.closing ||
      blogData.postDefaults.closing,
  };
}

export const recentPosts = posts.filter((p) => p.recent).slice(0, 3);

// Content lives in src/data/blog.json.
export const popularCategories = blogData.popularCategories;

// Content lives in src/data/blog.json.
export const sidebarTags = blogData.sidebarTags;
// Content lives in src/data/blog.json.
export const relatedTags = blogData.relatedTags;

export default posts;
