import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'ConsoleLayoutNavbar',
  setup() {
    return () => (
      <nav class={'flex gap-3'}>
        <RouterLink to={'/'}>Welcome</RouterLink>
        <RouterLink to={'/home'}>Home</RouterLink>
        <RouterLink to={'/about'}>About</RouterLink>
      </nav>
    )
  },
})
