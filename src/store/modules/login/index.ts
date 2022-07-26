import api from '@/api'
import type { Module } from 'vuex'
import loginType from './loginType'
import { Store } from '@/store/types'
const loginModule: Module<loginType, Store> = {
  namespaced: true,
  state: {
    token: '',
  },
  getters: {},
  mutations: {},
  actions: {
    // async loginAccount(data: { name: string; password: string }) {
    //   // 1.用户登录
    //   const loginResult = await api.login.loginAccount(data)
    //   console.log(loginResult)
    // },
  },
}
export default loginModule
