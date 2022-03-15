// const {
//   PHASE_PRODUCTION_BUILD,
//   PHASE_DEVELOPMENT_SERVER,
// } = require("next/constants");
// const nextEnv = require("next-env");
// const dotenvLoad = require("dotenv-load");

// dotenvLoad();

// const withEnv = nextEnv();

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("I'm in dev mode");
//   }
//   return withEnv(defaultConfig);
// };

// const nodeExternals = require('webpack-node-externals');
// // const withImages = require('next-images');
// // module.exports = withImages();

// module.exports = {
//   webpackDevMiddleware: (config) => {
//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300,
//     };
//     return config;
//   },
//   target: 'server',
//   externals: [nodeExternals()],
//   module: {
//     rules: [
//       {
//         test: /\.?tsx$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build' // aws amplify 에서 build 폴더를 찾지 못해 설정을 통해 root 밑에 build 파일 생성
}

module.exports = nextConfig
