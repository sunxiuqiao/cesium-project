const CopywebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
    context: __dirname,
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: ['url-loader']
        }, {
            test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
        }],
        loaders: [
            {
                test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
                loader: "imports-loader?this=>window"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopywebpackPlugin([{from: path.join(cesiumSource, cesiumWorkers), to: 'Workers'}]),
        new CopywebpackPlugin([{from: path.join(cesiumSource, 'Assets'), to: 'Assets'}]),
        new CopywebpackPlugin([{from: path.join(cesiumSource, 'Widgets'), to: 'Widgets'}]),
        new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('')
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),

        // Needed to compile multiline strings in Cesium
        sourcePrefix: ''
    },
    amd: {
        // Enable webpack-friendly use of require in Cesium
        toUrlUndefined: true
    },
    node: {
        // Resolve node module use of fs
        fs: 'empty'
    },
    resolve: {
        alias: {
            // Cesium module name
            cesium: path.resolve(__dirname, cesiumSource),
            jquery: "jquery/src/jquery"
        }
    },
};