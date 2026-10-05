import PageHero from "@/components/PageHero";
import PolicyContent, { type PolicySection } from "@/components/PolicyContent";
import policiesData from "@/data/policies.json";

// Text lives in src/data/policies.json under text.RefundCancellationPolicyPage.
const copy = policiesData.text.RefundCancellationPolicyPage;

export const metadata = policiesData.meta.RefundCancellationPolicyPage;

// Content lives in src/data/policies.json.
const sections: PolicySection[] = policiesData.refund;

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
