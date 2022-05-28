/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  const m = {};
  for (const [a, b] of roads) {
    m[a] = (m[a] || 0) + 1;
    m[b] = (m[b] || 0) + 1;
  }

  let ans = 0;
  Object.values(m)
    .sort((a, b) => b - a)
    .reduce((acc, cur) => {
      ans += acc * cur;
      return acc - 1;
    }, n);
  return ans;
};
