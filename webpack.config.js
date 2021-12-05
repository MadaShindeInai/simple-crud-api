const path = require('path');

module.exports = {
  entry: {
    server: './src/index.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node16.13',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
