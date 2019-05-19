const isPredecessor = (long, short) => {
  const arr = []
  for (let i = 0; i < long.length; i++) {
    arr.push(long.slice(0, i) + long.slice(i + 1, long.length))
  }
  return arr.some(s => s === short)
}

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  const arr = new Array(17).fill(0).map(() => new Array())
  for (const word of words) {
    arr[word.length].push(word)
  }
  const dp = new Array(17).fill(0).map(() => new Array(1001).fill(0))

  let max = 1
  // init
  for (let i = 0; i < arr[1].length; i++) {
    dp[1][i] = 1
  }
  for (let i = 2; i < dp.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const wordList = arr[i - 1]
      const predecessor = arr[i][j]
      let preMax = 1
      for (let x = 0; x < wordList.length; x++) {
        const w = wordList[x]
        if (isPredecessor(predecessor, w)) {
          preMax = Math.max(preMax, dp[i - 1][x] + 1)
        }
      }
      dp[i][j] = preMax
      max = Math.max(max, preMax)
    }
  }
  return max
}

ret = longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])
console.log(ret) // 4
