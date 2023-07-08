/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'avatar.vercel.sh'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'development',
  },
};

const moduleConfig = {
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
  },
};

const withPWA = require('next-pwa')(moduleConfig.pwa);

module.exports = () => {
  const plugins = [withPWA];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });
  return config;
};
