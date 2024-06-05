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
    assetPrefix: '/host/',
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
            remote: `remote@${PRODUCTION_DOMAIN}/remote/mf-manifest.json`,
          },
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
});
