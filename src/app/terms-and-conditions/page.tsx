import PageHero from "@/components/PageHero";
import PolicyContent, { type PolicySection } from "@/components/PolicyContent";
import policiesData from "@/data/policies.json";

// Text lives in src/data/policies.json under text.TermsAndConditionsPage.
const copy = policiesData.text.TermsAndConditionsPage;

export const metadata = policiesData.meta.TermsAndConditionsPage;

// Content lives in src/data/policies.json.
const sections: PolicySection[] = policiesData.terms;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function TermsAndConditionsPage() {
  return (
    <main className="grow">
      <PageHero title={copy.termsConditions} />
      <PolicyContent
        eyebrow={copy.termsConditions}
        headingLead={copy.termsOf}
        headingAccent={copy.ourService}
        intro={copy.pleaseReadTheseTermsConditions}
        sections={sections}
      />
    </main>
  );
}
