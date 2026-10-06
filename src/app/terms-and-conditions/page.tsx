import PageHero from "@/components/PageHero";
import PolicyContent, { type PolicySection } from "@/components/PolicyContent";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.policiesPage.text.TermsAndConditionsPage;

export const metadata = site.policiesPage.meta.TermsAndConditionsPage;

// Content lives in src/data/site.json.
const sections: PolicySection[] = site.policiesPage.terms;

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
