"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionTag from "./SectionTag";
import CarouselDots from "./CarouselDots";
import ScrollReveal from "./ScrollReveal";
import useCarousel, { slideClass, trackClass } from "./useCarousel";
import { BuildingIcon, HomeIcon, SofaIcon } from "./icons";

const projects = [
  {
    tag: "Home Cleaning",
    icon: HomeIcon,
    title: "Kitchen Deep Clean",
    text: "A fresh, spotless kitchen for a healthier home.",
    image:
      "/images/home/project-kitchen-deep-clean.webp",
  },
  {
    tag: "Office Cleaning",
    icon: BuildingIcon,
    title: "Commercial Office Clean",
    text: "A cleaner workspace for a more productive team.",
    image:
      "/images/home/project-commercial-office.webp",
  },
  {
    tag: "Home Cleaning",
    icon: SofaIcon,
    title: "Living Room Refresh",
    text: "A cleaner, brighter space to relax and live better.",
    image:
      "/images/home/project-living-room.webp",
  },
  {
    tag: "Home Cleaning",
    icon: HomeIcon,
    title: "Bathroom Sparkle Clean",
    text: "A sanitized, shining bathroom that feels brand new.",
    image: "/images/project-bathroom.jpg",
  },
  {
    tag: "Office Cleaning",
    icon: BuildingIcon,
    title: "Reception Area Makeover",
    text: "A welcoming, spotless first impression for visitors.",
    image: "/images/project-reception.jpg",
  },
];

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <ImagePlaceholder
      src={project.image}
      alt={project.title}
      placeholderLabel={project.image.replace("/images/", "")}
      className="card-border-animated aspect-square w-full rounded-[20px] shadow-[0_16px_40px_-24px_rgba(11,27,69,0.45)] 2xl:rounded-[24px]"
    >
      {/* Tag */}
      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-navy backdrop-blur-sm sm:left-5 sm:top-5 2xl:left-8 2xl:top-7 2xl:gap-3 2xl:px-6 2xl:py-3.5 2xl:text-[17px]">
        <Icon className="h-4 w-4 text-green 2xl:h-6 2xl:w-6" />
        {project.tag}
      </span>

      {/* Info panel */}
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-[16px] bg-white px-4 py-4 sm:px-5 sm:py-5 2xl:inset-x-3 2xl:bottom-3 2xl:rounded-[18px] 2xl:px-9 2xl:py-8">
        <div className="min-w-0">
          <h3 className="text-[18px] font-bold leading-tight text-navy sm:text-[19px] xl:text-[21px] 2xl:text-[27px]">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-[1.4] text-body sm:text-[14px] 2xl:mt-2 2xl:max-w-[320px] 2xl:text-[19px]">
            {project.text}
          </p>
        </div>
        <Link
          href="/gallery"
          aria-label={`View ${project.title}`}
          className="btn-solid flex h-11 w-11 shrink-0 items-center justify-center rounded-full [--btn:#26683f] sm:h-12 sm:w-12 2xl:h-[70px] 2xl:w-[70px]"
        >
          <ArrowRight className="h-5 w-5 2xl:h-7 2xl:w-7" />
        </Link>
      </div>
    </ImagePlaceholder>
  );
}

export default function RecentProjectsSection() {
  const { setViewport, ...c } = useCarousel(projects.length);

  return (
    <section id="projects" className="bg-[#f6fbfb] pt-11 sm:pt-13 xl:pt-14 2xl:pt-[48px] pb-8 sm:pb-9 xl:pb-10 2xl:pb-[34px]">
      <div className="container-x">
        <ScrollReveal variant="fade-up" duration={700}>
          <div className="mx-auto max-w-[900px] text-center">
            <SectionTag center>Our Recent Work</SectionTag>
            <h2 className="mt-4 text-[clamp(30px,3.2vw,62px)] font-bold leading-[1.15] tracking-[-0.015em] text-navy 2xl:mt-6">
              Explore the Recent <span className="text-green">Projects</span>
              <br className="hidden sm:block" /> We Have Done!
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-balance text-[15px] leading-[1.6] text-body sm:text-base xl:text-[18px] 2xl:mt-6 2xl:text-[21px]">
              Take a look at some of our latest cleaning projects. From homes to
              offices, we deliver exceptional results with care and attention to
              detail.
            </p>
          </div>
        </ScrollReveal>

        <div
          ref={setViewport}
          className="mt-10 overflow-hidden px-0.5 pb-4 pt-2 [--gap:16px] [--per:1] sm:[--per:2] lg:[--per:3] lg:[--gap:20px] 2xl:mt-[58px] 2xl:[--gap:28px] 3xl:px-[10px]"
        >
          <div className={trackClass} style={c.trackStyle}>
            {projects.map((p, i) => (
              <div key={p.title} className={slideClass}>
                <ScrollReveal
                  variant="fade-up"
                  delay={i * 180}
                  duration={700}
                  className="h-full"
                >
                  <ProjectCard project={p} />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>

        <ScrollReveal variant="fade-up" delay={300} duration={600}>
          <CarouselDots
            pages={c.pages}
            index={c.index}
            goTo={c.goTo}
            className="mt-6 justify-center 2xl:mt-8"
          />
          <div className="mt-6 flex justify-center">
            <Link
              href="/gallery"
              className="btn-outline group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[14px] font-semibold [--btn-ink:#0b1b45] [--btn:#26683f] 2xl:px-7 2xl:py-3 2xl:text-[15px]"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
