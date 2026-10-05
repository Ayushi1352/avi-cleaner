import PageHero from "@/components/PageHero";
import PolicyContent, { type PolicySection } from "@/components/PolicyContent";

export const metadata = {
  title: "Terms & Conditions | Avicleaner",
  description: "The terms that apply when you use the Avicleaner website or book our cleaning services.",
};

const sections: PolicySection[] = [
  {
    title: "Acceptance of Terms",
    text: "By accessing our website or booking a service with Avicleaner, you agree to be bound by these Terms & Conditions. If you do not agree with any part of them, please do not use our website or services.",
  },
  {
    title: "Our Services",
    text: "We provide residential and commercial cleaning services as described on our website. The exact scope of each job is confirmed at the time of booking, and any work outside that scope may be quoted and charged separately.",
  },
  {
    title: "Bookings & Scheduling",
    text: "Bookings are subject to availability and are confirmed only once you receive a confirmation from us. We aim to arrive within the agreed time window, but arrival times may vary slightly due to traffic, weather, or earlier appointments.",
  },
  {
    title: "Pricing & Payment",
    text: "Prices are based on the details you provide when booking. If the property size or condition differs significantly from what was described, the final price may be adjusted with your approval before work begins.",
    points: [
      "Payment is due on completion of the service unless agreed otherwise in writing.",
      "Quoted prices include standard cleaning supplies and equipment.",
      "Overdue payments may result in suspension of future bookings.",
    ],
  },
  {
    title: "Customer Responsibilities",
    text: "To help us deliver the best possible result, we ask that you:",
    points: [
      "Provide safe access to the property, along with working water and electricity.",
      "Secure or put away valuables, cash, and fragile or sentimental items.",
      "Keep pets safely secured for the duration of the service.",
      "Tell us in advance about any hazards, delicate surfaces, or special instructions.",
    ],
  },
  {
    title: "Cancellations & Rescheduling",
    text: "Cancellations, rescheduling, and refunds are handled according to our Refund & Cancellation Policy, which forms part of these Terms & Conditions.",
  },
  {
    title: "Satisfaction Guarantee",
    text: "If you are not satisfied with any part of our service, please let us know within 24 hours of completion. We will return and re-clean the affected areas at no additional cost.",
  },
  {
    title: "Damage & Liability",
    text: "Our team takes great care in every property. Any damage must be reported within 24 hours of the service so we can investigate. We are not liable for pre-existing damage, normal wear and tear, items that were not properly secured, or losses resulting from circumstances beyond our reasonable control.",
  },
  {
    title: "Website Use & Intellectual Property",
    text: "All content on this website, including text, images, logos, and design, belongs to Avicleaner and may not be copied, reproduced, or used without our written permission. You agree not to misuse the website or attempt to disrupt its operation.",
  },
  {
    title: "Changes to These Terms",
    text: "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated effective date, and continued use of our services means you accept the revised terms.",
  },
  {
    title: "Contact Us",
    text: "If you have any questions about these Terms & Conditions, please contact us at:",
    contact: true,
  },
];

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function TermsAndConditionsPage() {
  return (
    <main className="grow">
      <PageHero title="Terms & Conditions" />
      <PolicyContent
        eyebrow="Terms & Conditions"
        headingLead="Terms of"
        headingAccent="Our Service"
        intro="Please read these Terms & Conditions carefully before using our website or booking a cleaning service. They explain the rules that apply to our services, along with your rights and responsibilities as an Avicleaner customer."
        sections={sections}
      />
    </main>
  );
}
