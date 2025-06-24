import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    hmr: {
      clientPort: 443,
      protocol: 'wss',
      host: 'https://2690-181-115-183-180.ngrok-free.app/' // usa el host de tu túnel ngrok
    },
    origin: 'https://2690-181-115-183-180.ngrok-free.app/' // asegúrate que coincida
  }
})
