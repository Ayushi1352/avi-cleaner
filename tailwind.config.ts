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
