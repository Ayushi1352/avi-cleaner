"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionTag from "./SectionTag";
import CarouselDots from "./CarouselDots";
import useCarousel, { slideClass, trackClass } from "./useCarousel";
import { BuildingIcon, HomeIcon, LeafIcon } from "./icons";

const posts = [
  {
    slug: "top-5-tips-for-a-spotless-home",
    day: "18",
    month: "Mar 2024",
    category: "Home Cleaning",
    icon: HomeIcon,
    title: "Top 5 Tips for a Spotless Home",
    excerpt:
      "Keep your home fresh and organized with these simple yet effective cleaning tips from our experts.",
    image: "/images/home/blog-spotless-home.webp",
    author: { name: "Priya Sharma", role: "Cleaning Expert", avatar: "/images/blog-author-3.webp" },
  },
  {
    slug: "why-professional-cleaning-saves-you-time",
    day: "26",
    month: "Apr 2024",
    category: "Cleaning Tips",
    icon: BuildingIcon,
    title: "Why Professional Cleaning Saves You Time",
    excerpt:
      "Discover how professional cleaning services can help you save time, reduce stress, and enjoy a healthier space.",
    image: "/images/home/blog-professional-cleaning.webp",
    author: { name: "Rahul Mehta", role: "Facility Manager", avatar: "/images/blog-author-1.webp" },
  },
  {
    slug: "eco-friendly-cleaning-effective-solutions",
    day: "07",
    month: "Jun 2024",
    category: "Eco-Friendly",
    icon: LeafIcon,
    title: "Eco-Friendly Cleaning Effective Solutions",
    excerpt:
      "Learn simple and sustainable cleaning solutions that are safe for your family and the environment.",
    image: "/images/home/blog-eco-friendly.webp",
    author: { name: "Sneha Kapoor", role: "Lifestyle Blogger", avatar: "/images/avatar-2.webp" },
  },
  {
    slug: "how-a-clean-office-boosts-productivity",
    day: "15",
    month: "Jul 2024",
    category: "Office Cleaning",
    icon: BuildingIcon,
    title: "How a Clean Office Boosts Productivity",
    excerpt:
      "See how a tidy, sanitized workspace helps teams stay focused, healthy and motivated every day.",
    image: "/images/blog-4.jpg",
    author: { name: "Rahul Mehta", role: "Facility Manager", avatar: "/images/blog-author-1.webp" },
  },
];

function BlogCard({ post }) {
  const Icon = post.icon;
  const href = `/blog/${post.slug}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_16px_40px_-26px_rgba(11,27,69,0.35)] transition-shadow hover:shadow-[0_20px_45px_-20px_rgba(11,27,69,0.4)]">
      <div className="relative">
        <Link href={href} aria-label={post.title} className="group/img block overflow-hidden">
          <ImagePlaceholder
            src={post.image}
            alt={post.title}
            placeholderLabel={post.image.replace("/images/", "")}
            className="aspect-[572/360] w-full transition-transform duration-500 group-hover/img:scale-105"
          />
        </Link>
        {/* Date */}
        <div className="pointer-events-none absolute left-4 top-4 rounded-[12px] bg-[#234f3b] px-3.5 py-2.5 text-center text-white 2xl:left-[26px] 2xl:top-[28px] 2xl:w-[100px] 2xl:py-3.5">
          <span className="block text-[22px] font-bold leading-none 2xl:text-[30px]">{post.day}</span>
          <span className="mt-1 block text-[11px] font-medium 2xl:text-[15px]">{post.month}</span>
        </div>
        {/* Category */}
        <span className="absolute bottom-3 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-navy shadow-sm 2xl:left-[24px] 2xl:gap-3 2xl:px-5 2xl:py-3 2xl:text-[16px]">
          <Icon className="h-4 w-4 text-green-dark 2xl:h-5 2xl:w-5" />
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-6 sm:px-6 2xl:px-[36px] 2xl:pb-[34px] 2xl:pt-[34px]">
        <h3 className="text-[19px] font-bold leading-[1.3] text-navy lg:min-h-[2.6em] xl:text-[21px] 2xl:text-[29px]">
          <Link href={href} className="transition hover:text-green">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-body xl:text-[15px] 2xl:mt-4 2xl:text-[19.5px]">
          {post.excerpt}
        </p>
        <span className="mt-5 block h-[3px] w-[70px] bg-green 2xl:mt-6" />
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-3 pt-5 2xl:pt-6">
          <div className="flex min-w-0 items-center gap-3 2xl:gap-6">
            <ImagePlaceholder
              src={post.author.avatar}
              alt={post.author.name}
              placeholderLabel=""
              className="h-12 w-12 shrink-0 rounded-full 2xl:h-[75px] 2xl:w-[75px]"
            />
            <div className="min-w-0">
              <p className="text-[14px] font-bold leading-tight text-navy 2xl:text-[19px]">{post.author.name}</p>
              <p className="mt-0.5 text-[12.5px] leading-tight text-muted 2xl:text-[17px]">{post.author.role}</p>
            </div>
          </div>
          <Link
            href={href}
            className="group inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-navy transition hover:text-green 2xl:gap-3 2xl:text-[18px]"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 2xl:h-5 2xl:w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogSection() {
  const { setViewport, ...c } = useCarousel(posts.length);

  return (
    <section id="blog" className="relative overflow-hidden bg-[#f6fbfb] pt-11 sm:pt-13 xl:pt-14 2xl:pt-[48px] pb-9 sm:pb-10 xl:pb-11 2xl:pb-[36px]">
      {/* Pale leaf */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 360"
        className="pointer-events-none absolute left-0 top-16 hidden w-[320px] text-[#e8f2ea] lg:block"
      >
        <path fill="currentColor" d="M0 10c170 10 290 130 300 330C170 330 60 260 0 150V10Z" />
        <path fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" d="M40 70c90 60 160 150 200 250" />
      </svg>

      <div className="container-x relative">
        <div className="mx-auto max-w-[1180px] text-center">
          <SectionTag center>News &amp; Articles</SectionTag>
          <h2 className="mt-4 text-[clamp(30px,3.65vw,70px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy 2xl:mt-5">
            Discover Our Latest <span className="text-green">Blog Updates</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[900px] text-balance text-[15px] leading-[1.6] text-body sm:text-base xl:text-[18px] 2xl:text-[21px]">
            Stay informed with helpful cleaning tips, expert advice, and the
            latest news from Avicleaner. Explore our articles to keep your
            spaces cleaner, healthier and happier.
          </p>
        </div>

        <div
          ref={setViewport}
          className="mt-10 overflow-hidden px-0.5 pb-4 pt-2 [--gap:16px] [--per:1] md:[--per:2] lg:[--per:3] lg:[--gap:20px] 2xl:mt-[42px] 2xl:[--gap:28px] 3xl:px-[10px]"
        >
          <div className={trackClass} style={c.trackStyle}>
            {posts.map((p) => (
              <div key={p.title} className={slideClass}>
                <BlogCard post={p} />
              </div>
            ))}
          </div>
        </div>

        <CarouselDots
          pages={c.pages}
          index={c.index}
          goTo={c.goTo}
          className="mt-6 justify-center 2xl:mt-8"
        />
        <div className="mt-6 flex justify-center">
          <Link
            href="/blog"
            className="btn-outline group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[14px] font-semibold [--btn-ink:#0b1b45] [--btn:#2a7c35] 2xl:px-7 2xl:py-3 2xl:text-[15px]"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
