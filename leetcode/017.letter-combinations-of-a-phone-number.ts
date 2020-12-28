const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
} as const

function letterCombinations(digits: string, arr: string[] = []): string[] {
  if (!digits.length) {
    return arr
  }
  if (!arr.length) {
    return letterCombinations(digits.slice(1), map[digits[0]].split(''))
  }
  const newArr = []
  for (const s of arr) {
    for (const c of map[digits[0]]) {
      newArr.push(s + c)
    }
  }
  return letterCombinations(digits.slice(1), newArr)
}
