class Solution:
    def findJudge(self, N: 'int', trust: 'List[List[int]]') -> 'int':
        l1 = [set() for i in range(N+1)]
        l2 = [set() for i in range(N+1)]
        for i, j in trust:
            l1[i].add(j)
            l2[j].add(i)
        target = None
        # print(l1, l2)
        for i in range(1, N + 1):
            s1 = l1[i]
            s2 = l2[i]
            if len(s1) == 0 and len(s2) == N - 1:
                if target:
                    return -1
                target = i
        if not target:
            return -1
        return target
