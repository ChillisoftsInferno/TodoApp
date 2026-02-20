import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    proxy: {
      // Proxy requests starting with '/api'
      '/api': {
        target: process.env.VITE_API_BASE_URL, // The address of your backend server
        changeOrigin: true, // Changes the origin header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the '/api' prefix from the request path
      },
    },
  }
})
