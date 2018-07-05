const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let config = {

    entry: {
        app: [
            path.resolve(__dirname, 'src/app.js')
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
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
};

module.exports = (env) => {

    if (env.mode === 'development') {
    }

    if (env.mode === 'production') {
    }

    return config;
};
