const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  lintOnSave: false, //关闭语法检查
  productionSourceMap: false, //生产环境是否要生成 sourceMap
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components', //别名 @默认src
      },
    },
  },

  chainWebpack: (config) => {
    // 通过 style-resources-loader 来添加less全局变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) => {
      let rule = config.module.rule('less').oneOf(type)
      rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [path.resolve(__dirname, './src/assets/css/index.less')],
        })
    })
  },
})
