import PageHero from "@/components/PageHero";
import PrivacyContent from "./PrivacyContent";
import policiesData from "@/data/policies.json";

// Text lives in src/data/policies.json under text.PrivacyPolicyPage.
const copy = policiesData.text.PrivacyPolicyPage;

export const metadata = policiesData.meta.PrivacyPolicyPage;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function PrivacyPolicyPage() {
  return (
    <main className="grow">
      <PageHero title={copy.privacyPolicy} />
      <PrivacyContent />
    </main>
  );
}
