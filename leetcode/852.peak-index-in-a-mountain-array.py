#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #852 peak-index-in-a-mountain-array 山脉数组的峰顶索引
https://leetcode-cn.com/contest/weekly-contest-89/problems/peak-index-in-a-mountain-array/
'''

class Solution:
    def peakIndexInMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        i = 0
        while True:
            if A[i + 1] > A[i]:
                i += 1
            else:
                return i