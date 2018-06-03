#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #845 longest-mountain-in-array 数组中的最长山脉
https://leetcode-cn.com/contest/weekly-contest-87/problems/longest-mountain-in-array/
'''
class Solution:

    def handle(self, num):
        if self.status != 1 and num > self.preNum: # ↑↑/=↑
            self.status = -1
            self.l = self.l + 1
        elif self.status == 1 and num < self.preNum: # ↓↓
            self.l = self.l + 1
        elif num == self.preNum: # ==
            self.status = 0
            self.l = 1
        elif self.status == -1: # ↑↓
            self.status = 1
            self.l = self.l + 1
        elif self.status == 1: # ↓↑
            self.status = -1
            self.l = 2
        elif self.status == 0: # =↓
            self.status = 0
            self.l = 1
        else:
            assert(False)
        self.preNum = num
        if self.status == 1:
            self.maxL = max(self.maxL, self.l)

    def longestMountain(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        # init
        self.status = 0
        self.l = 1
        self.maxL = 0
        self.preNum = -1

        if len(A) < 3:
            return 0
        self.preNum = A[0]
        for i in range(1, len(A)):
            self.handle(A[i])
        #     print(A[i], self.status, self.preNum, self.l)
        # print('---')
        return self.maxL if self.maxL >= 3 else 0

# if __name__ == '__main__':
#     s = Solution()
#     A = [9,8,7,6,5,4,3,2,1,0]
#     output = 0
#     res = s.longestMountain(A)
#     assert(output == res)

#     A = [0,1,2,3,4,5,4,3,2,1,0]
#     output = 11
#     res = s.longestMountain(A)
#     assert(output == res)

#     A = [3,3,1,0,1,0,1,0,2,1]
#     output = 3
#     res = s.longestMountain(A)
#     assert(output == res)
#     print('pass')
