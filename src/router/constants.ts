export const CONSOLE_ROOT_MOUNT = {
  path: '/',
  name: 'NxConsoleRoot',
  meta: {
    requiresAuth: true,
    roles: ['admin', 'guess'],
  },
  component: () => import('../layouts/Default'),
}

export const CONSOLE_NOT_FOUND = {
  path: '/:pathMatch(.*)*',
  name: 'NxConsoleNotFound',
  meta: {
    requiresAuth: false,
    roles: false,
  },
  component: () => import('../views/NotFound'),
}
