#!/usr/bin/env python3
'''
leetcode #871 minimum-number-of-refueling-stops 最低加油次数
https://leetcode-cn.com/contest/weekly-contest-93/problems/minimum-number-of-refueling-stops/
'''
import heapq

class Solution:
    def minRefuelStops(self, target, startFuel, stations):
        """
        :type target: int
        :type startFuel: int
        :type stations: List[List[int]]
        :rtype: int
        """
        if startFuel > target:
            return 0
        cnt = 0
        fuel = startFuel
        heap = []
        for station in stations:
            # print(heap, fuel)
            while station[0] > fuel:
                if len(heap) <= 0:
                    return -1
                fuel += -1 * heapq.heappop(heap)
                cnt += 1
            heapq.heappush(heap, -1 * station[1])

        while target > fuel:
                if len(heap) <= 0:
                    return -1
                fuel += -1 * heapq.heappop(heap)
                cnt += 1
        return cnt


if __name__ == '__main__':
    target = 1000
    startFuel = 83
    stations = [[47,220],[65,1],[98,113],[126,196],[186,218],[320,205],[686,317],[707,325],[754,104],[781,105]]
    s = Solution()
    res = s.minRefuelStops(target, startFuel, stations)
    print(res)