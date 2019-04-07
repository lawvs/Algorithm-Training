/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  let cnt = 0
  let start = 0
  while (true) {
    const sa = clips
      .filter(c => c[0] <= start && c[1] > start)
      .sort((a, b) => b[1] - a[1])
    if (sa.length === 0) {
      return -1
    }
    // console.log(sa)
    start = sa[0][1]
    cnt++
    if (start >= T) {
      return cnt
    }
  }
}
