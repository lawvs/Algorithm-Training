#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #848 shifting-letters 字母移位
https://leetcode-cn.com/contest/weekly-contest-88/problems/shifting-letters/
'''

class Solution(object):
    def shiftingLetters(self, S, shifts):
        """
        :type S: str
        :type shifts: List[int]
        :rtype: str
        """
        l = len(S)
        S = list(S)
        cnt = [0] * l
        cnt[l - 1] = shifts[l - 1]
        for i in range(l - 2, -1, -1):
            cnt[i] = cnt[i + 1] + shifts[i]
        # print(cnt)
        for i in range(l):
            S[i] = chr(ord('a') + (ord(S[i]) - ord('a') + cnt[i]) % 26)
        return ''.join(S)

# if __name__ == '__main__':
#     s = Solution()
#     S = "ruu"
#     shifts = [26,9,17]
#     output = "rul"
#     res = s.shiftingLetters(S, shifts)
#     print(res)
#     assert(res == output)
