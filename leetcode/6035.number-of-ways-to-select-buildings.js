/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  let ans = 0;

  let tmp0 = 0;
  let tmp1 = 0;
  let tmp01 = 0;
  let tmp10 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      tmp0++;
      tmp10 += tmp1;
      ans += tmp01;
    }
    if (s[i] === "1") {
      tmp1++;
      tmp01 += tmp0;
      ans += tmp10;
    }
  }

  return ans;
};
