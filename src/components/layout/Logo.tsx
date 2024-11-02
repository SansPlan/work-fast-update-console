import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'ConsoleLayoutLogo',
  setup() {
    return () => (
      <RouterLink to={'/'}>
        <span class={'text-lg font-semibold'}>Logo</span>
      </RouterLink>
    )
  },
})
