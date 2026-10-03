import SectionEyebrow from "@/components/SectionEyebrow";
import HandwrittenNote from "@/components/HandwrittenNote";
import { StarIcon } from "@/components/icons";
import { RoundQuoteIcon } from "@/components/solidIcons";

// Client reviews. Replace the stand-in photos with real client headshots.
const reviews = [
  {
    quote: "Excellent service! The team was professional, punctual and very thorough. Our office has never looked this clean. Highly recommended!",
    name: "Rahul Sharma",
    role: "Business Owner",
    avatar: "/images/team/team-2.webp",
  },
  {
    quote: "Very reliable and trustworthy team. They pay attention to every detail and deliver outstanding results every time.",
    name: "Priya Verma",
    role: "Homeowner",
    avatar: "/images/team/team-1.webp",
  },
  {
    quote: "We’ve been using their services for over a year now. Always on time, friendly staff and excellent quality cleaning.",
    name: "Amit Kapoor",
    role: "Office Manager",
    avatar: "/images/team/team-4.webp",
  },
  {
    quote: "Great experience! The team transformed our home and made it feel fresh and healthy. Will definitely book again.",
    name: "Sneha Gupta",
    role: "Homeowner",
    avatar: "/images/team/team-6.webp",
  },
  {
    quote: "Professional, courteous and efficient. They use quality products and really care about customer satisfaction.",
    name: "Vikram Singh",
    role: "Facility Manager",
    avatar: "/images/team/team-5.webp",
  },
  {
    quote: "Our workspace is now cleaner and more productive. Highly recommended for commercial cleaning services!",
    name: "Neha Malhotra",
    role: "HR Manager",
    avatar: "/images/team/team-3.webp",
  },
  {
    quote: "Amazing service! Friendly staff and excellent attention to detail. My house feels so fresh and clean.",
    name: "Karan Mehta",
    role: "Homeowner",
    avatar: "/images/team/team-11.webp",
  },
  {
    quote: "Reliable and professional cleaning service. They made our office look brand new. Great work!",
    name: "Anjali Rao",
    role: "Business Owner",
    avatar: "/images/team/team-10.webp",
  },
  {
    quote: "The team is fantastic! They are punctual, well-trained and very polite. I’m really happy with their service.",
    name: "Suresh Nair",
    role: "Apartment Resident",
    avatar: "/images/team/team-13.webp",
  },
];

function ReviewCard({ review }: { review: any }) {
  return (
    <article className="relative flex h-full min-w-0 flex-col rounded-[14px] bg-white px-5 pb-5 pt-6 shadow-[0_12px_32px_-24px_rgba(11,42,28,0.35)] sm:px-6 2xl:rounded-[18px] 2xl:px-8 2xl:pb-6 2xl:pt-7 3xl:px-[39px] 3xl:pb-[18px] 3xl:pt-[32px]">
      {/* Pale closing quote mark, top right */}
      <RoundQuoteIcon
        className="absolute right-4 top-4 h-9 w-9 rotate-180 text-[#dcf2e6] sm:h-10 sm:w-10 2xl:right-6 2xl:top-5 2xl:h-12 2xl:w-12 3xl:right-[30px] 3xl:top-[22px] 3xl:h-[58px] 3xl:w-[58px]"
      />

      <div className="flex gap-1 text-[#f8a91c] 3xl:gap-[5px]" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-[18px] w-[18px] 2xl:h-[22px] 2xl:w-[22px] 3xl:h-[28px] 3xl:w-[28px]" />
        ))}
      </div>

      <blockquote className="mt-3 pr-6 text-[15px] leading-[1.5] text-[#5a6172] lg:pr-2 lg:text-[14px] xl:text-[16px] 2xl:mt-4 2xl:pr-8 2xl:text-[19px] 3xl:mt-[14px] 3xl:pr-[34px] 3xl:text-[22.5px] 3xl:leading-[31px]">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <footer className="mt-auto flex items-center gap-3.5 pt-4 2xl:gap-5 2xl:pt-5 3xl:gap-[22px] 3xl:pt-[18px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.avatar}
          alt={review.name}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-full bg-[#e8f1ee] object-cover object-top lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 3xl:h-[97px] 3xl:w-[97px]"
        />
        <span className="min-w-0">
          <span className="block text-[16px] font-bold leading-tight text-[#12183a] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[23.5px]">
            {review.name}
          </span>
          <span className="mt-1 block text-[14px] leading-tight text-[#8b94a3] lg:text-[13px] xl:text-[15px] 2xl:mt-1.5 2xl:text-[18px] 3xl:text-[21px]">
            {review.role}
          </span>
        </span>
      </footer>
    </article>
  );
}

/** Testimonial page body: "What Our Clients Say" with a grid of reviews. */
export default function TestimonialsGrid() {
  return (
    <section className="w-full bg-white py-8 sm:py-9 xl:py-10 2xl:py-[36px]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-[#eef8f5] to-[#e6f5ef] pb-10 pt-12 sm:pt-14 2xl:pb-[53px] 2xl:pt-[44px]">
        {/* Leaf sprig, top left */}
        <svg aria-hidden="true" viewBox="0 0 260 420" className="pointer-events-none absolute left-0 top-4 hidden w-[150px] text-[#e2f3eb] md:block 2xl:w-[250px]">
          <path fill="currentColor" d="M200 20C120 30 70 80 62 150c-2 22 4 42 16 58 58-22 100-80 116-150 2-12 6-26 6-38Z" />
          <path fill="currentColor" d="M-10 150c50 10 82 54 80 110 0 16-6 32-14 44-40-22-64-62-66-110V150Z" />
          <path fill="currentColor" d="M110 300c20-46 62-74 118-78-16 48-58 76-118 78Z" />
          <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M80 206C60 270 30 340 -10 410" />
        </svg>
        {/* Soft curve, bottom right */}
        <svg aria-hidden="true" viewBox="0 0 400 500" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 right-0 hidden h-[60%] w-[22%] text-[#dff2ea] lg:block">
          <path fill="currentColor" d="M400 0C330 120 300 230 240 330 190 410 110 470 0 500h400V0Z" />
        </svg>
        <HandwrittenNote className="absolute right-[5%] top-10 hidden text-[34px] xl:block 2xl:right-[6%] 2xl:top-[26px] 2xl:text-[40px] 3xl:text-[46px]" />

        <div className="container-x relative">
          <div className="mx-auto max-w-[1000px] text-center">
            <SectionEyebrow
              center
              compact
              className="[&>span:nth-child(2)]:font-semibold 2xl:gap-8 3xl:gap-[44px] 3xl:[&>span:first-child]:w-[97px] 3xl:[&>span:last-child]:w-[97px] 3xl:[&>span:nth-child(2)]:text-[23px] [&>span:first-child]:h-[2px] [&>span:last-child]:h-[2px]"
            >
              Testimonials
            </SectionEyebrow>
            <h2 className="mt-2 text-[clamp(30px,3.15vw,60px)] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#0e2f25] 2xl:mt-3">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-2 text-[15px] leading-[1.6] text-[#5a6172] sm:text-base xl:text-[18px] 2xl:mt-3 2xl:text-[20px] 3xl:text-[23px] 3xl:leading-[38px]">
              Real stories from our happy clients who trust us for cleaner,
              healthier and <br className="hidden xl:block" />
              happier spaces.
            </p>
          </div>

          <ul className="mx-auto mt-9 grid max-w-[520px] grid-cols-1 gap-5 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6 2xl:mt-[34px] 2xl:gap-[26px] 3xl:gap-x-[28px] 3xl:pl-[20px] 3xl:pr-[14px]">
            {reviews.map((r) => (
              <li key={r.name} className="min-w-0">
                <ReviewCard review={r} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
