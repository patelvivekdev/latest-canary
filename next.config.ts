import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    reactCompiler: true,
    dynamicIO: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};
export default nextConfig;
