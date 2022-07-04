/**
 * 异步加载javascript脚本
 * @param src 需要加载的脚本
 */
const loadScript = function (src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src

    document.head.appendChild(script)

    script.onload = function () {
      resolve(script)
      return script
    }

    script.onerror = function () {
      reject(new Error(`load ${src} error`))
    }
  })
}

export default loadScript
