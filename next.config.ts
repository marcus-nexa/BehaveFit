import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Leave empty unless a specific port is needed
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
