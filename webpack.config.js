const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {        test:/\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content, mimetype, encoding, resourcePath) => {
                return `data:${mimetype}${encoding ? `;${encoding}` : ''},${content.toString(encoding)}`
              }
            }
          }
        ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3000,
    publicPath: "http://localhost:3000/dist",
    hot: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  mode: "development",
  performance: {
    hints: false
  },
};
