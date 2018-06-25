#!/usr/bin/env python3
'''
leetcode #859 buddy-strings 亲密字符串
https://leetcode-cn.com/contest/weekly-contest-90/problems/buddy-strings/
'''
class Solution:
    def buddyStrings(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: bool
        """
        if len(A) != len(B):
            return False
        if A == B:
            l = [0] * 26
            for c in A:
                if l[ord(c) - ord('a')] == 1:
                    return True
                else:
                    l[ord(c) - ord('a')] += 1
            return False

        for i in range(len(A)):
            if A[i] != B[i]:
                for j in range(i + 1, len(A)):
                    if A[j] != B[j]:
                        if A[i] == B[j] and A[j] == B[i]:
                            return True
                        return False
                return False
        return False