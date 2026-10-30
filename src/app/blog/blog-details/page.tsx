import PageHero from "@/components/PageHero";
import BlogArticle from "@/components/BlogArticle";
import posts, { getPostDetail } from "@/components/blogPostsData";
import { site, fill } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiText = site.blogPage.text.DetailPage;
const uiLinks = site.blogPage.links.DetailPage;

// One common detail page for every blog post: it shows the first post in site.json.
const post = posts[0];

export const metadata = { title: fill(uiText.titleAvicleaner, { title: post.title }), description: post.excerpt };

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function BlogDetailPage() {
  return (
    <main className="grow">
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: uiText.blog, href: uiLinks.blog },
          { label: post.title },
        ]}
      />
      <BlogArticle post={getPostDetail(post)} />
    </main>
  );
}
