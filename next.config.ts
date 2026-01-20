import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/_rs/a3f8b2c1",
        destination: "/_rs/a3f8b2c1/index.html",
      },
      {
        source: "/_rs/a3f8b2c1/clean",
        destination: "/_rs/a3f8b2c1/clean/index.html",
      },
      {
        source: "/_rs/a3f8b2c1/dark",
        destination: "/_rs/a3f8b2c1/dark/index.html",
      },
      {
        source: "/_rs/a3f8b2c1/colorful",
        destination: "/_rs/a3f8b2c1/colorful/index.html",
      },
    ];
  },
};

export default nextConfig;
