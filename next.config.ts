import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - 'eslint' exists in modern Next versions but types may be mismatched
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;