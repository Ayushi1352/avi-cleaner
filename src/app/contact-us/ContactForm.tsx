"use client";

import { useState } from "react";
import { ArrowRight, FileText, Mail, MapPin, MessageCircleMore, Phone, ShieldCheck, User } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import HandwrittenNote from "@/components/HandwrittenNote";
import { ThumbUpIcon, UsersIcon } from "@/components/icons";

// Put your own photo here to replace the stand-in.
const PHOTO = "/images/services/call-cleaner.webp";

const details = [
  {
    icon: (c: string) => <MapPin className={c} fill="currentColor" stroke="#1f634a" strokeWidth={1.8} />,
    title: "Our Location",
    lines: ["123 Main Street, Seattle,", "WA 98101, USA"],
  },
  {
    icon: (c: string) => <Phone className={c} fill="currentColor" strokeWidth={0} />,
    title: "Call Us",
    lines: ["+1 (202) 555-0147"],
  },
  {
    icon: (c: string) => (
      <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.2 5h17.6L12 11.9 3.2 5Z" />
        <path d="M2 6.6V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.6l-9.4 7.300a1 1 0 0 1-1.200 0L2 6.6Z" />
      </svg>
    ),
    title: "Email Us",
    lines: ["xyz@avicleaner.com"],
  },
];

const promises = [
  { icon: (c: string) => <ShieldCheck className={c} strokeWidth={2} />, title: "Quick Response", text: "We reply within 24 hours" },
  { icon: (c: string) => <UsersIcon className={c} />, title: "Friendly Support", text: "Our team is always here" },
  { icon: (c: string) => <ThumbUpIcon className={c} />, title: "Reliable Service", text: "Your satisfaction is our priority" },
];

const BOX =
  "w-full rounded-[10px] border border-[#e2ebe6] bg-white pl-12 pr-4 text-[15px] text-[#0b1a12] outline-none transition placeholder:text-[#7c8794] focus:border-[#1f7a4d] focus:ring-2 focus:ring-[#1f7a4d]/20 2xl:pl-[60px] 2xl:text-[16px] 3xl:rounded-[12px] 3xl:pl-[74px] 3xl:text-[17px]";
const HEIGHT = "h-[52px] 2xl:h-[62px] 3xl:h-[72px]";
const ICON =
  "pointer-events-none absolute left-4 top-[26px] h-5 w-5 -translate-y-1/2 text-[#3f4a5a] 2xl:left-5 2xl:top-[31px] 2xl:h-[22px] 2xl:w-[22px] 3xl:left-[26px] 3xl:top-[36px] 3xl:h-6 3xl:w-6";

function Field({ label, icon: Icon, children, className = "" }: {
  label: string;
  icon: any;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`relative block min-w-0 ${className}`}>
      <span className="sr-only">{label}</span>
      <Icon className={ICON} strokeWidth={1.8} />
      {children}
    </label>
  );
}

/** Contact page: "Send us a Message" form, cleaner photo and the contact details panel. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 md:grid-cols-2 lg:grid-cols-[46%_27%_27%] xl:grid-cols-[48%_30%_22%]">
        {/* ---------- Form ---------- */}
        <div className="relative isolate min-w-0 overflow-hidden bg-[linear-gradient(180deg,#f6fcf9_0%,#eff9f4_100%)] px-4 pb-10 pt-10 sm:px-6 sm:pt-12 md:col-span-2 lg:col-span-1 lg:pl-[clamp(32px,6.77vw,130px)] lg:pr-[clamp(24px,2.2vw,42px)] 2xl:pb-[50px] 2xl:pt-[64px] 3xl:pt-[70px]">
          {/* Leaves, top right */}
          <svg aria-hidden="true" viewBox="0 0 140 190" className="pointer-events-none absolute right-[5%] top-0 -z-10 w-[80px] text-[#dbf1e5] 2xl:w-[120px]">
            <path fill="currentColor" d="M96 0c30 30 40 74 22 116-6 12-14 22-24 28-22-24-30-60-20-98 4-16 12-32 22-46Z" />
            <path fill="currentColor" d="M4 60c34-6 66 12 80 46 4 10 6 22 4 32-30 0-58-18-72-46-6-10-10-20-12-32Z" opacity=".8" />
            <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M92 142c2 14 8 28 20 44" />
          </svg>

          <SectionEyebrow compact className="[&>span:nth-child(2)]:font-medium [&>span:nth-child(2)]:text-[#0b1a12] 3xl:[&>span:first-child]:w-[50px] 3xl:[&>span:last-child]:w-[50px] 3xl:[&>span:nth-child(2)]:text-[22px]">
            Get in Touch
          </SectionEyebrow>
          <h2 className="mt-2 text-[clamp(30px,3.55vw,68px)] font-extrabold leading-[1.14] tracking-[-0.015em] text-[#0b1a12] 2xl:mt-3">
            Send us a Message
          </h2>
          <p className="mt-3 max-w-[720px] text-[15px] leading-[1.55] text-[#5f6c69] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px]">
            Have questions or need a cleaning service? Fill out the form and
            our team will get back to you as soon as possible.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:mt-7 2xl:gap-5 3xl:gap-x-[20px] 3xl:gap-y-[22px]">
            <Field label="Your Name" icon={User}>
              <input type="text" name="name" required autoComplete="name" placeholder="Your Name" className={`${BOX} ${HEIGHT}`} />
            </Field>
            <Field label="Phone Number" icon={Phone}>
              <input type="tel" name="phone" required autoComplete="tel" placeholder="Phone Number" className={`${BOX} ${HEIGHT}`} />
            </Field>
            <Field label="Email Address" icon={Mail}>
              <input type="email" name="email" required autoComplete="email" placeholder="Email Address" className={`${BOX} ${HEIGHT}`} />
            </Field>
            <Field label="Subject" icon={FileText}>
              <input type="text" name="subject" placeholder="Subject" className={`${BOX} ${HEIGHT}`} />
            </Field>
            <Field label="Your Message" icon={MessageCircleMore} className="sm:col-span-2">
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                className={`${BOX} block min-h-[130px] resize-y py-[15px] 2xl:py-[19px] 3xl:min-h-[152px] 3xl:py-[23px]`}
              />
            </Field>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="btn-solid btn-yellow group inline-flex h-[54px] w-full items-center justify-center gap-3 rounded-full text-[16px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd659] 2xl:h-[60px] 2xl:text-[18px] 3xl:h-[66px] 3xl:gap-4 3xl:text-[19px]"
              >
                Submit Now
                <ArrowRight className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
              </button>
              {sent && (
                <p role="status" className="mt-3 text-[15px] font-semibold text-[#12583f] 2xl:text-[17px]">
                  Thank you! Your message has been sent. Our team will get back to you shortly.
                </p>
              )}
            </div>
          </form>

          {/* Paper plane + handwritten note */}
          <div className="mt-5 flex items-end gap-2 pl-[4%] 2xl:mt-6" aria-hidden="true">
            <svg viewBox="0 0 150 90" className="w-[90px] shrink-0 text-[#12583f] 2xl:w-[120px] 3xl:w-[145px]">
              <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="6 7" d="M4 78c20 8 42 6 52-8 6-10-2-20-12-18-10 2-12 14-2 18 16 6 40-10 58-32" />
              <path fill="currentColor" d="M146 4 100 22l18 10 2 22 10-16 10 6 6-40Z" />
              <path fill="#f1faf5" d="m118 32 20-20-15 22-3 10v-12Z" />
            </svg>
            <p className="-rotate-[6deg] pb-2 font-script text-[22px] font-medium leading-[1] text-[#12583f] 2xl:text-[26px] 3xl:text-[30px]">
              We&rsquo;re Here
              <br />
              <span className="pl-[0.8em]">to Help!</span>
            </p>
          </div>
        </div>

        {/* ---------- Photo ---------- */}
        <div className="relative min-h-[380px] min-w-0 overflow-hidden sm:min-h-[460px] lg:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PHOTO} alt="Smiling Avicleaner cleaner in a green uniform" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[40%_top]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.82)_0%,rgb(255_255_255/0.55)_22%,rgb(255_255_255/0)_48%)]" />
          <HandwrittenNote color="text-[#12583f]" className="absolute left-[7%] top-[14%] text-[clamp(26px,2.3vw,44px)] md:text-[clamp(24px,3.4vw,34px)] lg:text-[clamp(18px,2.1vw,40px)]" />
        </div>

        {/* ---------- Contact details panel ---------- */}
        <div className="relative isolate flex min-w-0 flex-col justify-center overflow-hidden bg-[#17503b] px-5 py-10 text-white sm:px-7 lg:px-5 xl:px-6 2xl:px-8 3xl:pl-[47px] 3xl:pr-[38px]">
          {/* Faint leaves, bottom right */}
          <svg aria-hidden="true" viewBox="0 0 220 160" className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[150px] text-white/[0.07] 2xl:w-[210px]">
            <path fill="currentColor" d="M220 30c-56 4-96 40-106 92-2 12-2 26 2 38h104V30Z" />
            <path fill="currentColor" d="M0 160c20-44 62-66 116-60-8 26-26 46-50 60H0Z" />
          </svg>

          <ul className="space-y-6 xl:space-y-7 2xl:space-y-9 3xl:space-y-[50px]">
            {details.map(({ icon, title, lines }) => (
              <li key={title} className="flex min-w-0 items-center gap-4 xl:gap-5 3xl:gap-[26px]">
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#1f634a] text-[#fdd659] 2xl:h-[62px] 2xl:w-[62px] 3xl:h-[72px] 3xl:w-[72px]">
                  {icon("h-[46%] w-[46%]")}
                </span>
                <span className="min-w-0">
                  <span className="block text-[16px] font-bold leading-tight lg:text-[15px] 2xl:text-[17px] 3xl:text-[19px]">{title}</span>
                  <span className="mt-1.5 block break-words text-[14.5px] leading-[1.55] text-white/85 lg:text-[13.5px] 2xl:text-[16px] 3xl:text-[18px]">
                    {lines[0]}
                    {lines[1] && (
                      <>
                        <br />
                        {lines[1]}
                      </>
                    )}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <span className="my-7 block h-px w-full bg-white/25 2xl:my-9 3xl:my-[46px]" />

          <ul className="space-y-5 2xl:space-y-6 3xl:space-y-[26px]">
            {promises.map(({ icon, title, text }) => (
              <li key={title} className="flex min-w-0 items-center gap-4 xl:gap-5 3xl:gap-[26px]">
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#1f634a] text-white 2xl:h-[52px] 2xl:w-[52px] 3xl:ml-[6px] 3xl:mr-[6px] 3xl:h-[60px] 3xl:w-[60px]">
                  {icon("h-[50%] w-[50%]")}
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-bold leading-tight lg:text-[14px] 2xl:text-[16px] 3xl:text-[17px]">{title}</span>
                  <span className="mt-1.5 block text-[13.5px] leading-snug text-white/75 lg:text-[12.5px] 2xl:text-[14.5px] 3xl:text-[16px]">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
