module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
}
