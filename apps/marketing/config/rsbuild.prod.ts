import { defineConfig, mergeRsbuildConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { commonConfig, sharedDeps } from './rsbuild.common';

const PRODUCTION_DOMAIN = process.env.PRODUCTION_DOMAIN;

const prodConfig = defineConfig({
  output: {
    filename: {
      js: '[name].[contenthash:8].js',
      css: '[name].[contenthash:8].css',
    },
    assetPrefix: '/marketing/',
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
            dashboard: `dashboard@${PRODUCTION_DOMAIN}/dashboard/mf-manifest.json`,
          },
          shared: sharedDeps,
        }),
      ]);
    },
  },
});

export default mergeRsbuildConfig(commonConfig, prodConfig);
