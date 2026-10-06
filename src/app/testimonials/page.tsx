import PageHero from "@/components/PageHero";
import TestimonialsGrid from "./TestimonialsGrid";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.testimonialsPage.text.Page;

export const metadata = site.testimonialsPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function TestimonialsPage() {
  return (
    <main className="grow">
      <PageHero title={copy.testimonials} />
      <TestimonialsGrid />
    </main>
  );
}
