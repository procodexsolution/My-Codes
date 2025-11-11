/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'cdn.dribbble.com',
      'images.unsplash.com',
      'cdn.pixabay.com',
      'assets-global.website-files.com',
      'static.vecteezy.com',
      'cdn.jsdelivr.net',
      'cdn.sanity.io',
    ],
  },
}

module.exports = nextConfig
