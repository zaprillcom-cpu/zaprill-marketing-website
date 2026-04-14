/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/llms.txt",
        destination: "/llms-txt"
      },
      {
        source: "/pricing.md",
        destination: "/pricing-md"
      }
    ];
  }
};

export default nextConfig;
