import type { App } from 'vue'
import ComponentList from './components'

interface InstallComponentOptions {
  // api 请求域名/IP
  domain: string
}

export default function (options: InstallComponentOptions) {
  return {
    install(app: App) {
      const { domain } = options
      console.log(domain)
      for (const comp of ComponentList) {
        app.component(comp.name as string, comp)
      }
    },
  }
}
