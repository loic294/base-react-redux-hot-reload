// This is the webpack config to use during development.
// It enables the hot module replacement, the source maps and inline CSS styles.

/* eslint no-var: 0, no-console: 0 */

import path from "path";
import webpack from "webpack";
import WebpackErrorNotificationPlugin from "webpack-error-notification";

const host = process.env.HOST || "localhost";
const port = (process.env.PORT + 1) || 3002;
const dist = path.resolve(__dirname, "../public/js/") + '\\';

console.log('Webpack config server listening on %s:%s', host, port)

const config = {
  devtool: "source-map",
  entry: {
    app : [
      "webpack-dev-server/client?http://" + host + ":" + port,
      "webpack/hot/only-dev-server",
      'whatwg-fetch',
      path.resolve(__dirname, "../assets/less/style.less"),
      path.resolve(__dirname, "../assets/js/routes.js"),
    ],
    vendor: [
      "underscore",
      "react",
      "react-dom",
      'react-router',
      "loglevel",
      'underscore',
      "moment",
      "async"
    ]
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: dist,
    publicPath: "http://" + host + ":" + port + "/js/"
  },
  module: {
    noParse: /node_modules\\socketio-file-upload\\client\.js/,

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-1,presets[]=stage-2,presets[]=react']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.less$/,
        loader: "style!css?minimize!less" // remove autoprefixer
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        BROWSER: JSON.stringify(true),
      }
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      Router : 'react-router',
      "log": "loglevel",
      _ : 'underscore',
      moment : "moment",
      "async" : "async",
    }),
    new WebpackErrorNotificationPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
  ]

};

export default config;
