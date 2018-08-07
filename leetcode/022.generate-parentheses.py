#!/usr/bin/env python3
'''
leetcode #22 generate-parentheses 括号生成
https://leetcode-cn.com/problems/generate-parentheses/description/
'''


class Solution:
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        if n <= 0:
            return ['']

        ans = []
        for i in range(n):
            for l in self.generateParenthesis(i):
                for r in self.generateParenthesis(n - 1 - i):
                    ans.append('({}){}'.format(l, r))
        return ans


if __name__ == '__main__':
    s = Solution()
    n = 4
    res = s.generateParenthesis(n)
    print(res)
