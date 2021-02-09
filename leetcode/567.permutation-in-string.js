/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const map = s1.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})

  let left = 0
  let right = 0
  let curMap = {}
  while (right < s2.length) {
    const ch = s2[right]
    if (!map[ch]) {
      curMap = {}
      left = right + 1
    } else if ((curMap[ch] || 0) < map[ch]) {
      curMap[ch] = (curMap[ch] || 0) + 1
    } else {
      curMap[ch] = (curMap[ch] || 0) + 1
      while (s2[left] !== ch) {
        curMap[s2[left]]--
        left++
      }
      curMap[s2[left]]--
      left++
    }
    right++
    if (right - left === s1.length) {
      return true
    }
    // console.log(s2.slice(left, right))
  }
  return false
}
