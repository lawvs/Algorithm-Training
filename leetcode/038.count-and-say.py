#!/usr/bin/env python3
'''
leetcode #38 count-and-say 报数
https://leetcode-cn.com/problems/count-and-say/description/
'''

class Solution:
    # m = {}

    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        if n == 1:
            return '1'
        # tarstr = self.m.get(n)
        # if tarstr == None:
            # tarstr = self.countAndSay(n - 1)
        tarstr = self.countAndSay(n - 1)
        ret = []
        cnt = 0
        pre = tarstr[0]
        for c in tarstr:
            if c == pre:
                cnt += 1
                continue
            ret.append(str(cnt))
            ret.append(pre)
            cnt = 1
            pre = c
        ret.append(str(cnt))
        ret.append(pre)
        return ''.join(ret)


if __name__ == '__main__':
    s = Solution()
    n = 1
    res = s.countAndSay(n)
    # print(res)
    for n in range(1, 50):
        res = s.countAndSay(n)
        print(res, sep = ', ', end = '')
