"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock,
  FileText,
  Headphones,
  LayoutGrid,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import { LeafIcon } from "@/components/icons";
import bookingData from "@/data/booking.json";

// Text lives in src/data/booking.json under text.BookingForm.
const copy = bookingData.text.BookingForm;

const PHOTO = "/images/service-kitchen.webp";

// Content lives in src/data/booking.json.
const serviceOptions = bookingData.serviceOptions;
// Content lives in src/data/booking.json.
const timeOptions = bookingData.timeOptions;

// Icons by the name used in src/data/booking.json.
const reasonsIcons = {
  "shield-check": (c: string) => <ShieldCheck className={c} strokeWidth={2} />,
  "calendar-days": (c: string) => <CalendarDays className={c} strokeWidth={2} />,
  leaf: (c: string) => <LeafIcon className={c} />,
  headphones: (c: string) => <Headphones className={c} strokeWidth={2} />,
};

// Content lives in src/data/booking.json.
const reasons = bookingData.reasons.map((item) => ({ ...item, icon: reasonsIcons[item.icon] }));

const LABEL = "block text-[15px] font-medium text-[#0b1a12] xl:text-[16px] 2xl:text-[19px] 3xl:text-[23px]";
const BOX =
  "w-full rounded-[10px] border border-[#e1e7e4] bg-[#fbfcfc] pl-11 pr-4 text-[15px] text-[#0b1a12] outline-none transition placeholder:text-[#8a929e] focus:border-[#1f7a4d] focus:ring-2 focus:ring-[#1f7a4d]/20 xl:text-[16px] 2xl:rounded-[12px] 2xl:pl-14 2xl:text-[18px] 3xl:pl-[80px] 3xl:text-[22px]";
const HEIGHT = "h-[50px] 2xl:h-[60px] 3xl:h-[70px]";
const ICON = "pointer-events-none absolute left-3.5 top-[25px] h-5 w-5 -translate-y-1/2 text-[#3f4a5a] 2xl:left-5 2xl:top-[30px] 2xl:h-6 2xl:w-6 3xl:left-[26px] 3xl:top-[35px] 3xl:h-[30px] 3xl:w-[30px]";

function Field({ label, required = true, icon: Icon, children, className = "" }: {
  label: string;
  required?: boolean;
  icon: any;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block min-w-0 ${className}`}>
      <span className={LABEL}>
        {label} {required && <span className="text-[#e5484d]">*</span>}
      </span>
      <span className="relative mt-2 block 2xl:mt-2.5 3xl:mt-[14px]">
        <Icon className={ICON} strokeWidth={1.9} />
        {children}
      </span>
    </label>
  );
}

/** Book Now page body: booking form with a photo and "Why Book With Us?". */
export default function BookingForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <section className="w-full bg-[#fbfcfc] py-10 sm:py-12 xl:py-13 2xl:py-[46px]">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,34%)] lg:gap-6 xl:gap-7 3xl:grid-cols-[1150px_minmax(0,1fr)] 3xl:gap-[30px] 3xl:pl-[9px]">
          {/* ---------- Form ---------- */}
          <div className="min-w-0 rounded-[16px] bg-white p-5 shadow-[0_10px_34px_-20px_rgba(11,42,28,0.35)] sm:p-7 2xl:rounded-[20px] 2xl:p-9 3xl:px-[32px] 3xl:pb-[44px] 3xl:pt-[36px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="min-w-0 text-[clamp(24px,2.5vw,48px)] font-extrabold leading-[1.2] tracking-[-0.015em] text-[#0b1a12] 3xl:pt-[10px]">
                {copy.bookYour + " "}<span className="text-[#12583f]">{copy.cleaningService}</span>
                <span className="mt-2 block h-[4px] w-10 rounded-full bg-[#fdd659] 2xl:mt-3 2xl:w-[60px]" />
              </h2>
              <p className="flex w-fit shrink-0 items-center gap-3 rounded-[12px] bg-[#e6f6ee] px-4 py-3 2xl:gap-4 2xl:px-6 2xl:py-4 3xl:gap-[22px] 3xl:py-[18px] 3xl:pl-[28px] 3xl:pr-[26px]">
                <CalendarDays className="h-7 w-7 shrink-0 text-[#12583f] 2xl:h-9 2xl:w-9 3xl:h-[46px] 3xl:w-[46px]" strokeWidth={1.9} />
                <span>
                  <span className="block text-[14px] font-bold leading-tight text-[#12583f] xl:text-[15px] 2xl:text-[19px] 3xl:text-[23px]">
                    {copy.quickEasyBooking}
                  </span>
                  <span className="mt-0.5 block text-[12.5px] text-[#5a6172] 2xl:mt-1 2xl:text-[15px] 3xl:text-[17.5px]">
                    {copy.getConfirmedWithinMinutes}
                  </span>
                </span>
              </p>
            </div>
            <p className="mt-4 text-[15px] leading-[1.5] text-[#5a6172] xl:text-[16px] 2xl:text-[19px] 3xl:mt-[22px] 3xl:text-[23.5px]">
              {copy.fillInTheDetailsBelow}
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 2xl:mt-8 2xl:gap-x-7 2xl:gap-y-7 3xl:mt-[44px] 3xl:gap-x-[32px] 3xl:gap-y-[44px]">
              <Field label={copy.fullName} icon={User}>
                <input type="text" name="name" required autoComplete="name" placeholder={copy.enterYourFullName} className={`${BOX} ${HEIGHT}`} />
              </Field>
              <Field label={copy.phoneNumber} icon={Phone}>
                <input type="tel" name="phone" required autoComplete="tel" placeholder={copy.enterYourPhoneNumber} className={`${BOX} ${HEIGHT}`} />
              </Field>
              <Field label={copy.emailAddress} icon={Mail}>
                <input type="email" name="email" required autoComplete="email" placeholder={copy.enterYourEmailAddress} className={`${BOX} ${HEIGHT}`} />
              </Field>
              <Field label={copy.serviceType} icon={LayoutGrid}>
                <select name="service" required defaultValue="" className={`${BOX} ${HEIGHT} appearance-none pr-11 invalid:text-[#8a929e]`}>
                  <option value="" disabled>{copy.selectService}</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0b1a12] 2xl:right-6 2xl:h-6 2xl:w-6" strokeWidth={2.4} />
              </Field>
              <Field label={copy.preferredDate} icon={CalendarDays}>
                <input type="date" name="date" required className={`${BOX} ${HEIGHT} invalid:text-[#8a929e]`} />
              </Field>
              <Field label={copy.preferredTime} icon={Clock}>
                <select name="time" required defaultValue="" className={`${BOX} ${HEIGHT} appearance-none pr-11 invalid:text-[#8a929e]`}>
                  <option value="" disabled>{copy.selectTime}</option>
                  {timeOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0b1a12] 2xl:right-6 2xl:h-6 2xl:w-6" strokeWidth={2.4} />
              </Field>
              <Field label={copy.address} icon={MapPin} className="sm:col-span-2">
                <input type="text" name="address" required autoComplete="street-address" placeholder={copy.enterYourCompleteAddress} className={`${BOX} ${HEIGHT}`} />
              </Field>
              <Field label={copy.specialInstructionsOptional} required={false} icon={FileText} className="sm:col-span-2">
                <textarea
                  name="notes"
                  rows={3}
                  placeholder={copy.anySpecialRequestsOrAdditional}
                  className={`${BOX} block resize-y py-3 2xl:py-4 3xl:min-h-[108px] 3xl:py-[18px]`}
                />
              </Field>

              <div className="text-center sm:col-span-2">
                <button
                  type="submit"
                  className="btn-solid group inline-flex h-[54px] w-full max-w-[420px] items-center justify-center gap-3 rounded-full text-[18px] font-bold [--btn:#0b4a35] 2xl:h-[66px] 2xl:max-w-[520px] 2xl:text-[23px] 3xl:h-[82px] 3xl:max-w-[652px] 3xl:gap-[22px] 3xl:text-[29px]"
                >
                  <CalendarDays className="h-[1.05em] w-[1.05em]" strokeWidth={2.2} />
                  {copy.bookNow}
                  <ArrowRight className="h-[1em] w-[1em] transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
                </button>
                <p className="mt-3 text-[14px] text-[#5a6172] 2xl:mt-5 2xl:text-[17px] 3xl:text-[20.5px]">
                  {copy.byBookingYouAgreeTo}
                </p>
                {sent && (
                  <p role="status" className="mt-3 text-[15px] font-semibold text-[#12583f] 2xl:text-[18px]">
                    {copy.thankYouYourBookingRequest}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* ---------- Photo + reasons ---------- */}
          <div className="grid min-w-0 grid-cols-1 content-start gap-6 md:grid-cols-2 lg:grid-cols-1 3xl:gap-[26px]">
            <div className="relative aspect-[620/592] w-full overflow-hidden rounded-[16px] 2xl:rounded-[20px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTO} alt={copy.avicleanerCleanerWipingAKitchen} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[right_top]" />
              <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-white/80 to-transparent" />
              <p className="absolute left-[7%] top-[15%] -rotate-[8deg] font-script text-[clamp(26px,3.1vw,60px)] font-medium leading-[1] text-[#12583f] md:text-[clamp(22px,3.4vw,34px)] lg:text-[clamp(22px,2.6vw,52px)]" aria-hidden="true">
                {copy.a}
                <br />
                {copy.cleaner}
                <br />
                {copy.brighter}
                <br />
                {copy.tomorrow}
                <svg viewBox="0 0 160 20" className="mt-1 block w-[4.2em]" aria-hidden="true">
                  <path d="M4 16C60 8 110 4 156 3" fill="none" stroke="#fdd659" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </p>
            </div>

            <div className="rounded-[16px] bg-[#e9f7f0] p-5 sm:p-7 2xl:rounded-[20px] 2xl:p-8 3xl:px-[34px] 3xl:pb-[36px] 3xl:pt-[32px]">
              <h2 className="text-[22px] font-extrabold leading-tight text-[#0b1a12] lg:text-[20px] xl:text-[24px] 2xl:text-[29px] 3xl:text-[35px]">
                {copy.whyBookWithUs}
                <span className="mt-2 block h-[4px] w-10 rounded-full bg-[#fdd659] 2xl:mt-3 2xl:w-[60px]" />
              </h2>
              <ul className="mt-5 space-y-5 2xl:mt-7 2xl:space-y-7 3xl:mt-[34px] 3xl:space-y-[28px]">
                {reasons.map(({ icon, title, text }) => (
                  <li key={title} className="flex min-w-0 items-center gap-4 2xl:gap-6 3xl:gap-[30px] 3xl:pl-[10px]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#cdeedd] text-[#12583f] lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 3xl:h-[96px] 3xl:w-[96px]">
                      {icon("h-[48%] w-[48%]")}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[17px] font-bold leading-tight text-[#12583f] lg:text-[15px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25.5px]">
                        {title}
                      </span>
                      <span className="mt-1 block text-[14.5px] leading-snug text-[#5a6172] lg:text-[13px] xl:text-[15px] 2xl:mt-1.5 2xl:text-[18px] 3xl:text-[22px]">
                        {text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
