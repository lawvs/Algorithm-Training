function minSwapsCouples(row: number[]): number {
  let cnt = 0
  for (let i = 1; i < row.length; i += 2) {
    if ((row[i - 1] ^ 1) === row[i]) {
      continue
    }
    cnt++
    for (let j = i + 1; j < row.length; j++) {
      if (row[j] === (row[i - 1] ^ 1)) {
        row[j] = row[i]
      }
    }
  }
  return cnt
}
