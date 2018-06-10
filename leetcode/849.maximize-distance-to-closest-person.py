#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #849 maximize-distance-to-closest-person 到最近的人的最大距离
https://leetcode-cn.com/contest/weekly-contest-88/problems/maximize-distance-to-closest-person/
'''

class Solution(object):
    def maxDistToClosest(self, seats):
        """
        :type seats: List[int]
        :rtype: int
        """
        maxD = 1
        lpos = 0
        if seats[lpos] == 0:
            while lpos < len(seats):
                if seats[lpos] == 1:
                    break
                lpos = lpos + 1
            maxD = max(maxD, lpos)

        rpos = len(seats) - 1
        if seats[rpos] == 0:
            while rpos > lpos:
                if seats[rpos] == 1:
                    break
                rpos = rpos - 1
            maxD = max(maxD, len(seats) - 1 - rpos)

        for i in range(lpos, rpos):
            if seats[i] == 1:
                continue
            l = i - 1
            r = i + 1
            ld = i
            rd = i
            while l >= 0:
                ld = l
                if seats[l] == 1:
                    break
                l = l - 1
            while r < len(seats):
                rd = r
                if seats[r] == 1:
                    break
                r = r + 1
            # print(maxD, i - ld, rd - i)
            maxD = max(maxD, min(i - ld, rd - i))
        return maxD
