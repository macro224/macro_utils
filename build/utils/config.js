import path from 'path'
import getRollupDevConfig from '../config/rollup.dev.conf'
import getRollupProdConfig from '../config/rollup.prod.conf'
/**
 * 创建配置
 * @param {*} name
 * @param {*} input
 */
export const createConfig = function (moduleName) {
  // const moduleName = process.env.MODULE_NAME
  // 获取入口
  const input = moduleName !== 'all' ? path.join(__dirname, '../src', `${moduleName}/index.js`) : path.join(__dirname, '../src/index.js')
  const name = moduleName === 'all' ? 'macroUtils' : moduleName

  return process.env.NODE_ENV === 'development' ? getRollupDevConfig(name, input) : getRollupProdConfig(name, input)
}
