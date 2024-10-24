/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ["frederikgraakjaer.byhand.nu"], // Ensure this domain is correctly listed
  },
};

module.exports = nextConfig;
