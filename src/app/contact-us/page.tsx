import PageHero from "@/components/PageHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.contactPage.text.Page;

export const metadata = site.contactPage.meta.Page;

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
