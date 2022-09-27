// const { config } = require('@swc/core/spack');

// module.exports = config({
//   entry: {
//     web: __dirname + '/src/web.ts',
//     android: __dirname + '/src/android.ts',
//   },
//   output: {
//     path: __dirname + '/lib',
//   },
//   module: {},
// });

// 빌드타입 (desktop)
const buildType = process.env.BUILD_TYPE;
// 빌드환경 (development, production) 개발 | 운영
const env = process.env.NODE_ENV;
// 빌드타입, 환경에따른 아웃풋 경로 반환
const filesPath = {
  output: dir => {
    const pathInfo = {
      desktop: {
        image: `${env}/${buildType}/images`,
        html: `${env}/${buildType}`,
        css: `${env}/${buildType}/css`,
        js: `${env}/${buildType}/js`,
        font: `${env}/${buildType}/fonts`,
        guide: `${env}/${buildType}/guide`,
      },
    };
    return pathInfo[buildType][dir];
  },
  input: filesPath => {
    return `./src/${buildType}/${filesPath}`;
  },
};

const webpackConfig = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map', // process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'production',
  output: {
    filename: `uxw.ui.js`,
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'swc-loader',
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};

export { filesPath, webpackConfig };
