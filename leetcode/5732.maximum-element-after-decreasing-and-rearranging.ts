function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  arr.sort((a, b) => a - b)
  arr[0] = 1
  for (let i = 1; i < arr.length; i++) {
    const last = arr[i - 1]
    if (arr[i] === last || arr[i] === last + 1) {
      continue
    }
    arr[i] = last + 1
  }
  return arr[arr.length - 1]
}
