import heapq

class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
      res = 0
      heap = sticks
      heapq.heapify(sticks)
      while len(sticks) > 1:
        a = heapq.heappop(heap)
        b = heapq.heappop(heap)
        s = a + b
        heapq.heappush(heap, s)
        res += s
      return res
