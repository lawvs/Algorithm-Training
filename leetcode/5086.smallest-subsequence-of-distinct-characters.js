/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
  text = text.split('').reduce((pre, cur) => {
    if (pre.slice(-1)[0] === cur) {
      return pre
    }
    pre.push(cur)
    return pre
  }, [])

  const cnt = new Map()
  for (const c of text) {
    cnt.set(c, (cnt.get(c) || 0) + 1)
  }

  const stack = []
  const set = new Set()

  for (let c of text) {
    cnt.set(c, cnt.get(c) - 1)
    if (set.has(c)) {
      continue
    }
    while (
      stack.length &&
      c < stack.slice(-1)[0] &&
      cnt.get(stack.slice(-1)[0])
    ) {
      const last = stack.pop()
      set.delete(last)
    }
    set.add(c)
    stack.push(c)
  }
  return stack.join('')
}
