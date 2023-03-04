import { defineConfig, loadEnv } from 'vite';
// import path from 'path';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: process.env.VITE_APP_ROOT_URL ? process.env.VITE_APP_ROOT_URL : '/',
    plugins: [
      vue({
        template: {
          compilerOptions: {},
        },
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: 'Vorobey Art',
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
      extensions: ['.ts', '.tsx', '.js'],
    },
    build: {
      target: 'es2020',
    },
    module: 'esnext',
    server: {
      host: true,
      port: 8080,
    },
  };
});
