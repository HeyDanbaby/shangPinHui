const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        // 写自己的服务器地址
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: {"^/api" : ""}   // 这里的接口都有/api 所以不需要重写
      }, 
    },
  },

})
