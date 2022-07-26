import loginType from './modules/login/loginType'
export interface stateType {
  name: string
}
export type Store = loginType | stateType
