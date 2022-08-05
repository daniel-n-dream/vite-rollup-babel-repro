/* eslint-disable import/no-extraneous-dependencies */

import { build } from 'vite';
import { resolve } from 'path';
import { URL } from 'url';
import { babel } from '@rollup/plugin-babel';

const dirname = new URL('.', import.meta.url).pathname;

// libraries
const libraries = [{
  entry: resolve(dirname, '../src/test-assign.js'),
  name: 'TestAssign',
  fileName: (format) => `TestAssign.${format}.js`,
  formats: ['es', 'iife'],
}];

// build
libraries.forEach(async (libItem) => {
  await build({
    configFile: false,
    plugins: [
      babel({
        babelHelpers: 'runtime',
        configFile: resolve(dirname, 'babel.config.js'),
        exclude: 'node_modules/**',
      }),
    ],
    build: {
      lib: libItem,
      emptyOutDir: true,
      outDir: '../dist',
      rollupOptions: {},
      target: 'chrome39',
    },
  });
});
