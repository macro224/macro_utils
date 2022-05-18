// 手机号码验证
function mobile (value) {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(value)
}
// 邮箱验证
function email (value) {
  const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  return reg.test(value)
}
// qq验证
function qq (value) {
  const reg = /^[1-9][0-9]{4,11}$/
  return reg.test(value)
}
// 昵称不能包含特殊字符验证
function nickname (value) {
  // eslint-disable-next-line no-useless-escape
  const reg = /[\'.,:;*?~`!@#$%^&+=)(<>{}]|\]|\[|\/|\\\|\"|\|/
  return !reg.test(value)
}
// 验证密码
function password (value) {
  const reg = /^[A-Za-z0-9]{6,20}$/
  return reg.test(value)
}
// 纯数字验证
function int (value) {
  const reg = /^\d+$/
  return reg.test(value)
}

/* 校验 */
export default {
  mobile,
  email,
  qq,
  nickname,
  password,
  int,
}
