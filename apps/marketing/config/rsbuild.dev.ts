import { defineConfig, mergeRsbuildConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { commonConfig, sharedDeps } from './rsbuild.common';

const PORT = parseInt(process.env.DEV_PORT || '') || 3001;

const devConfig = defineConfig({
  server: {
    port: PORT,
  },
  dev: {
    assetPrefix: `http://localhost:${PORT}`,
  },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'marketing',
          exposes: {
            './MarketingApp': './src/bootstrap',
          },
          remotes: {
            dashboard: `dashboard@http://localhost:${process.env.DEV_DASHBOARD_PORT || 3003}/mf-manifest.json`,
          },
          shared: sharedDeps,
        }),
      ]);
    },
  },
});

export default mergeRsbuildConfig(commonConfig, devConfig);
