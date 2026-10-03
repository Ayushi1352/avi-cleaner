import PageHero from "@/components/PageHero";
import PrivacyContent from "./PrivacyContent";

export const metadata = {
  title: "Privacy Policy | Avicleaner",
  description: "How Avicleaner collects, uses, shares and protects your personal information.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function PrivacyPolicyPage() {
  return (
    <main className="grow">
      <PageHero title="Privacy Policy" />
      <PrivacyContent />
    </main>
  );
}
