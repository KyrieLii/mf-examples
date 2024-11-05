import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

console.log('FEDERATION_DEBUG', process.env.FEDERATION_DEBUG);

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_provider',
      exposes: {
        './button': './src/button.tsx',
        './export-app': './src/export-app.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: 3322,
  },
});
