/**
 * @param {string} s
 * @param {string} sub
 * @param {character[][]} mappings
 * @return {boolean}
 */
var matchReplacement = function (s, sub, mappings) {
  const map = mappings.reduce((acc, [key, val]) => {
    if (!acc[key]) {
      acc[key] = {};
    }
    acc[key][val] = 1;
    return acc;
  }, {});

  for (let i = 0; i + sub.length <= s.length; i++) {
    let flag = true;

    for (let j = 0; j < sub.length; j++) {
      const si = s[i + j];
      const sj = sub[j];

      if (si === sj) {
        continue;
      }
      if (map[sj] && map[sj][si]) {
        // console.log("replace", i, si, j, sj, map[sj][si]);
        continue;
      }
      flag = false;
      break;
    }
    if (flag) {
      return true;
    }
  }
  return false;
};
