const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')


let config = {

    entry: {
        app: [
            path.resolve(__dirname, 'src/app.js')
        ],
        styles: [
            path.resolve(__dirname, 'assets/sass/styles.scss')
        ]
    },

    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin()
    ]
}

module.exports = (env) => {

    if (env.mode === 'development') {
    }

    if (env.mode === 'production') {
    }

    return config;
}
