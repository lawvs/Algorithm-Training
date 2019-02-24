/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let x, y
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        x = i
        y = j
        break
      }
    }
  }

  let cnt = 0
  let flag = false
  for (let i = 0; i < board.length; i++) {
    const j = y
    // console.log(i, j, board[i][j])
    if (!flag && board[i][j] === 'p') {
      cnt = 1
    }
    if (flag && board[i][j] === 'p') {
      cnt++
      break
    }
    if (board[i][j] === 'R') {
      flag = true
    }
    if (!flag && board[i][j] === 'B') {
      cnt = 0
    }
    if (flag && board[i][j] === 'B') {
      break
    }
  }
  // console.log(cnt)
  let ans = 0
  ans += cnt
  cnt = 0
  flag = false
  for (let j = 0; j < board[x].length; j++) {
    const i = x
    // console.log(i, j, board[i][j])

    if (!flag && board[i][j] === 'p') {
      cnt = 1
    }
    if (flag && board[i][j] === 'p') {
      cnt++
      break
    }
    if (board[i][j] === 'R') {
      flag = true
    }
    if (!flag && board[i][j] === 'B') {
      cnt = 0
    }
    if (flag && board[i][j] === 'B') {
      break
    }
  }
  // console.log(cnt)
  ans += cnt
  return ans
}
