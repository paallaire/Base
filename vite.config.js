import ViteRestart from 'vite-plugin-restart';
import legacy from '@vitejs/plugin-legacy';
import eslintPlugin from 'vite-plugin-eslint';
//import copy from 'rollup-plugin-copy';

export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './dist/',
    rollupOptions: {
      input: {
        app: './assets/scripts/main.js',
      }
    },
  },
  server: {
    origin: 'http://localhost:3000',
    host: '0.0.0.0',
  },
  plugins: [
    eslintPlugin(),
    ViteRestart({
      reload: [
        './templates/**/*',
      ],
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    // copy({
    //   targets: [{src: 'assets/fonts/**/*', dest: './web/dist/fonts'}],
    //   hook: 'writeBundle'
    // }),
  ],
});
