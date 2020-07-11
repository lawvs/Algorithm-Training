const m = {
  0: false,
  1: true,
  2: false,
  3: true,
  4: true,
  5: false,
}

/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  if (m[n] !== undefined) {
    return m[n]
  }

  for (let i = 1; i * i <= n; i++) {
    if (winnerSquareGame(n - i * i) === false) {
      m[n] = true
      return true
    }
  }
  m[n] = false
  return false
}
