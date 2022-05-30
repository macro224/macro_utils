const glob = require('glob')
const path = require('path')
const SRC = path.join(__dirname, '../..', 'src')

/**
 * 获取src下的方法包列表
 */
const getModulesList = async () => {
  const src = SRC + '/**/*'
  const modules = []
  glob.sync(src).forEach(item => {
    if (item.endsWith('index.js')) {
      const paths = item.split('/')
      const fileName = paths[paths.length - 2]
      fileName === 'src' ? modules.unshift('all') : modules.push(fileName)
    }
  })
  return modules
}

module.exports = {
  getModulesList,
  SRC
}
