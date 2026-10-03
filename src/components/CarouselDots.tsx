export default function CarouselDots({ pages, index, goTo, className = "" }) {
  if (pages <= 1) return null;
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {Array.from({ length: pages }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => goTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`h-3 w-3 rounded-full transition-colors 2xl:h-[14px] 2xl:w-[14px] ${
            i === index ? "bg-green-dark" : "bg-[#d9dee5] hover:bg-[#b8c2cc]"
          }`}
        />
      ))}
    </div>
  );
}
