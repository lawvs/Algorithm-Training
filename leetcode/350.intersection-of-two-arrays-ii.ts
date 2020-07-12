function intersect(nums1: number[], nums2: number[]): number[] {
  const arr = []
  const m: { [x: number]: number } = {}
  for (const num1 of nums1) {
    m[num1] = (m[num1] || 0) + 1
  }

  for (const num2 of nums2) {
    if (m[num2]) {
      m[num2] -= 1
      arr.push(num2)
    }
  }
  return arr
}
