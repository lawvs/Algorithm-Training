const isNumberToken = (c: string) => {
  return /[0-9]+/.test(c)
}

function evalRPN(tokens: string[]): number {
  const stack = [] as number[]
  for (const token of tokens) {
    if (isNumberToken(token)) {
      stack.push(+token)
      continue
    }
    const operator = token as '+' | '-' | '*' | '/'
    switch (operator) {
      case '+': {
        stack.push(stack.pop() + stack.pop())
        break
      }
      case '-': {
        const n1 = stack.pop()
        const n2 = stack.pop()
        stack.push(n2 - n1)
        break
      }
      case '*': {
        stack.push(stack.pop() * stack.pop())
        break
      }
      case '/': {
        const n1 = stack.pop()
        const n2 = stack.pop()
        stack.push(Math.trunc(n2 / n1))
        break
      }
      default:
        throw new Error('Unexpected Operator')
    }
  }
  return stack[0]
}
