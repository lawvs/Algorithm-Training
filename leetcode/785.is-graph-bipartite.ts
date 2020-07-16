function isBipartite(graph: number[][]): boolean {
  const s1 = new Set<number>()
  const s2 = new Set<number>()

  const dfs = (r: number, s: Set<number>, sr: Set<number>) => {
    sr.add(r)
    for (let j = 0; j < graph[r].length; j++) {
      if (s.has(graph[r][j])) {
        continue
      }
      if (sr.has(graph[r][j])) {
        return false
      }
      if (!dfs(graph[r][j], sr, s)) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < graph.length; i++) {
    if (!s1.has(i) && !s2.has(i)) {
      if (!dfs(i, s2, s1)) {
        return false
      }
    }
  }

  // console.log(s1, s2)
  return true
}
