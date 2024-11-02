import { defineComponent } from 'vue'
import { ConsoleProvider } from '../components'

export default defineComponent({
  name: 'ConsoleProvider',
  setup(props, { slots }) {
    return () => {
      return <ConsoleProvider>{slots.default?.()}</ConsoleProvider>
    }
  },
})
