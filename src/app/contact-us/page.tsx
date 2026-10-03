import PageHero from "@/components/PageHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

export const metadata = {
  title: "Contact Us | Avicleaner",
  description:
    "Get in touch with Avicleaner for questions, bookings or custom cleaning solutions. Call, email or send us a message and our team will reply soon.",
};

export default function ContactUsPage() {
  return (
    <main className="grow">
      <PageHero title="Contact Us" />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
