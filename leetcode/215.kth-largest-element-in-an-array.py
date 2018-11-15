import heapq


class Solution:
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        heap = nums[0:k]
        heapq.heapify(heap)
        for n in nums[k:]:
            if n > heap[0]:
                heapq.heappop(heap)
                heapq.heappush(heap, n)
        return heapq.heappop(heap)
