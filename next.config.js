/** @file nextjs conifg */
const { resolve } = require('path');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    config.resolve.modules.push(resolve('./'));
    return config;
  },
};
/** @exports netjs.config */
