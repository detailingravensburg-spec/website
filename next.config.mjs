/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
}

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // важливо для статичного хостингу
  basePath: isProd ? '/website' : '', // якщо сторінка буде на user.github.io/my-website
}

export default nextConfig
