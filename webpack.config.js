const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const config = {
    context: __dirname,
    entry: './src',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.(jsx|js)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            components: path.resolve(__dirname, './src/components'),
            pages: path.resolve(__dirname, './src/pages'),
            containers: path.resolve(__dirname, './src/containers'),
            actions: path.resolve(__dirname, './src/store/actions'),
            reducers: path.resolve(__dirname, './src/store/reducers'),
            src: path.resolve(__dirname, './src')
        }
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: {comments: false },
            mangle: false,
            sourcemap: false,
            minimize: true,
            mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] }
        }),
        new ExtractTextPlugin('src/public/stylesheets/app.css', {
            allChunks: true
        })
    ]
};

module.exports = config;