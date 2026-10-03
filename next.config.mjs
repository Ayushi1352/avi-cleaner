/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: false },
      { source: "/contact", destination: "/contact-us", permanent: false },
    ];
  },
};

export default nextConfig;
