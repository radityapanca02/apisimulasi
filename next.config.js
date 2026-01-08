/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/connect",
        destination: "/api/connect",
      },
    ];
  },
};

module.exports = nextConfig;
