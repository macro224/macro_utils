import rollupBaseConf from './rollup.base.conf'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'
const getRollupProdConfig = function (name, input) {
  if (name === 'MacroUtils') name = 'index'
  return {
    ...rollupBaseConf,
    input,
    output: [{
      file: `lib/${name}.js`,
      format: 'umd',
      name,
      globals: {
        'axios': 'axios'
      }
    }],
    plugins: [
      ...rollupBaseConf.plugins,
      filesize(),
      terser()
    ]
  }
}

export default getRollupProdConfig