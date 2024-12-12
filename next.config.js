/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "frederikgraakjaer.byhand.nu",
      },
    ],
  },
};

module.exports = nextConfig;
