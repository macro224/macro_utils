import { isInWxWork, isInWechat } from './systemInfo'

let vm = null

class Wx {
  static setConfig (config) {
    if (config && (Wx.isInWechat() || Wx.isInWxWork())) {
      vm && vm.config(config)
      vm && vm.error((error) => {
        if (config.debug) {
          window.alert(error)
        }
      })
    }
  }

  static getWxVm () {
    return vm || null
  }

  /**
   * 调用微信sdk，函数
   */
  static call (fn, params) {
    return new Promise((resolve, reject) => {
      if (Wx.isInWechat() || Wx.isInWxWork()) {
        // 企业微信接口
        if (fn.indexOf('qy') === 0 && !Wx.isInWxWork()) {
          return reject(new Error(`${fn} must use in wxwork, error in lin 29`))
        }

        vm && vm.ready(() => {
          return Wx[fn](params, resolve, reject)
        })
      } else {
        reject(new Error(`${fn} must use in wxwork or wechat, error in lin 36`))
      }
    })
  }

  /**
   * 获取定位的地址
   * @param params.type 坐标体系
   */
  static getLocation (params, resolve, reject) {
    const currentParams = params

    vm && vm.getLocation({
      type: currentParams.type ? currentParams.type : 'wgs84',
      success (res) {
        const { latitude, longitude, speed, accuracy } = res
        resolve({
          latitude,
          longitude,
          speed,
          accuracy
        })
      },
      fail (e) {
        reject(e)
      },
      cancel () {
        reject(new Error('cancle'))
      }
    })
  }

  /**
   * 分享好友
   */
  static onMenuShareAppMessage (params, resolve, reject) {
    const currentParams = params
    const { imgUrl = '', desc = '', link = '', title = '' } = currentParams
    vm && vm.onMenuShareAppMessage({
      title,
      desc,
      link,
      imgUrl,
      success () {
        resolve('success')
      },
      fail (e) {
        reject(e)
      },
      cancel () {
        reject(new Error('cancle'))
      }
    })
  }

  /**
   * 分享朋友圈
   */
  static onMenuShareTimeline (params, resolve, reject) {
    const currentParams = params
    const { imgUrl = '', link = '', title = '' } = currentParams
    vm && vm.onMenuShareTimeline({
      title,
      link,
      imgUrl,
      success () {
        resolve('success')
      },
      fail (e) {
        reject(e)
      },
      cancel () {
        reject(new Error('cancle'))
      }
    })
  }

  /**
   * 打开卡券
   */
  static openCard (params, resolve, reject) {
    const currentParams = params
    const { cardList } = currentParams
    vm && vm.openCard({
      cardList,
      success () {
        resolve('success')
      },
      fail (e) {
        reject(e)
      },
      cancel () {
        reject(new Error('cancle'))
      }
    })
  }

  /**
   * 打开地理位置
   */
  static openLocation (params) {
    const currentParams = params || {}
    const { longitude, latitude, name = '', address = '', scale = 1 } = currentParams
    vm && vm.openLocation({
      latitude,
      longitude,
      name,
      address,
      scale
    })
  }

  /**
   * 企业微信注入应用的权限
   */
  static qyAgentConfig (params, resolve, reject) {
    const currentParams = params
    vm && vm.agentConfig({
      ...currentParams,
      success () {
        resolve('success')
      },
      fail (e) {
        reject(e)
      },
      cancel () {
        reject(new Error('cancle'))
      }
    })
  }

  /**
   * 获取当前外部联系人userid
   */
  static qyGetCurExternalContact (params, resolve, reject) {
    vm && vm.invoke('getCurExternalContact', params, function (res) {
      if (res.err_msg === 'getCurExternalContact:ok') {
        resolve(res)
      } else {
        reject(new Error(res.err_msg))
      }
    })
  }

  /**
   * 聊天工具栏分享消息到会话
   */
  static qySendChatMessage (params, resolve, reject) {
    vm && vm.invoke('sendChatMessage', params, function (res) {
      if (res.err_msg === 'sendChatMessage:ok') {
        resolve(res)
      } else {
        reject(new Error(res.err_msg))
      }
    })
  }

  /**
   * 把微信注入sdk 注入到当前的值
   */
  static injection (_vm) {
    vm = _vm
  }

  /**
   * 判断是否在企业微信内
   *
   */
  static isInWxWork () {
    return isInWxWork()
  }

  /**
   * 判断是否在微信环境内
   * @return {boolean} 是否是在微信环境
   */
  static isInWechat () {
    return isInWechat()
  }
}

export default Wx
