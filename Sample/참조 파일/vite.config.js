import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url))
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',                // 요청을 보낼 대상 서버
        changeOrigin: true,                             // 호스트 헤더를 대상 URL의 호스트로 변경
        rewrite: (path) => path.replace(/^\/api/, ''),  // /api를 제거하고 요청
        secure: false,                                  // SSL 인증서 검증 활성화
        ws: false,                                      // WebSocket을 사용할 경우 true로 설정
      },
    },
  },
});
