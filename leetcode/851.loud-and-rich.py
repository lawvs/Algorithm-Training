#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #851 loud-and-rich 喧闹和富有
https://leetcode-cn.com/problems/loud-and-rich/
'''
class Solution(object):
    res = []
    qu = [] # res.quiet
    m = []
    quiet = []

    def dfs(self, i):
        minL = [(i, self.quiet[i])]
        for j in self.m[i]:
            if self.res[j] >= 0:
                minL.append((self.res[j], self.qu[j]))
                continue
            minL.append(self.dfs(j))
        minV = min(minL, key = lambda x: x[1])
        # print(i, minL)
        self.res[i] = minV[0]
        self.qu[i] = minV[1]
        return minV

    def loudAndRich(self, richer, quiet):
        """
        :type richer: List[List[int]]
        :type quiet: List[int]
        :rtype: List[int]
        """
        self.quiet = quiet
        l = len(quiet)
        self.m =  [[] for i in range(l)]
        for rich, poor in richer:
            self.m[poor].append(rich)
        # print(self.m)
        # dfs
        self.res = [-1] * l
        self.qu = [1e9] * l
        for i in range(l):
            if self.res[i] >= 0:
                continue

            self.res[i], self.qu[i] = self.dfs(i)
        return self.res

if __name__ == '__main__':
    s = Solution()
    richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]]
    quiet = [3,2,5,4,6,1,7,0]
    output = [5,5,2,5,4,5,6,7]
    res = s.loudAndRich(richer, quiet)
    print(res)
    assert(res == output)
    print('============')
    richer = [[0,1],[1,2]]
    quiet = [0,1,2]
    output = [0,0,0]
    res = s.loudAndRich(richer, quiet)
    print(res)
    # assert(res == output)
