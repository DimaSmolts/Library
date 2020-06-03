const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        app: path.join(__dirname, 'index.tsx')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
              test: /\.(woff|woff2)$/,
              loader: 'file-loader',
              options: {
                mimetype: 'application/font-woff',
                name: 'assests/fonts/[name].[ext]',
              }
            },
            {
              test: /\.(jpg|png|svg|ico)$/,
              loader: 'file-loader',
              options: {
                name: 'assests/images/[name].[ext]',
                esModule: false
              }
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            favicon: './src/assets/images/library-logo.ico'
        }),
        new Dotenv()
    ]
}
