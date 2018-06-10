#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #11 container-with-most-water 盛最多水的容器
https://leetcode-cn.com/problems/container-with-most-water/description/
'''

class Solution:
    height = []

    def calcArea(self, l, r):
        lh = self.height[l]
        rh = self.height[r]
        h = min(lh, rh)
        return h * (r - l)

    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        self.height = height
        l = len(height)
        left = 0
        right = l - 1
        maxA = 0
        while left < right:
            maxA = max(maxA, self.calcArea(left, right))
            if height[left] > height[right]:
                right -= 1
            else:
                left += 1
        return maxA

# if __name__ =='__main__':
#     s = Solution()
#     height = [1,2,1,1,2]
#     output = 6
#     res = s.maxArea(height)
#     print(res)
#     assert(res == output)
