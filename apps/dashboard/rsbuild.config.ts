import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const { publicVars } = loadEnv({ prefixes: ['APP_'] });

const PORT = parseInt(process.env.DEV_PORT || '') || 3003;

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
  output: {
    filename: {
      js: '[name].[contenthash:8].js',
      css: '[name].[contenthash:8].css',
    },
    assetPrefix: '/dashboard/',
  },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'dashboard',
          exposes: {
            './DashboardApp': './src/bootstrap',
            './Search': './src/Search',
            './RecipeTags': './src/RecipeTags',
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
