const HtmlWepackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: ['ts-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: "source-map",
    plugins: [
        new HtmlWepackPlugin({
            template: 'index.html'
        })
    ]
}