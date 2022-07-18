import loginState from './loginState'
import loginGetters from './loginGetters'
import loginMutations from './loginMutations'
import loginActions from './loginActions'
const loginModule = {
  namespace: true,
  state: loginState,
  getters: loginGetters,
  mutations: loginMutations,
  actions: loginActions,
}
export default loginModule
