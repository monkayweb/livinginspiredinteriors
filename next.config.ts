import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only: AVIF decode is markedly slower and these are large
    // photographs that decode during scroll.
    formats: ["image/webp"],
  },
};

export default nextConfig;
