const path = require('path');
const webpack = require('webpack');
var TSLintPlugin = require('tslint-webpack-plugin');

const config = {
    entry: {
        app: './src/app/index.ts',
        vender: ['lodash'],
    },

    // modules resolved at build process
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new TSLintPlugin({
            files: ['./src/**/*.ts']
        }),
    ]
};

module.exports = config;