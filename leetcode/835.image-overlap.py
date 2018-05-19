#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #835 image-overlap
https://leetcode-cn.com/problems/image-overlap/description/
'''

class Solution:
    def largestOverlap(self, A, B):
        """
        :type A: List[List[int]]
        :type B: List[List[int]]
        :rtype: int
        """
        return max(self.overlapB2A(A, B), self.overlapB2A(B, A))

    def overlapB2A(self, A, B):
        max = 0
        for i in range(len(A)):
            for j in range(len(A[i])):
                count = 0
                for k in range(i, len(A)):
                    for l in range(j, len(A[i])):
                        # print(A[k][l], end='')
                        # print(B[k - i][l - j], end='')
                        # print(' ', end='')
                        if A[k][l] == 1 and B[k - i][l - j] == 1:
                            count = count + 1
                    # print('')
                # print('')
                if count > max:
                    max = count
        return max

# if __name__ == '__main__':
    # A = [[1,1,0],
    #     [0,1,0],
    #     [0,1,0]]
    # B = [[0,0,0],
    #     [0,1,1],
    #     [0,0,1]]
    # output = 3
    # s = Solution()

    # res = s.largestOverlap(A, B)
    # print(res)
    # assert(res == 3)
