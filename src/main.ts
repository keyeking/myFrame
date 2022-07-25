import { createApp, App } from 'vue'
import rootApp from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css' //清除默认样式
import './assets/css/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import myRequest from './service'
import echarts from 'echarts'
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
import { registerComponents } from '@/components/globalComponents/index'
import utils from './utils'
const app: App = createApp(rootApp)
app.config.globalProperties.$http = myRequest
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$utils = utils
app.use(store)
app.use(registerComponents) //调用函数会自动传入app
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// interface datatype{
//   data:any
//   returnCode:string
//   success:boolean
// }
// hyRequest.get<datatype>({
//   url:'/home/multidata',
//   method:'get',
// }).then((res)=>{
//   console.log('1111');
//   console.log(res);
//   console.log('12a')
// })
