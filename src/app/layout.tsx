import { Plus_Jakarta_Sans, Poppins, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { site } from "@/data";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--nf-jakarta",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--nf-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--nf-caveat",
  display: "swap",
});

export const metadata = site.siteMeta.meta.Layout;

export default function RootLayout({ children }) {
  return (
    <html
      lang={site.siteMeta.lang}
      className={`${jakarta.variable} ${poppins.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Navbar and footer live here once, so every page gets them automatically. */}
        <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
