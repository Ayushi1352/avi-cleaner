import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type CleaningSchema = typeof siteData.Cleaning;
export type CleaningSections = CleaningSchema["sections"];
export type CleaningTemplateComponents = CleaningSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type CleaningHeaderData = CleaningSections["Header"]["variants"]["CleaningHeader1"];
export type CleaningFooterData = CleaningSections["Footer"]["variants"]["CleaningFooter1"];
export type CleaningPageBannerData = CleaningSections["PageBanner"]["variants"]["CleaningPageBanner1"];
export type CleaningBannerData = CleaningSections["Banner"]["variants"]["CleaningBanner1"];
export type CleaningAboutData = CleaningSections["About"]["variants"]["CleaningAbout1"];
export type CleaningServicesData = CleaningSections["Services"]["variants"]["CleaningServices1"];
export type CleaningWhyChooseUsData = CleaningSections["WhyChooseUs"]["variants"]["CleaningWhyChooseUs1"];
export type CleaningRecentProjectsData = CleaningSections["RecentProjects"]["variants"]["CleaningRecentProjects1"];
export type CleaningCtaBannerData = CleaningSections["CtaBanner"]["variants"]["CleaningCtaBanner1"];
export type CleaningTestimonialData = CleaningSections["Testimonial"]["variants"]["CleaningTestimonial1"];
export type CleaningBlogData = CleaningSections["Blog"]["variants"]["CleaningBlog1"];
export type CleaningPartnerCtaData = CleaningSections["PartnerCta"]["variants"]["CleaningPartnerCta1"];
export type CleaningAboutPageData = CleaningSections["AboutPage"]["variants"]["CleaningAboutPage1"];
export type CleaningWhyChooseUsPageData = CleaningSections["WhyChooseUsPage"]["variants"]["CleaningWhyChooseUsPage1"];
export type CleaningMissionVisionData = CleaningSections["MissionVision"]["variants"]["CleaningMissionVision1"];
export type CleaningTeamData = CleaningSections["Team"]["variants"]["CleaningTeam1"];
export type CleaningHowItWorksData = CleaningSections["HowItWorks"]["variants"]["CleaningHowItWorks1"];
export type CleaningTestimonialsPageData = CleaningSections["TestimonialsPage"]["variants"]["CleaningTestimonialsPage1"];
export type CleaningAwardsData = CleaningSections["Awards"]["variants"]["CleaningAwards1"];
export type CleaningServicesPageData = CleaningSections["ServicesPage"]["variants"]["CleaningServicesPage1"];
export type CleaningPricingData = CleaningSections["Pricing"]["variants"]["CleaningPricing1"];
export type CleaningGalleryData = CleaningSections["Gallery"]["variants"]["CleaningGallery1"];
export type CleaningBlogPageData = CleaningSections["BlogPage"]["variants"]["CleaningBlogPage1"];
export type CleaningFAQData = CleaningSections["FAQ"]["variants"]["CleaningFAQ1"];
export type CleaningContactData = CleaningSections["Contact"]["variants"]["CleaningContact1"];
export type CleaningBookingData = CleaningSections["Booking"]["variants"]["CleaningBooking1"];
export type CleaningPoliciesData = CleaningSections["Policies"]["variants"]["CleaningPolicies1"];
export type CleaningNotFoundData = CleaningSections["NotFound"]["variants"]["CleaningNotFound1"];
export type CleaningSiteMetaData = CleaningSections["SiteMeta"]["variants"]["CleaningSiteMeta1"];

// ── Item-level types inferred from site.json ──
export type CleaningNavLink = CleaningHeaderData["navLinks"][number];
export type CleaningServiceItem = CleaningServicesPageData["services"][number];
export type CleaningBlogPost = CleaningBlogPageData["posts"][number];
export type CleaningTeamMember = CleaningTeamData["members"][number];
export type CleaningPricingPlan = CleaningPricingData["plans"][number];
export type CleaningFaqItem = CleaningFAQData["faqs"][number];
export type CleaningReview = CleaningTestimonialsPageData["reviews"][number];

// ── Site Map: short names for each section's data ──
const sec = siteData.Cleaning.sections;

const site = {
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
  Cleaning: siteData.Cleaning,
};

export type SiteData = typeof site;
export { site };
export default siteData;

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
