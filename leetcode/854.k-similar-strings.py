#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #854 k-similar-strings 相似度为 K 的字符串
https://leetcode-cn.com/contest/weekly-contest-89/problems/k-similar-strings/
'''

class Solution:
    def kSimilarity(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: int
        """
        if A == B:
            return 0

        queue = []
        m = {}
        m[A] = True
        minL = len(A)
        queue.append((list(A), list(B), 0))
        while len(queue) > 0:
            A = queue[0][0]
            B = queue[0][1]
            cnt = queue[0][2]
            # print(A, B, cnt) # DEBUG
            if A == B:
                return cnt
            queue.pop(0)
            newA = []
            newB = []
            for i in range(len(A)):
                if A[i] != B[i]:
                    newA.append(A[i])
                    newB.append(B[i])
            # pruning
            if len(newA) > minL:
                continue
            else:
                minL = len(newA)

            for i in range(len(newA)):
                for j in range(i + 1, len(newA)):
                    # pruning
                    if newA[i] != newB[j] and newA[j] != newB[i]:
                        continue
                    newA[i], newA[j] = newA[j], newA[i] # swap
                    strA = ''.join(newA)
                    # pruning
                    if m.get(strA):
                        newA[i], newA[j] = newA[j], newA[i] # reset
                        continue
                    m[strA] = True
                    queue.append((strA, ''.join(newB), cnt + 1))
                    newA[i], newA[j] = newA[j], newA[i] # reset

# if __name__ == '__main__':
#     s = Solution()
#     A = "aabbccddee"
#     B = "cdacbeebad"
#     output = 6
#     res = s.kSimilarity(A, B)
#     print(res)
#     assert(res == output)

#     A = "cdebcdeadedaaaebfbcf"
#     B = "baaddacfedebefdabecc"
#     output = 12
#     res = s.kSimilarity(A, B)
#     print(res)
#     assert(res == output)