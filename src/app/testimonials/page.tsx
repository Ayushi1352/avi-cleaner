import PageHero from "@/components/PageHero";
import TestimonialsGrid from "./TestimonialsGrid";

export const metadata = {
  title: "Testimonial | Avicleaner",
  description:
    "Real stories from happy Avicleaner clients who trust us for cleaner, healthier and happier spaces.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function TestimonialsPage() {
  return (
    <main className="grow">
      <PageHero title="Testimonials" />
      <TestimonialsGrid />
    </main>
  );
}
