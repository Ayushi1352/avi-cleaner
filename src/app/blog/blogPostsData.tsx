import { site, fill } from "@/data";

// Blog posts for the Blog page and the Blog Detail pages.
// Each post gets a detail page at /blog/<slug>.
// Photos are stand-ins from the rest of the site: swap `image` for your own.
//
// `intro`, `body`, `subheading`, `subtext`, `quote`, `closing` and `image2`
// are optional. Anything left out is filled with the placeholder text below.

const DEFAULT_BODY =
  site.blogPage.postDefaults.body;
const DEFAULT_EXCERPT =
  site.blogPage.postDefaults.excerpt;

// Content lives in src/data/site.json.
const posts = site.blogPage.posts.map((item) => ({ ...item }));

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
  p.author = (p.author as string) || site.blogPage.postDefaults.author;
  p.excerpt = p.excerpt || DEFAULT_EXCERPT;
});

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

/** Full detail for a post: its own text, with placeholders for the rest. */
export function getPostDetail(post) {
  return {
    ...post,
    image2: post.image2 || site.blogPage.postDefaults.image2,
    intro: post.intro || fill(site.blogPage.postDefaults.intro, { excerpt: post.excerpt }),
    body: post.body || DEFAULT_BODY,
    subheading: post.subheading || site.blogPage.postDefaults.subheading,
    subtext:
      post.subtext ||
      site.blogPage.postDefaults.subtext,
    quote:
      post.quote ||
      site.blogPage.postDefaults.quote,
    closing:
      post.closing ||
      site.blogPage.postDefaults.closing,
  };
}

export const recentPosts = posts.filter((p) => p.recent).slice(0, site.blogPage.settings.BlogArticle.recentPosts);

// Content lives in src/data/site.json.
export const popularCategories = site.blogPage.popularCategories;

// Content lives in src/data/site.json.
export const sidebarTags = site.blogPage.sidebarTags;
// Content lives in src/data/site.json.
export const relatedTags = site.blogPage.relatedTags;

export default posts;
