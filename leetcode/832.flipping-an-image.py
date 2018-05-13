#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #832 Flipping an Image
https://leetcode.com/contest/weekly-contest-84/problems/flipping-an-image/
'''
class Solution:
    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        for list in A:
            list.reverse()
            for idx in range(len(list)):
                list[idx] = (list[idx] + 1 )% 2
        return A

'''
if __name__ == '__main__':
    A = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
    S = Solution()
    print(S.flipAndInvertImage(A))
'''