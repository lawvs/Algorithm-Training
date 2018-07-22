#!/usr/bin/env python3
'''
leetcode #875 koko-eating-bananas 爱吃香蕉的珂珂
https://leetcode-cn.com/contest/weekly-contest-94/problems/koko-eating-bananas/
'''
import math

def isEnough(piles, eatingSpeed, H):
    # assert(len(piles) < H)
    # assert(piles[i] > 0)
    # assert(piles[i] > piles[i - 1]) // sorted
    if eatingSpeed == 0:
        return False
    n = 0
    while(n < len(piles)):
        if H <= 0:
            return False
        if piles[n] <= eatingSpeed:
            return len(piles) - n <= H
        H -= math.ceil(piles[n] / eatingSpeed)
        n += 1
    if H < 0:
        return False
    return True

class Solution:
    def minEatingSpeed(self, piles, H):
        """
        :type piles: List[int]
        :type H: int
        :rtype: int
        """
        maxSpeed = max(piles)
        minSpeed = 1
        piles.sort(reverse=True)
        def binarySearch(start, end):
            while start < end:
                mid = int((start + end) / 2)
                if not isEnough(list(piles), mid, H):
                    start = mid + 1
                else:
                    end = mid
            return start
        res = binarySearch(minSpeed, maxSpeed)
        return res


if __name__ == '__main__':
    s = Solution()

    piles = [3,6,7,11]
    piles.sort(reverse=True)
    H = 8
    enough = isEnough(piles, 3, H)
    assert(not enough)
    enough = isEnough(piles, 4, H)
    assert(enough)

    piles = [30,11,23,4,20]
    piles.sort(reverse=True)
    H = 5
    enough = isEnough(piles, 29, H)
    assert(not enough)
    enough = isEnough(piles, 30, H)
    assert(enough)

    piles = [3,6,7,11]
    H = 8
    res = s.minEatingSpeed(piles, H)
    assert(res == 4)

    piles = [30,11,23,4,20]
    H = 5
    res = s.minEatingSpeed(piles, H)
    assert(res == 30)

    piles = [30,11,23,4,20]
    H = 6
    res = s.minEatingSpeed(piles, H)
    assert(res == 23)

    piles = [332484035,
        524908576,
        855865114,
        632922376,
        222257295,
        690155293,
        112677673,
        679580077,
        337406589,
        290818316,
        877337160,
        901728858,
        679284947,
        688210097,
        692137887,
        718203285,
        629455728,
        941802184
    ]
    H = 823855818
    res = s.minEatingSpeed(piles, H)
    assert(res == 14)

    piles = [312884470]
    H = 968709470
    res = s.minEatingSpeed(piles, H)
    assert(res == 1)
    # print(res)
