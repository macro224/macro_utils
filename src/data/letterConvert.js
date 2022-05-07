const letterConvert = function () {
  return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
    return `${s1.toUpperCase()}${s2.toLowerCase()}`
  })
}

export default letterConvert