import { defineConfig } from 'vite'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      build: {
        outDir: './public',
        target: 'esnext',
      },
      publicDir: false,
    }
  }

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
      test: {
        clearMocks: true,
      },
    },
  }
})
