/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/expert-panel",
        destination: "/expert-page",
      },
    ];
  },
  images: {
    loader: "imgix",
    path: "https://dealer-marketing.vercel.app/",
    domain: "cdn1.dealermarketing.com",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [190, 240, 330, 450],
    minimumCacheTTL: 60,
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

module.exports = nextConfig;
