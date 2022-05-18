const objectProto = Object.prototype

/**
 * 检查参数是否是原型。
 * @param {*} value 要检查的值
 * @returns {boolean} 如果是原型返回真，不是返回假
 */

function isPrototype (value) {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto

  return value === proto
}
export default isPrototype
