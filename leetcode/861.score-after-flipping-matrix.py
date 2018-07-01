#!/usr/bin/env python3
'''
leetcode #861 score-after-flipping-matrix 翻转矩阵后的得分
https://leetcode-cn.com/contest/weekly-contest-91/problems/score-after-flipping-matrix/
'''
class Solution:
    def calcScore(self, A):
        score = 0
        for ls in A:
            binStr = ''.join(map(str, ls))
            score += int(binStr, 2)
        return score

    def matrixScore(self, A):
        """
        :type A: List[List[int]]
        :rtype: int
        """
        if not A or len(A) <= 0:
            return 0
        li = len(A)
        lj = len(A[0])
        # print(A)
        for ls in A:
            if ls[0] == 0:
                for i in range(len(ls)):
                    ls[i] ^= 1
        # print(A)
        for i in range(1, lj):
            cnt = 0
            for ls in A:
                if ls[i] == 1:
                    cnt += 1
            if cnt < li / 2:
                for ls in A:
                    ls[i] ^= 1
        # print(A)
        return self.calcScore(A)


if __name__ == '__main__':
    s = Solution()
    A = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
    output = 39
    res = s.matrixScore(A)
    print(res)
    assert(res == output)
    A = [[0,1],[0,1],[0,1],[0,0]]
    output = 11
    res = s.matrixScore(A)
    print(res)
    assert(res == output)
