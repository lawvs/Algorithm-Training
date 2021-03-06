/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  let cnt = 0

  for (let i = 0; i < s.length; i++) {
    const map = {}
    let max = -Infinity
    for (let j = i; j < s.length; j++) {
      map[s[j]] = (map[s[j]] || 0) + 1
      if (map[s[j]] > max) max = map[s[j]]
      cnt += max - Math.min(...Object.values(map))
    }
  }

  return cnt
}
