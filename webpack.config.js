let webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    sourcePath = __dirname;

// ==>
module.exports = {
    entry: [
        path.join(sourcePath, '/app/index.js')
    ],
    output: {
        path: path.join(sourcePath, '/dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader?presets[]=es2015,presets[]=react'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'style!css'
            })
            //use: 'style!css'
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
            ReactDom: "react-dom"
        }),
        new HtmlWebpackPlugin({
            //filename: './index.html',
            template: path.join(sourcePath, '/app/index.tpl.html'),
            inject: 'body',
            favicon: path.join(sourcePath, '/app/favicon.png')
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true,
        }),
        new CopyWebpackPlugin([{
            from: path.join(sourcePath, '/app/assets'),
            to: path.join(sourcePath, '/dist/assets')
        }]),
        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV':JSON.stringify('development')
        })
    ]
};
