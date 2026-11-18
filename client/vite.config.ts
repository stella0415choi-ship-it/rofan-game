import { defineConfig } from 'vite';

// 개발 중에는 /api 요청을 서버(3001)로 넘겨 준다.
export default defineConfig({
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:3001' },
  },
});
