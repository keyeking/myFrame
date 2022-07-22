import { createStore } from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import loginModule from './modules/login'
export default createStore({
  state,
  getters,
  mutations,
  actions,
  // 分出模块
  modules: {
    loginModule,
  },
})
