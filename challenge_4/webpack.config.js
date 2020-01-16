const path = require('path');

const ENTRY_POINT = path.join(__dirname, 'client', 'app.jsx');
const OUTPUT_DIR = path.join(__dirname, 'public');
const OUTPUT_FILE = path.join('bundle.js');

module.exports = {
  entry: ENTRY_POINT,
  output: {
    filename: OUTPUT_FILE,
    path: OUTPUT_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};