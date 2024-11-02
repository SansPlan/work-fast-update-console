// 该文件的出现是因为深层路由需要
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'NxSimpleView',
  setup() {
    return () => <RouterView />
  },
})
