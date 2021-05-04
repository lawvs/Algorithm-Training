function deleteAndEarn(nums: number[]): number {
  const arr = nums
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      const last = acc.length ? acc[acc.length - 1] : { num: -1, point: 0 }
      if (cur === last.num) last.point += cur
      else acc.push({ num: cur, point: cur, dp: 0 })
      return acc
    }, [] as { num: number; point: number; dp: number }[])

  if (arr.length == 1) {
    return arr[0].point
  }
  arr[0].dp = arr[0].point
  arr[1].dp = arr[1].point
  if (arr[0].num + 1 !== arr[1].num) {
    arr[1].dp += arr[0].dp
  }
  arr[1].dp = Math.max(arr[0].dp, arr[1].dp)

  for (let i = 2; i < arr.length; i++) {
    const cur = arr[i]
    if (arr[i - 1].num + 1 === cur.num) {
      cur.dp = Math.max(arr[i - 1].dp, cur.point + arr[i - 2].dp)
    } else {
      cur.dp = cur.point + arr[i - 1].dp
    }
  }
  return Math.max(arr[arr.length - 1].dp, arr[arr.length - 2].dp)
}
