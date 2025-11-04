/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // penting untuk Netlify
  images: { unoptimized: true },
};

module.exports = nextConfig;
