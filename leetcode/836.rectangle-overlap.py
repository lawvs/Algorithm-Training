#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #836 rectangle-overlap 矩形重叠
https://leetcode-cn.com/contest/weekly-contest-85/problems/rectangle-overlap/
'''
class Solution:
    def isRectangleOverlap(self, rec1, rec2):
        """
        :type rec1: List[int]
        :type rec2: List[int]
        :rtype: bool
        """
        p1 = (rec1[0], rec1[1])
        p2 = (rec1[2], rec1[3])
        p3 = (rec2[0], rec2[1])
        p4 = (rec2[2], rec2[3])

        left = max(p1[0], p3[0])
        right = min(p2[0], p4[0])
        up = min(p2[1], p4[1])
        down = max(p1[1], p3[1])

        if right - left > 0 and up - down > 0:
            return True
        else:
            return False


# if __name__ == '__main__':
#     rec1 = [5,15,8,18]
#     rec2 = [0,3,7,9]
#     output = True
#     s = Solution()

#     res = s.isRectangleOverlap(rec1, rec2)
#     print(res)
#     assert(res == output)
