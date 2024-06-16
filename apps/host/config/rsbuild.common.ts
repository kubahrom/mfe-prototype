import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { publicVars } = loadEnv({ prefixes: ['APP_'] });

export default defineConfig({
  html: {
    template: './public/index.html',
    crossorigin: 'anonymous',
  },
  source: {
    define: publicVars,
  },
  plugins: [
    pluginReact({
      splitChunks: {
        react: false,
        router: false,
      },
    }),
  ],
});
