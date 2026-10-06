import PageHero from "@/components/PageHero";
import PrivacyContent from "./PrivacyContent";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.policiesPage.text.PrivacyPolicyPage;

export const metadata = site.policiesPage.meta.PrivacyPolicyPage;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function PrivacyPolicyPage() {
  return (
    <main className="grow">
      <PageHero title={copy.privacyPolicy} />
      <PrivacyContent />
    </main>
  );
}
