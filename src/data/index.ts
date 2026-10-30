import siteData from "./site.json";

// ── Site Map: short names for each section's data ──
const sec = siteData.Cleaning.sections;

const site = {
  // Colours and fonts of the whole site (used by app/layout.tsx and scripts/fonts.mjs).
  theme: siteData.Cleaning.theme,
  navbar: sec.Header.variants.CleaningHeader1,
  footer: sec.Footer.variants.CleaningFooter1,
  pageBanner: sec.PageBanner.variants.CleaningPageBanner1,
  hero: sec.Banner.variants.CleaningBanner1,
  aboutUsSection: sec.About.variants.CleaningAbout1,
  ourServicesSection: sec.Services.variants.CleaningServices1,
  whyChooseUsSection: sec.WhyChooseUs.variants.CleaningWhyChooseUs1,
  recentProjectsSection: sec.RecentProjects.variants.CleaningRecentProjects1,
  ctaBannerSection: sec.CtaBanner.variants.CleaningCtaBanner1,
  testimonialSection: sec.Testimonial.variants.CleaningTestimonial1,
  blogSection: sec.Blog.variants.CleaningBlog1,
  partnerCtaSection: sec.PartnerCta.variants.CleaningPartnerCta1,
  aboutPage: sec.AboutPage.variants.CleaningAboutPage1,
  whyChooseUsPage: sec.WhyChooseUsPage.variants.CleaningWhyChooseUsPage1,
  missionVisionPage: sec.MissionVision.variants.CleaningMissionVision1,
  teamPage: sec.Team.variants.CleaningTeam1,
  howItWorksPage: sec.HowItWorks.variants.CleaningHowItWorks1,
  testimonialsPage: sec.TestimonialsPage.variants.CleaningTestimonialsPage1,
  awardsPage: sec.Awards.variants.CleaningAwards1,
  servicesPage: sec.ServicesPage.variants.CleaningServicesPage1,
  pricingPage: sec.Pricing.variants.CleaningPricing1,
  galleryPage: sec.Gallery.variants.CleaningGallery1,
  blogPage: sec.BlogPage.variants.CleaningBlogPage1,
  faqPage: sec.FAQ.variants.CleaningFAQ1,
  contactPage: sec.Contact.variants.CleaningContact1,
  bookingPage: sec.Booking.variants.CleaningBooking1,
  policiesPage: sec.Policies.variants.CleaningPolicies1,
  notFoundPage: sec.NotFound.variants.CleaningNotFound1,
  siteMeta: sec.SiteMeta.variants.CleaningSiteMeta1,
};

export { site };

// ── Helpers for content that lives in site.json ──

/** Fill the {placeholders} of a text from site.json, e.g. fill("Page {n}", { n: 2 }). */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
}

/** Turn the icon names of a site.json section into the matching icon components. */
export function pickIcons<K extends string>(names: Record<K, string>, map: Record<string, any>): Record<K, any> {
  const out = {} as Record<K, any>;
  (Object.keys(names) as K[]).forEach((key) => {
    out[key] = map[names[key]];
  });
  return out;
}

// ── Contact details: written once in site.json (SiteMeta > contact) ──
const contactData = site.siteMeta.contact;

/** Phone, email and address for the whole site. Links and the one-line address are built from them. */
export const contact = {
  phone: contactData.phone,
  phoneHref: `tel:${contactData.phone.replace(/[^+\d]/g, "")}`,
  email: contactData.email,
  emailHref: `mailto:${contactData.email}`,
  addressLines: contactData.addressLines,
  address: contactData.addressLines.join(" "),
};

const contactValues: Record<string, string> = {
  phone: contact.phone,
  phoneHref: contact.phoneHref,
  email: contact.email,
  emailHref: contact.emailHref,
  address: contact.address,
  addressQuery: contact.address.replace(/ /g, "+"),
};
contact.addressLines.forEach((line, i) => {
  contactValues[`addressLine${i + 1}`] = line;
});

/** Fill {phone}, {email}, {address}, {addressLine1}... in a text from site.json. */
export function fillContact(text: string): string {
  return fill(text, contactValues);
}
