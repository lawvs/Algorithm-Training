const isNumberSymbol = (c: string) => {
  return /[0-9]/.test(c)
}

function calculate(s: string): number {
  const stack = [] as number[]
  let sign = '+'
  let num = 0
  for (const c of s) {
    if (c === ' ') {
      continue
    }
    if (isNumberSymbol(c)) {
      num = num * 10 + +c
      continue
    }

    switch (sign) {
      case '+':
        stack.push(num)
        break
      case '-':
        stack.push(-num)
        break
      case '*':
        stack.push(stack.pop() * num)
        break
      case '/':
        stack.push(Math.trunc(stack.pop() / num))
        break
      default:
        throw new Error(`Unknown char ${sign}`)
    }
    sign = c
    num = 0
  }

  switch (sign) {
    case '+':
      stack.push(num)
      break
    case '-':
      stack.push(-num)
      break
    case '*':
      stack.push(stack.pop() * num)
      break
    case '/':
      stack.push(Math.trunc(stack.pop() / num))
      break
    default:
      throw new Error(`Unknown char ${sign}`)
  }
  return stack.reduce((a, b) => a + b)
}
