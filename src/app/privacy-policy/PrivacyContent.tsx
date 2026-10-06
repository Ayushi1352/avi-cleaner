import SectionEyebrow from "@/components/SectionEyebrow";
import { site, contact } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiContact = contact;

// Text lives in src/data/site.json.
const copy = site.policiesPage.text.PrivacyContent;

// Content lives in src/data/site.json.
const sections = site.policiesPage.privacy;

/** Privacy page body: intro and the numbered policy sections. */
export default function PrivacyContent() {
  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="bg-[#f6fbf9] pb-8 pt-12 sm:pt-14 2xl:pb-[30px] 2xl:pt-[58px]">
        <div className="container-x">
          <div className="mx-auto max-w-[1500px] text-center">
            <SectionEyebrow
              center
              className="[&>span:nth-child(2)]:tracking-[0.14em] 2xl:gap-6 3xl:[&>span:first-child]:w-[88px] 3xl:[&>span:last-child]:w-[88px] 3xl:[&>span:nth-child(2)]:text-[25px]"
            >
              {copy.privacyPolicy}
            </SectionEyebrow>
            <h2 className="mt-3 text-[clamp(30px,4.2vw,80px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0b1533] 2xl:mt-4">
              {copy.weValue + " "}<span className="text-[#0f4a35]">{copy.yourPrivacy}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[1480px] text-balance text-[15px] leading-[1.5] text-[#4b5565] sm:text-base xl:text-[19px] 2xl:mt-6 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px]">
              {copy.atAvicleanerWeRespectYour + " "}<br className="hidden 3xl:block" />
              {copy.thisPrivacyPolicyExplainsHow + " "}<br className="hidden 3xl:block" />
              {copy.ourWebsiteOrUseOur}
            </p>
          </div>

          <ol className="mt-8 2xl:mt-[52px] 3xl:px-[38px]">
            {sections.map((s, i) => (
              <li
                key={s.title}
                className={`flex min-w-0 gap-4 py-6 sm:gap-6 lg:gap-8 2xl:gap-[76px] 2xl:py-[32px] ${
                  i < sections.length - 1 ? "border-b border-[#dfe7e3]" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d9f0e3] text-[17px] font-bold text-[#124734] sm:h-14 sm:w-14 sm:text-[20px] xl:h-[72px] xl:w-[72px] xl:text-[26px] 2xl:h-[88px] 2xl:w-[88px] 2xl:text-[32px] 3xl:h-[102px] 3xl:w-[102px] 3xl:text-[39px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 border-l border-[#dfe7e3] pl-4 sm:pl-6 lg:pl-8 2xl:pl-[78px]">
                  <h3 className="text-[18px] font-bold leading-tight text-[#0f4a35] sm:text-[20px] xl:text-[25px] 2xl:text-[31px] 3xl:text-[37px]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.5] text-[#4b5565] sm:text-base xl:text-[19px] 2xl:mt-2 2xl:text-[24px] 3xl:text-[30.5px] 3xl:leading-[42px]">
                    {s.text}
                  </p>
                  {s.contact && (
                    <p className="mt-3 flex flex-col gap-2 text-[15px] font-bold text-[#0f4a35] sm:text-base lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 xl:text-[19px] 2xl:mt-5 2xl:gap-x-11 2xl:text-[24px] 3xl:text-[31px]">
                      <a href={uiContact.emailHref} className="break-all hover:text-green">
                        {uiContact.email}
                      </a>
                      <span aria-hidden="true" className="hidden h-[1.1em] w-px bg-[#4b5565] lg:block" />
                      <a href={uiContact.phoneHref} className="hover:text-green">
                        {uiContact.phone}
                      </a>
                      <span aria-hidden="true" className="hidden h-[1.1em] w-px bg-[#4b5565] lg:block" />
                      <span className="font-medium text-[#0b1a12]">{uiContact.address}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
