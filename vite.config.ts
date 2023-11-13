import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: [resolve(__dirname, 'src/index.ts')],
      formats: ['es', 'cjs'],
    },
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      output: {
        preserveModules: true,
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      afterBuild: () => {
        copyFileSync('dist/index.d.ts', 'dist/index.d.cts');
      },
    }),
  ],
});
