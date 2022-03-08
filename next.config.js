const widthBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const webpack = require("webpack");

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = {
  webpack(config, { isServer, buildId }) {
    config.resolve.modules.push(__dirname);

    return config;
  },
};
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
