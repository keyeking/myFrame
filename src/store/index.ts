import { createStore } from 'vuex'
import loginModule from './modules/login'
import { stateType, Store } from './types'
export default createStore<Store>({
  state() {
    return {
      name: '',
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  // 分出模块
  modules: {
    loginModule,
  },
})
