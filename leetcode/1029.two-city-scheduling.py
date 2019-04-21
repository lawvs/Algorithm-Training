class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        l = costs.sort(key=lambda x: abs(x[0] - x[1]), reverse=True)
        ret = 0
        cntA = 0
        cntB = 0
        tarCnt = len(costs) / 2
        print(costs)
        for [a, b] in costs:
            if cntA >= tarCnt:
                ret += b
                continue
            if cntB >= tarCnt:
                ret += a
                continue
            if a > b:
                cntB += 1
                ret += b
                continue
            else:
                cntA += 1
                ret += a
        return ret
