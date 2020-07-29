let m: Record<number, number> = {}

function integerBreak(n: number, first = true): number {
  if (first) m = { 1: 1 }
  if (m[n] !== undefined) return m[n]

  let ans = first ? 0 : n
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, i * integerBreak(n - i, false))
  }
  m[n] = ans
  return ans
}
