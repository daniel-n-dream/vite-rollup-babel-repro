export default {
  presets: [[
    '@babel/env', {
      // debug: true,
      useBuiltIns: 'usage',
      corejs: {
        version: '3.24',
      },
    },
  ]],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      // Plugin doc: https://babeljs.io/docs/en/babel-plugin-transform-runtime
      // corejs: 3,
      // absoluteRuntime: true,
      // helpers: true,
      // regenerator: true,
    }],
  ],
};
