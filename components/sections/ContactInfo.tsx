import type { CompanyData, ContactCardItem, ContactInfoData, GlobalUIData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { contactField } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

function ContactCard({ card, company, arrowIcon }: { card: ContactCardItem; company: CompanyData; arrowIcon: string }) {
  const { lines, href } = contactField(company, card.field);
  return (
    <article className="flex h-full min-w-0 flex-col items-center rounded-[16px] bg-[linear-gradient(180deg,var(--color-white)_62%,var(--color-contact-card-gradient)_100%)] px-4 pb-7 pt-7 text-center shadow-[0_16px_40px_-26px_var(--color-shadow-card-40)] md:px-3 md:pb-[clamp(20px,2.35vw,45px)] md:pt-[clamp(20px,1.85vw,35px)] xl:px-5 2xl:rounded-[20px]">
      {/* Icon with the pale blob peeking out behind it */}
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
          href={card.action.href || href}
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

/** Contact page: "Our Contact Information" header and the three contact cards. */
export const ContactInfo = ({ data, company, ui: labels }: { data?: ContactInfoData; company: CompanyData; ui: GlobalUIData }) => {
  if (!data) return null;
  return (
    <section className="w-full bg-[var(--color-white)] py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative isolate overflow-hidden bg-[linear-gradient(180deg,var(--color-contact-stroke-2)_0%,var(--color-contact-fill)_100%)] pb-12 pt-11 sm:pb-14 sm:pt-12 2xl:pb-[72px] 2xl:pt-[48px] 3xl:pb-[90px] 3xl:pt-[52px]">
        {/* Leaf sprig, top left */}
        <svg aria-hidden="true" viewBox="0 0 230 400" className="pointer-events-none absolute left-0 top-4 -z-10 hidden w-[120px] text-[var(--color-contact-text)] opacity-80 md:block xl:w-[160px] 2xl:top-[30px] 2xl:w-[200px] 3xl:w-[230px]">
          <path fill="currentColor" d="M214 6C128 4 62 44 50 122c-4 26 4 52 20 70 62-18 112-70 132-146 4-14 8-28 12-40Z" />
          <path fill="currentColor" d="M0 96c40 8 70 44 74 92 1 16-2 30-8 42-30-14-54-44-62-84-2-16-4-34-4-50Z" opacity=".75" />
          <path fill="currentColor" d="M0 230c34 0 62 24 70 62 2 12 2 24-2 34-26-6-48-26-60-56-4-12-8-26-8-40Z" opacity=".6" />
          <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M70 190C56 250 30 320-4 396" />
          <path fill="none" stroke="var(--color-contact-stroke-2)" strokeWidth="4" strokeLinecap="round" d="M186 36C142 78 104 128 74 186" />
        </svg>
        {/* Soft waves along the bottom */}
        <svg aria-hidden="true" viewBox="0 0 1920 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[90px] w-full 2xl:h-[150px]">
          <path fill="var(--color-white)" fillOpacity=".55" d="M0 110c220-70 470-80 720-30s520 60 760 10c180-36 320-40 440-20v110H0Z" />
          <path fill="var(--color-icon-bg-mint)" fillOpacity=".7" d="M0 150c260-50 520-50 800-14s600 30 1120-40v84H0Z" />
        </svg>

        {/* Handwritten notes and paper plane (wide screens only) */}
        <HandwrittenNote lines={labels.noteLines} className="absolute right-[3%] top-[6%] hidden text-[clamp(26px,2.3vw,44px)] xl:block" color="text-[var(--color-form-accent)]" />
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
                <ContactCard card={card} company={company} arrowIcon={data.arrowIcon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
