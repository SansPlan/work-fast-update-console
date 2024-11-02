import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { ConsoleHeader } from '../components/layout'
import { NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui'

export default defineComponent({
  name: 'ConsoleLayoutOfDefault',
  setup() {
    return () => (
      <NLayout position="absolute">
        <NLayoutHeader>
          <ConsoleHeader />
        </NLayoutHeader>
        <NLayout
          position="absolute"
          style={{
            top: 'var(--c-header-height)',
          }}
        >
          <NLayoutContent>
            <RouterView />
          </NLayoutContent>
        </NLayout>
      </NLayout>
    )
  },
})
