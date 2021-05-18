function countTriplets(arr: number[]): number {
  const prefixSum = Array(arr.length + 1)
  prefixSum[0] = 0
  for (let i = 0; i <= arr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] ^ arr[i]
  }
  let cnt = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        if (prefixSum[i] === prefixSum[k + 1]) {
          cnt++
        }
      }
    }
  }
  return cnt
}
