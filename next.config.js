const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

module.exports = {
  reactStrictMode: true,
};

module.exports = withPlugins([
  [
    withAntdLess({
      modifyVars: { "primary-color": "#25b864" },

      webpack(config) {
        return config;
      },
    }),
  ],
]);
