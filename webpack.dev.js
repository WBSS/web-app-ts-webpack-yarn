const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    // debugging js
    devtool: 'inline-source-map',

    // configure server
    devServer: {
        contentBase: path.join(__dirname, "src/"),
        compress: true,
        port: 8080
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src/'),
    }
});

module.exports = config;