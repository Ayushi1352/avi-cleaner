import PageHero from "@/components/PageHero";
import PolicyContent, { type PolicySection } from "@/components/PolicyContent";

export const metadata = {
  title: "Refund & Cancellation Policy | Avicleaner",
  description: "How cancellations, rescheduling and refunds work for Avicleaner cleaning services.",
};

const sections: PolicySection[] = [
  {
    title: "Cancellation by You",
    text: "You may cancel a booking at any time by contacting us by phone or email. The notice you give determines whether a fee applies:",
    points: [
      "More than 24 hours before the scheduled time: free cancellation.",
      "Less than 24 hours before the scheduled time: a late cancellation fee of up to 50% of the service price may apply.",
      "After our team has arrived, or if we cannot access the property: the full service price may be charged.",
    ],
  },
  {
    title: "Rescheduling",
    text: "You can reschedule your booking free of charge with at least 24 hours' notice, subject to availability. Rescheduling requests made with less than 24 hours' notice may be treated as a late cancellation.",
  },
  {
    title: "Cancellation by Avicleaner",
    text: "On rare occasions we may need to cancel or reschedule a booking due to severe weather, staff illness, safety concerns, or other circumstances beyond our control. If this happens, we will notify you as early as possible and offer a new time or a full refund of any amount already paid.",
  },
  {
    title: "Satisfaction Guarantee & Re-Clean",
    text: "If you are not happy with the quality of our service, please contact us within 24 hours of completion with details of the issue. We will return and re-clean the affected areas at no additional cost before any refund is considered.",
  },
  {
    title: "Refund Eligibility",
    text: "A full or partial refund may be issued in the following situations:",
    points: [
      "You cancelled a prepaid booking within the free cancellation period.",
      "We cancelled the booking and could not offer a suitable alternative time.",
      "The issue could not be resolved after a re-clean.",
      "You were charged incorrectly or more than once.",
    ],
  },
  {
    title: "Non-Refundable Situations",
    text: "Refunds are generally not provided in the following situations:",
    points: [
      "The complaint was reported more than 24 hours after the service was completed.",
      "Our team was not given access to the property at the scheduled time.",
      "The service was completed as described at the time of booking.",
      "The issue was caused by pre-existing conditions that cleaning cannot fix.",
    ],
  },
  {
    title: "Refund Process & Timeline",
    text: "Approved refunds are issued to the original payment method. Please allow 5 to 7 business days for the amount to appear in your account, depending on your bank or card provider.",
  },
  {
    title: "Changes to This Policy",
    text: "We may update this Refund & Cancellation Policy from time to time. Any changes will be posted on this page with an updated effective date.",
  },
  {
    title: "Contact Us",
    text: "To cancel or reschedule a booking, or to request a refund, please contact us at:",
    contact: true,
  },
];

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function RefundCancellationPolicyPage() {
  return (
    <main className="grow">
      <PageHero title="Refund & Cancellation Policy" />
      <PolicyContent
        eyebrow="Refund & Cancellation"
        headingLead="Fair & Simple"
        headingAccent="Refund Policy"
        intro="We understand that plans can change. This Refund & Cancellation Policy explains how you can cancel or reschedule a booking, when fees may apply, and how refunds are handled for our cleaning services."
        sections={sections}
      />
    </main>
  );
}
