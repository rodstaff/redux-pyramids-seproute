module.exports = {
  entry: './src/client.js',
  // output: {
  // path: './indexT.html'
  // // filename: 'bundle.js'
  // },
  devServer: {
    inline: true,
    publicPath: '/',
    //filename: 'client.js',
    //filename: 'bundle.js',
    //contentBase: './src/client',
    port: 8087
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        //   plugins: 'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  }
}
