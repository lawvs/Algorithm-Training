const isPalindrome = (s: string) => s === s.split('').reverse().join('')

function partition(s: string): string[][] {
  const ans = []

  for (let i = 1; i < s.length; i++) {
    const head = s.slice(0, i)
    if (!isPalindrome(head)) {
      continue
    }
    const tail = s.slice(i)
    const sub = partition(tail).map((sa) => [head, ...sa])
    ans.push(...sub)
  }

  if (isPalindrome(s)) {
    ans.push([s])
  }
  return ans
}
