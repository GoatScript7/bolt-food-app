module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  plugins.push('nativewind/babel');

  plugins.push('expo-router/babel');

  plugins.push('react-native-reanimated/plugin');

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
