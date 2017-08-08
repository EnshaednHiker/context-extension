const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const html = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env){
    const baseConfig = 
        {
        context: path.join(__dirname),    
        output: {
            path: path.join(__dirname, "dist"),
            filename: "[name].js"
        },
        node: {
            fs: "empty",
            dns: "empty",
            net: "empty",
            __dirname: true,
            __filename: true
        },
        devServer: {
            contentBase: path.resolve(__dirname),
            port: 3000
        },
        resolve: {
            alias: {
                "~":path.resolve(__dirname)
            }
        },
        module: {
            loaders: [
                { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.css$/, loader: 'style-loader!css-loader'},
                { test: /\.(png|jpg|gif)$/, loader: 'file-loader', options: {name: 'assets/images/[name].[ext]'}},
                { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' , options: {name: 'assets/fonts/[name].[ext]'}},
                { test: /\.(eot|ttf|svg)$/, loader: 'file-loader', options: {name: 'assets/fonts/[name].[ext]'} }
            ]
        },
    }

    return [
        Object.assign({},baseConfig,{entry: {
            content: path.join(__dirname,"content","index.js"),
            event: path.join(__dirname,"event","index.js")
        }, plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new dotenv({path:path.join(__dirname,".env")})//,
            //new html({template:path.join(__dirname,"index.html")})
        ]}),
        Object.assign({},baseConfig,{entry: {
            popup: path.join(__dirname,"popup","index.js")
        },        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new dotenv({path:path.join(__dirname,".env")}),
            new CopyWebpackPlugin([{from: "manifest.json"}])
        ]}),
    ]
}