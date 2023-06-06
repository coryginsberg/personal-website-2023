/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    logger: {
      warn: (message) => {
        console.warn(message);
      },
      debug: (message) => {
        console.log(message);
      },
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components/**'),
      sections: path.resolve(__dirname, './app/sections/**'),
      '@styles': path.resolve(__dirname, './app/styles'),
      '@public': path.resolve(__dirname, './public/**'),
    };
    return config;
  },
};
