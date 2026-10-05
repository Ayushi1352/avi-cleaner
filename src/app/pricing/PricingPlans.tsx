import Link from "next/link";
import { ArrowRight, Building2, Crown, House } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import { HomeIcon, LeafIcon, ShieldCheckIcon, UsersIcon } from "@/components/icons";
import pricingData from "@/data/pricing.json";

// Text lives in src/data/pricing.json under text.PricingPlans.
const copy = pricingData.text.PricingPlans;

// Photo beside the Compare Plans table.
const COMPARE_PHOTO = "/images/pricing/compare-cleaner.webp";

// Icons by the name used in src/data/pricing.json.
const plansIcons = {
  house: House,
  building2: Building2,
  crown: Crown,
};

// Content lives in src/data/pricing.json.
const plans = pricingData.plans.map((item) => ({ ...item, icon: plansIcons[item.icon] }));

function WalletIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 2.3 6 6h12.5V3a.8.8 0 0 0-.9-.7Z" />
      <path
        fillRule="evenodd"
        d="M4.5 7A2.5 2.5 0 0 0 2 9.5v9A2.5 2.5 0 0 0 4.5 21h14a2.5 2.5 0 0 0 2.5-2.5V17h-4.5a3 3 0 0 1 0-6H21V9.5A2.5 2.5 0 0 0 18.5 7h-14Z"
      />
      <path fillRule="evenodd" d="M16.5 12.3a1.7 1.7 0 0 0 0 3.4H22v-3.4h-5.5Zm.2 2.5a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" />
    </svg>
  );
}

// Icons by the name used in src/data/pricing.json.
const perksIcons = {
  wallet: WalletIcon,
  users: UsersIcon,
  leaf: LeafIcon,
  "shield-check": ShieldCheckIcon,
};

// Content lives in src/data/pricing.json.
const perks = pricingData.perks.map((item) => ({ ...item, icon: perksIcons[item.icon] }));

// [feature, basic, standard, premium]
// Content lives in src/data/pricing.json.
const compareRows = pricingData.compareRows;

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#14503a" />
      <path d="m7.5 12.3 3 3 6-6.3" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({ plan }: { plan: any }) {
  const Icon = plan.icon;
  return (
    <article
      className={`relative flex h-full min-w-0 flex-col items-center rounded-[20px] px-5 pb-7 pt-9 text-center shadow-[0_14px_36px_-26px_rgba(11,42,28,0.3)] sm:px-7 lg:px-4 xl:px-6 2xl:rounded-[24px] 2xl:pb-9 2xl:pt-10 3xl:pb-[40px] 3xl:pt-[45px] ${plan.popular ? "bg-[#edfaf3] ring-2 ring-[#d9f1e4]" : "bg-white"
        }`}
    >
      {plan.popular && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[10px] bg-[#174a38] px-5 py-1.5 text-[13px] font-semibold text-white 2xl:px-7 2xl:py-2 2xl:text-[17px] 3xl:rounded-[12px] 3xl:px-[38px] 3xl:py-[9px] 3xl:text-[23px]">
          {copy.mostPopular}
        </span>
      )}

      <span className="flex h-[76px] w-[76px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1d4a37] text-white shadow-sm transition-transform duration-300 hover:scale-115 lg:h-[68px] lg:w-[68px] xl:h-[84px] xl:w-[84px] 2xl:h-[100px] 2xl:w-[100px] 3xl:h-[122px] 3xl:w-[122px]">
        <Icon className="h-[50%] w-[50%]" strokeWidth={1.5} />
      </span>

      <h3 className="mt-4 text-[22px] font-bold leading-tight text-[#0b1a12] 2xl:text-[27px] 3xl:mt-[26px] 3xl:text-[32px]">
        {plan.name}
      </h3>

      <p className="mt-1 flex items-start justify-center whitespace-nowrap text-[#174634] 3xl:mt-0">
        <span className="mt-[0.2em] text-[20px] font-bold leading-none lg:text-[17px] xl:text-[21px] 2xl:text-[26px] 3xl:text-[32px]">$</span>
        <span className="text-[46px] font-bold leading-[1.15] tracking-[-0.01em] lg:text-[38px] xl:text-[48px] 2xl:text-[60px] 3xl:text-[73px]">
          {plan.price}
        </span>
        <span className="ml-1.5 self-end pb-[0.55em] text-[14px] font-normal text-[#5f6c69] xl:text-[15px] 2xl:text-[18px] 3xl:ml-2.5 3xl:text-[22px]">
          {copy.month}
        </span>
      </p>

      <p className="mt-2 text-[15px] leading-[1.5] text-[#5f6c69] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:mt-3 3xl:text-[25px]">
        {plan.text[0]} <br className="hidden 2xl:block" />
        {plan.text[1]}
      </p>

      <span className="mt-5 block h-px w-[86%] bg-[#dbe7e1] 2xl:mt-6" />

      <ul className="mt-5 w-full space-y-2.5 text-left lg:px-0 xl:px-3 2xl:mt-6 2xl:space-y-3.5 2xl:px-8 3xl:mt-[26px] 3xl:space-y-[13px] 3xl:px-[44px]">
        {plan.features.map((f: string) => (
          <li key={f} className="flex min-w-0 items-start gap-2.5 text-[15px] font-medium leading-[1.4] text-[#1d2433] lg:text-[13.5px] xl:text-[16px] 2xl:gap-3.5 2xl:text-[20px] 3xl:gap-[16px] 3xl:text-[23.5px]">
            <CheckIcon className="mt-[0.1em] h-[1.15em] w-[1.15em] shrink-0" />
            <span className="min-w-0">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7 2xl:pt-9 3xl:pt-[44px]">
        <Link
          href="/book-now"
          className="btn-solid btn-yellow group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-9 py-3 text-[15px] font-bold [--btn-fg:#101418] [--btn-ink:#101418] [--btn:#fdd659] xl:px-11 xl:text-[16px] 2xl:px-14 2xl:py-4 2xl:text-[20px] 3xl:h-[77px] 3xl:w-[331px] 3xl:gap-5 3xl:px-0 3xl:py-0 3xl:text-[25px]"
        >
          {copy.getStarted}
          <ArrowRight className="h-[1em] w-[1em] transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
        </Link>
      </div>
    </article>
  );
}

/** Pricing page body: plan cards, perks strip and the Compare Plans table. */
export default function PricingPlans() {
  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative overflow-hidden bg-[#f8fdfa] pb-10 pt-12 sm:pt-14 2xl:pb-[14px] 2xl:pt-[48px]">
        {/* Leaf sprig, left */}
        <svg aria-hidden="true" viewBox="0 0 180 340" className="pointer-events-none absolute left-0 top-[150px] hidden w-[110px] text-[#e3f4ea] md:block 2xl:top-[170px] 2xl:w-[180px]">
          <path fill="currentColor" d="M176 6C96 2 36 40 28 110c-3 26 6 50 22 66 60-14 108-66 122-140 2-10 4-20 4-30Z" />
          <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M52 172C40 220 20 270-6 330" />
          <path fill="none" stroke="#f8fdfa" strokeWidth="4" strokeLinecap="round" d="M150 30C110 70 76 116 54 168" />
        </svg>
        {/* Leaves, right */}
        <svg aria-hidden="true" viewBox="0 0 220 220" className="pointer-events-none absolute right-0 top-4 hidden w-[130px] text-[#e3f4ea] md:block 2xl:top-[30px] 2xl:w-[215px]">
          <path fill="currentColor" d="M176 8c-34 30-48 78-34 128 4 14 10 26 20 36 30-22 50-58 50-102 0-22-12-44-36-62Z" />
          <path fill="currentColor" d="M10 150c36-22 86-22 128 6 10 8 18 16 22 26-44 14-90 10-124-12-10-6-20-12-26-20Z" />
          <path fill="none" stroke="#f8fdfa" strokeWidth="4" strokeLinecap="round" d="M178 30c-10 50-8 100 -14 140M34 152c40 4 84 14 124 30" />
          <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M162 172c14 12 32 24 60 30" />
        </svg>

        <div className="container-x relative">
          {/* ---------- Header ---------- */}
          <div className="mx-auto max-w-[1100px] text-center">
            <SectionEyebrow
              center
              compact
              className="[&>span:nth-child(2)]:font-medium 3xl:[&>span:first-child]:w-[52px] 3xl:[&>span:last-child]:w-[52px] 3xl:[&>span:nth-child(2)]:text-[24px]"
            >
              {copy.plansAndPricing}
            </SectionEyebrow>
            <h2 className="mt-3 text-[clamp(28px,3.35vw,64px)] font-extrabold leading-[1.14] tracking-[-0.015em] text-[#0b1a12] 2xl:mt-5">
              {copy.affordableCleaningPlans}
              <br className="hidden sm:block" />{" " + copy.forEveryNeed}
            </h2>
            <p className="mx-auto mt-3 text-[15px] leading-[1.5] text-[#5f6c69] sm:text-base xl:text-[18px] 2xl:mt-4 2xl:text-[21px] 3xl:text-[25.5px]">
              {copy.chooseThePerfectPlanFor + " "}<br className="hidden xl:block" />
              {copy.helpsYouGetProfessionalCleaning}
            </p>
          </div>

          {/* ---------- Plans ---------- */}
          <ul className="mx-auto mt-12 grid max-w-[480px] grid-cols-1 gap-9 md:max-lg:max-w-none md:max-lg:grid-cols-2 md:max-lg:gap-x-5 md:max-lg:gap-y-9 lg:max-w-none lg:grid-cols-3 lg:gap-5 xl:gap-6 2xl:mt-[56px] 2xl:gap-[30px] 3xl:mt-[66px] 3xl:pl-[28px] 3xl:pr-[17px]">
            {plans.map((p) => (
              <li key={p.name} className="min-w-0">
                <PlanCard plan={p} />
              </li>
            ))}
          </ul>

          {/* ---------- Perks strip ---------- */}
          <ul className="mt-8 grid grid-cols-1 gap-y-5 rounded-[18px] bg-[#e1f7eb] px-5 py-6 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-0 lg:px-2 2xl:mt-[36px] 2xl:rounded-[22px] 2xl:py-8 3xl:ml-[41px] 3xl:mr-[31px] 3xl:py-[34px]">
            {perks.map(({ icon: Icon, title, sub }, i) => (
              <li
                key={title}
                className={`flex min-w-0 items-center gap-3 lg:justify-center lg:px-3 xl:gap-4 2xl:gap-5 ${i > 0 ? "lg:border-l lg:border-[#cfeadb]" : ""
                  }`}
              >
                <span className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/80 text-[#174a38] shadow-sm transition-transform duration-300 hover:scale-115 lg:h-11 lg:w-11 xl:h-14 xl:w-14 2xl:h-[80px] 2xl:w-[80px] 3xl:h-[104px] 3xl:w-[104px]">
                  <Icon className="h-[60%] w-[60%]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-bold leading-tight text-[#0b1a12] lg:text-[13.5px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px]">
                    {title}
                  </span>
                  <span className="mt-1 block text-[13.5px] leading-tight text-[#5f6c69] lg:text-[12.5px] xl:text-[14px] 2xl:mt-2 2xl:text-[17px] 3xl:text-[21px]">
                    {sub}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* ---------- Compare plans ---------- */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,31%)] lg:gap-6 xl:gap-8 2xl:mt-[48px] 3xl:grid-cols-[1137px_553px] 3xl:gap-[45px] 3xl:pl-[42px]">
            <div className="min-w-0">
              <h2 className="text-[clamp(28px,2.9vw,55px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#0b1a12]">
                {copy.comparePlans}
              </h2>
              <p className="mt-1.5 text-[15px] leading-[1.5] text-[#5f6c69] sm:text-base xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px]">
                {copy.findTheRightPlanWith}
              </p>

              <div className="mt-4 overflow-hidden rounded-[14px] bg-white shadow-[0_10px_30px_-22px_rgba(11,42,28,0.35)] ring-1 ring-[#e3ece8] 2xl:mt-5 2xl:rounded-[18px]">
                <table className="w-full table-fixed border-collapse text-[12.5px] text-[#1d2433] min-[420px]:text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[23px]">
                  <colgroup>
                    <col className="w-[37%] sm:w-[32%] lg:w-[37%] xl:w-[32%]" />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr className="bg-[#1d493a] text-white">
                      <th scope="col" className="px-2.5 py-2.5 text-left font-semibold sm:px-5 2xl:py-3.5 3xl:h-[62px] 3xl:px-[34px] 3xl:py-0">
                        {copy.features}
                      </th>
                      {["Basic", "Standard", "Premium"].map((h) => (
                        <th key={h} scope="col" className="border-l border-white/25 px-1 py-2.5 text-center font-semibold 2xl:py-3.5 3xl:py-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map(([feature, ...cells]) => (
                      <tr key={feature as string} className="border-t border-[#e6eeea]">
                        <th scope="row" className="px-2.5 py-2.5 text-left font-medium leading-snug sm:px-5 2xl:py-3 3xl:h-[55px] 3xl:px-[34px] 3xl:py-0">
                          {feature}
                        </th>
                        {cells.map((on, i) => (
                          <td key={i} className="border-l border-[#e6eeea] px-1 text-center align-middle">
                            {on ? (
                              <>
                                <CheckIcon className="mx-auto h-[1.1em] w-[1.1em]" />
                                <span className="sr-only">{copy.included}</span>
                              </>
                            ) : (
                              <>
                                <span aria-hidden="true" className="text-[#8b9794]">&mdash;</span>
                                <span className="sr-only">{copy.notIncluded}</span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Photo + badge */}
            <div className="relative mx-auto aspect-[553/594] w-full max-w-[520px] overflow-hidden rounded-[18px] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[380px] lg:max-w-none 2xl:rounded-[22px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={COMPARE_PHOTO}
                alt={copy.smilingAvicleanerCleanerHoldingA}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute bottom-0 right-0 flex max-w-[calc(100%-12px)] items-center gap-3 rounded-tl-[14px] bg-[#1d4a37]/95 px-4 py-3 text-white lg:gap-2.5 lg:px-3 xl:gap-4 xl:px-5 xl:py-4 2xl:rounded-tl-[18px] 3xl:gap-[24px] 3xl:py-[22px] 3xl:pl-[28px] 3xl:pr-[58px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1d4a37] lg:h-10 lg:w-10 xl:h-14 xl:w-14 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[92px] 3xl:w-[92px]">
                  <HomeIcon className="h-1/2 w-1/2" />
                </span>
                <span className="text-[14px] font-medium leading-[1.4] lg:text-[13px] xl:text-[16px] 2xl:text-[21px] 3xl:text-[26px]">
                  {copy.aCleanerHome}
                  <br />{copy.aHappierYou}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
