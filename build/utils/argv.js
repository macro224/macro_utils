/**
 * 获取需要编译的模块
 */
exports.getModuleName = function () {
  const cmd = process.argv[2]
  let moduleName = ''
  if (cmd === '-m') moduleName = process.argv[3]
  return moduleName
}
