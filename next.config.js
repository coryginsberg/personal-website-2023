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
};
