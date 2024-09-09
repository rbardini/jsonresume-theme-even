import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    build: {
      outDir: '../public',
      target: 'esnext',
    },
    publicDir: false,
  }
})
