#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #836 rotated-digits 旋转数字
https://leetcode-cn.com/problems/rotated-digits/
'''
class Solution:
    def rotatedDigits(self, N):
        """
        :type N: int
        :rtype: int
        """
        count = 0
        N = N + 1
        for x in range(1, N):
            flag = True
            change = False
            strNum = str(x)
            for i in range(len(strNum)):
                # print(strNum[i])
                if strNum[i] != '0' and \
                   strNum[i] != '1' and \
                   strNum[i] != '2' and \
                   strNum[i] != '5' and \
                   strNum[i] != '6' and \
                   strNum[i] != '8' and \
                   strNum[i] != '9':
                   flag = False
                   break
                if strNum[i] == '2' or \
                   strNum[i] == '5' or \
                   strNum[i] == '6' or \
                   strNum[i] == '9':
                    change = True

            if flag and change:
                count = count + 1
                # print(x)
        return count

if __name__ == '__main__':
    s = Solution()
    N = 10000
    ret = s.rotatedDigits(N)
    print(ret)
