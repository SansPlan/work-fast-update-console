import type { RouterOptions } from 'vue-router'
import { type RouterType } from './router'

export interface AppOption extends Omit<RouterOptions, 'history'> {
  // 路由类型
  history: RouterType
  // baseUrl
  baseUrl: string
  // 请求地址
  requestUrl: string
}
