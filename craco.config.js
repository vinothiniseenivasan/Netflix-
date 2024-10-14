const path = require('path-browserify');

module.exports = {
  webpack: {
    alias: {
      path: 'path-browserify',
    },
    configure: {
      resolve: {
        fallback: {
          path: require.resolve('path-browserify'),
          fs: false, // Disable fs module for browser
        },
      },
    },
  },
};
