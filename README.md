# Base Model Console

在企业做管理后台开发，想必都会遇到这样一个问题：每有一个项目，就要复制一套与业务无关的代码到新的项目里面。

这在正常开发过程中并没有什么问题，因为当无限制可复制的时候，说明前后端在这一块已经稳定。但这样也会有新的问题出现，比如某一天，产品经理说要给后台换个UI风格或在权限上加个小功能并且所有项目要同步使用。

那么在项目 A 里面写好了这么一份代码经过测试没有问题了，开始复制到 B/C/D... 等项目里面的时候就非常的难受。

这时候就有想法了，能不能把公共模块全部抽离，后面如果有改动只需要用脚本为各个项目执行一下包更新就行？

这非常可行，新的问题出现：

1. 和复制差不多，每个项目都要执行 upgrade 更新包
2. 为什么不用微前端？

对于问题 1 也非常好解决，虽然还是麻烦但问题不打：现在的项目基本都是 CI/CD，只需要在脚本上加入 `pnpm up [package]@latest` or `npm run update [package]@latest` 等依赖包检查更新指令就行  
问题 2 是因为没必要，公司要求每个项目都必须独立，不能有任何的交集。

好！！没有问题了，又有需求，为了方便自己，那就改造吧。

### 最终使用

```typescript
// src/main.ts
import type { App } from 'vue'
import { createWebApp } from 'nanxing-console'
import routes from './router'

createWebApp({
  history: 'hash',
  baseUrl: import.meta.env.BASE_URL,
  requestUrl: 'https://sansplan.cn/',
  routes,
}).then((app: App) => app.mount('#app'))
```

在实现的过程中，尽可能的将非业务全部放置到包里面，在新建项目的之后只需要关注业务的开发即可  
后续可以写个脚手架快速生成项目进行业务开发
