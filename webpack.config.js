const path = require('path');

module.exports = {
  mode: 'production',
  entry: './packages/app/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
  },
  optimization: {
    concatenateModules: true,
    minimizer: [],
  },
};
