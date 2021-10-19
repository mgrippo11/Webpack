const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
 
 
module.exports = {
 
    mode: 'development',
    
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: 'html-loader',
              options: {
                // Disables attributes processing
                sources: false,
                //minimize: false,
              },
            },
            {
              test: /\.css$/i,
              exclude: /styles.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /styles.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
              test: /\.(png|jpg|gif)$/,
              loader: 'file-loader'
            }
          ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          title: 'Webpack',
          template: './src/index.html',
          filename: './index.html',
        }),

        new MiniCssExtractPlugin({
          //filename: '[name].[fullhash].css',
          filename: '[name].css',
          ignoreOrder: false,
        }),

        new CopyPlugin({
          patterns: [
            {from: 'src/assets/', to: 'assets/'}
          ]
        })
    ]
 
    
}