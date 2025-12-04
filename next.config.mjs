/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
