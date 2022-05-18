/**
 * 根据传入的时间返回相应的格式
 * @param {*} date 传入的时间
 * @param {*} obj 是否返回对象类型
 * @param {*} division 字符串类型的时间分割符
 * @returns {Object} 返回参数对象 或者 字符串
 */

function formatTime(date, obj, division = '/') {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    
    return obj ? {year, month, day, hour, minute, second} 
    : 
    [year, month, day].map(formatNumber).join(division) + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    return n < 10 ? '0' + n : n
}

export default formatTime
