#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #844 backspace-string-compare 比较含退格的字符串
https://leetcode-cn.com/contest/weekly-contest-87/problems/backspace-string-compare/
'''
class Solution:
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """
        resS = []
        resT = []

        S = list(S)
        T = list(T)
        for c in range(len(S)):
            if S[c] == '#':
                if len(resS) > 0:
                    resS.pop()
                continue
            resS.append(S[c])

        # print(''.join(resS))
        for c in range(len(T)):
            if T[c] == '#':
                if len(resT) > 0:
                    resT.pop()
                continue
            resT.append(T[c])
        # print(''.join(resT))
        return ''.join(resS) == ''.join(resT)