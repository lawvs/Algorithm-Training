#!/usr/bin/env python3
'''
leetcode #869 reordered-power-of-2 重新排序得到 2 的幂
https://leetcode-cn.com/contest/weekly-contest-93/problems/reordered-power-of-2/
'''
class Solution:
    def reorderedPowerOf2(self, N):
        """
        :type N: int
        :rtype: bool
        """
        NStr = str(N)
        NList = list(NStr)
        NList.sort()
        i = 0
        while True:
            power = 2 ** i
            if power > 10e9:
                break
            powerStr = str(power)
            if len(powerStr) < len(NStr):
                i += 1
                continue
            if len(powerStr) > len(NStr):
                break
            powerList = list(powerStr)
            powerList.sort()
            if powerList == NList:
                # print(powerSort, NSort)
                return True
            i += 1
        return False


if __name__ == '__main__':
    A = 3
    s = Solution()
    res = s.reorderedPowerOf2(A)
    print(res)