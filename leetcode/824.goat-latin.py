#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #824 goat-latin 山羊拉丁文
https://leetcode-cn.com/problems/goat-latin/description/
'''
class Solution:
    def toGoatLatin(self, S):
        """
        :type S: str
        :rtype: str
        """
        S = S.split(' ')
        suffix = 'maa'
        vowels = ['a', 'e', 'i', 'o', 'u']
        S = map(lambda word: word if any(word[0].lower() == vowel for vowel in vowels) else word[1:] + word[0] , S)
        res = []
        for word in S:
            res.append(word + suffix)
            suffix += 'a'
        return ' '.join(res)


# if __name__ == '__main__':
#     input = "Each word consists of lowercase and uppercase letters only"
#     output = "Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa"
#     s = Solution()
#     res = s.toGoatLatin(input)
#     print(res)
#     assert(res == output)
