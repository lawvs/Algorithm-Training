function leastBricks(wall: number[][]): number {
  const m: Record<number, number> = { 0: 0 }
  for (const wal of wall) {
    let cur = 0
    for (let j = 0; j < wal.length - 1; j++) {
      cur += wal[j]
      if (!(cur in m)) {
        m[cur] = 0
      }
      m[cur]++
    }
  }
  return wall.length - Math.max(...Object.values(m))
}
