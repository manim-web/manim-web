const path = require('path')

module.exports = {
  entry: './src/main.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ]
  }
}