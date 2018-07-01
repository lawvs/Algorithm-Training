#!/usr/bin/env python3
'''
leetcode #056 merge-intervals 合并区间
https://leetcode-cn.com/problems/merge-intervals/description/
'''

# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution:
    def merge(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: List[Interval]
        """
        if len(intervals) == 0:
            return []
        intervals.sort(key = lambda a: a.start)
        ret = []
        pre = intervals[0]
        for i in range(1, len(intervals)):
            if intervals[i].start <= pre.end:
                pre.end = max(pre.end, intervals[i].end)
            else:
                ret.append(pre)
                pre = intervals[i]
        ret.append(pre)
        return ret
