/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dashui.codescandy.com",
      },
    ],
  },
};

module.exports = nextConfig
