import PageHero from "@/components/PageHero";
import BlogGrid from "./BlogGrid";
import blogData from "@/data/blog.json";

// Text lives in src/data/blog.json under text.Page.
const copy = blogData.text.Page;

export const metadata = blogData.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function BlogPage() {
  return (
    <main className="grow">
      <PageHero title={copy.blog} />
      <BlogGrid />
    </main>
  );
}
