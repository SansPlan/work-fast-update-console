import type { App } from 'vue'
import { createWebApp } from '../src'
import routes from './router'

createWebApp({
  history: 'hash',
  baseUrl: import.meta.env.BASE_URL,
  requestUrl: 'https://sansplan.cn/',
  routes,
}).then((app: App) => app.mount('#app'))
