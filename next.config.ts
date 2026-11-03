import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    qualities: [75, 90],
  },
  // Old page addresses still open the right page.
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: false },
      { source: "/contact", destination: "/contact-us", permanent: false },
      { source: "/team", destination: "/our-team", permanent: false },
      { source: "/team/:slug*", destination: "/our-team/:slug*", permanent: false },
      { source: "/awards", destination: "/award-and-certificate", permanent: false },
      { source: "/awards-and-certificates", destination: "/award-and-certificate", permanent: false },
      { source: "/awards-certificates", destination: "/award-and-certificate", permanent: false },
    ];
  },
};

export default nextConfig;
