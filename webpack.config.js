
module.exports = {
  entry: './dev/js/client.js',
  // output: {
  // path: 
  // // filename: 'bundle.js'
  // },
  devServer: {
    inline: true,
    publicPath: '/',
    //filename: 'bundle.js',
    //contentBase: '',
    port: 8087
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs', 
            'transform-class-properties', 
            'transform-decorators-legacy', 
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  }
}

// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
//   devServer: {
//     inline: true,   
//   //contentBase: '/', 
//     publicPath: '/',    
//     port: 8089
//   },
//   devtool: 'inline-source-map',
//   entry: './dev/js', 
//   module: {
//     loaders: [
//     {
//        exclude: /node_modules/,
//        test: /\.js$/,
//        loader:  'babel-loader',
//        query: {
//          presets: ['react', 'es2015', 'stage-0'],
//          plugins: [
//            'react-html-attrs', 
//            'transform-class-properties', 
//            'transform-decorators-legacy'
//          ]
//        }
//      },
//       {
//        test: /\.scss/,
//        loader: 'style-loader!css-loader!sass-loader'
//       }
//     ]
//   },
//   output: {
//     path: 'src/js',
//     filename: 'bundle.js'  
//   },
//   plugins: [
//   new webpack.optimize.DedupePlugin(),
//   new webpack.optimize.OccurrenceOrderPlugin()
//   //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//   ]
// }
