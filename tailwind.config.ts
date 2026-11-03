import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      // Text sizes with the line heights Tailwind v4 uses: a ratio, so the line height keeps up
      // when a bigger arbitrary size (e.g. 2xl:text-[24px]) takes over at larger screens.
      fontSize: {
        xs: ["0.75rem", { lineHeight: "calc(1 / 0.75)" }],
        sm: ["0.875rem", { lineHeight: "calc(1.25 / 0.875)" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "calc(1.75 / 1.125)" }],
        xl: ["1.25rem", { lineHeight: "calc(1.75 / 1.25)" }],
        "2xl": ["1.5rem", { lineHeight: "calc(2 / 1.5)" }],
        "3xl": ["1.875rem", { lineHeight: "1.2" }],
        "4xl": ["2.25rem", { lineHeight: "calc(2.5 / 2.25)" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      borderColor: {
        DEFAULT: "currentColor",
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        poppins: ["var(--font-secondary)"],
        script: ["var(--font-script)"],
      },
    },
  },
  plugins: [
    // Variants built into Tailwind v4 that v3 does not have.
    plugin(({ addVariant }) => {
      addVariant("starting", "@starting-style");
    }),
  ],
};
export default config;
