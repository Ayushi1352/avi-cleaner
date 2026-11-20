"use client";

import type { ReactNode } from "react";
import type { ContactCardItem, ContactData, ContactFormData, ContactInfoData, ContactMapData, ContactProps } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";
import { useFormSubmit } from "@/components/ui/useFormSubmit";
import { SectionEyebrow } from "@/components/ui/SectionLabel";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { contactHref, contactLines, mapUrl } from "@/components/ui/text";
import { ui } from "@/components/ui/styles";

function ContactCard({ card, contact, arrowIcon }: { card: ContactCardItem; contact: ContactData; arrowIcon: string }) {
  const lines = contactLines(card, contact);
  const href = contactHref(card, contact);
  return (
    <article className="flex h-full min-w-0 flex-col items-center rounded-[16px] bg-[linear-gradient(180deg,var(--color-white)_62%,var(--color-contact-card-gradient)_100%)] px-4 pb-7 pt-7 text-center shadow-[0_16px_40px_-26px_var(--color-shadow-card-40)] md:px-3 md:pb-[clamp(20px,2.35vw,45px)] md:pt-[clamp(20px,1.85vw,35px)] xl:px-5 2xl:rounded-[20px]">
      <span className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center md:h-[clamp(58px,5.75vw,110px)] md:w-[clamp(58px,5.75vw,110px)]">
        <span aria-hidden="true" className="absolute -left-[24%] top-[12%] h-[88%] w-[88%] rounded-full bg-[var(--color-contact-bg)]" />
        <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[var(--color-form-accent)] text-[var(--color-white)]">
          <Icon name={card.icon} className="h-[46%] w-[46%]" strokeWidth={1.7} />
        </span>
      </span>

      <h3 className="mt-4 text-[20px] font-bold leading-tight text-[var(--color-title)] md:mt-[clamp(12px,1.3vw,25px)] md:text-[clamp(17px,1.56vw,30px)]">
        {card.title}
      </h3>
      <p className="mt-3 break-words text-[15px] leading-[1.5] text-[var(--color-text-sage)] md:mt-[clamp(8px,1.05vw,20px)] md:text-[clamp(13px,1.2vw,23px)]">
        {lines[0]}
        {lines[1] && (
          <>
            <br />
            {lines[1]}
          </>
        )}
      </p>

      <span className="mt-5 block h-px w-[72%] bg-[var(--color-contact-bg-2)] md:mt-[clamp(12px,1.15vw,22px)]" />

      <div className="mt-auto pt-5 md:pt-[clamp(14px,1.55vw,30px)]">
        <a
          href={card.action.url || href}
          className={`${ui.btnOutline} group inline-flex max-w-full items-center justify-center gap-3 whitespace-nowrap rounded-full px-6 py-3 text-[15px] font-medium [--btn-bg:var(--color-contact-stroke)] [--btn-ink:var(--color-title)] [--btn-ring:var(--color-contact-stroke)] [--btn:var(--color-form-accent)] md:gap-[clamp(6px,1vw,20px)] md:px-[clamp(12px,2.1vw,40px)] md:py-[clamp(9px,1.1vw,21px)] md:text-[clamp(12.5px,1.05vw,20px)]`}
        >
          <span className="text-[var(--color-form-accent)] transition-colors group-hover:text-[var(--color-white)] group-focus-visible:text-[var(--color-white)]">
            <Icon name={card.action.icon} className="h-[1.6em] w-[1.6em] shrink-0" />
          </span>
          {card.action.label}
          <Icon name={arrowIcon} className="h-[1em] w-[1em] shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
        </a>
      </div>
    </article>
  );
}

const ContactInfo = ({ data, contact }: { data: ContactInfoData; contact: ContactData }) => {
  return (
    <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative isolate overflow-hidden bg-[linear-gradient(180deg,var(--color-contact-stroke-2)_0%,var(--color-contact-fill)_100%)] pb-12 pt-11 sm:pb-14 sm:pt-12 2xl:pb-[72px] 2xl:pt-[48px] 3xl:pb-[90px] 3xl:pt-[52px]">
        <svg aria-hidden="true" viewBox="0 0 230 400" className="pointer-events-none absolute left-0 top-4 -z-10 hidden w-[120px] text-[var(--color-contact-text)] opacity-80 md:block xl:w-[160px] 2xl:top-[30px] 2xl:w-[200px] 3xl:w-[230px]">
          <path fill="currentColor" d="M214 6C128 4 62 44 50 122c-4 26 4 52 20 70 62-18 112-70 132-146 4-14 8-28 12-40Z" />
          <path fill="currentColor" d="M0 96c40 8 70 44 74 92 1 16-2 30-8 42-30-14-54-44-62-84-2-16-4-34-4-50Z" opacity=".75" />
          <path fill="currentColor" d="M0 230c34 0 62 24 70 62 2 12 2 24-2 34-26-6-48-26-60-56-4-12-8-26-8-40Z" opacity=".6" />
          <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M70 190C56 250 30 320-4 396" />
          <path fill="none" stroke="var(--color-contact-stroke-2)" strokeWidth="4" strokeLinecap="round" d="M186 36C142 78 104 128 74 186" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 1920 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[90px] w-full 2xl:h-[150px]">
          <path fill="var(--color-white)" fillOpacity=".55" d="M0 110c220-70 470-80 720-30s520 60 760 10c180-36 320-40 440-20v110H0Z" />
          <path fill="var(--color-icon-bg-mint)" fillOpacity=".7" d="M0 150c260-50 520-50 800-14s600 30 1120-40v84H0Z" />
        </svg>

        <HandwrittenNote lines={contact.noteLines} className="absolute right-[3%] top-[6%] hidden text-[clamp(26px,2.3vw,44px)] xl:block" color="text-[var(--color-form-accent)]" />
        <HandwrittenNote
          lines={data.noteLines}
          color="text-[var(--color-form-accent)]"
          className="absolute left-[1.8%] top-[57%] hidden text-[clamp(28px,2.4vw,46px)] 2xl:block"
        />
        <svg aria-hidden="true" viewBox="0 0 190 220" className="pointer-events-none absolute right-[1%] top-[66%] hidden w-[9.5vw] max-w-[185px] text-[var(--color-form-accent)] 2xl:block">
          <path fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="7 8" d="M8 208c56-14 104-44 126-92 6-14-2-30-18-34-18-4-34 8-32 24 2 14 22 20 38 8 16-12 30-34 40-60" />
          <path fill="currentColor" d="M186 6 120 30l26 14 4 30 12-22 14 8 10-54Z" />
          <path fill="var(--color-contact-fill)" d="m146 44 28-26-22 30-2 14-4-18Z" />
        </svg>

        <div className={`${ui.container} relative`}>
          <div className="mx-auto max-w-[1100px] text-center">
            <SectionEyebrow
              center
              compact
              className="[&>span:nth-child(2)]:font-medium 3xl:[&>span:first-child]:w-[58px] 3xl:[&>span:last-child]:w-[58px] 3xl:[&>span:nth-child(2)]:text-[28px]"
            >
              {data.label}
            </SectionEyebrow>
            <h2 className="mt-2 text-[clamp(28px,3.95vw,76px)] font-extrabold leading-[1.14] tracking-[-0.015em] text-[var(--color-title)] 2xl:mt-3">
              {data.title}
            </h2>
            <p className="mx-auto mt-3 max-w-[820px] text-[15px] leading-[1.5] text-[var(--color-text-sage)] sm:text-[1rem] xl:text-[18px] 2xl:mt-4 2xl:text-[20px] 3xl:text-[23px]">
              {data.description[0] + " "}<br className="hidden md:block" />
              {data.description[1]}
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-[420px] grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 md:gap-4 xl:gap-6 2xl:mt-[44px] 2xl:max-w-[77vw] 2xl:gap-[30px] 3xl:max-w-[1476px]">
            {data.cards.map((card) => (
              <li key={card.id} className="min-w-0">
                <ContactCard card={card} contact={contact} arrowIcon={data.arrowIcon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const BOX =
  "w-full rounded-[10px] border border-[var(--color-contact-form-border)] bg-[var(--color-white)] pl-12 pr-4 text-[15px] text-[var(--color-title)] outline-none transition placeholder:text-[var(--color-contact-form-text)] focus:border-[var(--color-link)] focus:ring-2 focus:ring-[var(--color-link-20)] 2xl:pl-[60px] 2xl:text-[16px] 3xl:rounded-[12px] 3xl:pl-[74px] 3xl:text-[17px]";
const HEIGHT = "h-[52px] 2xl:h-[62px] 3xl:h-[72px]";
const ICON =
  "pointer-events-none absolute left-4 top-[26px] h-5 w-5 -translate-y-1/2 text-[var(--color-form-label)] 2xl:left-5 2xl:top-[31px] 2xl:h-[22px] 2xl:w-[22px] 3xl:left-[26px] 3xl:top-[36px] 3xl:h-6 3xl:w-6";

function Field({ label, icon, children, className = "" }: {
  label: string;
  icon: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`relative block min-w-0 ${className}`}>
      <span className="sr-only">{label}</span>
      <Icon name={icon} className={ICON} strokeWidth={1.8} />
      {children}
    </label>
  );
}

const ContactForm = ({ data, contact }: { data: ContactFormData; contact: ContactData }) => {
  const submit = useFormSubmit();
  const { fields } = data;

  return (
    <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 md:grid-cols-2 lg:grid-cols-[46%_27%_27%] xl:grid-cols-[48%_30%_22%]">
        <div className="relative isolate min-w-0 overflow-hidden bg-[linear-gradient(180deg,var(--color-bg-faq)_0%,var(--color-contact-form-gradient)_100%)] px-4 pb-10 pt-10 sm:px-6 sm:pt-12 md:col-span-2 lg:col-span-1 lg:pl-[clamp(32px,6.77vw,130px)] lg:pr-[clamp(24px,2.2vw,42px)] 2xl:pb-[50px] 2xl:pt-[64px] 3xl:pt-[70px]">
          <svg aria-hidden="true" viewBox="0 0 140 190" className="pointer-events-none absolute right-[5%] top-0 -z-10 w-[80px] text-[var(--color-contact-form-text-2)] 2xl:w-[120px]">
            <path fill="currentColor" d="M96 0c30 30 40 74 22 116-6 12-14 22-24 28-22-24-30-60-20-98 4-16 12-32 22-46Z" />
            <path fill="currentColor" d="M4 60c34-6 66 12 80 46 4 10 6 22 4 32-30 0-58-18-72-46-6-10-10-20-12-32Z" opacity=".8" />
            <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M92 142c2 14 8 28 20 44" />
          </svg>

          <SectionEyebrow compact className="[&>span:nth-child(2)]:font-medium [&>span:nth-child(2)]:text-[var(--color-title)] 3xl:[&>span:first-child]:w-[50px] 3xl:[&>span:last-child]:w-[50px] 3xl:[&>span:nth-child(2)]:text-[22px]">
            {data.label}
          </SectionEyebrow>
          <h2 className="mt-2 text-[clamp(30px,3.55vw,68px)] font-extrabold leading-[1.14] tracking-[-0.015em] text-[var(--color-title)] 2xl:mt-3">
            {data.title}
          </h2>
          <p className="mt-3 max-w-[720px] text-[15px] leading-[1.55] text-[var(--color-text-sage)] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px]">
            {data.description}
          </p>

          {/* remounting the form (via key) after each send clears every field */}
          <form key={submit.round} onSubmit={submit.onSubmit} onInput={submit.onInput} aria-busy={submit.sending} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:mt-7 2xl:gap-5 3xl:gap-x-[20px] 3xl:gap-y-[22px]">
            <Field label={fields.name.label} icon={fields.name.icon}>
              <input type="text" name="name" required autoComplete="name" placeholder={fields.name.label} className={`${BOX} ${HEIGHT}`} />
            </Field>
            <Field label={fields.phone.label} icon={fields.phone.icon}>
              <input type="tel" name="phone" required autoComplete="tel" placeholder={fields.phone.label} className={`${BOX} ${HEIGHT}`} />
            </Field>
            <Field label={fields.email.label} icon={fields.email.icon}>
              <input type="email" name="email" required autoComplete="email" placeholder={fields.email.label} className={`${BOX} ${HEIGHT}`} />
            </Field>
            <Field label={fields.subject.label} icon={fields.subject.icon}>
              <input type="text" name="subject" placeholder={fields.subject.label} className={`${BOX} ${HEIGHT}`} />
            </Field>
            <Field label={fields.message.label} icon={fields.message.icon} className="sm:col-span-2">
              <textarea
                name="message"
                required
                rows={4}
                placeholder={fields.message.label}
                className={`${BOX} block min-h-[130px] resize-y py-[15px] 2xl:py-[19px] 3xl:min-h-[152px] 3xl:py-[23px]`}
              />
            </Field>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submit.sending}
                className={`${ui.btnSolid} ${ui.btnYellow} group inline-flex disabled:cursor-wait disabled:opacity-80 h-[54px] w-full items-center justify-center gap-3 rounded-full text-[16px] font-bold 2xl:h-[60px] 2xl:text-[18px] 3xl:h-[66px] 3xl:gap-4 3xl:text-[19px]`}
              >
                {submit.sending ? (
                  <>
                    <Spinner name={data.formSuccess.sendingIcon} className="h-[1.1em] w-[1.1em]" />
                    {data.sendingText}
                  </>
                ) : (
                  <>
                    {data.submit.label}
                    <Icon name={data.submit.icon} className="h-[1.05em] w-[1.05em] transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
                  </>
                )}
              </button>
              {submit.showMessage && (
                <FormSuccess
                  name={submit.name}
                  title={data.successTitle}
                  message={data.successMessage}
                  leaving={submit.status === "leaving"}
                  onClose={submit.dismiss}
                  ui={data.formSuccess}
                  className="mt-4 2xl:mt-5"
                />
              )}
            </div>
          </form>

          <div className="mt-5 flex items-end gap-2 pl-[4%] 2xl:mt-6" aria-hidden="true">
            <svg viewBox="0 0 150 90" className="w-[90px] shrink-0 text-[var(--color-form-accent)] 2xl:w-[120px] 3xl:w-[145px]">
              <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="6 7" d="M4 78c20 8 42 6 52-8 6-10-2-20-12-18-10 2-12 14-2 18 16 6 40-10 58-32" />
              <path fill="currentColor" d="M146 4 100 22l18 10 2 22 10-16 10 6 6-40Z" />
              <path fill="var(--color-contact-form-fill)" d="m118 32 20-20-15 22-3 10v-12Z" />
            </svg>
            <p className="-rotate-[6deg] pb-2 font-script text-[22px] font-medium leading-[1] text-[var(--color-form-accent)] 2xl:text-[26px] 3xl:text-[30px]">
              {data.noteLines[0]}
              <br />
              <span className="pl-[0.8em]">{data.noteLines[1]}</span>
            </p>
          </div>
        </div>

        <div className="relative min-h-[380px] min-w-0 overflow-hidden sm:min-h-[460px] lg:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.image.src} alt={data.image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[40%_top]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,var(--color-white-82)_0%,var(--color-white-55)_22%,var(--color-white-0)_48%)]" />
          <HandwrittenNote lines={contact.noteLines} color="text-[var(--color-form-accent)]" className="absolute left-[7%] top-[14%] text-[clamp(26px,2.3vw,44px)] md:text-[clamp(24px,3.4vw,34px)] lg:text-[clamp(18px,2.1vw,40px)]" />
        </div>

        <div className="relative isolate flex min-w-0 flex-col justify-center overflow-hidden bg-[var(--color-contact-form-bg)] px-5 py-10 text-[var(--color-white)] sm:px-7 lg:px-5 xl:px-6 2xl:px-8 3xl:pl-[47px] 3xl:pr-[38px]">
          <svg aria-hidden="true" viewBox="0 0 220 160" className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[150px] text-[var(--color-white-7)] 2xl:w-[210px]">
            <path fill="currentColor" d="M220 30c-56 4-96 40-106 92-2 12-2 26 2 38h104V30Z" />
            <path fill="currentColor" d="M0 160c20-44 62-66 116-60-8 26-26 46-50 60H0Z" />
          </svg>

          <ul className="space-y-6 xl:space-y-7 2xl:space-y-9 3xl:space-y-[50px]">
            {data.details.map((detail) => {
              const { id, icon, title } = detail;
              const lines = contactLines(detail, contact);
              return (
              <li key={id} className="flex min-w-0 items-center gap-4 xl:gap-5 3xl:gap-[26px]">
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[var(--color-contact-form-stroke)] text-[var(--color-accent)] 2xl:h-[62px] 2xl:w-[62px] 3xl:h-[72px] 3xl:w-[72px]">
                  <Icon name={icon} className="h-[46%] w-[46%]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[16px] font-bold leading-tight lg:text-[15px] 2xl:text-[17px] 3xl:text-[19px]">{title}</span>
                  <span className="mt-1.5 block break-words text-[14.5px] leading-[1.55] text-[var(--color-white-85)] lg:text-[13.5px] 2xl:text-[16px] 3xl:text-[18px]">
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
              );
            })}
          </ul>

          <span className="my-7 block h-px w-full bg-[var(--color-white-25)] 2xl:my-9 3xl:my-[46px]" />

          <ul className="space-y-5 2xl:space-y-6 3xl:space-y-[26px]">
            {data.promises.map(({ id, icon, title, subtitle: text }) => (
              <li key={id} className="flex min-w-0 items-center gap-4 xl:gap-5 3xl:gap-[26px]">
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[var(--color-contact-form-stroke)] text-[var(--color-white)] 2xl:h-[52px] 2xl:w-[52px] 3xl:ml-[6px] 3xl:mr-[6px] 3xl:h-[60px] 3xl:w-[60px]">
                  <Icon name={icon} className="h-[50%] w-[50%]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-bold leading-tight lg:text-[14px] 2xl:text-[16px] 3xl:text-[17px]">{title}</span>
                  <span className="mt-1.5 block text-[13.5px] leading-snug text-[var(--color-white-75)] lg:text-[12.5px] 2xl:text-[14.5px] 3xl:text-[16px]">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ContactMap = ({ data, contact }: { data: ContactMapData; contact: ContactData }) => {
  const src = mapUrl(contact.mapEmbedUrl, contact.address);
  return (
    <section id="map" aria-label={data.label} className="w-full scroll-mt-[90px] bg-[var(--color-map-bg)] 2xl:scroll-mt-[120px]">
      <iframe
        src={src}
        title={data.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[340px] w-full border-0 sm:h-[420px] lg:h-[520px] 2xl:h-[660px] 3xl:h-[830px]"
      />
    </section>
  );
};

export const Contact = ({ data }: ContactProps) => {
  if (!data) return null;
  return (
    <>
      <ContactInfo data={data.info} contact={data} />
      <ContactForm data={data.form} contact={data} />
      <ContactMap data={data.map} contact={data} />
    </>
  );
};
