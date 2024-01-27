module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  plugins.push('nativewind/babel');

  plugins.push('expo-router/babel');

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
