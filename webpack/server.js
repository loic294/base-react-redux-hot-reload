/* eslint no-console: 0 */

export default function() {

  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./dev.config').default;

  if(process.env.APP_TYPE !== undefined && process.env.APP_TYPE.indexOf("profiles") > -1) {
    console.log("include profiles")
    config = require('./dev-profiles.config').default;
  }


  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline : true,
    historyApiFallback: true,
    proxy : {
      '*' : 'http://localhost:3000'
    },
    stats : {
      colors: true
    }
  }).listen(3002, 'localhost', function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:3002/');
  });


}
