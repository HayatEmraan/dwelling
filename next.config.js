/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.c.tadst.com",
      },
      {
        protocol: "https",
        hostname: "dashui.codescandy.com",
      },
    ],
  },
};

module.exports = nextConfig;
