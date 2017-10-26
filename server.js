const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  stats: {
    colors: true,
  },
});

server.listen(8080, 'localhost', () => {
  console.log('Starting server on http://localhost:8080');
});
