import isOf from '../type/isOf'

/**
 * 路由跳转
 * @memberof url
 * @param {Router} router 路由
 * @returns {Function} 返回跳转的路由
 *
 */
const jumpToPage = (router) => {
  return function (url, target = '_self') {
    const isRouter = !isOf(url, 'http://') && !isOf(url, 'https://') && router
    if (isRouter) {
      router && router.push && router.push({ path: url })
    } else {
      if (target === '_self') {
        window.location.href = url
      } else {
        window.open(url, target)
      }
    }
  }
}

export default jumpToPage
