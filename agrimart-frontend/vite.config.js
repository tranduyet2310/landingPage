import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    port: 3000,
    https:{
      key: './certs/key.pem',
      cert: './certs/server.pem',
    }
  }
})
