#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #833 find-and-replace-in-string
https://leetcode-cn.com/problems/find-and-replace-in-string/description/
'''
class Solution:
    def findReplaceString(self, S, indexes, sources, targets):
        """
        :type S: str
        :type indexes: List[int]
        :type sources: List[str]
        :type targets: List[str]
        :rtype: str
        """
        list = []
        for x in range(len(indexes)):
            obj = {}
            obj['index'] = indexes[x]
            obj['source'] = sources[x]
            obj['target'] = targets[x]
            list.append(obj)
        list.sort(key = lambda obj: obj['index'])
        # print(list)

        ret = []
        pos = 0
        for x in range(len(list)):
            if S.startswith(list[x]['source'], list[x]['index']):
                ret.append(S[pos:list[x]['index']])
                ret.append(list[x]['target']) # target
                pos = list[x]['index'] + len(list[x]['source'])
        ret.append(S[pos:])
        # return ret
        return ''.join(ret)


# if __name__ == '__main__':
#     S =       "ejvzndtzncrelhedwlwiqgdbdgctgubzczgtovufncicjlwsmfdcrqeaghuevyexqdhffikvecuazrelofjmyjjznnjdkimbklrh"
#     indexes = [25,35,60,77,69,79,15,19,58,92,27,64,4,11,51,7,72,67,30,0,74,98,17,85,48,32,38,62,43,2,9,55,87]
#     sources = ["gc","tov","vy","re","ikv","lo","dw","iqgdbd","ue","kimbk","tgu","qd","ndt","elhe","crq","zn","ec","ff","bz","ej","ua","rh","lw","jj","mfd","cz","ufn","ex","cjl","vz","cr","agh","znnj"]
#     targets = ["dxs","hn","vfc","wnr","tira","rko","oob","mlitiwj","zrj","onpp","ot","c","lm","hbsje","dgc","ruf","qi","h","vzn","ja","ow","te","km","imq","pia","ixp","xsod","m","eat","yf","lzu","dgy","dyrsc"]
#     output = 'jayflmruflzuhbsjeoobkmmlitiwjdxsotvznixpghnxsodcieatwspiadgcedgyzrjvfcmchhtiraqiowzwnrrkofjmyimqdyrscdonpplte'
#     s = Solution()
#     res = s.findReplaceString(S, indexes, sources, targets)
#     print(res)
#     assert(res == output)
