function canCross(stones: number[]): boolean {
  const arr = Array(stones.length) as Set<number>[]
  arr[0] = new Set([0])
  for (let i = 1; i < arr.length; i++) {
    arr[i] = new Set<number>()
    for (let j = 0; j < i; j++) {
      const target = [...arr[j].keys()]
        .filter(
          (k) =>
            stones[j] + k - 1 === stones[i] ||
            stones[j] + k === stones[i] ||
            stones[j] + k + 1 === stones[i]
        )
        .map(() => stones[i] - stones[j])
      // console.assert(target.length <= 1)
      if (target.length) {
        arr[i].add(target[0])
      }
    }
  }
  // console.log(arr)
  return arr[arr.length - 1].size > 0
}
