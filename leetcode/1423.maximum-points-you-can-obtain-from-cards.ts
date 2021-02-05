function maxScore(cardPoints: number[], k: number): number {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += cardPoints[i]
  }
  let maxSum = sum
  if (k === cardPoints.length) {
    return maxSum
  }
  let start = k - 1
  let end = cardPoints.length - 1
  while (start >= 0) {
    sum -= cardPoints[start--]
    sum += cardPoints[end--]
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}
