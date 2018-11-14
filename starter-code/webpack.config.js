const path       = require("path"),
      webpack    = require("webpack"),
      bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader:  'babel-loader',
      },
      {
        test: /\.css$/,
        use:  [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        use:  [
          {
            loader: 'file-loader',
            options: {
              name:       '[name].[ext]',
              publicPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.png'] },
  output: {
    publicPath: bundlePath,
    filename:   "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port:        3000,
    publicPath:  "http://localhost:3000/dist",
    hot:         true
  },
  plugins:     [ new webpack.HotModuleReplacementPlugin() ],
  mode:        "development",
  performance: { hints: false }
};