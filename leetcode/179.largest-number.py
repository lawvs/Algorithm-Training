#!/bin/python2
'''
leetcode #179 largest-number 最大数
https://leetcode-cn.com/problems/largest-number/description/
创建时间：2018-4-23 19:47:47
通过时间：2018-4-23 22:48:05
'''

def sortfunc(n1, n2):
    if int(n1 + n2) > int(n2 + n1):
        return 1
    elif int(n1 + n2) < int(n2 + n1):
        return -1
    elif int(n1 + n2) == int(n2 + n1):
        # min
        if len(n1) < len(n2):
            return 1
        elif len(n1) > len(n2):
            return -1
        else:
            return 0

class Solution:
    def largestNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: str
        """
        nums = map(str, nums)
        numlist = sorted(nums, sortfunc, reverse=True)
        res = ''
        for num in numlist:
            # handle 0
            if res == '' and num == '0':
                continue
            res = res + num

        # handle 0
        if res == '':
            return '0'
        return res
