#!/usr/bin/env python3
'''
leetcode #856 score-of-parentheses 括号的分数
https://leetcode-cn.com/problems/score-of-parentheses/description/
'''

class Solution:
    def scoreOfParentheses(self, S):
        """
        :type S: str
        :rtype: int
        """
        stack = [0]
        for c in S:
            if c == '(':
                stack.append(0)
            else:
                v = stack.pop()
                stack[-1] += max(1, 2 * v)
        return stack[0]


if __name__ == '__main__':
   s = Solution()
   S = "()" # 1
   res = s.scoreOfParentheses(S)
   assert(res == 1)
   S = "(())" # 2
   res = s.scoreOfParentheses(S)
   assert(res == 2)
   S = "()()" # 2
   res = s.scoreOfParentheses(S)
   assert(res == 2)
   S = "()()()" # 3
   res = s.scoreOfParentheses(S)
   assert(res == 3)
   S = "((()))" # 4
   res = s.scoreOfParentheses(S)
   assert(res == 4)
   S = "(()())" # 4
   res = s.scoreOfParentheses(S)
   assert(res == 4)
   S = "(()(()))" # 6
   res = s.scoreOfParentheses(S)
   assert(res == 6)
   # print(res)
