/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "react-icons/*",
      "framer-motion",
      "flowbite-react",
      "zod",
      "react-hook-form",
    ],
  },
};

import withBundleAnalyzer from "@next/bundle-analyzer";

export default withBundleAnalyzer(nextConfig);

// export default nextConfig;
