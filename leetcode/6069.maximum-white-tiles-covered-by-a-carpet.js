/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function (tiles, carpetLen) {
  let cnt = 0;
  let cur = [];
  tiles.sort((a, b) => a[0] - b[0]);
  tiles = tiles.reduce((acc, cur) => {
    if (!acc.length) {
      acc.push(cur);
      return acc;
    }
    const last = acc[acc.length - 1];
    if (cur[0] === last[1]) {
      last[1] = cur[1];
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  // console.log(tiles);
  let poi = 0;
  while (poi < tiles.length) {
    const [from, to] = tiles[poi];
    if (to <= carpetLen) {
      cur.push(tiles[poi]);
      poi++;
      cnt += to - from + 1;
      continue;
    }
    if (from > carpetLen) {
      break;
    }
    cur.push([from, carpetLen]);
    tiles[poi][0] = carpetLen + 1;
    cnt += carpetLen - from + 1;
    break;
  }

  // console.log(1, carpetLen, cnt, cur, tiles);

  let max = cnt;
  while (poi < tiles.length) {
    const [from, to] = tiles[poi];
    poi++;
    cnt += to - from + 1;
    const start = to - carpetLen + 1;

    while (cur.length && cur[0][0] < start) {
      const [curFrom, curTo] = cur[0];

      if (curTo < start) {
        cur.shift();
        cnt -= curTo - curFrom + 1;
        continue;
      }

      cur[0][0] = start;
      cnt -= start - curFrom;
      break;
    }

    if (cur.length && cur[cur.length - 1][1] === from) {
      cur[cur.length - 1][1] = to;
    } else {
      cur.push([from, to]);
    }

    // console.log(start, to, cnt, cur, tiles);

    max = Math.max(max, cnt);
  }
  return max;
};
