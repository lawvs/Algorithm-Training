function exclude(arr: number[], index: number): number[] {
  return arr.filter((v, idx) => idx != index)
}

function subsets(nums: number[]): number[][] {
  const cache: Record<string, boolean> = {}
  const helper = (arr: number[]): number[][] => {
    const key = JSON.stringify(arr)
    if (cache[key]) {
      return []
    }
    cache[key] = true
    return [...arr.flatMap((v, idx) => helper(exclude(arr, idx))), arr]
  }
  return helper(nums)
}
