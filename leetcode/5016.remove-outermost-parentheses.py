class Solution:
    def removeOuterParentheses(self, S: str) -> str:
        ret = ''
        stack = []
        for c in S:
          if c == '(':
            if len(stack) != 0:
              ret += c
            stack.append(c)
            continue
          if c == ')':
            stack.pop()
            if len(stack) != 0:
              ret += c
            continue
        return ret
