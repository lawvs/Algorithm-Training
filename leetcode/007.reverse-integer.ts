function reverse(x: number): number {
  if (x < 0) return -1 * reverse(-x)
  const ret = +String(x).split('').reverse().join('')
  if (ret > 2 ** 31 - 1 || ret < -(2 ** 31)) {
    return 0
  }
  return ret
}
