/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'development',
  },
};

const moduleConfig = {
  pwa: {
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
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
// /** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
// });

// module.exports = withPWA({
//   reactStrictMode: true,
// });
