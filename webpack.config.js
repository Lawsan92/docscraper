const path = require('path');
const config = {
  mode: 'development',
  entry: {
    path: path.join(__dirname, './client/src/index.js')
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /nodeModules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)\b/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
}

module.exports = config;