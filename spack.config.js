const { config } = require('@swc/core/spack');

module.exports = config({
  output: {
    path: __dirname + '/src/js/seo.ui.js',
    // Name is optional.
    name: 'seo.ui.js',
  },
});
