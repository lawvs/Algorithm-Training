/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let cnt = 0;
  const str = num.toString();
  for (let i = 0; i <= str.length - k; i++) {
    const sub = str.slice(i, i + k);
    const n = parseInt(sub);
    if (n > 0 && num % n === 0) {
      cnt++;
    }
  }
  return cnt;
};
