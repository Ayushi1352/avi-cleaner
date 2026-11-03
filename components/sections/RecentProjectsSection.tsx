"use client";

import Link from "next/link";
import type { GlobalUIData, ProjectItem, RecentProjectsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTag } from "@/components/ui/SectionTag";
import { CarouselDots } from "@/components/ui/CarouselDots";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCarousel, slideClass, trackClass } from "@/components/ui/useCarousel";
import { fillLabel } from "@/components/ui/helpers";
import { ui } from "@/components/ui/styles";

function ProjectCard({ project, link, labels }: { project: ProjectItem; link: RecentProjectsData["cardLink"]; labels?: GlobalUIData }) {
  return (
    <ImagePlaceholder
      src={project.image}
      alt={project.title}
      ui={labels}
      data-card-border className={`${ui.cardBorder} aspect-square w-full rounded-[20px] shadow-[0_16px_40px_-24px_var(--color-shadow-heading-45)] 2xl:rounded-[24px]`}
    >
      {/* Tag */}
      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-white-90)] px-4 py-2 text-[13px] font-semibold text-[var(--color-heading)] backdrop-blur sm:left-5 sm:top-5 2xl:left-8 2xl:top-7 2xl:gap-3 2xl:px-6 2xl:py-3.5 2xl:text-[17px]">
        <Icon name={project.icon} className="h-4 w-4 text-[var(--color-primary)] 2xl:h-6 2xl:w-6" />
        {project.tag}
      </span>

      {/* Info panel */}
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-[16px] bg-[var(--color-white)] px-4 py-4 sm:px-5 sm:py-5 2xl:inset-x-3 2xl:bottom-3 2xl:rounded-[18px] 2xl:px-9 2xl:py-8">
        <div className="min-w-0">
          <h3 className="text-[18px] font-bold leading-tight text-[var(--color-heading)] sm:text-[19px] xl:text-[21px] 2xl:text-[27px]">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-[1.4] text-[var(--color-text)] sm:text-[14px] 2xl:mt-2 2xl:max-w-[320px] 2xl:text-[19px]">
            {project.text}
          </p>
        </div>
        <Link
          href={link.href}
          aria-label={fillLabel(link.label, { title: project.title })}
          className={`${ui.btnSolid} flex h-11 w-11 shrink-0 items-center justify-center rounded-full [--btn:var(--color-projects-button)] sm:h-12 sm:w-12 2xl:h-[70px] 2xl:w-[70px]`}
        >
          <Icon name={link.icon} className="h-5 w-5 2xl:h-7 2xl:w-7" />
        </Link>
      </div>
    </ImagePlaceholder>
  );
}

export const RecentProjectsSection = ({ data, ui: labels }: { data?: RecentProjectsData; ui?: GlobalUIData }) => {
  const projects = data?.projects ?? [];
  const { setViewport, ...c } = useCarousel(projects.length);
  if (!data) return null;

  return (
    <section id="projects" className="bg-[var(--color-bg-cool)] pt-11 sm:pt-[3.25rem] xl:pt-14 2xl:pt-[48px] pb-8 sm:pb-9 xl:pb-10 2xl:pb-[34px]">
      <div className={ui.container}>
        <ScrollReveal variant="fade-up" duration={700}>
          <div className="mx-auto max-w-[900px] text-center">
            <SectionTag center>{data.label}</SectionTag>
            <h2 className="mt-4 text-[clamp(30px,3.2vw,62px)] font-bold leading-[1.15] tracking-[-0.015em] text-[var(--color-heading)] 2xl:mt-6">
              {data.title.lead + " "}<span className="text-[var(--color-primary)]">{data.title.highlight}</span>
              <br className="hidden sm:block" />{" " + data.title.after}
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-balance text-[15px] leading-[1.6] text-[var(--color-text)] sm:text-[1rem] xl:text-[18px] 2xl:mt-6 2xl:text-[21px]">
              {data.description}
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
                  <ProjectCard project={p} link={data.cardLink} labels={labels} />
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
            label={labels?.goToSlide ?? ""}
            className="mt-6 justify-center 2xl:mt-8"
          />
          <div className="mt-6 flex justify-center">
            <Link
              href={data.button.href}
              className={`${ui.btnOutline} group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[14px] font-semibold [--btn-ink:var(--color-heading)] [--btn:var(--color-projects-button)] 2xl:px-7 2xl:py-3 2xl:text-[15px]`}
            >
              {data.button.label}
              <Icon name={data.button.icon} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
