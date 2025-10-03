import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.dummyjson.com/product-images/**')]
  },
  outputFileTracingRoot: __dirname,
  /* config options here */
};

export default nextConfig;
