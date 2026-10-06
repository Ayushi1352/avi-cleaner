import PageHero from "@/components/PageHero";
import PolicyContent, { type PolicySection } from "@/components/PolicyContent";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.policiesPage.text.RefundCancellationPolicyPage;

export const metadata = site.policiesPage.meta.RefundCancellationPolicyPage;

// Content lives in src/data/site.json.
const sections: PolicySection[] = site.policiesPage.refund;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function RefundCancellationPolicyPage() {
  return (
    <main className="grow">
      <PageHero title={copy.refundCancellationPolicy} />
      <PolicyContent
        eyebrow={copy.refundCancellation}
        headingLead={copy.fairSimple}
        headingAccent={copy.refundPolicy}
        intro={copy.weUnderstandThatPlansCan}
        sections={sections}
      />
    </main>
  );
}
