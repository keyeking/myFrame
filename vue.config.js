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
})
