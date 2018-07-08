#!/usr/bin/env python3
'''
leetcode #866 prime-palindrome 回文素数
https://leetcode-cn.com/contest/weekly-contest-92/problems/prime-palindrome/
'''

def isPrime(n):
    """
    判断质数
    """
    return n > 1 and all(n % d for d in range(2, int(n ** .5) + 1))

def isPalindrome(s):
    """
    判断回文数
    """
    if len(s) <= 1:
        return True
    else:
        return s[0] == s[-1] and isPalindrome(s[1:-1])

class Solution:
    def primePalindrome(self, N):
        """
        :type N: int
        :rtype: int
        """
        while True:
            if 10 ** 7 < N < 10 ** 8:
                N = 10 ** 8
                # return 100030001
            if 10 ** 5 < N < 10 ** 6:
                N = 10 ** 6
                # return 1003001
            if isPalindrome(str(N)) and isPrime(N):
                return N
            N += 1


if __name__ == '__main__':
    N = 100000
    s = Solution()
    res = s.primePalindrome(N)
    print(res)
