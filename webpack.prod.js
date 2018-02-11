const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        // copy assets (output dir is /dist/js)
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'}
        ]),
        // copy index.html
        new CopyWebpackPlugin([
            {from: 'src/index.html', to: ''}
        ]),
        // clean dist
        new CleanWebpackPlugin(['dist'])
    ],

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/')
    }
});

module.exports = config;