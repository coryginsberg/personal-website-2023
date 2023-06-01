/** @type {import('next').NextConfig} */
module.exports = {
  sassOptions: {
    logger: {
      warn: function (message) {
        console.warn(message);
      },
      debug: function (message) {
        console.log(message);
      },
    },
  },
};
