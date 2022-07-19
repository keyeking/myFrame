const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false, //关闭语法检查
  transpileDependencies: true,
  outputDir: '.build', //输出文件名
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
          // or an array : ["./path/to/vars.less", "./path/to/mixins.less"] 这里的路径不能使用@，否则会报错
          patterns: './src/assets/css/index.less',
        })
        .end()
    })
  },
})
