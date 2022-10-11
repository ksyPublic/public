import { Parcel } from '@parcel/core';

let bundler = new Parcel({
  entries: 'seo.ui.js',
  defaultConfig: '@parcel/config-default',
  mode: 'production',
  env: {
    NODE_ENV: 'production',
  },
  serveOptions: {
    port: 3000,
  },
  hmrOptions: {
    port: 3000,
  },
});

await bundler.watch();
