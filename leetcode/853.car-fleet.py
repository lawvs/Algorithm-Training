#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #853 car-fleet 车队
https://leetcode-cn.com/contest/weekly-contest-89/problems/car-fleet/
'''

class Solution:
    def carFleet(self, target, position, speed):
        """
        :type target: it
        :type position: List[int]
        :type speed: List[int]
        :rtype: int
        """
        l = len(position)
        if l <= 0:
            return 0
        li = list(zip(position, speed))
        li.sort(reverse=True)

        cnt = 1
        preTime = (target - li[0][0]) / li[0][1]
        for i in range(1, l):
            time = (target - li[i][0]) / li[i][1]
            # print(preTime, time)
            if time - preTime < 1e-9:
                continue
            else:
                preTime = time
                cnt += 1
        return cnt


# if __name__ == '__main__':
#     s = Solution()
#     target = 12
#     position = [10,8,0,5,3]
#     speed = [2,4,1,1,3]
#     output = 3
#     res = s.carFleet(target, position, speed)
#     print(res)
#     assert(res == output)
