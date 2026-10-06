import PageHero from "@/components/PageHero";
import BookingForm from "./BookingForm";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.bookingPage.text.Page;

export const metadata = site.bookingPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function BookNowPage() {
  return (
    <main className="grow">
      <PageHero title={copy.bookNow} />
      <BookingForm />
    </main>
  );
}
