import PhotoSlot from "@/components/PhotoSlot";
import SectionEyebrow from "@/components/SectionEyebrow";
import { HomeIcon } from "@/components/icons";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#0f4a35" />
      <path d="m7.5 12.3 3 3 6-6.3" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** "What's Included — Our Cleaning Checklist" with photo. */
export default function CleaningChecklist({ service }: { service: any }) {
  const half = Math.ceil(service.checklist.length / 2);
  const columns = [service.checklist.slice(0, half), service.checklist.slice(half)];

  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-8 rounded-[22px] bg-[#ecfaf3] p-5 sm:p-8 lg:grid-cols-[1fr_minmax(0,44%)] xl:gap-10 xl:p-10 2xl:gap-[40px] 2xl:rounded-[26px] 2xl:py-[45px] 2xl:pl-[60px] 2xl:pr-[42px] 3xl:grid-cols-[1fr_670px] 3xl:gap-[28px] 3xl:pl-[64px]">
          {/* Text */}
          <div className="min-w-0">
            <SectionEyebrow compact className="3xl:[&>span:first-child]:w-[46px] 3xl:[&>span:last-child]:w-[46px] 3xl:[&>span:nth-child(2)]:text-[23px]">What&apos;s Included</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(28px,3.3vw,63px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#0b1a12] 2xl:mt-4">
              Our Cleaning Checklist
            </h2>
            <p className="mt-3 max-w-[760px] text-[15px] leading-[1.6] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-4 2xl:text-[22px] 3xl:max-w-[750px] 3xl:text-[28.5px] 3xl:leading-[1.46]">
              {service.checklistIntro}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] 2xl:mt-9 2xl:gap-x-8 3xl:mt-[46px] 3xl:grid-cols-[505px_1fr] 3xl:gap-x-0">
              {columns.map((col, c) => (
                <ul key={c} className="space-y-3.5 2xl:space-y-[26px]">
                  {col.map((item: string) => (
                    <li key={item} className="flex min-w-0 items-start gap-3 text-[15px] leading-snug text-[#1d2433] xl:text-[16px] 2xl:gap-4 2xl:text-[20px] 3xl:gap-[18px] 3xl:whitespace-nowrap 3xl:text-[23px]">
                      <CheckIcon className="mt-[0.05em] h-[1.3em] w-[1.3em] shrink-0" />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative mx-auto w-full min-w-0 max-w-[700px]">
            <PhotoSlot
              src={service.checklistImage || "/images/services/checklist-room.webp"}
              alt={service.title}
              label={(service.checklistImage || "/images/services/checklist-room.webp").replace("/images/", "")}
              className="relative aspect-[680/550] w-full rounded-[16px] 2xl:rounded-[18px]"
            />
            <div className="absolute bottom-0 right-0 flex max-w-[calc(100%-16px)] items-center gap-3 rounded-[14px] bg-[#0b3f2e] px-4 py-3 text-white 2xl:gap-5 2xl:rounded-[18px] 2xl:px-7 2xl:py-5 3xl:gap-[28px] 3xl:py-[26px] 3xl:pl-[22px] 3xl:pr-[30px]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0f4a35] 2xl:h-[56px] 2xl:w-[56px] 3xl:h-[84px] 3xl:w-[84px]">
                <HomeIcon className="h-1/2 w-1/2" />
              </span>
              <span className="text-[14px] font-medium leading-[1.45] sm:text-[15px] 2xl:text-[20px] 3xl:text-[26px]">
                A Healthier Home
                <br />A Happier You
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
