/**
 * 根据传入内容清除其中的空格
 * @param {*} str 传入内容
 * @param {*} direction 去除空格的方式 left: 左边; right: 右边; both: 两边; middle: 保存两边的空格清除中间; 不传就清除全部;
 * @returns {Object} 返回参数对象 或者 字符串
 */

const deleSpac = function(str, direction) { // 1 串的模板 2 清除哪边空格
  let Reg = '';
  switch(direction) {
    case 'left' : // 去除左边
      Reg = /^[\s]+/g;
      break;
    case 'right' : // 去除右边
      Reg = /([\s]*)$/g;
      break;
    case 'both' : // 去除两边
      Reg = /(^\s*)|(\s*$)/g
      break;
    default :   // 没传默认全部，且为下去除中间空格做铺垫
      Reg = /[\s]+/g;
      break;
  }
  let newStr = str.replace(Reg,'');
  if ( direction === 'middle' ){
    let RegLeft = str.match(/(^\s*)/g)[0]; // 保存右边空格
    let RegRight = str.match(/(\s*$)/g)[0]; // 保存左边空格
    newStr = RegLeft + newStr + RegRight; // 将空格加给清完全部空格后的字符串
  }
  return newStr;
}

export default deleSpac