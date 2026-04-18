/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.gstatic.com', // გუგლის სტატიკური სურათებისთვის
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com', // Pinterest-ისთვის
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.pinterest.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;