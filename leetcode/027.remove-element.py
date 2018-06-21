'''
leetcode #27 remove-element 移除元素
https://leetcode-cn.com/problems/remove-element/description/
'''
class Solution:
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        pos = 0
        for i in range(len(nums)):
            if nums[i] == val:
                continue
            nums[pos] = nums[i]
            pos += 1
        return pos