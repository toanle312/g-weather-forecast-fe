import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env,
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
