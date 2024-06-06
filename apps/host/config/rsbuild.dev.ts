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
  },
  plugins: [pluginReact()],
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
            remote: `remote@http://localhost:3003/mf-manifest.json`,
          },
          shared: {
            react: {
              requiredVersion: '^18.2.0',
              singleton: true,
            },
            'react-dom': {
              requiredVersion: '^18.2.0',
              singleton: true,
            },
            'react-router-dom': {
              requiredVersion: '^5.2.0',
              singleton: true,
            },
          },
        }),
      ]);
    },
  },
});
