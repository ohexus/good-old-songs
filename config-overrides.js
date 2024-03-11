const path = require('path');

module.exports = {
  webpack: function (config, env) {
    return {
      ...config,
      resolve: {
        alias: {
          '@/app': path.resolve(__dirname, './src/app'),
          '@/features': path.resolve(__dirname, './src/features'),
          '@/layouts': path.resolve(__dirname, './src/layouts'),
          '@/pages': path.resolve(__dirname, './src/pages'),
          '@/router': path.resolve(__dirname, './src/router'),
          '@/services': path.resolve(__dirname, './src/services'),
          '@/types': path.resolve(__dirname, './src/types'),
          '@/ui': path.resolve(__dirname, './src/ui'),
        },
        extensions: ['.js', '.ts', '.tsx'],
      },
    };
  },
};
