import PageHero from "@/components/PageHero";
import TestimonialsGrid from "./TestimonialsGrid";
import testimonialsData from "@/data/testimonials.json";

// Text lives in src/data/testimonials.json under text.Page.
const copy = testimonialsData.text.Page;

export const metadata = testimonialsData.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function TestimonialsPage() {
  return (
    <main className="grow">
      <PageHero title={copy.testimonials} />
      <TestimonialsGrid />
    </main>
  );
}
