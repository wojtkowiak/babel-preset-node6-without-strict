/* global module */

var plugins = [
  'babel-plugin-syntax-async-functions',
  'babel-plugin-transform-es2015-destructuring',
  'babel-plugin-transform-es2015-modules-commonjs',
  'babel-plugin-transform-es2015-parameters',
  'babel-plugin-transform-es2015-sticky-regex',
  'babel-plugin-transform-es2015-unicode-regex',
  'babel-plugin-transform-strict-mode',
  'babel-polyfill',
  'babel-preset-react',
];

module.exports = {
  plugins: plugins.map(function(plugin) {
    return require(plugin);
  }),
};
