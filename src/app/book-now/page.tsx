import PageHero from "@/components/PageHero";
import BookingForm from "./BookingForm";
import bookingData from "@/data/booking.json";

// Text lives in src/data/booking.json under text.Page.
const copy = bookingData.text.Page;

export const metadata = bookingData.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function BookNowPage() {
  return (
    <main className="grow">
      <PageHero title={copy.bookNow} />
      <BookingForm />
    </main>
  );
}
