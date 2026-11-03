import { fillLabel } from "@/components/ui/helpers";

type Props = { pages: number; index: number; goTo: (i: number) => void; label: string; className?: string };

/** Dots under a slider; `label` is the "Go to slide {n}" text from templates.json. */
export const CarouselDots = ({ pages, index, goTo, label, className = "" }: Props) => {
  if (pages <= 1) return null;
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {Array.from({ length: pages }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => goTo(i)}
          aria-label={fillLabel(label, { n: i + 1 })}
          className={`h-3 w-3 rounded-full transition-colors 2xl:h-[14px] 2xl:w-[14px] ${
            i === index ? "bg-[var(--color-primary-dark)]" : "bg-[var(--color-dots-bg)] hover:bg-[var(--color-dots-bg-2)]"
          }`}
        />
      ))}
    </div>
  );
};
