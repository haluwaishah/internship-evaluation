module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[['react-native-reanimated/plugin'],
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      cwd: 'babelrc',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg˝'],
      root: ['./SRC'],
      alias: {
        '@assets': './SRC/assets',
        '@components': './SRC/components',
        '@constants': './SRC/constants',
        '@context': './SRC/context',
        '@navigation': './SRC/navigation',
        '@redux': './SRC/redux',
        '@screens': './SRC/screens',
        '@services': './SRC/services',
        '@utils': './SRC/utils',
        '@config': './SRC/config',
        '@root': './SRC/Root',
      },
    },
  ],],

};
