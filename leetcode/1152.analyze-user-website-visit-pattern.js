/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
  const logs = username
    .map((v, i) => [v, timestamp[i], website[i]])
    .sort((a, b) => a[1] - b[1])

  const m = {}
  for (const log of logs) {
    const name = log[0]
    if (!m[name]) {
      m[name] = []
    }
    m[name].push(log[2])
  }
  // console.log(m)

  const mp = {}
  for (const k in m) {
    const arr = m[k]
    const nameM = {}
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          const kp = `${arr[i]},${arr[j]},${arr[k]}`
          if (nameM[kp]) {
            continue
          }
          if (!mp[kp]) {
            mp[kp] = 0
          }
          nameM[kp] = true
          mp[kp]++
        }
      }
    }
  }

  // console.log(mp)

  let ret = []
  let max = -1
  for (const k in mp) {
    if (mp[k] >= max) {
      if (mp[k] === max) {
        ret = ret < k ? ret : k
        continue
      }
      max = mp[k]
      ret = k
    }
  }
  return ret.split(',')
}
