import dts from 'unplugin-dts/vite'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import pkg from './package.json' with { type: 'json' }

export default defineConfig(({ mode }) => {
  return {
    build: {
      copyPublicDir: false,
      lib: {
        entry: './index.js',
        fileName: 'index',
        formats: ['es', 'cjs', 'umd'],
        name: 'jsonresumeThemeEven',
      },
      rollupOptions: {
        external: [...Object.keys(pkg.dependencies), /^node:.*/],
      },
      target: 'esnext',
    },
    plugins: [
      dts(),
      viteStaticCopy({
        targets: [{ src: './schema.d.ts', dest: '.' }],
      }),
    ],
    test: {
      clearMocks: true,
    },
  }
})
