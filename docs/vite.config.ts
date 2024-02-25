import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      dirs: ["/"],
      include: [/\.vue$/, /\.md$/],
      resolvers: [NaiveUiResolver({ sideEffect: true })],
    }),
  ],
  ssr: { noExternal: ["naive-ui", "vueuc"] },
})
