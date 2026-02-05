import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If doing a static "Drag and Drop" upload, UNCOMMENT the line below:
  // output: 'export', 
  
  images: {
    unoptimized: true, // Required for Cloudflare Pages (Static)
  },
};

export default nextConfig;