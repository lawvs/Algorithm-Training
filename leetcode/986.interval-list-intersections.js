/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
var intervalIntersection = function(A, B) {
  const arr = [...A, ...B]
  arr.sort((x, y) => x.start - y.start)
  // console.log(arr)
  const ans = []
  for (let i = 0; i < arr.length; i++) {
    const start = arr[i].start
    const end = arr[i].end
    for (let j = i + 1; j < arr.length; j++) {
      const istart = arr[j].start
      const iend = arr[j].end
      if (istart > end) {
        break
      }
      ans.push(new Interval(istart, Math.min(end, iend)))
    }
  }
  return ans
}
