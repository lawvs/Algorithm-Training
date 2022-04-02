/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  if (start === goal) {
    return 0;
  }

  let cnt = 0;
  while (start !== 0 || goal !== 0) {
    if ((start & 1) !== (goal & 1)) cnt++;
    start = start >> 1;
    goal = goal >> 1;
  }
  return cnt;
};
