import PageHero from "@/components/PageHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import contactData from "@/data/contact.json";

// Text lives in src/data/contact.json under text.Page.
const copy = contactData.text.Page;

export const metadata = contactData.meta.Page;

export default function ContactUsPage() {
  return (
    <main className="grow">
      <PageHero title={copy.contactUs} />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
