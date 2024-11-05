import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

console.log('FEDERATION_DEBUG', process.env.FEDERATION_DEBUG);

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_host',
      shared: ['react', 'react-dom'],
      remotes: {
        mf_provider:
          'federation_provider@http://localhost:3322/mf-manifest.json',
      },
    }),
  ],
  server: {
    port: 3333,
  },
});
