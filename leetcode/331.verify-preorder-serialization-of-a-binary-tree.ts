function isValidSerialization(preorder: string): boolean {
  const preArr = preorder.split(',')
  const stack = []
  if (!preArr.length) {
    return false
  }
  if (preArr[0] !== '#') {
    stack.push(0)
  }
  for (let i = 1; i < preArr.length; i++) {
    if (!stack.length) {
      return false
    }
    const top = stack.pop()
    console.assert(top < 2)
    if (preArr[i] === '#') {
      if (top === 0) {
        stack.push(1)
      }
    } else {
      if (top === 0) {
        stack.push(1)
      }
      stack.push(0)
    }
  }
  return !stack.length
}
