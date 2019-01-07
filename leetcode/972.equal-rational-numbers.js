/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var isRationalEqual = function(S, T) {
  const parser = str => {
    const reg = /\(.*\)/
    if (!reg.test(str)) {
      return parseFloat(str)
    }
    const loopReg = /(?<=\().*(?=\))/
    let loop = loopReg.exec(str)[0]
    for (let i = 0; i < 5; i++) {
      loop += loop
    }
    const prefixReg = /^.*?(?=\()/
    const prefix = prefixReg.exec(str)[0]
    return parseFloat(prefix + loop)
  }
  // console.log(parser(S), parser(T))
  return parser(S) === parser(T)
}
