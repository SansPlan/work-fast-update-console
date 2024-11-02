// src/utils/withInstall.ts
import type { App, Component } from 'vue'

type WithInstall<T> = T & {
  install(app: App): void
}

const installedComponents: Set<string> = new Set()

export function withInstall<T extends Component>(component: T): WithInstall<T> {
  ;(component as WithInstall<T>).install = (app: App) => {
    const componentName = component.name
    if (componentName && !installedComponents.has(componentName)) {
      app.component(componentName, component)
      installedComponents.add(componentName)
    }
  }

  return component as WithInstall<T>
}
