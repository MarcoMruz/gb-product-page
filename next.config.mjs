/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "gymbeam.sk",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
