#!/usr/bin/env python3
'''
leetcode #870 advantage-shuffle 优势洗牌
https://leetcode-cn.com/contest/weekly-contest-93/problems/advantage-shuffle/
'''
class Solution:
    def advantageCount(self, A, B):
        """
        :type A: List[int]
        :type B: List[int]
        :rtype: List[int]
        """
        # assert(len(A) == len(B))
        A.sort()
        poiHead = 0
        poiTail = len(A) - 1
        retA = [0] * len(B)

        ind = range(0, len(B))
        zipB = list(zip(B, ind))
        zipB.sort(key=lambda x: x[0], reverse=True)

        # print(A, zipB)
        for n in zipB:
            index = n[1]
            if poiHead > poiTail:
                raise Exception
            if A[poiTail] > n[0]:
                retA[index] = A[poiTail]
                poiTail -= 1
                continue
            retA[index] = A[poiHead]
            poiHead += 1

        return retA


if __name__ == '__main__':
    A = [12,24,8,32]
    B = [13,25,32,11]
    s = Solution()
    res = s.advantageCount(A, B)
    print(res)