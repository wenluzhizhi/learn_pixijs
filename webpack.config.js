
const path = require('path')
module.exports = {
  entry:
    './src/js/index.ts',
  output: {
    filename: '[name].js'
  },
  module:{
    rules:[
      {test:/\.tsx$/,
        exclude: /node_modules/,use:['ts-loader']}
    ]
  },
  devServer: {//开发服务器
    hot: true,//热更新
    inline: true,//
    open: true,//是否自动打开默认浏览器
    contentBase: path.resolve(__dirname, 'dist'),//发布目录
    port: '1996',//控制端口
    host: '0.0.0.0',//host地址
    historyApiFallback: true,
    useLocalIp: true,//是否用自己的IP
  }
};