class Solution:
    def sortedSquares(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        return list(sorted(map(lambda x: x ** 2, A)))
