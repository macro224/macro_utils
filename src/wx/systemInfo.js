import platform from 'platform'

/**
 * 判断是否符合某个环境
 * @param reg
 * @param condition
 * @returns
 */
export const checkEnv = function (reg, condition) {
  const ua = platform.ua?.toLowerCase()

  if (ua) {
    const match = ua.match(reg)
    if (match && match.includes(condition)) {
      return true
    }
    return false
  }

  return false
}

/**
 * 判断是否在企业微信
 */
export const isInWxWork = function () {
  return checkEnv(/WxWork/i, 'wxwork')
}

/**
 * 判断是否在微信
 */
export const isInWechat = function () {
  return checkEnv(/MicroMessenger/i, 'micromessenger') && !isInWxWork()
}

/**
 * 是否在电脑当中
 */
export const isInMobile = function () {
  return platform.os?.family === 'Android' || platform.os?.family === 'iOS'
}

const systemInfo = async function () {
  const result = {
    ua: '',
    isInMobile: false,
    isInWechat: false,
    isInWxWork: false,
    os: {
      family: '',
      version: '',
      architecture: 64,
      info: ''
    },
    env: ''
  }

  result.ua = platform.ua?.toLowerCase() ? platform.ua?.toLowerCase() : '' // ua

  result.isInMobile = isInMobile() // 是否在Android或者iOS
  result.isInWechat = isInWechat() // 是否在微信
  result.isInWxWork = isInWxWork() // 是否在企业微信

  if (result.isInWechat) {
    result.env = 'wechat'
  }

  if (result.isInWxWork) {
    result.env = 'wxwork'
  }

  const { family, version, architecture } = platform.os

  result.os = {
    family: family || '',
    version: version || '',
    architecture: architecture || 64,
    info: platform.os.toString() || ''
  }

  return result
}

export default systemInfo
