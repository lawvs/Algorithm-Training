/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  const map = {};
  for (let i = 0; i < relation.length; i++) {
    const [a, b] = relation[i];
    if (!map[a]) map[a] = [];
    map[a].push(b);
  }
  let q = [0];
  while (k-- > 0) {
    const newQ = [];
    q.forEach((i) => {
      if (!map[i]) {
        return;
      }
      newQ.push(...map[i]);
    });
    q = newQ;
  }
  return q.filter((i) => i === n - 1).length;
};
