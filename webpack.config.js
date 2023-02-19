const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/js/app.ts'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
        library: {
            name: 'App',
            type: 'var',
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                generator: {
                    filename: 'app.bundle.js'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.html/,
                type: 'asset/resource',
                generator: {
                    filename: 'index.html'
                }
            }
        ]
    }
}