class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        l = [[1]]
        for i in range(1, numRows):
            r = [1] * (i + 1)
            rl = l[-1]
            for j in range(1, i):
                r[j] = rl[j - 1] + rl[j]
            l.append(r)
        return l
