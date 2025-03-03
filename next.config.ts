import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  rewrites: async () => {
    return [
      {
        source: "/docs/:path",
        destination: "/docs/:path*/index.html",
      },
    ];
  },
};

export default nextConfig;
