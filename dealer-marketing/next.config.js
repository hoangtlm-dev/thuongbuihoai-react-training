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
};

module.exports = nextConfig;
