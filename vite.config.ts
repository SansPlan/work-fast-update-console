import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
            'createDiscreteApi',
          ],
        },
      ],
      eslintrc: {
        enabled: false,
        globalsPropValue: true,
      },
    }),
    Components({ resolvers: [NaiveUiResolver()] }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./example', import.meta.url)),
    },
  },
  server: {
    host: true,
  },
})
