import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const { publicVars } = loadEnv({ prefixes: ['APP_'] });

const PORT = parseInt(process.env.DEV_PORT || '') || 3002;

export default defineConfig({
  server: {
    port: PORT,
  },
  dev: {
    assetPrefix: `http://localhost:${PORT}`,
  },
  html: {
    template: './public/index.html',
    crossorigin: true,
  },
  plugins: [pluginReact()],
  source: {
    define: publicVars,
  },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'auth',
          exposes: {
            './AuthApp': './src/bootstrap',
          },
          shared: {
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
          },
        }),
      ]);
    },
  },
});
