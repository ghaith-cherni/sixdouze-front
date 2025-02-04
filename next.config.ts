import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }, 
};

export default nextConfig; 