import { defineConfig, mergeRsbuildConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { commonConfig, sharedDeps } from './rsbuild.common';

const PORT = parseInt(process.env.DEV_PORT || '') || 3000;

const devConfig = defineConfig({
  server: {
    port: PORT,
  },
  dev: {
    assetPrefix: `http://localhost:${PORT}`,
    startUrl: true,
  },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'host',
          remotes: {
            marketing: `marketing@http://localhost:${process.env.DEV_MARKETING_PORT || 3001}/mf-manifest.json`,
            auth: `auth@http://localhost:${process.env.DEV_AUTH_PORT || 3002}/mf-manifest.json`,
            dashboard: `dashboard@http://localhost:${process.env.DEV_DASHBOARD_PORT || 3003}/mf-manifest.json`,
          },
          shared: sharedDeps,
        }),
      ]);
    },
  },
});

export default mergeRsbuildConfig(commonConfig, devConfig);
