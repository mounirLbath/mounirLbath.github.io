import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['drive.google.com'], // Allow Google Drive images
  },
};

export default nextConfig;
