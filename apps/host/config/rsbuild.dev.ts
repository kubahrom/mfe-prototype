import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const { publicVars } = loadEnv({ prefixes: ['APP_'] });

const PORT = parseInt(process.env.DEV_PORT || '') || 3000;

const REMOTE_PORT = parseInt(process.env.DEV_REMOTE_PORT || '') || 3001;

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
            remote: `remote@http://localhost:${REMOTE_PORT}/mf-manifest.json`,
          },
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
});
