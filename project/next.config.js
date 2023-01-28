/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['Poppins'] } },
    ],
  },
  images: {
    domains: ['192.168.0.40'],
  },
};

module.exports = nextConfig;
