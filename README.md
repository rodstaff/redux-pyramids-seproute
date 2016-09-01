Basic Redux Introduction - Redux Tutorial #3
link:  https://www.youtube.com/watch?v=ucd5x3Ka3gw

"dev": "webpack-dev-server --progress --colors --hot --inline"
"dev": "webpack-dev-server --content-base src --hot --inline"

webpack.config.js MYSTERY = #3, 1;05/6:49

Facebook - https://www.facebook.com/TheNewBoston...
GitHub - https://github.com/buckyroberts
https://github.com/buckyroberts/React-Redux-Boilerplate
Google+ - https://plus.google.com/+BuckyRoberts

.babelrc =
{
  "presets":  ["es2015", "react"],
  "plugins": ["transform-object-rest-spread"]
}

Bucky's webpack.config.js that didn't work for me!


var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 8087
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/client.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};