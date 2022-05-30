const alias = require('@rollup/plugin-alias')
const { eslint } = require('rollup-plugin-eslint')
const resolve = require('@rollup/plugin-node-resolve').default
const replace = require('@rollup/plugin-replace')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('@rollup/plugin-json')

export default {
  external: ['axios'],
  plugins: [
    alias({
      resolve: ['.js', '.ts']
    }),
    replace({
      'process.evn.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    eslint({
      include: ['src/**/*.ts', 'src/*.ts']
    }),
    resolve(),
    commonjs(),
    json(),
    babel({
      extensions: ['.js', '.ts'],
      runtimeHelpers: true,
      exclude: ['node_modules/**'],
    })
  ]
}
