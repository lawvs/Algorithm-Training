#!/usr/bin/env python3
'''
leetcode #141 maximum-subarray 最大子序和
https://leetcode-cn.com/problems/maximum-subarray/description/
'''
class Solution:
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        l = len(nums)
        xsum = nums[0]
        maxSum = xsum
        # print(nums)
        for i in range(1, l):
            if xsum < 0:
                xsum = 0
            xsum += nums[i]
            maxSum = max(maxSum, xsum)
        return maxSum


if __name__ == '__main__':
    s = Solution()

    nums = [-2,1,-3,4,-1,2,1,-5,4]
    output = 6
    res = s.maxSubArray(nums)
    print(res)
    assert(res == output)

    nums = [-1,-1]
    output = -1
    res = s.maxSubArray(nums)
    print(res)
    assert(res == output)

    nums = [2,-3,1,3,-3,2,2,1]
    output = 6
    res = s.maxSubArray(nums)
    print(res)
    assert(res == output)
