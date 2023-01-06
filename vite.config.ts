import { createRequire } from 'node:module';

import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
const require = createRequire(import.meta.url);

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }),
    ],
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: '',
        },
        { find: 'src', replacement: path.resolve(__dirname, 'src') },
      ], // 添加src文件夹'@'别名
    },
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
