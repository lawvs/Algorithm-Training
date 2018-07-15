#!/usr/bin/env python3
'''
leetcode #868 binary-gap 二进制间距
https://leetcode-cn.com/contest/weekly-contest-93/problems/binary-gap/
'''
class Solution:
    def binaryGap(self, N):
        """
        :type N: int
        :rtype: int
        """
        maxDis = 0
        binStr = bin(N)
        flag = len(binStr)
        for i in range(len(binStr)):
            if binStr[i] == '1':
                maxDis = max(maxDis, i - flag)
                flag = i
        return maxDis