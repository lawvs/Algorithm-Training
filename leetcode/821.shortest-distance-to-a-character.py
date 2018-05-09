#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #821 shortest-distance-to-a-character 字符的最短距离
https://leetcode-cn.com/problems/shortest-distance-to-a-character/
76 / 76 个通过测试用例
执行用时：80 ms
'''

class Solution:
    def shortestToChar(self, S, C):
        """
        :type S: str
        :type C: str
        :rtype: List[int]
        """
        dist = len(S)
        ret = []
        for index, i in enumerate(S):
            if i != C:
                dist = dist + 1
                ret.append(dist)
                continue
            # i == C
            dist = 0
            ret.append(dist)
            # update
            tmpindex = index - 1
            tmpd = 1
            while tmpindex >= 0 and ret[tmpindex] > tmpd:
                ret[tmpindex] = tmpd
                tmpindex = tmpindex - 1
                tmpd = tmpd + 1
        return ret
