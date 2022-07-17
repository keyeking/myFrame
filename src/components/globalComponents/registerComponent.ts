import { App } from 'vue'
import 'element-plus/dist/index.css'
import { ElButton, ElInput, ElTable } from 'element-plus' // 引入相关的组件
const components = [ElButton, ElInput, ElTable]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
