export default [
  {
    path: '/home',
    name: 'NxConsoleWelcome',
    component: () => import('../../views/Welcome'),
  },
  {
    path: '/about',
    name: 'NxConsoleAbout',
    component: () => import('../../views/About'),
  },
]
