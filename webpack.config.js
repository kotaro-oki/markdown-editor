const path = require('path')

module.exports = {
    target: ['web', 'es5'],
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    // __dirnameが実行しているファイルのパス、 process.cwd()は現在のディレクトリのパス
    // Windowsとかだとパス区切りが/じゃないこともあるみたい。バックスラッシュっていうやつ（\）。
    // だから__dirname + '/src'だとパスがおかしくなってしまうことがあるからpath.resolveを使って安心安全で行こうぜ！ってことらしい。
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      publicPath: 'dist/',
    },
    devServer: {
      static: {
          directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      open: true,
      historyApiFallback: true,
    }
    
}