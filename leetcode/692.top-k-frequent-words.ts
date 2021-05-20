function topKFrequent(words: string[], k: number): string[] {
  const map: Record<string, number> = {}
  words.forEach((word) => {
    if (!(word in map)) {
      map[word] = 0
    }
    map[word]++
  })
  return Object.entries(map)
    .sort(([k1, v1], [k2, v2]) => {
      if (v2 !== v1) {
        return v2 - v1
      }
      return k1 < k2 ? -1 : 1
    })
    .slice(0, k)
    .map(([k]) => k)
}
