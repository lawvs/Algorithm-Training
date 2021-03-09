const isNumberSymbol = (c: string) => {
  return /[0-9]/.test(c)
}

function calculate(s: string): number {
  // return eval(s)
  const op = [] as ('+' | '-' | '(' | '-(')[]
  const nums = [] as number[]
  let curNum = null
  let sign = false
  for (const c of s) {
    if (isNumberSymbol(c)) {
      curNum = curNum * 10 + +c
      continue
    }
    if (curNum !== null) {
      if (sign) {
        curNum *= -1
        sign = false
      }
      nums.push(curNum)
    }

    curNum = null
    switch (c) {
      case '(':
        // "- (3 + (4 + 5))"
        if (sign === true) {
          op.push('-(')
          sign = false
        } else {
          op.push(c)
        }
        break
      case '+':
        op.push(c)
        break
      case '-':
        sign = true
        op.push(c)
        break
      case ')':
        while (true) {
          const o = op.pop()
          if (o === '(') {
            break
          } else if (o === '-(') {
            nums.push(-1 * nums.pop())
            break
          }
          nums.push(nums.pop() + nums.pop())
        }
        break
      case ' ':
        break
      default:
        throw new Error('Unreachable')
    }
  }
  if (curNum !== null) {
    if (sign) {
      curNum *= -1
      sign = false
    }
    nums.push(curNum)
  }
  console.log(nums)
  let ans = 0
  while (nums.length) {
    ans += nums.pop()
  }
  return ans
}
