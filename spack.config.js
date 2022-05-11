const { config } = require("@swc/core/spack");

module.exports = config({
    output: {
        path: __dirname + "/src/js/common.js",
        // Name is optional.
        name: "index.js",
    },
});
