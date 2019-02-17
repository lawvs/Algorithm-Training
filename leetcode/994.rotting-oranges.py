class Solution:
    def orangesRotting(self, grid: 'List[List[int]]') -> 'int':
        ans = 0
        dire = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        while True:
            flag = False
            temp = [None] * len(grid)
            for i in range(len(grid)):
                temp[i] = [None] * len(grid[i])
                for j in range(len(grid[i])):
                    temp[i][j] = grid[i][j]
                    if grid[i][j] == 1:
                        flag = True
            if not flag:
                return ans
            for i in range(len(grid)):
                for j in range(len(grid[i])):
                    if grid[i][j] == 2:
                        for xd, yd in dire:
                            x = i + xd
                            y = j + yd
                            if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[i]):
                                continue
                            if grid[x][y] == 1:
                                temp[x][y] = 2

            flag = False
            for i in range(len(grid)):
                for j in range(len(grid[i])):
                    if temp[i][j] != grid[i][j]:
                        flag = True
            if flag == True:
                ans += 1
            else:
                return -1
            grid = temp
