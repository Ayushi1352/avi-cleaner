import { ArrowRight, Mail, Map, MapPin, Phone, PhoneCall } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import HandwrittenNote from "@/components/HandwrittenNote";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["123 Main Street, Seattle,", "WA 98101, USA"],
    action: "View on Map",
    href: "#map",
    actionIcon: (c: string) => <Map className={c} fill="currentColor" stroke="#e3f6ec" strokeWidth={1.6} />,
  },
  {
    icon: PhoneCall,
    title: "Phone Number",
    lines: ["+1 (202) 555-0147"],
    action: "Call Us Now",
    href: "tel:+12025550147",
    actionIcon: (c: string) => <Phone className={c} fill="currentColor" strokeWidth={0} />,
  },
  {
    icon: Mail,
    title: "Email us at",
    lines: ["xyz@avicleaner.com"],
    action: "Send an Email",
    href: "mailto:xyz@avicleaner.com",
    actionIcon: (c: string) => <Mail className={c} strokeWidth={2.2} />,
  },
];

function ContactCard({ card }: { card: any }) {
  const Icon = card.icon;
  return (
    <article className="card-border-animated flex h-full min-w-0 flex-col items-center rounded-[16px] bg-[linear-gradient(180deg,#fff_62%,#f0faf4_100%)] px-4 pb-7 pt-7 text-center shadow-[0_16px_40px_-26px_rgba(11,42,28,0.4)] md:px-3 md:pb-[clamp(20px,2.35vw,45px)] md:pt-[clamp(20px,1.85vw,35px)] xl:px-5 2xl:rounded-[20px]">
      {/* Icon with the pale blob peeking out behind it */}
      <span className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center md:h-[clamp(58px,5.75vw,110px)] md:w-[clamp(58px,5.75vw,110px)]">
        <span aria-hidden="true" className="absolute -left-[24%] top-[12%] h-[88%] w-[88%] rounded-full bg-[#e6f3d3]" />
        <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#12583f] text-white">
          <Icon className="h-[46%] w-[46%]" strokeWidth={1.7} />
        </span>
      </span>

      <h3 className="mt-4 text-[20px] font-bold leading-tight text-[#0b1a12] md:mt-[clamp(12px,1.3vw,25px)] md:text-[clamp(17px,1.56vw,30px)]">
        {card.title}
      </h3>
      <p className="mt-3 break-words text-[15px] leading-[1.5] text-[#5f6c69] md:mt-[clamp(8px,1.05vw,20px)] md:text-[clamp(13px,1.2vw,23px)]">
        {card.lines[0]}
        {card.lines[1] && (
          <>
            <br />
            {card.lines[1]}
          </>
        )}
      </p>

      <span className="mt-5 block h-px w-[72%] bg-[#dfe9e4] md:mt-[clamp(12px,1.15vw,22px)]" />

      <div className="mt-auto pt-5 md:pt-[clamp(14px,1.55vw,30px)]">
        <a
          href={card.href}
          className="btn-outline group inline-flex max-w-full items-center justify-center gap-3 whitespace-nowrap rounded-full px-6 py-3 text-[15px] font-medium [--btn-bg:#e3f6ec] [--btn-ink:#0b1a12] [--btn-ring:#e3f6ec] [--btn:#12583f] md:gap-[clamp(6px,1vw,20px)] md:px-[clamp(12px,2.1vw,40px)] md:py-[clamp(9px,1.1vw,21px)] md:text-[clamp(12.5px,1.05vw,20px)]"
        >
          <span className="text-[#12583f] transition-colors group-hover:text-white group-focus-visible:text-white">
            {card.actionIcon("h-[1.6em] w-[1.6em] shrink-0")}
          </span>
          {card.action}
          <ArrowRight className="h-[1em] w-[1em] shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
        </a>
      </div>
    </article>
  );
}

/** Contact page: "Our Contact Information" header and the three contact cards. */
export default function ContactInfo() {
  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f3fcf7_0%,#eaf8f1_100%)] pb-12 pt-11 sm:pb-14 sm:pt-12 2xl:pb-[72px] 2xl:pt-[48px] 3xl:pb-[90px] 3xl:pt-[52px]">
        {/* Leaf sprig, top left */}
        <svg aria-hidden="true" viewBox="0 0 230 400" className="pointer-events-none absolute left-0 top-4 -z-10 hidden w-[120px] text-[#b9dfc9] opacity-80 md:block xl:w-[160px] 2xl:top-[30px] 2xl:w-[200px] 3xl:w-[230px]">
          <path fill="currentColor" d="M214 6C128 4 62 44 50 122c-4 26 4 52 20 70 62-18 112-70 132-146 4-14 8-28 12-40Z" />
          <path fill="currentColor" d="M0 96c40 8 70 44 74 92 1 16-2 30-8 42-30-14-54-44-62-84-2-16-4-34-4-50Z" opacity=".75" />
          <path fill="currentColor" d="M0 230c34 0 62 24 70 62 2 12 2 24-2 34-26-6-48-26-60-56-4-12-8-26-8-40Z" opacity=".6" />
          <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M70 190C56 250 30 320-4 396" />
          <path fill="none" stroke="#f3fcf7" strokeWidth="4" strokeLinecap="round" d="M186 36C142 78 104 128 74 186" />
        </svg>
        {/* Soft waves along the bottom */}
        <svg aria-hidden="true" viewBox="0 0 1920 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[90px] w-full 2xl:h-[150px]">
          <path fill="#fff" fillOpacity=".55" d="M0 110c220-70 470-80 720-30s520 60 760 10c180-36 320-40 440-20v110H0Z" />
          <path fill="#dff3e8" fillOpacity=".7" d="M0 150c260-50 520-50 800-14s600 30 1120-40v84H0Z" />
        </svg>

        {/* Handwritten notes and paper plane (wide screens only) */}
        <HandwrittenNote className="absolute right-[3%] top-[6%] hidden text-[clamp(26px,2.3vw,44px)] xl:block" color="text-[#12583f]" />
        <HandwrittenNote
          lines={["Let's", "Connect!"]}
          color="text-[#12583f]"
          className="absolute left-[1.8%] top-[57%] hidden text-[clamp(28px,2.4vw,46px)] 2xl:block"
        />
        <svg aria-hidden="true" viewBox="0 0 190 220" className="pointer-events-none absolute right-[1%] top-[66%] hidden w-[9.5vw] max-w-[185px] text-[#12583f] 2xl:block">
          <path fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="7 8" d="M8 208c56-14 104-44 126-92 6-14-2-30-18-34-18-4-34 8-32 24 2 14 22 20 38 8 16-12 30-34 40-60" />
          <path fill="currentColor" d="M186 6 120 30l26 14 4 30 12-22 14 8 10-54Z" />
          <path fill="#eaf8f1" d="m146 44 28-26-22 30-2 14-4-18Z" />
        </svg>

        <div className="container-x relative">
          <div className="mx-auto max-w-[1100px] text-center">
            <SectionEyebrow
              center
              compact
              className="[&>span:nth-child(2)]:font-medium 3xl:[&>span:first-child]:w-[58px] 3xl:[&>span:last-child]:w-[58px] 3xl:[&>span:nth-child(2)]:text-[28px]"
            >
              Contact Info
            </SectionEyebrow>
            <h2 className="mt-2 text-[clamp(28px,3.95vw,76px)] font-extrabold leading-[1.14] tracking-[-0.015em] text-[#0b1a12] 2xl:mt-3">
              Our Contact Information
            </h2>
            <p className="mx-auto mt-3 max-w-[820px] text-[15px] leading-[1.5] text-[#5f6c69] sm:text-base xl:text-[18px] 2xl:mt-4 2xl:text-[20px] 3xl:text-[23px]">
              We&rsquo;re here to help! Get in touch with us for any questions,
              bookings or <br className="hidden md:block" />
              custom cleaning solutions. Our friendly team is always ready to
              assist you.
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-[420px] grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 md:gap-4 xl:gap-6 2xl:mt-[44px] 2xl:max-w-[77vw] 2xl:gap-[30px] 3xl:max-w-[1476px]">
            {cards.map((card, i) => (
              <li key={card.title} className="min-w-0">
                <ScrollReveal variant="fade-up" delay={i * 150} duration={650}>
                  <ContactCard card={card} />
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
