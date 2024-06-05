import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const { publicVars } = loadEnv({ prefixes: ['APP_'] });

export default defineConfig({
  output: {
    filename: {
      js: '[name].[contenthash:8].js',
      css: '[name].[contenthash:8].css',
    },
    assetPrefix: process.env.ASSET_PREFIX || '',
  },
  html: {
    template: './public/indexProd.html',
  },
  plugins: [pluginReact()],
  source: {
    define: publicVars,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'remote',
          exposes: {
            './RemoteApp': './src/bootstrap',
            './Counter': './src/Counter',
          },
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
});
