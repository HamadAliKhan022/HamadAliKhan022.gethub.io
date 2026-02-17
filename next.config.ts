import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/spinevision-ai-architecture.html",
        destination: "/blog/spinevision-ai-architecture",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
