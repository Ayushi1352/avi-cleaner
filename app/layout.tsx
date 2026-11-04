import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import rawData from "@/data/templates.json";
import type { CleaningTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Motion } from "@/components/ui/Motion";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", fallback: ["ui-sans-serif", "system-ui", "sans-serif"], variable: "--font-plus-jakarta-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", fallback: ["ui-sans-serif", "system-ui", "sans-serif"], variable: "--font-poppins" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap", fallback: ["cursive"], variable: "--font-caveat" });
const fontClasses = [plusJakartaSans, poppins, caveat].map((font) => font.variable).join(" ");

const templateData: CleaningTemplateData = rawData;
const sectionData = templateData.categories.Cleaning.sections;
const commonData = templateData.common;

const { fonts } = commonData.theme;
const fontVariables = {
  "--font-primary": fonts.primary,
  "--font-secondary": fonts.secondary,
  "--font-script": fonts.script,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: commonData.metadata.title,
    template: `%s | ${commonData.metadata.siteName}`,
  },
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // Smooth scrolling, no sideways scroll, and the green scrollbar on the page and on every scroll box.
      // Every icon eases its hover moves with a small bounce, and everything clickable gets the pointer.
      // People who ask their system for less motion get no smooth scroll and no animations.
      className={`${fontClasses} max-w-full overflow-x-clip scroll-smooth [&::-webkit-scrollbar]:w-[9px] [&::-webkit-scrollbar-track]:bg-[var(--color-scrollbar-track)] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-thumb]:bg-[var(--color-primary)] [&_*::-webkit-scrollbar]:w-[9px] [&_*::-webkit-scrollbar-track]:bg-[var(--color-scrollbar-track)] [&_*::-webkit-scrollbar-thumb]:rounded-[4px] [&_*::-webkit-scrollbar-thumb]:bg-[var(--color-primary)] [&_svg]:[transition:transform_0.3s_cubic-bezier(0.34,1.56,0.64,1),filter_0.3s_ease] [&_:where(a[href],button:not(:disabled),select,summary,[role=button])]:cursor-pointer motion-reduce:scroll-auto motion-reduce:[&_*]:!animate-none motion-reduce:[&_*]:!duration-[0.01ms]`}
    >
      <body className="max-w-full overflow-x-clip antialiased">
        <Motion />
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. Up to 1920px it fills the
          screen, so nothing changes; on wider screens or when the browser is zoomed out the page stays
          in the middle with equal space on both sides instead of stretching.
          Header and footer live here once, so every page gets them automatically.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col overflow-x-clip bg-[var(--color-white)]">
          <Header data={sectionData.Header?.variants?.CleaningHeader1} company={commonData.company} />
          <ScrollToTop>{children}</ScrollToTop>
          <Footer data={commonData.Footer} company={commonData.company} />
        </div>
      </body>
    </html>
  );
}
