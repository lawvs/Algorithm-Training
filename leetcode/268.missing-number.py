from functools import reduce

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        return int(reduce(lambda x, y: x - y, nums, (len(nums) * (len(nums) + 1)) / 2))
