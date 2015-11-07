/* global module */
var presets = [
  'babel-preset-react',
];

var plugins = [
  'babel-plugin-transform-es2015-destructuring',
  'babel-plugin-transform-es2015-modules-commonjs',
  'babel-plugin-transform-es2015-parameters',
  'babel-plugin-transform-es2015-sticky-regex',
  'babel-plugin-transform-es2015-unicode-regex',
  'babel-plugin-transform-strict-mode',
  'babel-plugin-transform-flow-strip-types'
];

module.exports = {
  presets: presets.map(function(preset) {
      return require(preset);
    }),

  plugins: plugins.map(function(plugin) {
    return require(plugin);
  }),
};
