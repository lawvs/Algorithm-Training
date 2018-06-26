#!/usr/bin/env python3
'''
leetcode #26 remove-duplicates-from-sorted-array 删除排序数组中的重复项
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
'''
class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        l = len(nums)
        if l <= 1:
            return l
        pos = 1
        for i in range(1, l):
            if nums[i] == nums[i - 1]:
                continue
            nums[pos] = nums[i]
            pos += 1
        return pos