const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  lintOnSave: false, //关闭语法检查
  transpileDependencies: true,
  publicPath: '',
  outputDir: 'dist',
  assetsDir: '', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components', //别名 @默认src
      },
    },
  },
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach((item) => {
      item
        .use('style-resources-loader')
        .loader('style-resources-loader')
        .options({
          patterns: './src/assets/css/index.less',
        })
        .end()
    })
  },
})
