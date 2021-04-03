function numRabbits(answers: number[]): number {
  answers = answers.sort((a, b) => a - b)
  let cnt = 0
  let groupSize = 0
  let groupCnt = 0
  for (const group of answers) {
    if (groupSize !== group || !groupCnt) {
      groupSize = group
      groupCnt = group
      cnt += group + 1
    } else {
      groupCnt--
    }
  }
  return cnt
}
