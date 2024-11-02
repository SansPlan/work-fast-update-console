// 处理路由格式
// 因为在某些时刻会忘记一些细节
// 比如在新增 module 文件后，填写的路由不自觉就会在前面加上 /
// 这样的操作会导致路由在访问的时候达不到预期，因为页面没有被布局所包裹
// 这里要做的就是处理这样的细节，让路由达到想要的效果

import type { RouteRecordRaw, RouterOptions } from 'vue-router'

function formatPath(path: string) {
  return path.replace(/^\/+|\/+$/g, '')
}

function recursion(routes: RouterOptions['routes']) {
  return routes.map((route: RouteRecordRaw) => {
    const newRoute: RouteRecordRaw = {
      ...route,
      path: formatPath(route.path),
    }
    if (newRoute.children) {
      newRoute.children = recursion(newRoute.children)
    }
    return newRoute
  })
}

export function resolveRoutes(routes: RouterOptions['routes']) {
  return recursion(routes)
}
