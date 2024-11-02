import { defineComponent } from 'vue'
import { ConsoleLogo, ConsoleNavbar } from '.'

export default defineComponent({
  name: 'ConsoleLayoutHeader',
  setup() {
    return () => (
      <header class={'h-header'}>
        <div class={'flex items-center h-full gap-3 px-3'}>
          <ConsoleLogo />
          <ConsoleNavbar />
        </div>
      </header>
    )
  },
})
