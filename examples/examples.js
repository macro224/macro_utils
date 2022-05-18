
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  /**
   * 根据传入的时间返回相应的格式
   * @param {*} date 传入的时间
   * @param {*} obj 是否返回对象类型
   * @param {*} division 字符串类型的时间分割符
   * @returns {Object} 返回参数对象 或者 字符串
   */
  function formatTime(date, isobj, division = '/') {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return isobj ? {
      year,
      month,
      day,
      hour,
      minute,
      second
    } : [year, month, day].map(formatNumber).join(division) + ' ' + [hour, minute, second].map(formatNumber).join(':');
  }

  function formatNumber(n) {
    return n < 10 ? '0' + n : n;
  }

  console.log(formatTime(new Date(), 0, '-'));

}());
