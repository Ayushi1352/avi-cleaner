import PageHero from "@/components/PageHero";
import BlogGrid from "./BlogGrid";

export const metadata = {
  title: "Blog | Avicleaner",
  description: "Cleaning tips, expert advice and the latest news from Avicleaner.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function BlogPage() {
  return (
    <main className="grow">
      <PageHero title="Blog" />
      <BlogGrid />
    </main>
  );
}
