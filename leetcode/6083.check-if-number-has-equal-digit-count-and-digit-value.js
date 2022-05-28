/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const map = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  num.split("").forEach((i) => {
    if (map[i]) {
      map[i]++;
    } else {
      map[i] = 1;
    }
  });

  // console.log(map);

  for (let i = 0; i < num.length; i++) {
    if (+map[i] !== +num[i]) {
      return false;
    }
  }
  return true;
};
