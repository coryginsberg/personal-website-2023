/** @type {import('next').NextConfig} */

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
