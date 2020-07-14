const m: Record<number, number> = {
  '0': 1,
  '1': 1,
  '2': 2,
  '3': 5,
  '4': 14,
  '5': 42,
  '6': 132,
  '7': 429,
  '8': 1430,
  '9': 4862,
  '10': 16796,
  '11': 58786,
  '12': 208012,
  '13': 742900,
  '14': 2674440,
  '15': 9694845,
  '16': 35357670,
  '17': 129644790,
  '18': 477638700,
  '19': 1767263190,
  '20': 6564120420,
}

function numTrees(n: number): number {
  if (m[n] !== undefined) {
    return m[n]
  }

  let cnt = 0
  for (let i = 0; i < n; i++) {
    cnt += numTrees(i) * numTrees(n - i - 1)
  }
  m[n] = cnt
  return cnt
}
