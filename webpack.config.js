
module.exports = {
  entry: './src/js/client.js',
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
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread']
          //plugins: ['transform-object-rest-spread']
        }
      }
    ]
  }
}
