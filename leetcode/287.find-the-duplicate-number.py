class Solution:
    # fast slow pointer
    def findDuplicate(self, nums: List[int]) -> int:
        p1 = 0
        p2 = 0
        while True: 
            p1 = nums[p1]
            p2 = nums[nums[p2]]
            if p1 == p2: break

        p1 = 0
        while p1 != p2:
            p1 = nums[p1]
            p2 = nums[p2]
        return p1
