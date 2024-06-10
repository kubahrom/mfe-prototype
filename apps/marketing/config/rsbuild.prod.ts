import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const { publicVars } = loadEnv({ prefixes: ['APP_'] });

const PRODUCTION_DOMAIN = process.env.PRODUCTION_DOMAIN;

export default defineConfig({
  output: {
    filename: {
      js: '[name].[contenthash:8].js',
      css: '[name].[contenthash:8].css',
    },
    assetPrefix: '/marketing/',
  },
  html: {
    template: './public/index.html',
    crossorigin: 'anonymous',
  },
  plugins: [pluginReact()],
  source: {
    define: publicVars,
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
