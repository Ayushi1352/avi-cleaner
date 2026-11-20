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

/** Labels the breadcrumb banner shares on every page. */
export interface GlobalUIData {
  breadcrumb: string;
  breadcrumbIcon: string;
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

export interface LogoData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  homeLabel: string;
}

/** The business phone, email and address, kept with each section that shows them. */
export interface ContactDetails {
  phone: string;
  email: string;
  address: string[];
}

export interface LinkData {
  label: string;
  url: string;
}

/** A button is `buttonText` + `buttonUrl` + `buttonIcon` (primary / secondary buttons use that prefix instead). */
export interface ButtonData {
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
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

export interface FooterData extends LogoData, ContactDetails {
  description: string;
  socialLinks: SocialLink[];
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

export interface FooterProps {
  data?: FooterData;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui: GlobalUIData;
}

export interface HeaderData extends LogoData, ButtonData {
  nav: NavLink[];
  toggleMenu: string;
  icons: {
    menu: string;
    close: string;
  };
}

export interface HeaderProps {
  data?: HeaderData;
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
  primaryButtonText: string;
  primaryButtonUrl: string;
  primaryButtonIcon: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  secondaryButtonIcon: string;
  features: IconLines[];
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface TitledFeature {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface AboutUsData extends ButtonData {
  label: string;
  title: { top: string; highlight: string };
  description: string[];
  features: TitledFeature[];
  images: ImageData[];
  badge: { icon: string; lines: string[] };
  stat: { icon: string; value: string; label: string };
  trusted: { icon: string; lines: string[] };
}

export interface AboutUsProps {
  data?: AboutUsData;
  showButton?: boolean;
}

export interface LabelIcon {
  label: string;
  icon: string;
}

export interface HomeServiceCard {
  id: string;
  icon: string;
  title: string;
  url: string;
  text: string;
  image: string;
}

export interface ServicesData {
  label: string;
  title: { lead: string; highlight: string };
  description: string;
  viewAll: IconLinkData;
  image: ImageData;
  provide: { eyebrow: string; title: string[]; text: string } & ButtonData;
  cardButton: LabelIcon;
  sparkleIcon: string;
  previous: LabelIcon;
  next: LabelIcon;
  services: HomeServiceCard[];
}

export interface ServicesProps {
  data?: ServicesData;
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
  primaryButtonText: string;
  primaryButtonUrl: string;
  primaryButtonIcon: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  secondaryButtonIcon: string;
  partnerLines: string[];
  image: ImageData;
  plantImage: string;
  video: IconLinkData;
  badge: { icon: string; lines: string[] };
  tagline: { icon: string; lines: string[] };
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface ProjectItem {
  id: string;
  tag: string;
  icon: string;
  title: string;
  text: string;
  image: string;
}

export interface RecentProjectsData extends ButtonData {
  label: string;
  title: { lead: string; highlight: string; after: string };
  description: string;
  cardLink: IconLinkData;
  /** "Go to slide {n}" label of the slider dots */
  goToSlide: string;
  projects: ProjectItem[];
}

export interface RecentProjectsProps {
  data?: RecentProjectsData;
}

export interface CtaBannerData extends ButtonData {
  eyebrow: string;
  title: { top: string; highlight: string; after: string };
  description: string[];
  image: ImageData;
  roomImage: string;
  badge: { icon: string; lines: string[] };
  noteLines: string[];
  badges: IconLines[];
}

export interface CtaBannerProps {
  data?: CtaBannerData;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialsData extends ButtonData {
  label: string;
  title: { lead: string; highlight: string };
  description: string[];
  noteLines: string[];
  plantImage: string;
  stars: number;
  icons: { star: string; quote: string };
  previous: LabelIcon;
  next: LabelIcon;
  goToSlide: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface PersonData {
  name: string;
  role: string;
  avatar: string;
}

export interface NewsPost {
  id: string;
  url: string;
  day: string;
  month: string;
  category: string;
  icon: string;
  title: string;
  excerpt: string;
  image: string;
  author: PersonData;
}

export interface BlogsData extends ButtonData {
  label: string;
  title: { lead: string; highlight: string };
  description: string;
  readMore: LabelIcon;
  goToSlide: string;
  posts: NewsPost[];
}

export interface BlogsProps {
  data?: BlogsData;
}

export interface MissionVisionPartData extends ButtonData {
  label: string;
  title: string[];
  description: string[];
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

/** Mission & Vision page: mission, vision and the core values under them. */
export interface MissionVisionData {
  mission: MissionVisionPartData;
  vision: MissionVisionPartData;
  coreValues: CoreValuesData;
}

export interface MissionVisionProps {
  data?: MissionVisionData;
}

export interface PartnerCtaData extends ButtonData {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}

export interface PartnerCtaProps {
  data?: PartnerCtaData;
  /** the leaf drawing on the right (Mission & Vision) */
  showLeaf?: boolean;
  /** full container width (Service Detail) */
  wide?: boolean;
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
  url: string;
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

export interface TeamGridProps {
  data?: TeamGridData;
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

export interface TeamDetailProps {
  data?: TeamDetailData;
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

export interface ProcessStepsProps {
  data?: ProcessStepsData;
}

export interface TestimonialsGridData {
  label: string;
  title: string;
  description: string[];
  noteLines: string[];
  perPage: number;
  stars: number;
  starsLabel: string;
  icons: { quote: string; star: string };
  pagination: PaginationData;
  reviews: TestimonialItem[];
}

export interface TestimonialsGridProps {
  data?: TestimonialsGridData;
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
  /** border colour: "blue", "green" or "grey" (set in components/sections/Awards.tsx) */
  tone: string;
  title: string;
  text: string;
}

export interface AwardsData {
  achievements: { label: string; title: string; description: string; items: CoreValueItem[] };
  awards: { label: string; title: string; description: string; trophy: TrophyLabels; items: AwardItem[] };
  certificates: { label: string; title: string; description: string; leafIcon: string; items: CertificateItem[] };
}

export interface AwardsProps {
  data?: AwardsData;
}

export interface ServiceGridItem {
  id: string;
  url: string;
  title: string;
  text: string;
  icon: string;
  image: string;
}

export interface ServicesGridData {
  label: string;
  title: string[];
  description: string[];
  noteLines: string[];
  perPage: number;
  readMore: LabelIcon;
  pagination: PaginationData;
  services: ServiceGridItem[];
}

export interface ServicesGridProps {
  data?: ServicesGridData;
}

export interface CallUsBannerData extends ButtonData {
  label: string;
  title: { top: string; highlight: string; after: string };
  description: string;
  image: ImageData;
  features: IconLines[];
  call: LabelIcon;
  phone: string;
  noteLines: string[];
}

export interface CallUsBannerProps {
  data?: CallUsBannerData;
}

export interface CleaningProcessStep extends ProcessStep {
  icon: string;
}

export interface CleaningProcessData extends ButtonData {
  label: string;
  title: string[];
  description: string[];
  noteLines: string[];
  steps: CleaningProcessStep[];
  stepArrowIcon: string;
  footer: { text: string; noteLines: string[] };
}

export interface CleaningProcessProps {
  data?: CleaningProcessData;
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
  overview: { label: string; trusted: { icon: string; lines: string[] }; features: IconLines[] } & ButtonData;
  checklist: { label: string; title: string; checkIcon: string; badge: { icon: string; lines: string[] } };
  why: { label: string; title: { lead: string; after: string }; description: string; image: ImageData; items: IconLabel[] };
  cta: PartnerCtaData;
}

export interface ServiceDetailProps {
  data?: ServiceDetailData;
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

export interface PricingData extends ButtonData {
  label: string;
  title: string[];
  description: string[];
  popularLabel: string;
  currency: string;
  period: string;
  checkIcon: string;
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

export interface PricingProps {
  data?: PricingData;
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

export interface GalleryVideoData extends ButtonData {
  label: string;
  title: { lead: string; highlight: string; after: string };
  description: string[];
  noteLines: string[];
  perPage: number;
  playVideo: string;
  pagination: PaginationData;
  videos: GalleryVideoItem[];
}

/** Gallery page: the photo grid, then the videos. */
export interface GalleryData {
  photos: GalleryPhotosData;
  video: GalleryVideoData;
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface BlogGridPost {
  id: string;
  title: string;
  url: string;
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

export interface BlogGridProps {
  data?: BlogGridData;
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
  recentPosts: { id: string; title: string; url: string; image: string; date: string }[];
  tagsTitle: string;
  tags: string[];
  followTitle: string;
}

export interface BlogDetailProps {
  data?: BlogDetailData;
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
  noteLines: string[];
  image: ImageData;
  toggleIcon: string;
  faqs: FaqItemData[];
  help: { icon: string; eyebrow: string; title: string; text: string } & ButtonData;
}

export interface FaqProps {
  data?: FaqData;
}

/** A contact item either carries its own `lines` or points at a contact field ("address", "phone" or "email") with `source`. */
export interface ContactLinesSource {
  source?: string;
  lines?: string[];
}

export interface ContactCardItem extends ContactLinesSource {
  id: string;
  icon: string;
  title: string;
  /** url "" = the link of the source (tel: / mailto:) */
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
  formSuccess: FormSuccessUI;
  noteLines: string[];
  image: ImageData;
  details: ContactDetailItem[];
  promises: TitledFeature[];
}

export interface ContactMapData {
  label: string;
  title: string;
}

/** Contact page: contact cards, the message form and the map. Items with a `source` show the phone, email or address kept here. */
export interface ContactData extends ContactDetails {
  /** Google Maps embed; {query} is the address */
  mapEmbedUrl: string;
  noteLines: string[];
  info: ContactInfoData;
  form: ContactFormData;
  map: ContactMapData;
}

export interface ContactProps {
  data?: ContactData;
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
  formSuccess: FormSuccessUI;
  image: ImageData;
  noteLines: string[];
  reasonsTitle: string;
  reasons: TitledFeature[];
}

export interface BookingProps {
  data?: BookingData;
}

export interface PolicySection {
  id: string;
  title: string;
  text: string;
  points?: string[];
  contact?: boolean;
}

export interface PrivacyPolicyData extends ContactDetails {
  label: string;
  title: { lead: string; highlight: string };
  description: string[];
  sections: PolicySection[];
}

export interface PrivacyPolicyProps {
  data?: PrivacyPolicyData;
}

export interface PolicyData extends ContactDetails {
  label: string;
  title: { lead: string; highlight: string };
  intro: string;
  sections: PolicySection[];
}

/** Refund & Cancellation and Terms & Conditions pages. */
export interface PolicyProps {
  data?: PolicyData;
}

export interface QuickLink {
  id: string;
  url: string;
  title: string;
  text: string;
  icon: string;
}

export interface NotFoundData extends ButtonData {
  seo: SeoData;
  /** "404": the middle digit is drawn as the ring illustration */
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  noteLines: string[];
  tagline: string[];
  image: string;
  plantImage: string;
  quickLinks: QuickLink[];
}

export interface NotFoundProps {
  data?: NotFoundData;
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
  MissionVision?: Section<"CleaningMissionVision1", MissionVisionData>;
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
  Gallery?: Section<"CleaningGallery1", GalleryData>;
  BlogGrid?: Section<"CleaningBlogGrid1", BlogGridData>;
  BlogDetail?: Section<"CleaningBlogDetail1", BlogDetailData>;
  Faq?: Section<"CleaningFaq1", FaqData>;
  Contact?: Section<"CleaningContact1", ContactData>;
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
