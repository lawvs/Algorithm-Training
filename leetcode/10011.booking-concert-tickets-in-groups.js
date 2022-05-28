/**
 * @param {{number}} n
 */
const buildBlock = (n) => {
  const blockSize = Math.floor(Math.sqrt(n));

  const maybeBlockNum = Math.floor(n / blockSize);
  const cornerSize = n % blockSize;
  const hasCorner = cornerSize !== 0;
  const blockNum = hasCorner ? maybeBlockNum + 1 : maybeBlockNum;

  return {
    blockSize,
    blockNum,
    corner: {
      hasCorner,
      size: cornerSize,
    },
    /**
     * @param {number} idx
     * @return `blockIdx` 0..blockNum-1
     */
    getBlockIdx(idx) {
      return Math.floor(idx / blockSize);
    },
    /**
     * @param {number} idx
     * @return shift in block
     */
    getShift(idx) {
      return idx % blockSize;
    },
    /**
     * [left, right)
     * @param {number} blockIdx 0..blockNum-1
     */
    getBlock(blockIdx) {
      return {
        left: blockIdx * blockSize,
        right: blockIdx === blockNum - 1 ? n : blockIdx * blockSize + blockSize,
      };
    },
  };
};

/**
 * @param {number} n
 * @param {number} m
 */
var BookMyShow = function (n, m) {
  this.n = n;
  this.m = m;
  this.minBlock = 0;
  /**
   * @type {{ [blockN: number]: { rest: number, rows: number[] } }}
   */
  this.blockMap = {};

  // Decompose
  const block = buildBlock(n);
  this.blockSize = block.blockSize;
  this.blockNum = block.blockNum;
  this.getBlockIdx = block.getBlockIdx;
  this.getBlock = block.getBlock;
  this.getShift = block.getShift;

  if (block.corner.hasCorner) {
    const restRow = block.corner.size;
    this.blockMap[this.blockNum - 1] = {
      rest: this.m * restRow,
      rows: Array.from({ length: restRow }, () => this.m),
    };
  }

  // DEBUG
  // this.blockMap[this.blockNum] = {
  //   get rest() {
  //     throw new Error("Unreachable");
  //   },
  //   get rows() {
  //     throw new Error("Unreachable");
  //   },
  // };
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function (k, maxRow) {
  // console.log("gather", k, maxRow);
  // console.log(this.minBlock, this.blockSize, this.blockMap);

  let blockN = this.minBlock;
  let flag = true;

  while (blockN <= this.getBlockIdx(maxRow) && blockN < this.blockNum) {
    // console.log(blockN, this.blockMap);

    // Init block
    if (!this.blockMap[blockN]) {
      this.blockMap[blockN] = {
        rest: this.blockSize * this.m,
        rows: Array.from({ length: this.blockSize }, () => this.m),
      };
    }

    const block = this.blockMap[blockN];
    let ri = block.rows.length;
    if (blockN === this.getBlockIdx(maxRow)) {
      ri = this.getShift(maxRow) + 1;
    }
    for (let i = 0; i < ri; i++) {
      const row = block.rows[i];
      if (row - k >= 0) {
        const start = this.m - block.rows[i];
        block.rows[i] = row - k;
        block.rest -= k;

        return [this.getBlock(blockN).left + i, start];
      }
    }
    if (flag && block.rest <= 0) {
      flag = false;
      delete this.blockMap[blockN];
      this.minBlock = blockN + 1;
    }
    blockN++;
  }

  return [];
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function (k, maxRow) {
  // console.log("scatter", k, maxRow);
  // console.log(this.minBlock, this.blockSize, this.blockMap);

  let blockN = this.minBlock;
  let cur = 0;
  while (blockN <= this.getBlockIdx(maxRow) && blockN < this.blockNum) {
    // Init block
    if (!this.blockMap[blockN]) {
      this.blockMap[blockN] = {
        rest: this.blockSize * this.m,
        rows: Array.from({ length: this.blockSize }, () => this.m),
      };
    }

    const block = this.blockMap[blockN];
    if (blockN === this.getBlockIdx(maxRow)) {
      const ri = this.getShift(maxRow) + 1;
      for (let i = 0; i < ri; i++) {
        cur += block.rows[i];
        if (cur >= k) {
          break;
        }
      }
      break;
    } else {
      cur += block.rest;
      if (cur >= k) {
        break;
      }
    }
    blockN++;
  }

  if (cur < k) {
    return false;
  }

  // console.log("scatter", k, maxRow);
  // console.log(blockN, this.blockSize, this.blockMap);

  blockN = this.minBlock;
  while (k > 0) {
    const block = this.blockMap[blockN];
    if (block.rest <= k) {
      delete this.blockMap[blockN];
      this.minBlock = blockN + 1;
      k -= block.rest;
      blockN++;
      continue;
    }
    let i = -1;
    while (k > 0) {
      i++;
      if (block.rows[i] <= k) {
        block.rest -= block.rows[i];
        k -= block.rows[i];
        block.rows[i] = 0;
        continue;
      }
      block.rows[i] -= k;
      block.rest -= k;
      k = 0;
      return true;
    }
    blockN++;
  }

  return true;
};

/**
 * Your BookMyShow object will be instantiated and called as such:
 * var obj = new BookMyShow(n, m)
 * var param_1 = obj.gather(k,maxRow)
 * var param_2 = obj.scatter(k,maxRow)
 */
