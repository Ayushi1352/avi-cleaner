// Shapes of data/templates.json. Components receive these through props; none of them imports the JSON.

export interface ThemeFonts {
  primary: string;
  secondary: string;
  script: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

export interface GlobalUIData {
  breadcrumb: string;
  breadcrumbIcon: string;
  goToSlide: string;
  image: string;
  imageIcon: string;
  currency: string;
  noteLines: string[];
  formSuccess: FormSuccessUI;
}

export interface FormSuccessUI {
  successIcon: string;
  closeIcon: string;
  closeLabel: string;
  sendingIcon: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export interface CompanyData {
  name: string;
  logo: string;
  logoAlt: string;
  homeLabel: string;
  logoUrl: string;
  phone: string;
  email: string;
  address: string[];
  /** Google Maps embed; {query} is the company address */
  mapEmbedUrl: string;
  socialLinks: SocialLink[];
}

export interface LinkData {
  label: string;
  href: string;
}

export interface NavLink extends LinkData {
  id: string;
}

export interface IconLinkData extends LinkData {
  icon: string;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url: string;
}

export interface SeoData {
  title: string;
  description: string;
}

export interface BreadcrumbData {
  title: string;
  seo?: SeoData;
  bgImage: string;
  bgImageAlt: string;
  paths: BreadcrumbPath[];
}

export interface FooterBadge {
  id: string;
  icon: string;
  lines: string[];
}

export interface FooterData {
  description: string;
  icons: {
    phone: string;
    email: string;
    address: string;
    link: string;
    send: string;
  };
  usefulLinksTitle: string;
  usefulLinks: NavLink[][];
  servicesTitle: string;
  serviceLinks: NavLink[];
  newsletter: {
    title: string;
    text: string;
    placeholder: string;
    inputLabel: string;
    buttonLabel: string;
    success: string;
  };
  badges: FooterBadge[];
  copyright: string;
  legalLinks: NavLink[];
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  company: CompanyData;
  aboutBreadcrumb?: BreadcrumbData;
  whyChooseUsBreadcrumb?: BreadcrumbData;
  missionVisionBreadcrumb?: BreadcrumbData;
  teamBreadcrumb?: BreadcrumbData;
  teamDetailBreadcrumb?: BreadcrumbData;
  howItWorksBreadcrumb?: BreadcrumbData;
  testimonialsBreadcrumb?: BreadcrumbData;
  awardsBreadcrumb?: BreadcrumbData;
  servicesBreadcrumb?: BreadcrumbData;
  serviceDetailBreadcrumb?: BreadcrumbData;
  pricingBreadcrumb?: BreadcrumbData;
  galleryBreadcrumb?: BreadcrumbData;
  blogBreadcrumb?: BreadcrumbData;
  blogDetailBreadcrumb?: BreadcrumbData;
  faqBreadcrumb?: BreadcrumbData;
  contactBreadcrumb?: BreadcrumbData;
  bookingBreadcrumb?: BreadcrumbData;
  privacyBreadcrumb?: BreadcrumbData;
  refundBreadcrumb?: BreadcrumbData;
  termsBreadcrumb?: BreadcrumbData;
  notFound?: NotFoundData;
  Footer?: FooterData;
}

export interface HeaderData {
  nav: NavLink[];
  button: IconLinkData;
  toggleMenu: string;
  icons: {
    menu: string;
    close: string;
  };
}

export interface LightboxLabels {
  dialog: string;
  close: string;
  previous: string;
  next: string;
  closeIcon: string;
  previousIcon: string;
  nextIcon: string;
}

export interface TrophyLabels {
  trophy: string;
  medalTop: string;
  medalBottom: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface IconLines {
  id: string;
  icon: string;
  lines: string[];
}

export interface HeroData {
  eyebrow: string;
  title: { top: string; highlight: string; bottom: string };
  description: string[];
  image: ImageData;
  primaryButton: IconLinkData;
  secondaryButton: IconLinkData;
  features: IconLines[];
}

export interface TitledFeature {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface AboutUsData {
  label: string;
  title: { top: string; highlight: string };
  description: string[];
  features: TitledFeature[];
  button: IconLinkData;
  images: ImageData[];
  badge: { icon: string; lines: string[] };
  stat: { icon: string; value: string; label: string };
  trusted: { icon: string; lines: string[] };
}

export interface LabelIcon {
  label: string;
  icon: string;
}

export interface HomeServiceCard {
  id: string;
  icon: string;
  title: string;
  href: string;
  text: string;
  image: string;
}

export interface ServicesData {
  label: string;
  title: { lead: string; highlight: string };
  description: string;
  viewAll: IconLinkData;
  image: ImageData;
  provide: { eyebrow: string; title: string[]; text: string; button: IconLinkData };
  cardButton: LabelIcon;
  sparkleIcon: string;
  previous: LabelIcon;
  next: LabelIcon;
  services: HomeServiceCard[];
}

export interface StatItem {
  id: string;
  icon: string;
  value: string;
  label: string;
  text: string;
}

export interface WhyChooseUsData {
  label: string;
  title: { top: string; highlight: string; after: string };
  description: string;
  stats: StatItem[];
  primaryButton: IconLinkData;
  secondaryButton: IconLinkData;
  partnerLines: string[];
  image: ImageData;
  plantImage: string;
  video: IconLinkData;
  badge: { icon: string; lines: string[] };
  tagline: { icon: string; lines: string[] };
}

export interface ProjectItem {
  id: string;
  tag: string;
  icon: string;
  title: string;
  text: string;
  image: string;
}

export interface RecentProjectsData {
  label: string;
  title: { lead: string; highlight: string; after: string };
  description: string;
  cardLink: IconLinkData;
  button: IconLinkData;
  projects: ProjectItem[];
}

export interface CtaBannerData {
  eyebrow: string;
  title: { top: string; highlight: string; after: string };
  description: string[];
  button: IconLinkData;
  image: ImageData;
  roomImage: string;
  badge: { icon: string; lines: string[] };
  noteLines: string[];
  badges: IconLines[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialsData {
  label: string;
  title: { lead: string; highlight: string };
  description: string[];
  noteLines: string[];
  plantImage: string;
  stars: number;
  icons: { star: string; quote: string };
  previous: LabelIcon;
  next: LabelIcon;
  button: IconLinkData;
  testimonials: TestimonialItem[];
}

export interface PersonData {
  name: string;
  role: string;
  avatar: string;
}

export interface NewsPost {
  id: string;
  href: string;
  day: string;
  month: string;
  category: string;
  icon: string;
  title: string;
  excerpt: string;
  image: string;
  author: PersonData;
}

export interface BlogsData {
  label: string;
  title: { lead: string; highlight: string };
  description: string;
  readMore: LabelIcon;
  button: IconLinkData;
  posts: NewsPost[];
}

export interface MissionVisionData {
  label: string;
  title: string[];
  description: string[];
  button: IconLinkData;
  image: ImageData;
  card: { icon: string; title: string; text: string[] };
}

export interface CoreValueItem {
  id: string;
  icon: string;
  title: string;
  lines: string[];
}

export interface CoreValuesData {
  label: string;
  title: string;
  description: string;
  values: CoreValueItem[];
}

export interface PartnerCtaData {
  eyebrow: string;
  title: string;
  text: string;
  button: IconLinkData;
  image: string;
}

export interface PaginationData {
  label: string;
  page: string;
  previous: LabelIcon;
  next: LabelIcon;
}

export interface TeamMemberCard {
  id: string;
  name: string;
  role: string;
  photo: string;
  href: string;
}

export interface TeamGridData {
  label: string;
  title: string[];
  description: { lead: string; highlight: string; after: string };
  noteLines: string[];
  perPage: number;
  viewMember: string;
  memberOn: string;
  pagination: PaginationData;
  socials: SocialLink[];
  members: TeamMemberCard[];
}

export interface MemberStat {
  id: string;
  value: string;
  label: string;
}

export interface MemberExperience {
  id: string;
  title: string;
  company: string;
  years: string;
  text: string;
  icon: string;
}

export interface MemberDetail {
  name: string;
  first: string;
  role: string;
  photo: string;
  journeyPhoto: string;
  intro: string;
  email: string;
  phone: string;
  location: string;
  photoQuote: string;
  strengths: string[];
  about: string[];
  quote: string;
  responsibilities: string[];
  journeyQuote: string;
  stats: MemberStat[];
  experience: MemberExperience[];
}

export interface MemberTab {
  id: string;
  label: string;
  heading: string;
}

export interface TeamDetailData {
  member: MemberDetail;
  profile: {
    strengthIcons: string[];
    contactIcons: { email: string; phone: string; address: string };
    quoteIcon: string;
    memberOn: string;
    socials: SocialLink[];
  };
  tabs: { label: string; items: MemberTab[]; checkIcon: string; quoteIcon: string };
  journey: { label: string; title: string; description: string[]; quoteIcon: string };
}

export interface ProcessStep {
  id: string;
  no: string;
  title: string;
  text: string;
  image: string;
}

export interface ProcessStepsData {
  label: string;
  title: string;
  description: string[];
  steps: ProcessStep[];
  why: { label: string; title: string; description: string; image: ImageData; benefits: TitledFeature[] };
}

export interface TestimonialsGridData {
  label: string;
  title: string;
  description: string[];
  perPage: number;
  stars: number;
  starsLabel: string;
  icons: { quote: string; star: string };
  pagination: PaginationData;
  reviews: TestimonialItem[];
}

export interface AwardItem {
  id: string;
  variant: string;
  title: string;
  org: string;
  year: string;
}

export interface CertificateItem {
  id: string;
  /** "ISO", "OSHA" or "leaf" (shows the leaf icon) */
  mark: string;
  /** border colour: "blue", "green" or "grey" (set in components/sections/AwardsGrid.tsx) */
  tone: string;
  title: string;
  text: string;
}

export interface AwardsData {
  achievements: { label: string; title: string; description: string; items: CoreValueItem[] };
  awards: { label: string; title: string; description: string; trophy: TrophyLabels; items: AwardItem[] };
  certificates: { label: string; title: string; description: string; leafIcon: string; items: CertificateItem[] };
}

export interface ServiceGridItem {
  id: string;
  href: string;
  title: string;
  text: string;
  icon: string;
  image: string;
}

export interface ServicesGridData {
  label: string;
  title: string[];
  description: string[];
  perPage: number;
  readMore: LabelIcon;
  pagination: PaginationData;
  services: ServiceGridItem[];
}

export interface CallUsBannerData {
  label: string;
  title: { top: string; highlight: string; after: string };
  description: string;
  image: ImageData;
  features: IconLines[];
  call: LabelIcon;
  button: IconLinkData;
}

export interface CleaningProcessStep extends ProcessStep {
  icon: string;
}

export interface CleaningProcessData {
  label: string;
  title: string[];
  description: string[];
  steps: CleaningProcessStep[];
  stepArrowIcon: string;
  footer: { text: string; noteLines: string[] };
  button: IconLinkData;
}

export interface IconLabel {
  id: string;
  icon: string;
  label: string;
}

export interface ServiceDetailData {
  service: {
    title: string;
    whyName: string;
    intro: string;
    image: string;
    checklistIntro: string;
    checklist: string[];
    checklistImage: string;
  };
  overview: { label: string; trusted: { icon: string; lines: string[] }; features: IconLines[]; button: IconLinkData };
  checklist: { label: string; title: string; checkIcon: string; badge: { icon: string; lines: string[] } };
  why: { label: string; title: { lead: string; after: string }; description: string; image: ImageData; items: IconLabel[] };
  cta: PartnerCtaData;
}

export interface PricingPlan {
  id: string;
  name: string;
  icon: string;
  price: string;
  popular: boolean;
  text: string[];
  features: string[];
}

export interface CompareRow {
  id: string;
  feature: string;
  cells: boolean[];
}

export interface PricingData {
  label: string;
  title: string[];
  description: string[];
  popularLabel: string;
  period: string;
  checkIcon: string;
  button: IconLinkData;
  plans: PricingPlan[];
  perks: TitledFeature[];
  compare: {
    title: string;
    description: string;
    featuresLabel: string;
    plans: string[];
    included: string;
    notIncluded: string;
    rows: CompareRow[];
    image: ImageData;
    badge: { icon: string; lines: string[] };
  };
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  focus?: string;
}

export interface GalleryPhotosData {
  perPage: number;
  viewImage: string;
  pagination: PaginationData;
  lightbox: LightboxLabels;
  photos: GalleryPhoto[];
}

export interface GalleryVideoItem {
  id: string;
  title: string;
  text: string;
  thumb: string;
  src: string;
}

export interface GalleryVideoData {
  label: string;
  title: { lead: string; highlight: string; after: string };
  description: string[];
  perPage: number;
  playVideo: string;
  pagination: PaginationData;
  button: IconLinkData;
  videos: GalleryVideoItem[];
}

export interface BlogGridPost {
  id: string;
  title: string;
  href: string;
  category: string;
  date: string;
  image: string;
  author: string;
  excerpt: string;
}

export interface BlogGridData {
  perPage: number;
  byLabel: string;
  icons: { date: string; author: string };
  readMore: LabelIcon;
  pagination: PaginationData;
  posts: BlogGridPost[];
}

export interface BlogDetailData {
  post: {
    title: string;
    category: string;
    date: string;
    author: string;
    image: string;
    image2: string;
    intro: string;
    body: string;
    subheading: string;
    subtext: string;
    quote: string;
    closing: string;
  };
  byLabel: string;
  icons: { date: string; author: string; category: string; quote: string };
  tagLink: string;
  relatedTagsTitle: string;
  relatedTags: string[];
  shareTitle: string;
  socials: SocialLink[];
  categoriesTitle: string;
  categories: { id: string; name: string; count: string }[];
  recentTitle: string;
  recentPosts: { id: string; title: string; href: string; image: string; date: string }[];
  tagsTitle: string;
  tags: string[];
  followTitle: string;
}

export interface FaqItemData {
  id: string;
  icon: string;
  question: string;
  answer: string;
}

export interface FaqData {
  label: string;
  title: { highlight: string; after: string };
  description: string;
  image: ImageData;
  toggleIcon: string;
  faqs: FaqItemData[];
  help: { icon: string; eyebrow: string; title: string; text: string; button: IconLinkData };
}

/** A contact item either carries its own `lines` or points at a company field ("address", "phone" or "email") with `source`. */
export interface ContactLinesSource {
  source?: string;
  lines?: string[];
}

export interface ContactCardItem extends ContactLinesSource {
  id: string;
  icon: string;
  title: string;
  /** href "" = the link of the source (tel: / mailto:) */
  action: IconLinkData;
}

export interface ContactInfoData {
  label: string;
  title: string;
  description: string[];
  noteLines: string[];
  arrowIcon: string;
  cards: ContactCardItem[];
}

export interface ContactDetailItem extends ContactLinesSource {
  id: string;
  icon: string;
  title: string;
}

export interface ContactFormData {
  label: string;
  title: string;
  description: string;
  fields: Record<"name" | "phone" | "email" | "subject" | "message", LabelIcon>;
  submit: LabelIcon;
  sendingText: string;
  successTitle: string;
  successMessage: string;
  noteLines: string[];
  image: ImageData;
  details: ContactDetailItem[];
  promises: TitledFeature[];
}

export interface ContactMapData {
  label: string;
  title: string;
}

export interface FormFieldData {
  label: string;
  placeholder: string;
  icon: string;
}

export interface BookingData {
  title: { lead: string; highlight: string };
  badge: { icon: string; title: string; text: string };
  description: string;
  fields: Record<"name" | "phone" | "email" | "service" | "date" | "time" | "address" | "notes", FormFieldData>;
  selectIcon: string;
  serviceOptions: string[];
  timeOptions: string[];
  submit: { label: string; icon: string; arrowIcon: string };
  terms: string;
  sendingText: string;
  successTitle: string;
  successMessage: string;
  image: ImageData;
  noteLines: string[];
  reasonsTitle: string;
  reasons: TitledFeature[];
}

export interface PolicySection {
  id: string;
  title: string;
  text: string;
  points?: string[];
  contact?: boolean;
}

export interface PrivacyPolicyData {
  label: string;
  title: { lead: string; highlight: string };
  description: string[];
  sections: PolicySection[];
}

export interface PolicyData {
  label: string;
  title: { lead: string; highlight: string };
  intro: string;
  sections: PolicySection[];
}

export interface QuickLink {
  id: string;
  href: string;
  title: string;
  text: string;
  icon: string;
}

export interface NotFoundData {
  seo: SeoData;
  /** "404": the middle digit is drawn as the ring illustration */
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  button: IconLinkData;
  noteLines: string[];
  tagline: string[];
  image: string;
  plantImage: string;
  quickLinks: QuickLink[];
}

/** One section of templates.json: { variants: { Cleaning<Name>1: data } }. */
export type Section<V extends string, T> = { variants?: { [K in V]?: T } };

export interface CleaningSections {
  Header?: Section<"CleaningHeader1", HeaderData>;
  Hero?: Section<"CleaningHero1", HeroData>;
  AboutUs?: Section<"CleaningAboutUs1", AboutUsData>;
  Services?: Section<"CleaningServices1", ServicesData>;
  WhyChooseUs?: Section<"CleaningWhyChooseUs1", WhyChooseUsData>;
  RecentProjects?: Section<"CleaningRecentProjects1", RecentProjectsData>;
  CtaBanner?: Section<"CleaningCtaBanner1", CtaBannerData>;
  Testimonials?: Section<"CleaningTestimonials1", TestimonialsData>;
  Blogs?: Section<"CleaningBlogs1", BlogsData>;
  OurMission?: Section<"CleaningOurMission1", MissionVisionData>;
  OurVision?: Section<"CleaningOurVision1", MissionVisionData>;
  CoreValues?: Section<"CleaningCoreValues1", CoreValuesData>;
  PartnerCta?: Section<"CleaningPartnerCta1", PartnerCtaData>;
  TeamGrid?: Section<"CleaningTeamGrid1", TeamGridData>;
  TeamDetail?: Section<"CleaningTeamDetail1", TeamDetailData>;
  ProcessSteps?: Section<"CleaningProcessSteps1", ProcessStepsData>;
  TestimonialsGrid?: Section<"CleaningTestimonialsGrid1", TestimonialsGridData>;
  Awards?: Section<"CleaningAwards1", AwardsData>;
  ServicesGrid?: Section<"CleaningServicesGrid1", ServicesGridData>;
  CallUsBanner?: Section<"CleaningCallUsBanner1", CallUsBannerData>;
  CleaningProcess?: Section<"CleaningCleaningProcess1", CleaningProcessData>;
  ServiceDetail?: Section<"CleaningServiceDetail1", ServiceDetailData>;
  Pricing?: Section<"CleaningPricing1", PricingData>;
  GalleryPhotos?: Section<"CleaningGalleryPhotos1", GalleryPhotosData>;
  GalleryVideo?: Section<"CleaningGalleryVideo1", GalleryVideoData>;
  BlogGrid?: Section<"CleaningBlogGrid1", BlogGridData>;
  BlogDetail?: Section<"CleaningBlogDetail1", BlogDetailData>;
  Faq?: Section<"CleaningFaq1", FaqData>;
  ContactInfo?: Section<"CleaningContactInfo1", ContactInfoData>;
  ContactForm?: Section<"CleaningContactForm1", ContactFormData>;
  ContactMap?: Section<"CleaningContactMap1", ContactMapData>;
  Booking?: Section<"CleaningBooking1", BookingData>;
  PrivacyPolicy?: Section<"CleaningPrivacyPolicy1", PrivacyPolicyData>;
  RefundPolicy?: Section<"CleaningRefundPolicy1", PolicyData>;
  TermsPolicy?: Section<"CleaningTermsPolicy1", PolicyData>;
}

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponents {
  shared: Record<string, string>;
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface CleaningTemplateData {
  common: CommonData;
  categories: {
    Cleaning: {
      sections: CleaningSections;
      templateComponents: TemplateComponents;
    };
  };
}
