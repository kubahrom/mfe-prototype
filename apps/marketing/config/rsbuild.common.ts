import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { publicVars } = loadEnv({ prefixes: ['APP_'] });

export const commonConfig = defineConfig({
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

export const sharedDeps = {
  react: {
    version: '^18.2.0',
    singleton: true,
  },
  'react-dom': {
    version: '^18.2.0',
    singleton: true,
  },
  'react-router-dom': {
    version: '^5.2.0',
    singleton: true,
  },
};
