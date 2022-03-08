const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              { loader: 'css-loader', options: { url: true } },
              "sass-loader",
            ],
        }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};