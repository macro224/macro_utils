/**
 * @param {*} str 传入的值
 * @param {*} param 是否判断空格
 * @returns {boolean} 返回是否存在。
 */
function isOf (str, param) {
    return str.indexOf(param) > -1
}

export default isOf