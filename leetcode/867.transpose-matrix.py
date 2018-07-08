#!/usr/bin/env python3
'''
leetcode #867 transpose-matrix 转置矩阵
https://leetcode-cn.com/contest/weekly-contest-92/problems/transpose-matrix/
'''

class Solution:
    def transpose(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        if len(A) <= 0:
            return []
        B = [[0 for i in range(len(A))] for j in range(len(A[0]))]
        # print(B)
        for i in range(len(A)):
            for j in range(len(A[0])):
                # print(i, j, A[i][j], B[j][i])
                B[j][i] = A[i][j]
        return B


if __name__ == '__main__':
    A = [[1,2,3],[4,5,6],[7,8,9],[11,22,33]]
    s = Solution()
    res = s.transpose(A)
    print(res)