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
    "bg-[color:var(--btn,#2a7a38)] text-[color:var(--btn-fg,#fff)] shadow-[inset_0_0_0_1.5px_var(--btn,#2a7a38)] transition-[background-color,color,box-shadow] duration-200 ease-[ease] hover:bg-white hover:bg-none hover:text-[color:var(--btn-ink,var(--btn,#2a7a38))] focus-visible:bg-white focus-visible:bg-none focus-visible:text-[color:var(--btn-ink,var(--btn,#2a7a38))]",
  btnOutline:
    "bg-[color:var(--btn-bg,#fff)] text-[color:var(--btn-ink,var(--btn,#0b1b45))] shadow-[inset_0_0_0_1.5px_var(--btn-ring,var(--btn,#0b1b45))] transition-[background-color,color,box-shadow] duration-200 ease-[ease] hover:bg-[color:var(--btn,#0b1b45)] hover:text-white hover:shadow-[inset_0_0_0_1.5px_var(--btn,#0b1b45)] focus-visible:bg-[color:var(--btn,#0b1b45)] focus-visible:text-white focus-visible:shadow-[inset_0_0_0_1.5px_var(--btn,#0b1b45)]",
  btnForest: "[--btn:#1f5a41]",
  btnYellow: "[--btn:#fcd964] [--btn-fg:#0b1b45] [--btn-ink:#0b1b45]",

  /*
    Card that lifts on hover and shows a moving green/yellow gradient border. Give the element
    data-card-border too: components/Motion.tsx runs the border sweep while it is hovered.
  */
  cardBorder:
    "relative [transition:transform_0.35s_cubic-bezier(0.22,1,0.36,1),box-shadow_0.35s_ease,border-color_0.35s_ease] hover:[transform:translateY(-4px)] hover:shadow-[0_16px_36px_-10px_rgba(42,124,53,0.22)] motion-reduce:hover:[transform:none] after:pointer-events-none after:absolute after:-inset-[2px] after:z-1 after:rounded-[inherit] after:bg-[linear-gradient(135deg,#2a7c35_0%,#fcde76_35%,#5c9836_70%,#2a7c35_100%)] after:bg-size-[250%_250%] after:p-[2px] after:opacity-0 after:transition-opacity after:duration-[350ms] after:ease-[ease] after:content-[''] after:[mask:linear-gradient(#fff_0_0)_content-box_exclude,linear-gradient(#fff_0_0)] hover:after:opacity-100",
};
