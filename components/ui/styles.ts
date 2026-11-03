// Shared class strings used across the site (Tailwind only, no custom CSS).
// Written out in full (not joined from parts) so Tailwind finds the class names.

export const ui = {
  /** Page container: 1920px wide at most, 16px side gutters on phones up to 56px on large screens. */
  container: "mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-10 2xl:px-14",

  /*
    Buttons. Solid buttons turn white on hover and take their own colour as text and outline;
    outline buttons do the opposite. The colour comes from --btn (and --btn-fg, --btn-ink,
    --btn-bg, --btn-ring), set with btnForest / btnYellow or an [--btn:...] class.
  */
  btnSolid:
    "bg-[color:var(--btn,var(--color-button))] text-[color:var(--btn-fg,var(--color-white))] shadow-[inset_0_0_0_1.5px_var(--btn,var(--color-button))] transition-[background-color,color,box-shadow] duration-200 ease-[ease] hover:bg-[var(--color-white)] hover:bg-none hover:text-[color:var(--btn-ink,var(--btn,var(--color-button)))] focus-visible:bg-[var(--color-white)] focus-visible:bg-none focus-visible:text-[color:var(--btn-ink,var(--btn,var(--color-button)))]",
  btnOutline:
    "bg-[color:var(--btn-bg,var(--color-white))] text-[color:var(--btn-ink,var(--btn,var(--color-heading)))] shadow-[inset_0_0_0_1.5px_var(--btn-ring,var(--btn,var(--color-heading)))] transition-[background-color,color,box-shadow] duration-200 ease-[ease] hover:bg-[color:var(--btn,var(--color-heading))] hover:text-[var(--color-white)] hover:shadow-[inset_0_0_0_1.5px_var(--btn,var(--color-heading))] focus-visible:bg-[color:var(--btn,var(--color-heading))] focus-visible:text-[var(--color-white)] focus-visible:shadow-[inset_0_0_0_1.5px_var(--btn,var(--color-heading))]",
  btnForest: "[--btn:var(--color-primary-dark)]",
  btnYellow: "[--btn:var(--color-secondary)] [--btn-fg:var(--color-heading)] [--btn-ink:var(--color-heading)]",

  /*
    Card that lifts on hover and shows a moving green/yellow gradient border. Give the element
    data-card-border too: components/Motion.tsx runs the border sweep while it is hovered.
  */
  cardBorder:
    "relative [transition:transform_0.35s_cubic-bezier(0.22,1,0.36,1),box-shadow_0.35s_ease,border-color_0.35s_ease] hover:[transform:translateY(-4px)] hover:shadow-[0_16px_36px_-10px_var(--color-primary-22)] motion-reduce:hover:[transform:none] after:pointer-events-none after:absolute after:-inset-[2px] after:z-[1] after:rounded-[inherit] after:bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-cta-bg)_35%,var(--color-primary-light)_70%,var(--color-primary)_100%)] after:bg-[length:250%_250%] after:p-[2px] after:opacity-0 after:transition-opacity after:duration-[350ms] after:ease-[ease] after:content-[''] after:[mask:linear-gradient(var(--color-white)_0_0)_content-box_exclude,linear-gradient(var(--color-white)_0_0)] hover:after:opacity-100",
};
