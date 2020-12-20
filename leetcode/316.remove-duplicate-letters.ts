function removeDuplicateLetters(s: string): string {
  const map: Record<string, number> = {}
  for (const c of s) {
    map[c] = (map[c] || 0) + 1
  }
  // console.log(map)

  const stack: string[] = []
  const mapS: Record<string, boolean> = {}

  for (const c of s) {
    while (true) {
      const top = stack[stack.length - 1]
      if (mapS[c]) {
        map[c] -= 1
        break
      }
      if (!stack.length || top <= c || map[top] <= 1) {
        stack.push(c)
        mapS[c] = true
        break
      }
      stack.pop()
      mapS[top] = false
      map[top] -= 1
    }
  }
  // console.log(map)
  return stack.join('')
}
