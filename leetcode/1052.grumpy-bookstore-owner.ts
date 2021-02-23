function maxSatisfied(
  customers: number[],
  grumpy: number[],
  X: number
): number {
  let right = X
  let cnt = customers.reduce(
    (acc, cur, i) => (i < X || grumpy[i] === 0 ? acc + cur : acc),
    0
  )
  let max = cnt
  while (right < customers.length) {
    cnt += grumpy[right] === 1 ? customers[right] : 0
    cnt -= grumpy[right - X] === 1 ? customers[right - X] : 0
    max = Math.max(max, cnt)
    right++
  }
  return max
}
