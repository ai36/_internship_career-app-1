import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Career App',
    favicon: './src/assets/icons/favicon.svg',
    meta: {
      description: 'Job search application',
    },
    tags: [{
      tag: 'html',
      attrs: {
        lang: 'ru'
      }
    }]
  },
  source: {
    alias: {
      '@': './src',
    },
  },
});
