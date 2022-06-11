/**
 * @param {{number}} n the length of the array
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
