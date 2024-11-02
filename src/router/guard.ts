import { createDiscreteApi } from 'naive-ui'
import type { Router } from 'vue-router'

export function createGuard(router: Router) {
  const { loadingBar } = createDiscreteApi(['loadingBar'])
  router.beforeEach(() => loadingBar.start())
  // =====

  // =====
  router.afterEach(() => loadingBar.finish())
}
