// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@ant-design/icons'] // @ant-design/icons modülünü buraya ekleyin
    }
  }
};
