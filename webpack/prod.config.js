var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var dist = path.resolve(__dirname, "../public/js/") + '\\';

var config = {
  entry: {
    app : [
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
      "async",
    ]
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: dist
  },
  module: {
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
      },
    ]
  },
  plugins: [

    new webpack.ProvidePlugin({
      React : "react",
      ReactDOM : "react-dom",
      Router : 'react-router',
      "log" : "loglevel",
      moment : "moment",
      "async" : "async",
    }),

    new ExtractTextPlugin("../css/[name].css"),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),

    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
  ]

};

module.exports = config;
