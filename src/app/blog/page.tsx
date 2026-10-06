import PageHero from "@/components/PageHero";
import BlogGrid from "./BlogGrid";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.blogPage.text.Page;

export const metadata = site.blogPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function BlogPage() {
  return (
    <main className="grow">
      <PageHero title={copy.blog} />
      <BlogGrid />
    </main>
  );
}
