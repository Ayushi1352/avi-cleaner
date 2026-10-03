import PageHero from "@/components/PageHero";
import BookingForm from "./BookingForm";

export const metadata = {
  title: "Book Now | Avicleaner",
  description: "Book your Avicleaner cleaning service. Fill in your details and our team will confirm your booking.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function BookNowPage() {
  return (
    <main className="grow">
      <PageHero title="Book Now" />
      <BookingForm />
    </main>
  );
}
