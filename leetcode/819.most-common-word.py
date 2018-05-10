#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #819 most-common-word 最常见的单词
https://leetcode-cn.com/problems/most-common-word/description/
执行用时：52 ms
'''
class Solution:
    def mostCommonWord(self, paragraph, banned):
        """
        :type paragraph: str
        :type banned: List[str]
        :rtype: str
        """
        dict = {}
        for x in banned:
            dict[x] = -1
        dict['!'] = -1
        dict['?'] = -1
        dict['\''] = -1
        dict[','] = -1
        dict[';'] = -1
        dict['.'] = -1

        count = 0
        ans = ''
        word = map(lambda x : x.strip('!?\',;.'), paragraph.lower().split(' '))
        for x in word:
            if dict.get(x) == -1: # banned
                continue
            dict[x] = dict.get(x, 0) + 1

            if dict[x] > count:
                count = dict[x]
                ans = x
        return ans
