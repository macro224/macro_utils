/**
 * @param {*} str 传入的值
 * @param {*} param 判断的值是否在str参数内
 * @returns {boolean} 返回是否存在。
 */
function isOf (str, param) {
  return str.indexOf(param) > -1
}

export default isOf
