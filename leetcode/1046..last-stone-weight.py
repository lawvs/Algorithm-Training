class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        if len(stones) == 0:
            return 0
        if len(stones) == 1:
            return stones[0]
        stones = sorted(stones, key=lambda x: x)
        a = stones.pop()
        b = stones.pop()
        if a != b:
            stones.append(a - b)
        return self.lastStoneWeight(stones)
