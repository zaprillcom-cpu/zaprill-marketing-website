/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc"
      }
    ]
  },
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
  },
  async redirects() {
    return [
      {
        source: "/app",
        destination: "https://app.zaprill.com/",
        permanent: false
      }
    ];
  }
};

export default nextConfig;
