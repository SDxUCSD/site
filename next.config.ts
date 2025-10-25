import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '*',
      },
    ],
  },
};

export default nextConfig;
