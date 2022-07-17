import { App } from 'vue';
import registerComponent from './registerComponent'; // 引入注册组件
export function registerComponents(app: App): void {
  registerComponent(app);
}
