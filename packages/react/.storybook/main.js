const webpackConfigFactory = require('../config/webpack.config');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
  webpackFinal: async (config, { configType }) => {
    const webpackConfig = webpackConfigFactory('development');
    config.resolve.modules = [...(config.resolve.modules ?? []), ...webpackConfig.resolve.modules];

    return config;
  },
};
