export const HTTP_STATUS = {
  CACHE: 304, // 缓存
  SUCCESS: 200, // 成功
  NOT_FOUND: 404, // 404
  INVALID_AUTH: 403, // 无效权限
  SYSTEM_ERROR: 500 // 系统错误
}

export const SERVER_STATUS = {
  SUCCESS: 0, // 成功
  LOGIN_INVALID: 1001, // 登录失效
  INVALID_AUTH: 403, // 无效权限
  NOT_FOUND: 404, // 页面不存在
  REQUEST_METHOD_ERROR: 405, // 请求方式错误
  SYSTEM_ERROR: 500, // 系统错误
  SERVICE_EXPIRED: 600, // 服务过期
  SERVICE_DISABLED: 601, // 服务被禁用
  THIRD_ERROR: 603, // 第三方错误
  RECORD_NO_EXIST: 4101, // 记录不存在
  VALID_ERROR: 4102 // 验证失败
}

export const handleHttpStatus = function (status, message) {
  let msg = ''
  switch (status) {
    case HTTP_STATUS.NOT_FOUND:
      msg = '请联系管理员确认是否存在相关页面'
      break
    case HTTP_STATUS.INVALID_AUTH:
      msg = '请联系管理员开通相关权限'
      break
    case HTTP_STATUS.SYSTEM_ERROR:
      msg = '网络开小差了，请稍后重试'
      break
    default:
      msg = '网络开小差了，请稍后重试'
      break
  }
  if (message) msg = message
  return {
    code: status,
    msg
  }
}
