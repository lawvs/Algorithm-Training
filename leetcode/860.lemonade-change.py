#!/usr/bin/env python3
'''
leetcode #860 lemonade-change 柠檬水找零
https://leetcode-cn.com/contest/weekly-contest-91/problems/lemonade-change/
'''
class Solution:
    def lemonadeChange(self, bills):
        """
        :type bills: List[int]
        :rtype: bool
        """
        cnt5 = 0
        cnt10 = 0
        for money in bills:
            if money == 5:
                cnt5 += 1
            if money == 10:
                cnt10 += 1
                cnt5 -= 1
            if money == 20:
                if cnt10 > 0:
                    cnt10 -= 1
                    cnt5 -= 1
                else:
                    cnt5 -= 3
            if cnt5 < 0 or cnt10 < 0:
                return False
        return True