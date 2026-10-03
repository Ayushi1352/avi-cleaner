import PageHero from "@/components/PageHero";
import ProcessSteps from "./ProcessSteps";

export const metadata = {
  title: "How it Work | Avicleaner",
  description:
    "See how Avicleaner's cleaning process works: book a service, our team arrives, we clean every corner, and you enjoy a spotless space.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function HowItWorksPage() {
  return (
    <main className="grow">
      <PageHero title="How It Works" />
      <ProcessSteps />
    </main>
  );
}
