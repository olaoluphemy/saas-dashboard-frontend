import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/",
        permanent: true, // or false for temporary redirect
      },
      // {
      //   source: "/api/:path*",
      //   destination: `${BASE_URL}/api/v1/:path*`, // proxy to Express
      //   statusCode: 307,
      // },
    ];
  },
};

export default nextConfig;
