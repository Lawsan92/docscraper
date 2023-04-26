const path = require('path');
const config = (env) => {
  console.log('env:', env);
  return {
    mode: env['--mode'] || 'development',
    entry: {
      path: path.join(__dirname, './client/src/index.js')
    },
    output: {
      path: path.join(__dirname, 'client/dist'),
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
    },
    devServer: {
      static: path.join(__dirname, 'client/dist'),
      proxy: {
        '/getFiles': 'http://localhost:3000',
        '/grepFiles': 'http://localhost:3000'
      }
    }
  }
}

module.exports = config;

// REFERENCES
// https://webpack.js.org/configuration/dev-server/#devserverproxy