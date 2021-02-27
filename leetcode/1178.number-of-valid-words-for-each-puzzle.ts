function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
  const stringToBinNum = (str: string) =>
    str
      .split('')
      .reduce(
        (acc, c) => (acc |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))),
        0
      )

  const map = words.reduce((map, word) => {
    const key = stringToBinNum(word)
    map[key] = (map[key] || 0) + 1
    return map
  }, {} as Record<number, number>)

  return puzzles.map((puzzle) => {
    let cnt = 0
    const puzzleNum = stringToBinNum(puzzle)
    const firstCharKey = 1 << (puzzle[0].charCodeAt(0) - 'a'.charCodeAt(0))
    for (let i = puzzleNum; i; i = (i - 1) & puzzleNum) {
      // console.log(i.toString(2))
      if (firstCharKey & i) {
        cnt += map[i] || 0
      }
    }
    return cnt
  })
}
