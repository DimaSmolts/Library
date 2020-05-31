const merge = require('webpack-merge');
const common = require('./webpack.common.js');
require('dotenv').config();

const port = process.env.REACT_APP_CLIENT_PORT || 9000;

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: port,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
});
