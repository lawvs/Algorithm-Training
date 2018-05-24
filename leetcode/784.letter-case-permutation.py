#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #784 letter-case-permutation 字母大小写全排列
https://leetcode-cn.com/problems/letter-case-permutation/description/
'''
class Solution:

    l = []

    def recursive(self, S, i):
        if i >= len(S):
            return
        for j in range(i, len(S)):
            if S[j] >= 'a' and S[j] <= 'z':
                S[j] = S[j].upper()
                self.l.append(''.join(S))
                self.recursive(S, j + 1)
                S[j] = S[j].lower()
                continue
            if S[j] >= 'A' and S[j] <= 'Z':
                S[j] = S[j].lower()
                self.l.append(''.join(S))
                self.recursive(S, j + 1)
                S[j] = S[j].upper()
                continue
        return

    def letterCasePermutation(self, S):
        """
        :type S: str
        :rtype: List[str]
        """
        self.l = []
        self.l.append(S)
        S = list(S)
        self.recursive(S, 0)
        return self.l


if __name__ == '__main__':
    s = Solution()
    S = "a1b2"
    output = ["a1b2", "a1B2", "A1b2", "A1B2"]
    ret = s.letterCasePermutation(S)
    print(ret)
    # assert(output == ret)
