import './assets/css/global.css'

import { createApp, type App } from 'vue'
import { createPinia } from 'pinia'

import { createWebRouter } from './router'
import AppView from './App'
import { useConfigStore } from './stores/useConfigStore'
import type { AppOption } from './router/types'

// 创建 Web 应用
// 创建 vue 应用实例
// 挂载 pinia
// 挂载 包路由和传入路由
// 挂载 组件
export const createWebApp = (options: AppOption): Promise<App> => {
  return new Promise<App>(resolve => {
    const app = createApp(AppView)

    // 挂载 pinia 后就可以使用
    app.use(createPinia())

    // 使用 pinia store
    const configStore = useConfigStore()
    configStore.setRequestUrl(options.requestUrl)

    // 挂载 路由
    app.use(createWebRouter(options))

    resolve(app)
  })
}
