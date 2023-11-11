/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  async redirects() {
    return [
      {
        source: '/api/auth',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/oscar-dyremyhr-resume.pdf',
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      'res.cloudinary.com', // Cloudinary
    ],
  },
};

module.exports = nextConfig;
