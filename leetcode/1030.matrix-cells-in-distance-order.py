class Solution:
    def allCellsDistOrder(self, R: int, C: int, r0: int, c0: int) -> List[List[int]]:
        l = list()
        for i in range(R):
            for j in range(C):
                d = abs(i-r0) + abs(j-c0)
                l.append([i, j, d])
        return list(map(lambda x: [x[0], x[1]], sorted(l, key=lambda x: x[2])))
