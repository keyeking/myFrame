/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  /*声明vue文件*/
  import Vue from 'vue'
  declare
  Vue
}
declare let $store: any
