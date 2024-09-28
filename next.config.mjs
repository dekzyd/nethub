/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons/*"],
  },
};

// import withBundleAnalyzer from "@next/bundle-analyzer";

// export default withBundleAnalyzer(nextConfig);

export default nextConfig;
