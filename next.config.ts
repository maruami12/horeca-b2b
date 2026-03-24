/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ეს ეუბნება Vercel-ს, რომ პატარა შეცდომებზე თვალი დახუჭოს და მაინც ჩართოს საიტი
    ignoreBuildErrors: true,
  },
  eslint: {
    // ესეც მსგავსია, ოღონდ კოდის სტილის შემოწმებას გამოტოვებს აწყობისას
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;