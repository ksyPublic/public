const { config } = require('@swc/core/spack');

module.exports = config({
    entry: {
        web: __dirname + '/src/web.js',
        android: __dirname + '/src/android.js'
    },
    output: {
        path: __dirname + '/lib'
    },
    module: {}
});
