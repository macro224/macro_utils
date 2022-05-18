import rollupBaseConf from './rollup.base.conf'
import serve from 'rollup-plugin-serve-proxy'
import livereload from 'rollup-plugin-livereload'

import path from 'path'

const resolve = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

const getRollupDevConfig = function (name, input) {
  return {
    ...rollupBaseConf,
    input: './src/examples.js',
    output: [{
      file: 'examples/examples.js',
      format: 'iife',
      name: ''
    }],
    plugins: [
      ...rollupBaseConf.plugins,
      serve({
        open: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 8888,
        contentBase: [resolve('examples')],
        proxy: {}
      }),
      livereload()
    ]
  }
}

export default getRollupDevConfig