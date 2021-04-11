const table = (function makeTable(n: number) {
  const set = new Set([1])
  const table = []
  const queue = [1]
  for (let i = 0; i < n; i++) {
    // console.assert(queue.length > 0)
    queue.sort((a, b) => a - b)
    const head = queue.shift()
    table.push(head)
    const next = [head * 2, head * 3, head * 5].filter((i) => !set.has(i))
    next.forEach((i) => set.add(i))
    queue.push(...next)
  }

  return table.sort((a, b) => a - b)
})(1690)

// console.log(table)

function nthUglyNumber(n: number): number {
  return table[n - 1]
}
