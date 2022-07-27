// 获取当前文件下所有ts结尾的文件
const files: __WebpackModuleApi.RequireContext = require.context(
  '.',
  true,
  /\.ts$/,
)

let modulesRouter: any = []
files.keys().forEach((key) => {
  if (key === './index.ts') return
  modulesRouter = modulesRouter.concat(files(key).default) // 读取出文件中的default模块
})
export default modulesRouter // 抛出一个Vue-router期待的结构的数组
