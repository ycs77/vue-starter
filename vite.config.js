import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import TailwindCss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import RadixVueResolver from 'radix-vue/resolver'

export default defineConfig({
  plugins: [
    Vue(),
    VueDevTools(),
    TailwindCss(),
    Components({
      resolvers: [
        IconsResolver({ prefix: '' }),
        RadixVueResolver(),
      ],
    }),
    Pages(),
    Icons(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
