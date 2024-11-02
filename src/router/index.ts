import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import { CONSOLE_NOT_FOUND, CONSOLE_ROOT_MOUNT } from './constants'
import type { AppOption } from './types'
import { resolveRoutes } from './resolve'
import { createGuard } from './guard'

export type RouterType = 'hash' | 'history'

export function autoImportRouteModule() {
  const resolveModules: Array<RouteRecordRaw> = []
  const modules: Record<string, ObjectAny> = import.meta.glob(
    './module/**/*.ts',
    { eager: true },
  )

  for (const key in modules) {
    let mod = modules[key].default || {}
    mod = Array.isArray(mod) ? [...mod] : [mod]
    resolveModules.push(...mod)
  }

  return resolveModules
}

export function createWebRouter(options: AppOption) {
  const builtinRoutes = autoImportRouteModule()

  return {
    install(app: App) {
      const loadRoutes = [
        {
          ...CONSOLE_ROOT_MOUNT,
          children: [
            ...resolveRoutes(options.routes),
            ...resolveRoutes(builtinRoutes),
          ],
        },
        CONSOLE_NOT_FOUND,
      ]

      const router = createRouter({
        history:
          options.history === 'hash'
            ? createWebHashHistory(options.baseUrl)
            : createWebHistory(options.baseUrl),
        routes: loadRoutes,
        scrollBehavior() {
          return { top: 0 }
        },
      })

      createGuard(router)

      console.log(loadRoutes)
      app.use(router)
    },
  }
}
