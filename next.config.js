/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    // react-markdown has a broken type in node_modules; ignore during build
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
  },
}
