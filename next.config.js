const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  swcMinify: true,
  images: { unoptimized: true }
};

module.exports = withContentlayer(nextConfig);
