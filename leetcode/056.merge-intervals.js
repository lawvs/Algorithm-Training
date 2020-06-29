/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  return intervals
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, cur) => {
      if (!acc.length) {
        acc.push(cur)
        return acc
      }

      const last = acc[acc.length - 1]
      if (last[1] >= cur[0]) {
        last[0] = Math.min(last[0], cur[0])
        last[1] = Math.max(last[1], cur[1])
        return acc
      }
      acc.push(cur)
      return acc
    }, [])
}
