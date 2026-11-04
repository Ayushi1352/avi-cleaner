"use client";

import type { ReactNode } from "react";
import type { BookingData, GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { ui } from "@/components/ui/styles";

const LABEL = "block text-[15px] font-medium text-[var(--color-title)] xl:text-[16px] 2xl:text-[19px] 3xl:text-[23px]";
const BOX =
  "w-full rounded-[10px] border border-[var(--color-booking-border)] bg-[var(--color-bg-card)] pl-11 pr-4 text-[15px] text-[var(--color-title)] outline-none transition placeholder:text-[var(--color-input-placeholder)] focus:border-[var(--color-link)] focus:ring-2 focus:ring-[var(--color-link-20)] xl:text-[16px] 2xl:rounded-[12px] 2xl:pl-14 2xl:text-[18px] 3xl:pl-[80px] 3xl:text-[22px]";
const HEIGHT = "h-[50px] 2xl:h-[60px] 3xl:h-[70px]";
const ICON = "pointer-events-none absolute left-3.5 top-[25px] h-5 w-5 -translate-y-1/2 text-[var(--color-form-label)] 2xl:left-5 2xl:top-[30px] 2xl:h-6 2xl:w-6 3xl:left-[26px] 3xl:top-[35px] 3xl:h-[30px] 3xl:w-[30px]";

function Field({ label, required = true, icon, children, className = "" }: {
  label: string;
  required?: boolean;
  icon: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block min-w-0 ${className}`}>
      <span className={LABEL}>
        {label} {required && <span className="text-[var(--color-booking-text)]">{"*"}</span>}
      </span>
      <span className="relative mt-2 block 2xl:mt-2.5 3xl:mt-[14px]">
        <Icon name={icon} className={ICON} strokeWidth={1.9} />
        {children}
      </span>
    </label>
  );
}

/** Book Now page body: booking form with a photo and "Why Book With Us?". */
export const BookingForm = ({ data, ui: labels }: { data?: BookingData; ui: GlobalUIData }) => {
  // Dummy submit: nothing is sent anywhere yet. "Booking…" for a moment, then the form clears
  // and the thank-you card shows for 5 seconds.
  const submit = useDummySubmit();
  if (!data) return null;
  const { fields } = data;

  return (
    <section className="w-full bg-[var(--color-bg-card)] py-10 sm:py-12 xl:py-[3.25rem] 2xl:py-[46px]">
      <div className={ui.container}>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,34%)] lg:gap-6 xl:gap-7 3xl:grid-cols-[1150px_minmax(0,1fr)] 3xl:gap-[30px] 3xl:pl-[9px]">
          {/* ---------- Form ---------- */}
          <div className="min-w-0 rounded-[16px] bg-[var(--color-white)] p-5 shadow-[0_10px_34px_-20px_var(--color-shadow-card-35)] sm:p-7 2xl:rounded-[20px] 2xl:p-9 3xl:px-[32px] 3xl:pb-[44px] 3xl:pt-[36px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="min-w-0 text-[clamp(24px,2.5vw,48px)] font-extrabold leading-[1.2] tracking-[-0.015em] text-[var(--color-title)] 3xl:pt-[10px]">
                {data.title.lead + " "}<span className="text-[var(--color-form-accent)]">{data.title.highlight}</span>
                <span className="mt-2 block h-[4px] w-10 rounded-full bg-[var(--color-accent)] 2xl:mt-3 2xl:w-[60px]" />
              </h2>
              <p className="flex w-fit shrink-0 items-center gap-3 rounded-[12px] bg-[var(--color-booking-bg)] px-4 py-3 2xl:gap-4 2xl:px-6 2xl:py-4 3xl:gap-[22px] 3xl:py-[18px] 3xl:pl-[28px] 3xl:pr-[26px]">
                <Icon name={data.badge.icon} className="h-7 w-7 shrink-0 text-[var(--color-form-accent)] 2xl:h-9 2xl:w-9 3xl:h-[46px] 3xl:w-[46px]" strokeWidth={1.9} />
                <span>
                  <span className="block text-[14px] font-bold leading-tight text-[var(--color-form-accent)] xl:text-[15px] 2xl:text-[19px] 3xl:text-[23px]">
                    {data.badge.title}
                  </span>
                  <span className="mt-0.5 block text-[12.5px] text-[var(--color-text-grey)] 2xl:mt-1 2xl:text-[15px] 3xl:text-[17.5px]">
                    {data.badge.text}
                  </span>
                </span>
              </p>
            </div>
            <p className="mt-4 text-[15px] leading-[1.5] text-[var(--color-text-grey)] xl:text-[16px] 2xl:text-[19px] 3xl:mt-[22px] 3xl:text-[23.5px]">
              {data.description}
            </p>

            {/* remounting the form (via key) after each send clears every field */}
            <form key={submit.round} onSubmit={submit.onSubmit} onInput={submit.onInput} aria-busy={submit.sending} className="mt-6 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 2xl:mt-8 2xl:gap-x-7 2xl:gap-y-7 3xl:mt-[44px] 3xl:gap-x-[32px] 3xl:gap-y-[44px]">
              <Field label={fields.name.label} icon={fields.name.icon}>
                <input type="text" name="name" required autoComplete="name" placeholder={fields.name.placeholder} className={`${BOX} ${HEIGHT}`} />
              </Field>
              <Field label={fields.phone.label} icon={fields.phone.icon}>
                <input type="tel" name="phone" required autoComplete="tel" placeholder={fields.phone.placeholder} className={`${BOX} ${HEIGHT}`} />
              </Field>
              <Field label={fields.email.label} icon={fields.email.icon}>
                <input type="email" name="email" required autoComplete="email" placeholder={fields.email.placeholder} className={`${BOX} ${HEIGHT}`} />
              </Field>
              <Field label={fields.service.label} icon={fields.service.icon}>
                <select name="service" required defaultValue="" className={`${BOX} ${HEIGHT} appearance-none pr-11 invalid:text-[var(--color-input-placeholder)]`}>
                  <option value="" disabled>{fields.service.placeholder}</option>
                  {data.serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <Icon name={data.selectIcon} className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-title)] 2xl:right-6 2xl:h-6 2xl:w-6" strokeWidth={2.4} />
              </Field>
              <Field label={fields.date.label} icon={fields.date.icon}>
                <input type="date" name="date" required className={`${BOX} ${HEIGHT} invalid:text-[var(--color-input-placeholder)]`} />
              </Field>
              <Field label={fields.time.label} icon={fields.time.icon}>
                <select name="time" required defaultValue="" className={`${BOX} ${HEIGHT} appearance-none pr-11 invalid:text-[var(--color-input-placeholder)]`}>
                  <option value="" disabled>{fields.time.placeholder}</option>
                  {data.timeOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <Icon name={data.selectIcon} className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-title)] 2xl:right-6 2xl:h-6 2xl:w-6" strokeWidth={2.4} />
              </Field>
              <Field label={fields.address.label} icon={fields.address.icon} className="sm:col-span-2">
                <input type="text" name="address" required autoComplete="street-address" placeholder={fields.address.placeholder} className={`${BOX} ${HEIGHT}`} />
              </Field>
              <Field label={fields.notes.label} required={false} icon={fields.notes.icon} className="sm:col-span-2">
                <textarea
                  name="notes"
                  rows={3}
                  placeholder={fields.notes.placeholder}
                  className={`${BOX} block resize-y py-3 2xl:py-4 3xl:min-h-[108px] 3xl:py-[18px]`}
                />
              </Field>

              <div className="text-center sm:col-span-2">
                <button
                  type="submit"
                  disabled={submit.sending}
                  className={`${ui.btnSolid} group inline-flex disabled:cursor-wait disabled:opacity-80 h-[54px] w-full max-w-[420px] items-center justify-center gap-3 rounded-full text-[18px] font-bold [--btn:var(--color-booking-button)] 2xl:h-[66px] 2xl:max-w-[520px] 2xl:text-[23px] 3xl:h-[82px] 3xl:max-w-[652px] 3xl:gap-[22px] 3xl:text-[29px]`}
                >
                  {submit.sending ? (
                    <>
                      <Spinner name={labels.formSuccess.sendingIcon} className="h-[1.05em] w-[1.05em]" />
                      {data.sendingText}
                    </>
                  ) : (
                    <>
                      <Icon name={data.submit.icon} className="h-[1.05em] w-[1.05em]" strokeWidth={2.2} />
                      {data.submit.label}
                      <Icon name={data.submit.arrowIcon} className="h-[1em] w-[1em] transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
                    </>
                  )}
                </button>
                <p className="mt-3 text-[14px] text-[var(--color-text-grey)] 2xl:mt-5 2xl:text-[17px] 3xl:text-[20.5px]">
                  {data.terms}
                </p>
                {submit.showMessage && (
                  <FormSuccess
                    name={submit.name}
                    title={data.successTitle}
                    message={data.successMessage}
                    leaving={submit.status === "leaving"}
                    visibleFor={submit.visibleFor}
                    onClose={submit.dismiss}
                    ui={labels.formSuccess}
                    className="mt-4 2xl:mt-5"
                  />
                )}
              </div>
            </form>
          </div>

          {/* ---------- Photo + reasons ---------- */}
          <div className="grid min-w-0 grid-cols-1 content-start gap-6 md:grid-cols-2 lg:grid-cols-1 3xl:gap-[26px]">
            <div className="relative aspect-[620/592] w-full overflow-hidden rounded-[16px] 2xl:rounded-[20px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.image.src} alt={data.image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[right_top]" />
              <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[var(--color-white-80)] to-transparent" />
              <p className="absolute left-[7%] top-[15%] -rotate-[8deg] font-script text-[clamp(26px,3.1vw,60px)] font-medium leading-[1] text-[var(--color-form-accent)] md:text-[clamp(22px,3.4vw,34px)] lg:text-[clamp(22px,2.6vw,52px)]" aria-hidden="true">
                {data.noteLines[0]}
                <br />
                {data.noteLines[1]}
                <br />
                {data.noteLines[2]}
                <br />
                {data.noteLines[3]}
                <svg viewBox="0 0 160 20" className="mt-1 block w-[4.2em]" aria-hidden="true">
                  <path d="M4 16C60 8 110 4 156 3" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </p>
            </div>

            <div className="rounded-[16px] bg-[var(--color-booking-bg-2)] p-5 sm:p-7 2xl:rounded-[20px] 2xl:p-8 3xl:px-[34px] 3xl:pb-[36px] 3xl:pt-[32px]">
              <h2 className="text-[22px] font-extrabold leading-tight text-[var(--color-title)] lg:text-[20px] xl:text-[24px] 2xl:text-[29px] 3xl:text-[35px]">
                {data.reasonsTitle}
                <span className="mt-2 block h-[4px] w-10 rounded-full bg-[var(--color-accent)] 2xl:mt-3 2xl:w-[60px]" />
              </h2>
              <ul className="mt-5 space-y-5 2xl:mt-7 2xl:space-y-7 3xl:mt-[34px] 3xl:space-y-[28px]">
                {data.reasons.map(({ id, icon, title, subtitle: text }) => (
                  <li key={id} className="flex min-w-0 items-center gap-4 2xl:gap-6 3xl:gap-[30px] 3xl:pl-[10px]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-booking-bg-3)] text-[var(--color-form-accent)] lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 3xl:h-[96px] 3xl:w-[96px]">
                      <Icon name={icon} className="h-[48%] w-[48%]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[17px] font-bold leading-tight text-[var(--color-form-accent)] lg:text-[15px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25.5px]">
                        {title}
                      </span>
                      <span className="mt-1 block text-[14.5px] leading-snug text-[var(--color-text-grey)] lg:text-[13px] xl:text-[15px] 2xl:mt-1.5 2xl:text-[18px] 3xl:text-[22px]">
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
};
