import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const { publicVars } = loadEnv({ prefixes: ['APP_'] });

const PORT = parseInt(process.env.DEV_PORT || '') || 3000;

export default defineConfig({
  server: {
    port: PORT,
  },
  dev: {
    assetPrefix: `http://localhost:${PORT}`,
    startUrl: true,
  },
  html: {
    template: './public/index.html',
    crossorigin: 'anonymous',
  },
  plugins: [
    pluginReact({
      splitChunks: {
        react: false,
        router: false,
      },
    }),
  ],
  source: {
    define: publicVars,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'host',
          remotes: {
            marketing: `marketing@http://localhost:${process.env.DEV_MARKETING_PORT || 3001}/mf-manifest.json`,
            auth: `auth@http://localhost:${process.env.DEV_AUTH_PORT || 3002}/mf-manifest.json`,
            dashboard: `dashboard@http://localhost:${process.env.DEV_DASHBOARD_PORT || 3003}/mf-manifest.json`,
          },
          shared: {
            react: {
              version: '^18.2.0',
              singleton: true,
              strictVersion: false,
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
